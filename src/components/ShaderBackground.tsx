"use client";

import { useEffect, useRef } from "react";
import { FRAGMENT_SRC, VERTEX_SRC } from "@/lib/auroraShader";

// Low -> high, blended in OKLab by the shader. Warm soft-black -> terracotta -> orange glow.
const COLORS = ["#1D150C", "#A54D25", "#D9602A", "#FA712A"];

const hexToRgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    return null;
  }
  return s;
}

/** Absolutely-positioned aurora canvas; place inside a `position: relative` parent. */
export default function ShaderBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SRC);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // Fullscreen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const U = (n: string) => gl.getUniformLocation(prog, n);
    const uColors = U("u_colors"), uScene = U("u_scene"), uShape = U("u_shape"), uSurface = U("u_surface");
    const uFinish = U("u_finish"), uTransform = U("u_transform"), uSpace = U("u_space"), uCursor = U("u_cursor");

    const colors = new Float32Array(24);
    COLORS.forEach((c, i) => colors.set(hexToRgb(c), i * 3));
    gl.uniform3fv(uColors, colors);
    gl.uniform4f(uShape, 1.5, 0.55, 0.5, 0.0);
    gl.uniform4f(uSurface, 2.4, 1.0, -0.09, 1.12);
    gl.uniform4f(uFinish, 0.0, 0.0, 0.0, 0.04);
    gl.uniform4f(uTransform, 1.0, 0.0, 0.0, 1.0);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 1, h = 1;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      if (reduced) draw(0);
    };

    // Pointer: normalised -1..1 in canvas space (y up), eased presence 0..1.
    let px = 0, py = 0, presence = 0, target = 0;
    const parent = canvas.parentElement ?? canvas;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      px = ((e.clientX - r.left) / r.width) * 2 - 1;
      py = -(((e.clientY - r.top) / r.height) * 2 - 1);
      target = 1;
    };
    const onLeave = () => (target = 0);
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    function draw(seconds: number) {
      gl!.uniform4f(uScene, w, h, seconds * -0.57, 4.0);
      gl!.uniform4f(uSpace, 0, 0, px, py);
      gl!.uniform4f(uCursor, presence, 1.0, 0.32, 0.28);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    }

    // RAF loop; paused when the tab is hidden or the hero is off-screen.
    let raf = 0, running = false, visible = true, last = 0, elapsed = 0;
    const frame = (now: number) => {
      raf = 0;
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      elapsed += dt;
      presence += (target - presence) * Math.min(1, dt * 8);
      draw(elapsed);
      raf = requestAnimationFrame(frame);
    };
    const update = () => {
      const should = !reduced && visible && !document.hidden;
      if (should && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!should && running) {
        running = false;
        if (raf) cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      update();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", update);
    resize();
    if (reduced) draw(8);
    update();

    return () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 -z-20 block h-full w-full" aria-hidden="true" />;
}
