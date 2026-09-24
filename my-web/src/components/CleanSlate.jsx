import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import { CaseStudyTabNav, useScrollSpyTabs } from "./CaseStudy/CaseStudyTabNav.jsx";
import ExploreCaseStudies from "./CaseStudy/ExploreCaseStudies.jsx";
import { useEffect } from "react";
import {
  EyeOff,
  Users,
  Database,
  Mail,
  Archive,
  CodeXml,
  GitBranch,
  Lightbulb,
  SlidersHorizontal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared building blocks — same shape as the IBM case study (Block, */
/*  JourneyBeat), but restyled around a single purple accent.          */
/* ------------------------------------------------------------------ */

const ACCENT = { bg: "bg-[#F3E8FD]", text: "text-[#8F48E9]", hex: "#8F48E9" };

function Block({ subtitle, title, children, first }) {
  return (
    <div className={`py-14 flex flex-col gap-2 ${first ? "" : "border-t border-gray-200"}`}>
      <div className="w-full">
        <p className="text-gray-500 text-sm mb-1">{subtitle}</p>
        <p className="text-3xl md:text-4xl font-medium leading-[1.1]">{title}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/* A single card in an icon-led grid — reused for the legacy process and
   the learnings. */
function StageCard({ icon: Icon, eyebrow, title, description, tone = "neutral" }) {
  const styles = {
    neutral: { border: "border-gray-200", bg: "bg-white", iconBg: "bg-gray-100", iconText: "text-gray-400", eyebrow: "text-gray-400", shadow: "" },
    accent: { border: "border-[#8F48E9]/20", bg: "bg-gradient-to-br from-[#FBF8FE] to-white", iconBg: ACCENT.bg, iconText: ACCENT.text, eyebrow: ACCENT.text, shadow: "" },
  }[tone];

  return (
    <div className={`group rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-200 ease-out hover:-translate-y-1 ${styles.border} ${styles.bg} ${styles.shadow}`}>
      <div className="flex items-center justify-between">
        {Icon && (
          <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${styles.iconBg} ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105`}>
            <Icon size={18} className={styles.iconText} strokeWidth={2} />
          </span>
        )}
        {eyebrow && <p className={`text-[10px] font-bold uppercase tracking-[0.18em] ${styles.eyebrow}`}>{eyebrow}</p>}
      </div>
      <p className="font-bold text-base md:text-lg text-[#161616]">{title}</p>
      {description && <p className="text-sm text-gray-600 leading-relaxed">{description}</p>}
    </div>
  );
}

function StageGrid({ items, cols = "grid-cols-2 lg:grid-cols-4" }) {
  return (
    <div className={`grid ${cols} gap-4 md:gap-5 mt-8 md:mt-10`}>
      {items.map((item) => (
        <StageCard key={item.title} {...item} />
      ))}
    </div>
  );
}

/* A stack of quoted questions — the thing the admin is silently asking
   at each stage, rendered as a left-rule blockquote instead of plain
   italic text so it reads as voice, not commentary. */
function QuoteStack({ lines }) {
  return (
    <div className="mt-8 p-5 md:p-6 md:pl-7">
      <div className="flex flex-col gap-3 border-l-2 pl-4" style={{ borderColor: ACCENT.hex }}>
        {lines.map((line) => (
          <p key={line} className="text-base md:text-lg text-gray-700 italic leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* One beat in the solution's journey — a numbered (or unnumbered, for a
   coda) heading, a bold tagline, and freeform body content. */
function JourneyBeat({ number, label, tagline, children }) {
  return (
    <div className="py-8 border-t border-gray-200 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-3">
        {number && <span className="text-[#8F48E9] font-bold text-xl md:text-2xl">{number}</span>}
        <span className="text-[#161616] text-xl md:text-2xl font-medium leading-[1.1]">{label}</span>
      </div>
      {tagline && <p className="text-lg md:text-xl font-semibold text-[#161616] mb-4">{tagline}</p>}
      <div className="text-gray-600 flex flex-col gap-4">{children}</div>
    </div>
  );
}

/* The onboarding setup — three plain cards for what a team configures
   before it starts managing requests. */
const ONBOARDING_STEPS = [
  { icon: Database, title: "Connect systems", description: "Link the databases and services where customer data lives." },
  { icon: Users, title: "Assign admins", description: "Define who owns what, so each admin sees only the actions that are theirs to take." },
  { icon: SlidersHorizontal, title: "Custom settings", description: "Tailor Clean Slate to the team's own process and requirements." },
];

function OnboardingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {ONBOARDING_STEPS.map(({ icon: Icon, title, description }) => (
        <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col gap-2">
          <Icon size={20} className={ACCENT.text} strokeWidth={2} />
          <p className="font-bold text-base text-[#161616]">{title}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  );
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
];

const LEGACY_PROCESS = [
  { icon: Mail, title: "Requests came in by email", tone: "accent" },
  { icon: Users, title: "Deletions were coordinated manually", tone: "accent" },
  { icon: EyeOff, title: "Progress was difficult to track", tone: "accent" },
  { icon: Archive, title: "History was scattered across conversations", tone: "accent" },
];

const LEARNINGS = [
  {
    icon: CodeXml,
    title: "Design and engineering are stronger together",
    description: "Knowing how things are built made my designs more realistic, and in a startup environment, moving between Figma and code was a real advantage.",
  },
  {
    icon: GitBranch,
    title: "Edge cases are part of the design",
    description: "In a complex workflow, considering key customer exceptions shaped the experience as much as the happy path did.",
  },
  {
    icon: Lightbulb,
    title: "Making the technical feel simple",
    description: "I learned to turn complex system behavior into something non-technical users could understand and act on.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function CleanSlate() {
  const { activeTab, selectTab } = useScrollSpyTabs(TABS);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative bg-white z-10 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="mx-auto max-w-[86rem] w-full px-8 md:px-0">
          <div className="lg:grid lg:items-start lg:gap-x-14 lg:grid-cols-[minmax(10rem,1fr)_min(56rem,100%)_minmax(10rem,1fr)]">
            <CaseStudyTabNav tabs={TABS} activeTab={activeTab} onSelect={selectTab} accent="#8F48E9" />

            <div className="min-w-0">
              {/* ======================== OVERVIEW ======================== */}
              <section id="overview" className="scroll-mt-28">
                <LazyImage
                  src="/miamiHeat/cleanslatecover3.png"
                  alt="Clean Slate"
                  className="w-full object-cover rounded-2xl mt-[5vh] mb-6 h-56 md:h-[60vh]"
                />

                <h3 className="font-bold leading-none text-[2.5rem] md:text-[3.5rem] mt-2 mb-2 text-left">Clean Slate</h3>
                <p className="text-left text-lg md:text-xl mb-8">Designing a data deletion workflow that balances automation with human review</p>

                <div className="border-t border-b border-gray-200 py-8 mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                      <h2 className="text-gray-500">About the Project</h2>
                      <p className="text-gray-600">
                        Clean Slate is a data privacy management platform designed to help teams manage personal data
                        deletion requests across their organization.
                      </p>
                      <p className="text-gray-600 mt-4">
                        I joined the Miami HEAT as a Software Engineer and took on Clean Slate, a new product with no
                        existing design or established user experience. Alongside engineering, I served as the
                        product's primary UX designer, leading the admin experience from workflow definition and
                        information architecture through interaction design and frontend implementation.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
                      <div>
                        <h2 className="text-gray-500">Role</h2>
                        <p>Design Engineer</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Timeline</h2>
                        <p>September – December 2025</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Skills</h2>
                        <div className="flex flex-col">
                          {["UI/UX", "Figma", "Angular", "TypeScript", "Azure DevOps"].map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Block subtitle="Context" title="Data deletion requests had no system behind them — just email and manual coordination" first>
                  <p className="text-gray-600">
                    When a customer requested that their personal information be deleted, there was no centralized
                    system for managing the request. Admins coordinated deletions manually across different systems,
                    while progress, ownership, and history lived across emails and conversations.
                  </p>

                  <p className="text-gray-600 mt-4">
                    I designed and built Clean Slate to turn that fragmented process into a single workflow for
                    automating, tracking, and resolving data deletion requests.
                  </p>

                  <div className="mt-6">
                    <StageGrid items={LEGACY_PROCESS} />
                  </div>
                </Block>
              </section>

              {/* ======================== CHALLENGE ======================== */}
              <section id="challenge" className="scroll-mt-28">
                <Block subtitle="The Challenge" title="How might we bridge the gap between automated data deletion across systems and the human decisions needed to manage it?" first>
                  <p className="text-gray-600">
                    Clean Slate needed to make the full lifecycle of a request visible—automating the parts that
                    could happen in the background, surfacing the outcomes of that work, and giving admins the
                    information and controls needed to take action when necessary.
                  </p>

                  <p className="text-gray-600 mt-4">To manage a request confidently, admins needed to answer:</p>
                  <QuoteStack
                    lines={["What's happening right now?", "What has already been handled?", "Where does action need to be taken?", "What happened throughout the process?"]}
                  />
                </Block>
              </section>

              {/* ======================== SOLUTION ======================== */}
              <section id="solution" className="scroll-mt-28">
                <Block subtitle="The Solution" title="Building the experience around the request lifecycle" first>
                  <JourneyBeat number="01" label="One place to manage every request" tagline="Give admins one place to understand their workload.">
                    <p>
                      I designed and engineered a centralized view that turned an otherwise invisible, automated
                      process into actionable work. By prioritizing status and deadlines, admins could understand
                      what was happening and what needed attention without manually tracking individual requests.
                    </p>
                    <p>
                      The result: a dashboard that doesn't just
                      store requests — it surfaces the work that matters.
                    </p>
                    <div className="mt-6 rounded-xl overflow-hidden border border-gray-200">
                      <LazyImage
                        src="/cleanslate/dashboard.png"
                        alt="Clean Slate dashboard showing past due, open, and completed data deletion requests in a searchable, filterable table"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </JourneyBeat>

                  <JourneyBeat number="02" label="Turning system states into clear next steps" tagline="Turn status into action.">
                    <p>
                      A status shouldn't just tell admins what happened—it should tell them what happens next. I
                      designed each request state to translate complex system activity into a clear, actionable
                      outcome, so admins could tell at a glance whether a request was complete or needed their input.
                    </p>
                    <p>
                      This gave admins the clarity to manage requests without needing to understand everything
                      happening behind the scenes.
                    </p>
                    <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 bg-white">
                      <LazyImage
                        src="/miamiHeat/cleanSlateNew%20(3).png"
                        alt="Clean Slate request details interface showing a request status workflow and system scan history"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </JourneyBeat>

                  <JourneyBeat number="03" label="Turning scattered updates into a history admins can trust">
                    <p>
                      I designed the history experience to give admins a clear view of what happened,
                      when it happened, and how the request progressed. Filtering, sorting, and export make that
                      history easier to investigate, while technical details remain accessible without overwhelming
                      everyday users.
                    </p>
                    <p>
                      Easy to understand at a glance, but detailed enough to support deeper investigation.
                    </p>
                    <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 bg-white">
                      <LazyImage
                        src="/miamiHeat/requestHistory1.png"
                        alt="Clean Slate request history with filtering, sorting, and export, showing a structured record of activity over time"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </JourneyBeat>

                  <JourneyBeat number="04" label="Onboarding teams with the right setup from day one">
                    <OnboardingCards />
                  </JourneyBeat>
                </Block>
              </section>

              {/* ======================== IMPACT ======================== */}
              <section id="impact" className="scroll-mt-28">
                <Block subtitle="The Result" title="From uncertainty to visibility" first>
                  <p className="border-l-2 pl-5 text-lg md:text-xl leading-snug text-[#161616]" style={{ borderColor: ACCENT.hex }}>
                    Clean Slate balances automation with human oversight. I designed and engineered the layer that helps admins understand the
                    outcome, know when they're needed, and{" "}
                    <span className={ACCENT.text}>move every request forward with confidence.</span>
                  </p>

                  <p className="mt-14 text-2xl md:text-3xl font-medium leading-[1.1]">Learnings</p>
                  <StageGrid items={LEARNINGS.map((i) => ({ ...i, tone: "accent" }))} cols="grid-cols-1" />
                </Block>
              </section>
            </div>
          </div>

          <div className="max-w-[56rem] mx-auto">
            <ExploreCaseStudies currentId="cleanSlate" />
          </div>
        </div>
      </div>

      <footer className="pointer-events-auto sticky bottom-0 z-5 w-full">
        <Footer className="pointer-events-auto" />
      </footer>
    </div>
  );
}
