import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const chapters = [
  {
    district: "Bangalore Urban",
    code: "BLR",
    chair: "Mr. Rajan Shetty",
    secretary: "Ms. Kavitha Nair",
    phone: "+91 98800 10001",
    email: "bangalore@karnatakaequestrian.in",
    members: 142,
    venues: ["Palace Grounds Equestrian Complex", "Bangalore Turf Club", "Cubbon Park Equestrian Grounds"],
    disciplines: ["Dressage", "Show Jumping", "Eventing"],
    status: "Active",
  },
  {
    district: "Mysuru",
    code: "MYS",
    chair: "Col. P.N. Rao (Retd.)",
    secretary: "Mr. Suresh Gowda",
    phone: "+91 98800 10002",
    email: "mysuru@karnatakaequestrian.in",
    members: 87,
    venues: ["Palace Grounds, Mysuru", "Royal Mysore Equestrian Academy"],
    disciplines: ["Dressage", "Show Jumping", "Tent Pegging"],
    status: "Active",
  },
  {
    district: "Chikkaballapur",
    code: "CBP",
    chair: "Ms. Ananya Reddy",
    secretary: "Mr. Pavan Kumar",
    phone: "+91 98800 10003",
    email: "chikkaballapur@karnatakaequestrian.in",
    members: 34,
    venues: ["Nandi Hills Equestrian Trail"],
    disciplines: ["Endurance", "Show Jumping"],
    status: "Active",
  },
  {
    district: "Belagavi",
    code: "BGV",
    chair: "Maj. S.R. Kulkarni (Retd.)",
    secretary: "Ms. Shweta Patil",
    phone: "+91 98800 10004",
    email: "belagavi@karnatakaequestrian.in",
    members: 51,
    venues: ["Belagavi Cantonment Grounds", "KLE Equestrian Club"],
    disciplines: ["Tent Pegging", "Show Jumping"],
    status: "Active",
  },
  {
    district: "Mangaluru",
    code: "MNG",
    chair: "Dr. Harish Shenoy",
    secretary: "Ms. Ritha D'Souza",
    phone: "+91 98800 10005",
    email: "mangaluru@karnatakaequestrian.in",
    members: 28,
    venues: ["Coastal Karnataka Riding Club"],
    disciplines: ["Dressage", "Endurance"],
    status: "Active",
  },
  {
    district: "Hubballi-Dharwad",
    code: "HBD",
    chair: "Mr. Basavaraj Mallapur",
    secretary: "Mr. Girish Hiremath",
    phone: "+91 98800 10006",
    email: "hubballi@karnatakaequestrian.in",
    members: 39,
    venues: ["Hubballi Equestrian Grounds"],
    disciplines: ["Show Jumping", "Tent Pegging"],
    status: "Active",
  },
  {
    district: "Shivamogga",
    code: "SMG",
    chair: "Mr. Chandra Shekar",
    secretary: "Ms. Nandini Bhat",
    phone: "+91 98800 10007",
    email: "shivamogga@karnatakaequestrian.in",
    members: 22,
    venues: ["Shimoga Riding Academy"],
    disciplines: ["Dressage", "Show Jumping"],
    status: "Developing",
  },
  {
    district: "Tumakuru",
    code: "TMK",
    chair: "Mr. Naresh Naik",
    secretary: "Mr. Satish Kumar",
    phone: "+91 98800 10008",
    email: "tumakuru@karnatakaequestrian.in",
    members: 19,
    venues: ["Tumkur Equestrian Training Ground"],
    disciplines: ["Endurance", "Show Jumping"],
    status: "Developing",
  },
];

const disciplineColors: Record<string, string> = {
  Dressage: "bg-blue-50 text-blue-700",
  "Show Jumping": "bg-amber-50 text-amber-700",
  Eventing: "bg-purple-50 text-purple-700",
  "Tent Pegging": "bg-red-50 text-red-700",
  Endurance: "bg-emerald-50 text-emerald-700",
};

