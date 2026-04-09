import InnerPageShell from "@/components/InnerPageShell";
import Link from "next/link";

const committees = [
  {
    name: "Competition & Technical Committee",
    chair: "Mr. Kiran Madappa",
    initials: "KM",
    purpose: "Responsible for planning and overseeing the annual KEA competition calendar across all five disciplines. Ensures all events comply with EFI technical guidelines and standards.",
    responsibilities: [
      "Approve event prospectuses and technical schedules",
      "Appoint EFI-certified judges and technical delegates for events",
      "Review competition rules and recommend updates to the Executive Committee",
      "Coordinate with EFI for national qualifying events and rankings",
      "Resolve technical disputes arising from competitions",
    ],
    members: ["Dr. Rekha Nair", "Ms. Sunita Venkatesh", "Mr. Ganesh Rao", "Sqn. Ldr. A. Singh (Retd.)"],
  },
  {
    name: "Membership & Welfare Committee",
    chair: "Ms. Priya Krishnaswamy",
    initials: "PK",
    purpose: "Manages all aspects of KEA membership — registration, renewal, grievances, and outreach — while ensuring the welfare of members and affiliated entities.",
    responsibilities: [
      "Process new membership applications and renewals",
      "Maintain the KEA membership register",
      "Handle member grievances and enquiries",
      "Develop outreach programmes for new and junior members",
      "Coordinate with district chapters on local membership drives",
    ],
    members: ["Ms. Sunita Venkatesh", "Mr. Mahesh Kumar", "District Chapter Representatives"],
  },
  {
    name: "Finance & Audit Committee",
    chair: "Mr. Vikram Hegde",
    initials: "VH",
    purpose: "Oversees the financial management of the Association, ensuring transparency, compliance with statutory requirements, and responsible stewardship of KEA funds.",
    responsibilities: [
      "Prepare and present the annual budget for Executive Committee approval",
      "Monitor expenditure against approved budgets",
      "Oversee the annual statutory audit",
      "Review and recommend membership fee structures",
      "Present audited accounts at the Annual General Meeting",
    ],
    members: ["Gen. S.K. Malhotra (Retd.)", "Brig. R.K. Sharma (Retd.)", "External Chartered Accountant"],
  },
  {
    name: "Equine Welfare Committee",
    chair: "Dr. Deepa Pillai",
    initials: "DP",
    purpose: "Ensures the health, safety, and welfare of all horses participating in KEA-sanctioned events, in line with FEI and EFI welfare standards and Indian veterinary regulations.",
    responsibilities: [
      "Appoint competent veterinary officials for all KEA events",
      "Review and enforce FEI horse welfare guidelines at competitions",
      "Advise the Executive Committee on equine health policy",
      "Investigate welfare complaints arising from events",
      "Maintain standards for horse transport, stabling, and post-competition care",
    ],
    members: ["Dr. Rekha Nair", "Appointed Equine Veterinarians"],
  },
  {
    name: "Disciplinary Committee",
    chair: "Col. P.N. Rao (Retd.)",
    initials: "PR",
    purpose: "Adjudicates disciplinary matters involving members, office bearers, and affiliated entities, ensuring fair process and upholding the integrity of equestrian sport in Karnataka.",
    responsibilities: [
      "Investigate complaints of misconduct by members or officials",
      "Conduct disciplinary hearings with due process",
      "Impose sanctions where misconduct is established",
      "Hear appeals against competition decisions at state level",
      "Report decisions to the Executive Committee",
    ],
    members: ["Gen. S.K. Malhotra (Retd.)", "Dr. Anand Murthy", "Independent Member"],
  },
  {
    name: "Infrastructure & Development Committee",
    chair: "Mr. Mahesh Kumar",
    initials: "MK",
    purpose: "Promotes the development of equestrian facilities, training infrastructure, and participation pathways across Karnataka, working with government agencies and private stakeholders.",
    responsibilities: [
      "Identify and develop equestrian venues across Karnataka",
      "Liaise with state sports authorities for infrastructure funding",
      "Support district chapters in establishing local facilities",
      "Promote grassroots and youth development programmes",
      "Coordinate with riding schools and academies for training partnerships",
    ],
    members: ["Ms. Priya Krishnaswamy", "District Chapter Representatives", "Nominated Members"],
  },
];

export default function CommitteesPage() {
  return (
    <InnerPageShell
      title="Committees"
      subtitle="Standing committees of the Karnataka Equestrian Association"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Office Bearers", href: "/office-bearers" }, { label: "Committees" }]}
    >
      {/* Intro */}
      <section className="bg-[#F7F4EF] py-14 border-b border-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#4A5568] text-sm leading-relaxed max-w-3xl">
            The Executive Committee constitutes standing sub-committees to manage specific domains of Association activity. Each committee is chaired by a member of the Executive Committee and may co-opt additional members with relevant expertise. Committee decisions are subject to ratification by the Executive Committee.
          </p>
        </div>
      </section>

      {/* Committees */}
      <section className="bg-[#F7F4EF] pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="space-y-6">
            {committees.map((c, i) => (
              <div key={c.name} className="bg-white border border-[#EDEAE3] hover:border-[#C9A84C]/30 transition-all duration-200 overflow-hidden group">
                {/* Header */}
                <div className="flex items-start gap-6 p-8 border-b border-[#EDEAE3]">
                  <div className="font-heading text-5xl text-[#C9A84C]/12 font-light leading-none select-none shrink-0">{String(i + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-medium text-[#0B1C2D] mb-2 group-hover:text-[#C9A84C] transition-colors">{c.name}</h3>
                    <p className="text-[#6B7280] text-[13px] leading-relaxed">{c.purpose}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid lg:grid-cols-[1fr_260px] gap-0">
                  {/* Responsibilities */}
                  <div className="p-8 border-r border-[#EDEAE3]">
                    <div className="text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] mb-4">Key Responsibilities</div>
                    <ul className="space-y-2.5">
                      {c.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-[13px] text-[#4A5568]">
                          <span className="text-[#C9A84C] text-[8px] mt-1 shrink-0">◇</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Chair + Members */}
                  <div className="p-8 bg-[#F7F4EF]">
                    <div className="text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] mb-4">Chairperson</div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white border border-[#EDEAE3] flex items-center justify-center shrink-0">
                        <span className="font-heading text-sm font-medium text-[#0B1C2D]">{c.initials}</span>
                      </div>
                      <span className="text-[#0B1C2D] text-sm font-medium">{c.chair}</span>
                    </div>
                    <div className="text-[10px] tracking-[0.16em] uppercase text-[#C9A84C] mb-3">Members</div>
                    <ul className="space-y-1.5">
                      {c.members.map((m) => (
                        <li key={m} className="text-[12px] text-[#6B7280] flex items-start gap-2">
                          <span className="text-[#C9A84C]/40 text-[7px] mt-1">◇</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-[#0B1C2D] py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/45 text-sm leading-relaxed max-w-2xl">For queries about a specific committee's work, or to request committee meeting minutes, contact the KEA Secretariat.</p>
          <Link href="/contact" className="shrink-0 px-8 py-3.5 bg-[#C9A84C] text-[#0B1C2D] text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#b8963e] transition-colors">
            Contact Secretariat →
          </Link>
        </div>
      </section>
    </InnerPageShell>
  );
}
