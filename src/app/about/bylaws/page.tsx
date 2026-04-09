import InnerPageShell from "@/components/InnerPageShell";
import { BlurFade } from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import { FadeText } from "@/components/ui/fade-text";
import { AnimatedList } from "@/components/ui/animated-list";
import { MagicCard } from "@/components/ui/magic-card";

const articles = [
  {
    num: "I",
    title: "Name and Registered Office",
    clauses: [
      'The Association shall be known as the Karnataka Equestrian Association (hereinafter referred to as \u201cKEA\u201d or \u201cthe Association\u201d).',
      "The registered office of the Association shall be situated in Bangalore, Karnataka, India, at such address as the Executive Committee may from time to time determine.",
      "The Association may establish branch offices, district chapters, or sub-committees in any part of Karnataka as the Executive Committee may think fit.",
    ],
  },
  {
    num: "II",
    title: "Objects and Purpose",
    clauses: [
      "To govern, promote, and develop equestrian sport in all its disciplines across the State of Karnataka.",
      "To affiliate with and comply with the regulations of the Equestrian Federation of India (EFI), the Indian Olympic Association (IOA), and such other national and international bodies as the Association may determine.",
      "To organise and conduct equestrian competitions, clinics, training programmes, and all other equestrian activities within Karnataka.",
      "To ensure the welfare of horses and riders in all Association-sanctioned activities, in line with FEI and EFI welfare standards.",
      "To promote equestrian sport at the grassroots level and create pathways from state-level participation to national and international representation.",
      "To cooperate with government bodies, sports authorities, and other organisations for the advancement of equestrian sport in Karnataka.",
    ],
  },
  {
    num: "III",
    title: "Membership",
    clauses: [
      "Individual Membership: Open to any person above the age of 18 years residing or actively participating in equestrian sport in Karnataka. Individual members enjoy full competition eligibility and voting rights.",
      "Junior Membership: Open to persons under 18 years of age. Junior membership requires the co-signature of a parent or legal guardian. Junior members are eligible for junior competition categories.",
      "Life Membership: Open to Individual members in good standing who pay the prescribed one-time Life Membership fee. Life members carry all rights of Individual members in perpetuity.",
      "Institutional Membership: Open to equestrian clubs, riding academies, stables, and other institutions. Institutional members are entitled to affiliate their registered riders under KEA.",
      "Annual membership fees shall be fixed by the Executive Committee and ratified at the Annual General Meeting.",
      "Membership may be suspended or terminated by the Executive Committee for conduct prejudicial to the interests of the Association, subject to the right of the member to be heard.",
    ],
  },
  {
    num: "IV",
    title: "Office Bearers",
    clauses: [
      "The Office Bearers of the Association shall be: President, President Elect, Secretary General, Joint Secretary, Treasurer, and such other officers as the General Body may determine.",
      "All Office Bearers shall be elected by the General Body at the Annual General Meeting for a term of two years and shall be eligible for re-election for a maximum of two consecutive terms.",
      "The President shall preside over all meetings of the Association and the Executive Committee, and shall be the official representative of the Association.",
      "The Secretary General shall be responsible for the day-to-day administration of the Association, correspondence, maintenance of records, and implementation of Executive Committee decisions.",
      "The Treasurer shall maintain the accounts of the Association, collect membership fees, and present audited financial statements at the Annual General Meeting.",
      "Vacancies in office arising between elections may be filled by the Executive Committee until the next Annual General Meeting.",
    ],
  },
  {
    num: "V",
    title: "Executive Committee",
    clauses: [
      "The Executive Committee shall consist of the Office Bearers and such additional elected members as determined by the General Body, not exceeding twelve members in total.",
      "The Executive Committee shall meet at least four times in each financial year. A quorum shall constitute not less than one-half of the total members of the Committee.",
      "The Executive Committee shall have power to manage the affairs of the Association, frame rules and regulations, sanction expenditure within approved budgets, and take all decisions necessary for the promotion of the Association's objects.",
      "Sub-committees may be constituted by the Executive Committee for specific purposes including competition, membership, welfare, finance, and disciplinary matters.",
    ],
  },
  {
    num: "VI",
    title: "General Body Meetings",
    clauses: [
      "The Annual General Meeting (AGM) shall be held once in every calendar year within six months of the close of the financial year.",
      "Notice of the AGM, specifying the date, time, venue, and agenda, shall be given to all members at least 21 days before the meeting.",
      "Extraordinary General Meetings may be convened by the President on the written request of not less than one-third of the Individual and Life members.",
      "A quorum for General Body meetings shall be twenty-five Individual or Life members or one-third of such members, whichever is less.",
      "Each Individual and Life member shall be entitled to one vote. Resolutions shall be passed by a simple majority except where these Bylaws specify otherwise.",
    ],
  },
  {
    num: "VII",
    title: "Finance and Audit",
    clauses: [
      "The financial year of the Association shall be from the 1st day of April to the 31st day of March.",
      "The funds of the Association shall be deposited in a scheduled bank account in the name of the Association. Withdrawals shall require the signatures of any two of the following: President, Secretary General, and Treasurer.",
      "The accounts of the Association shall be audited annually by a Chartered Accountant appointed by the General Body. Audited accounts shall be presented at each AGM.",
      "No individual member of the Executive Committee shall have any personal financial interest in any contract entered into by the Association.",
    ],
  },
  {
    num: "VIII",
    title: "Amendment of Bylaws",
    clauses: [
      "These Bylaws may be amended only at a General Body Meeting by a resolution passed by not less than two-thirds of the members present and voting.",
      "Notice of any proposed amendment, including the text of the proposed change, shall be circulated to all members at least 30 days before the meeting at which it is to be considered.",
      "No amendment shall be made to these Bylaws that would conflict with the regulations of the Equestrian Federation of India or the Indian Olympic Association.",
    ],
  },
  {
    num: "IX",
    title: "Dissolution",
    clauses: [
      "The Association may be dissolved by a resolution passed by not less than three-fourths of the members present and voting at a Special General Meeting called for the purpose, with at least 30 days' notice.",
      "Upon dissolution, after settlement of all liabilities, the remaining assets of the Association shall not be distributed among the members but shall be transferred to such equestrian or sports body as the General Body may determine.",
    ],
  },
];