export default function DistrictChaptersPage() {
  const totalMembers = chapters.reduce((sum, c) => sum + c.members, 0);

  return (
    <InnerPageShell
      title="District Chapters"
      subtitle="KEA's district-level presence across Karnataka"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers", href: "/office-bearers" }, { label: "District Chapters" }]}
    >
      {/* Stats strip */}
      <section className="bg-white py-10 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: chapters.length.toString(), label: "District Chapters" },
              { value: totalMembers.toString() + "+", label: "Members Statewide" },
              { value: chapters.filter(c => c.status === "Active").length.toString(), label: "Active Chapters" },
              { value: "5", label: "Disciplines Covered" },
            ].map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 + i * 0.08} inView>
                <div className="text-center">
                  <div className="font-heading text-3xl font-light text-[#C9A84C] mb-1">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.14em] uppercase text-[#9CA3AF]">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F7F4EF] py-14 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeText delay={0.1} inView>
            <p className="text-[#4A5568] text-sm leading-relaxed max-w-3xl">
              The Karnataka Equestrian Association operates through district chapters that bring equestrian activities closer to riders across the state. Each chapter is led by a locally elected Chairperson and Secretary, and coordinates directly with KEA for competition scheduling, membership, and infrastructure development.
            </p>
          </FadeText>
        </div>
      </section>

      {/* Chapter listings */}
      <section className="bg-[#F7F4EF] pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="grid lg:grid-cols-2 gap-6">
            {chapters.map((ch, i) => (
              <BlurFade key={ch.code} delay={0.1 + i * 0.06} inView>
                <MagicCard className="bg-white border border-[#EDEAE3] hover:border-[#C9A84C]/30 transition-all duration-200 overflow-hidden group">
                  {/* Header */}
                  <div className="flex items-center justify-between px-7 py-5 border-b border-[#EDEAE3]">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0B1C2D] flex items-center justify-center shrink-0">
                        <span className="font-heading text-[11px] font-medium text-[#C9A84C] tracking-widest">{ch.code}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-medium text-[#0B1C2D] group-hover:text-[#C9A84C] transition-colors">{ch.district} District</h3>
                        <div className="text-[11px] text-[#9CA3AF]">{ch.members} members</div>
                      </div>
                    </div>
                    <span className={`text-[9px] tracking-[0.12em] uppercase font-medium px-3 py-1 rounded-full ${ch.status === "Active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                      {ch.status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    {/* Leadership */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <div className="text-[9px] tracking-[0.14em] uppercase text-[#C9A84C] mb-1">Chairperson</div>
                        <div className="text-sm text-[#0B1C2D] font-medium">{ch.chair}</div>
                      </div>
                      <div>
                        <div className="text-[9px] tracking-[0.14em] uppercase text-[#C9A84C] mb-1">Secretary</div>
                        <div className="text-sm text-[#0B1C2D] font-medium">{ch.secretary}</div>
                      </div>
                    </div>

                    {/* Venues */}
                    <div className="mb-5">
                      <div className="text-[9px] tracking-[0.14em] uppercase text-[#C9A84C] mb-2">Venues</div>
                      <ul className="space-y-1">
                        {ch.venues.map((v) => (
                          <li key={v} className="text-[12px] text-[#4A5568] flex items-start gap-2">
                            <span className="text-[#C9A84C]/40 text-[7px] mt-1 shrink-0">◇</span>
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Disciplines */}
                    <div className="mb-5">
                      <div className="text-[9px] tracking-[0.14em] uppercase text-[#C9A84C] mb-2">Active Disciplines</div>
                      <div className="flex flex-wrap gap-1.5">
                        {ch.disciplines.map((d) => (
                          <span key={d} className={`text-[9px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full font-medium ${disciplineColors[d] ?? "bg-gray-50 text-gray-700"}`}>{d}</span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="pt-4 border-t border-[#EDEAE3] grid grid-cols-2 gap-3">
                      <div className="text-[11px] text-[#6B7280]">{ch.phone}</div>
                      <div className="text-[11px] text-[#6B7280] break-all">{ch.email}</div>
                    </div>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Start a chapter CTA */}
      <section className="relative bg-[#0B1C2D] py-14 overflow-hidden">
        <AnimatedGridPattern className="opacity-30" numSquares={10} maxOpacity={0.05} />
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <BlurFade delay={0.1} inView>
            <div>
              <h3 className="font-heading text-xl font-light text-white mb-2">Establish a <span className="italic">New Chapter</span></h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xl">Districts without a KEA chapter can apply for affiliation. Contact the Secretariat for the chapter establishment guidelines and application.</p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <Link href="/contact" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
              Contact Secretariat →
            </Link>
          </BlurFade>
        </div>
      </section>
    </InnerPageShell>
  );
}
