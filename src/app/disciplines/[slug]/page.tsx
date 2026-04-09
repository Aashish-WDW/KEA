import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Link from "next/link";
import { notFound } from "next/navigation";

type DisciplineInfo = {
  title: string;
  tagline: string;
  overview: string;
  detail: string;
  format: { heading: string; desc: string }[];
  facts: { label: string; value: string }[];
  howToCompete: string[];
};

const DISCIPLINES: Record<string, DisciplineInfo> = {
  dressage: {
    title: "Dressage",
    tagline: "Ballet on Horseback",
    overview: "Often described as 'ballet on horseback,' dressage tests the harmony between horse and rider through a series of predetermined movements performed with precision, rhythm, and grace. It is the foundation of all equestrian disciplines.",
    detail: "In dressage, horse and rider perform a series of movements — at the walk, trot, and canter — within a defined arena. Judges score each movement on a scale of 0 to 10, evaluating rhythm, suppleness, contact, impulsion, straightness, and collection. The goal is perfect harmony: the horse must appear to move freely and willingly, guided by invisible aids from the rider.",
    format: [
      { heading: "Arena", desc: "Performed in a standard 20m × 60m arena marked with letters at defined points." },
      { heading: "Levels", desc: "Tests range from Preliminary (walk and trot) through Medium and Advanced to Grand Prix, which includes movements like piaffe and passage." },
      { heading: "Judging", desc: "Each movement is scored 0–10. Final scores are expressed as a percentage — the higher, the better." },
      { heading: "Key Movements", desc: "Half-pass, shoulder-in, tempi changes, pirouette, piaffe (trot on the spot), and passage (elevated, cadenced trot)." },
    ],
    facts: [
      { label: "Arena Size", value: "20m × 60m" },
      { label: "Score Scale", value: "0 – 10 per movement" },
      { label: "Top Level", value: "Grand Prix (Olympic)" },
      { label: "Governing Body", value: "FEI / EFI / KEA" },
    ],
    howToCompete: [
      "Join the Karnataka Equestrian Association as an Individual Member.",
      "Register as a rider with the Equestrian Federation of India (EFI) to obtain your Rider ID.",
      "Your horse must be registered with EFI and a valid horse passport obtained.",
      "Enter KEA-sanctioned dressage competitions through the annual event prospectus.",
      "Work with an EFI-certified trainer to prepare your tests for the relevant level.",
    ],
  },
  "show-jumping": {
    title: "Show Jumping",
    tagline: "Precision, Speed & Power",
    overview: "A timed event where horse and rider navigate a course of obstacles, testing agility, speed, and precision. Show jumping is one of the most spectator-friendly equestrian disciplines and demands the highest level of athletic partnership.",
    detail: "In show jumping, horse and rider must complete a course of 10 to 16 fences — varying in height, width, and complexity — within a set time allowed. Faults are incurred for knockdowns (4 faults each), refusals (4 faults, then elimination on a second refusal), and exceeding the time allowed. When competitors tie on faults, a jump-off over a shortened course decides the result, with the fastest clear round winning.",
    format: [
      { heading: "Course", desc: "10–16 obstacles set at varying heights and widths, including verticals, oxers, combinations, and water features." },
      { heading: "Faults", desc: "4 faults per knockdown; 4 faults per refusal; time faults for exceeding the time allowed at 1 fault per second." },
      { heading: "Heights", desc: "National levels: 90cm to 1.30m. International (CSI): up to 1.60m at the highest level." },
      { heading: "Jump-Off", desc: "When scores are tied, a jump-off over a shortened course determines the winner — the fastest clear round wins." },
    ],
    facts: [
      { label: "Fence Height", value: "90cm – 1.60m+" },
      { label: "Course Fences", value: "10 – 16" },
      { label: "Knockdown", value: "4 faults" },
      { label: "Governing Body", value: "FEI / EFI / KEA" },
    ],
    howToCompete: [
      "Obtain KEA membership and an EFI Rider ID.",
      "Register your horse with EFI for a valid horse registration number.",
      "Enter KEA show jumping events through the seasonal prospectus.",
      "Compete at the appropriate height category for your level — starting at 90cm for novice riders.",
      "Progress through KEA state qualifiers to access EFI national-level competitions.",
    ],
  },
  eventing: {
    title: "Eventing",
    tagline: "The Ultimate Test of Versatility",
    overview: "A three-phase competition combining dressage, cross-country, and show jumping — eventing is the ultimate test of the all-round horse-and-rider combination. Often called the equestrian triathlon, it demands courage, fitness, technical skill, and absolute trust.",
    detail: "Eventing takes place over one or more days and consists of three distinct phases. The dressage phase tests obedience and harmony. The cross-country phase — held over natural terrain with solid, fixed obstacles including ditches, water, and banks — tests boldness, fitness, and cross-country technique. The final show jumping phase tests the horse's soundness and scope after the demands of cross-country.",
    format: [
      { heading: "Phase 1: Dressage", desc: "Standard dressage test performed in an arena, scored on harmony, rhythm, and obedience. Sets the baseline score for the competition." },
      { heading: "Phase 2: Cross-Country", desc: "Jumping a course of 20–40 fixed, solid natural obstacles over varied terrain. The most exciting and physically demanding phase." },
      { heading: "Phase 3: Show Jumping", desc: "A course of 10–12 show jumping fences on the final day, testing that the horse remains sound, willing, and obedient after cross-country." },
      { heading: "Scoring", desc: "Penalties are added (not subtracted) — the lowest score wins. Time penalties apply in cross-country and show jumping." },
    ],
    facts: [
      { label: "Phases", value: "3 (Dressage, XC, SJ)" },
      { label: "Duration", value: "1 – 3 days" },
      { label: "XC Obstacles", value: "20 – 40 fixed fences" },
      { label: "Governing Body", value: "FEI / EFI / KEA" },
    ],
    howToCompete: [
      "Complete KEA membership registration and obtain an EFI Rider ID.",
      "Register your horse with EFI.",
      "Ensure both horse and rider are trained in all three phases — dressage, cross-country, and show jumping.",
      "Enter the relevant KEA eventing competition through the event prospectus.",
      "Undergo a veterinary inspection (Horse Inspection) before competing — mandatory for all eventing competitions.",
    ],
  },
  "tent-pegging": {
    title: "Tent Pegging",
    tagline: "Ancient Cavalry Tradition",
    overview: "A mounted sport of ancient cavalry origin where riders pick up ground targets with a lance at full gallop. One of the most uniquely Indian equestrian disciplines, tent pegging is deeply rooted in the subcontinent's martial heritage and is governed internationally by the ITPF.",
    detail: "Tent pegging requires a rider to gallop at full speed and use a lance or sword to pick up, spear, or cut targets placed on the ground. The sport originated as military training for cavalry soldiers — the ability to lean from a galloping horse and strike a ground target was a critical battlefield skill. Today it is a thrilling competitive sport governed by strict FEI and ITPF rules, combining horsemanship, precision, and athleticism.",
    format: [
      { heading: "Weapons", desc: "Lance, sword, or pistol (in target shooting variants). The lance is used for the primary tent pegging event." },
      { heading: "Targets", desc: "Wooden pegs (25mm × 25mm × 150mm) placed in the ground, which must be carried a minimum distance to score." },
      { heading: "Events", desc: "Individual lance, team lance (4 riders), sword, and various combination events. Speed and accuracy are both scored." },
      { heading: "Scoring", desc: "Points awarded for successfully picking up and carrying the target. Bonus points for clean pegs carried over the required distance." },
    ],
    facts: [
      { label: "Origin", value: "Ancient Cavalry Training" },
      { label: "Weapon", value: "Lance / Sword" },
      { label: "Target Size", value: "25mm × 25mm × 150mm" },
      { label: "Governing Body", value: "ITPF / EFI / KEA" },
    ],
    howToCompete: [
      "Join KEA and obtain an EFI Rider ID.",
      "Train under an experienced tent pegging coach to develop lance technique at the gallop.",
      "Register your horse — tent pegging requires a brave, forward-going horse comfortable at full gallop.",
      "Enter KEA state tent pegging championships through the event prospectus.",
      "Compete in team events — tent pegging has a strong team component making it ideal for club-based participation.",
    ],
  },
  endurance: {
    title: "Endurance",
    tagline: "Stamina Across Vast Terrain",
    overview: "Long-distance competition testing the stamina and fitness of horse and rider over varied terrain. Endurance riding is one of the fastest-growing equestrian disciplines in India, governed nationally by EFI and internationally by the FEI.",
    detail: "Endurance competitions range from 20km (introductory) to 160km (FEI International) in a single day. The route crosses varied terrain — hills, forests, plains, and roads — and horse welfare is paramount throughout. Mandatory veterinary checks at each control point assess the horse's heart rate, hydration, and soundness. A horse that fails a vet check is eliminated. The winner is the first horse-and-rider combination to complete the course within the time allowed and pass the final veterinary inspection.",
    format: [
      { heading: "Distances", desc: "20km (Intro), 40km, 80km, 120km, 160km (FEI International). Karnataka events typically start at 40km." },
      { heading: "Vet Checks", desc: "Mandatory veterinary inspections at every control point. Heart rate must be ≤64 bpm within a set recovery time." },
      { heading: "Horse Welfare", desc: "A horse presenting as lame, dehydrated, metabolically stressed, or with an elevated heart rate at any vet gate is eliminated — rider welfare is also assessed." },
      { heading: "Winning", desc: "The first horse-and-rider to complete the course and pass the final vet check wins. A fit-to-continue certificate is mandatory for completion." },
    ],
    facts: [
      { label: "Distance Range", value: "20km – 160km" },
      { label: "Speed (FEI)", value: "16 – 22 km/h average" },
      { label: "Vet Check HR", value: "≤ 64 bpm" },
      { label: "Governing Body", value: "FEI / EFI / KEA" },
    ],
    howToCompete: [
      "Join KEA and register as an EFI rider.",
      "Register your horse with EFI — your horse must be sound, fit, and suitable for long-distance riding.",
      "Start with a 20–40km Introductory Endurance ride to build experience.",
      "Follow a structured conditioning programme — a fit horse is essential; months of preparation are required for longer distances.",
      "Enter the KEA Endurance Ride through the annual event prospectus and follow all mandatory vet check procedures.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(DISCIPLINES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const discipline = DISCIPLINES[slug];
  if (!discipline) return { title: "Discipline Not Found" };
  return {
    title: discipline.title,
    description: discipline.overview,
  };
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = DISCIPLINES[slug];

  if (!discipline) notFound();

  return (
    <InnerPageShell
      title={discipline.title}
      subtitle={discipline.tagline}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Disciplines", href: "/disciplines" },
        { label: discipline.title },
      ]}
    >
      {/* Overview */}
      <section className="relative bg-[#F7F4EF] py-20 lg:py-28 overflow-hidden">
        {/* Dynamic Discipline Background */}
        <div className="absolute inset-0 z-0 opacity-10 grayscale brightness-110">
          <img 
            src={
              slug === "tent-pegging" ? "/images/discipline_tent_pegging.png" :
              slug === "endurance" ? "/images/discipline_endurance.png" :
              slug === "show-jumping" ? "/images/hero_championship.png" :
              slug === "dressage" ? "/images/hero_disciplines.png" :
              "/images/hero_championship.png"
            }
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF] via-transparent to-[#F7F4EF]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Overview</span>
              </div>
              <BoxReveal delay={0.15}>
                <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] leading-snug mb-6">
                  What is <span className="italic">{discipline.title}?</span>
                </h2>
              </BoxReveal>
              <FadeText delay={0.25} inView>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{discipline.overview}</p>
              </FadeText>
              <FadeText delay={0.35} inView>
                <p className="text-[#4A5568] text-sm leading-relaxed">{discipline.detail}</p>
              </FadeText>
            </div>
          </BlurFade>

          {/* Key facts */}
          <BlurFade delay={0.2} inView>
            <div>
              <div className="grid grid-cols-2 gap-px bg-[#EDEAE3]">
                {discipline.facts.map((f) => (
                  <div key={f.label} className="bg-white p-6">
                    <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mb-2">{f.label}</div>
                    <div className="font-heading text-lg font-medium text-[#0B1C2D]">{f.value}</div>
                  </div>
                ))}
              </div>

              {/* Affiliation note */}
              <div className="mt-6 bg-[#0B1C2D] p-6">
                <p className="text-white/50 text-[12px] leading-relaxed">
                  {discipline.title} in Karnataka is governed by the Karnataka Equestrian Association (KEA), operating under the technical framework of the Equestrian Federation of India (EFI) and the international rules of the FEI.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Competition format */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Competition Format</span>
            </div>
          </BlurFade>
          <BoxReveal delay={0.15}>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-[#0B1C2D] mb-12">
              How It <span className="italic">Works</span>
            </h2>
          </BoxReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#EDEAE3]">
            {discipline.format.map((item, i) => (
              <BlurFade key={i} delay={0.15 + i * 0.05} inView>
                <MagicCard className="bg-white group hover:bg-[#F7F4EF] transition-colors h-full">
                <div className="p-8 relative z-10">
                  <div className="font-heading text-4xl text-[#C9A84C]/12 font-light mb-4 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-[#0B1C2D] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {item.heading}
                  </h3>
                  <p className="text-[#6B7280] text-[13px] leading-relaxed">{item.desc}</p>
                </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* How to compete */}
      <section className="relative bg-[#0B1C2D] py-20 lg:py-28 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={12} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">
          <BlurFade delay={0.1} inView>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]/50" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C]/70 font-medium">Get Started</span>
            </div>
            <h2 className="font-heading text-3xl lg:text-4xl font-light text-white leading-snug mb-6">
              How to Compete in <span className="italic">Karnataka</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Follow these steps to enter {discipline.title} competitions in Karnataka under the KEA framework.
            </p>
          </div>
          </BlurFade>
          <AnimatedList className="space-y-5" delay={0.15} stagger={0.08}>
            {discipline.howToCompete.map((step, i) => (
              <li key={i} className="flex gap-5">
                <span className="font-heading text-2xl text-[#C9A84C]/30 font-light leading-none shrink-0 w-6 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-white/60 text-sm leading-relaxed">{step}</p>
              </li>
            ))}
          </AnimatedList>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7F4EF] py-16 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl font-light text-[#0B1C2D]">Ready to compete in <span className="italic">{discipline.title}?</span></h3>
            <p className="text-[#6B7280] text-sm mt-1">Join KEA and register for upcoming {discipline.title} events in Karnataka.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/membership" className="px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">Join KEA</Link>
            <Link href="/events" className="px-8 py-3.5 border border-[#0B1C2D]/18 text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">View Events</Link>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