export default function BylawsPage() {
  return (
    <InnerPageShell
      title="Bylaws"
      subtitle="Governing rules of the Karnataka Equestrian Association"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Bylaws" }]}
    >
      {/* Preamble */}
      <section className="bg-[#F7F4EF] py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <BlurFade delay={0.1} inView>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C9A84C] font-medium">Preamble</span>
            </div>
          </BlurFade>
          <BlurFade delay={0.15} inView>
            <div className="bg-white border border-[#EDEAE3] border-l-2 border-l-[#C9A84C] p-8 mb-12">
              <p className="font-heading text-xl italic text-[#0B1C2D] leading-relaxed mb-4 font-light">
                These Bylaws constitute the governing rules of the Karnataka Equestrian Association and are binding on all members, office bearers, committees, and affiliated entities.
              </p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                The Association operates under the framework of the Equestrian Federation of India (EFI) and the Indian Olympic Association (IOA). In the event of any conflict between these Bylaws and the regulations of EFI or IOA, the latter shall prevail.
              </p>
            </div>
          </BlurFade>

          {/* Quick nav */}
          <BlurFade delay={0.2} inView>
            <div className="grid sm:grid-cols-3 gap-3 mb-16">
              {articles.map((a) => (
                <a
                  key={a.num}
                  href={`#article-${a.num}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-[#EDEAE3] hover:border-[#C9A84C]/40 hover:text-[#C9A84C] transition-all group text-[11px]"
                >
                  <span className="font-heading text-lg text-[#C9A84C]/40 font-light group-hover:text-[#C9A84C] transition-colors">{a.num}</span>
                  <span className="text-[#0B1C2D] group-hover:text-[#C9A84C] transition-colors">{a.title}</span>
                </a>
              ))}
            </div>
          </BlurFade>

          {/* Articles */}
          <div className="space-y-12">
            {articles.map((article, idx) => (
              <BlurFade key={article.num} delay={0.1} inView>
                <MagicCard className="bg-white border border-[#EDEAE3]" gradientColor="rgba(201,168,76,0.06)">
                  <div id={`article-${article.num}`} className="p-8 relative z-10">
                    <div className="flex items-start gap-6 mb-6">
                      <span className="font-heading text-4xl text-[#C9A84C]/20 font-light leading-none shrink-0">{article.num}</span>
                      <div>
                        <div className="text-[10px] tracking-[0.14em] uppercase text-[#C9A84C] mb-1">Article {article.num}</div>
                        <h3 className="font-heading text-xl font-medium text-[#0B1C2D]">{article.title}</h3>
                      </div>
                    </div>
                    <AnimatedList className="space-y-3 ml-0" delay={0.05} stagger={0.06}>
                      {article.clauses.map((clause, i) => (
                        <div key={i} className="flex gap-4 text-sm text-[#4A5568] leading-relaxed">
                          <span className="text-[#C9A84C]/50 shrink-0 text-xs mt-0.5 font-medium">{article.num}.{i + 1}</span>
                          <span>{clause}</span>
                        </div>
                      ))}
                    </AnimatedList>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>

          {/* Footer note */}
          <FadeText delay={0.1} inView>
            <div className="mt-10 bg-[#0B1C2D] p-6">
              <p className="text-white/45 text-[12px] leading-relaxed">
                These Bylaws were adopted by the General Body of the Karnataka Equestrian Association. For certified copies or queries regarding these Bylaws, contact the Secretariat at{" "}
                <span className="text-[#C9A84C]/70">secretary@karnatakaequestrian.in</span>
              </p>
            </div>
          </FadeText>
        </div>
      </section>
    </InnerPageShell>
  );
}
