// Pure-CSS splash ported from Soon (see globals.css): the name blurs in word by word
// while a hairline draws across the screen, then everything blurs away.
// Works without JS; hidden entirely for reduced-motion users.
const WORDS = ["Karnataka", "Equestrian", "Association."];

export function Preloader() {
  return (
    <div id="splash" aria-hidden="true">
      <p className="s-name">
        {WORDS.map((w, i) => (
          <span className="w" key={w} style={{ ["--i" as string]: i }}>
            {w}
          </span>
        ))}
      </p>
      <span className="s-rule" />
    </div>
  );
}
