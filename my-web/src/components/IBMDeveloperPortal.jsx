import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import {
  ArrowRight,
  Layers,
  Unlink,
  HelpCircle,
  Search,
  MessagesSquare,
  Link2,
  CreditCard,
  Users,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared building blocks — a bold typographic flow-line and a card   */
/*  grid with a small set of Carbon-derived accent colors. No numbers. */
/* ------------------------------------------------------------------ */

const ACCENTS = {
  blue: { bg: "bg-[#EDF5FF]", text: "text-[#0F62FE]" },
  purple: { bg: "bg-[#F6F2FF]", text: "text-[#8A3FFC]" },
  magenta: { bg: "bg-[#FFF0F6]", text: "text-[#D02670]" },
  teal: { bg: "bg-[#DEFBFB]", text: "text-[#007D79]" },
  cyan: { bg: "bg-[#E5F6FF]", text: "text-[#0072C3]" },
};

function Block({ subtitle, title, children, first }) {
  return (
    <div className={`py-14 flex flex-col gap-2 ${first ? "" : "border-t border-gray-200"}`}>
      <div className="w-full">
        <p className="text-gray-500 text-sm mb-1">{subtitle}</p>
        <p className="text-3xl md:text-4xl font-bold leading-[1.1] max-w-2xl">{title}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/* A colored callout — differentiates a key takeaway with a tinted
   background instead of just bolding the text. */
function Callout({ children }) {
  return (
    <p className="mt-6 inline-block rounded-lg bg-[#EDF5FF] text-[#0F62FE] px-4 py-3 text-base md:text-lg font-medium max-w-xl">
      {children}
    </p>
  );
}

/* A single bold line of words joined by a separator — the one diagram device
   reused for every journey / relationship / grouping on the page. */
function FlowLine({ words, separator = "→", size = "text-xl md:text-2xl" }) {
  const sepColor = separator === "✕" ? "text-gray-300" : "text-[#0F62FE]";
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 font-bold uppercase tracking-wide ${size}`}>
      {words.map((word, i) => (
        <span key={word} className="flex items-center gap-3">
          <span>{word}</span>
          {i < words.length - 1 && <span className={sepColor}>{separator}</span>}
        </span>
      ))}
    </div>
  );
}

/* A card grid — colored icon chip, bold title, gray description. */
function CardGrid({ items, cols = "lg:grid-cols-5" }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-4`}>
      {items.map((item) => {
        const Icon = item.icon;
        const accent = ACCENTS[item.color] || ACCENTS.blue;
        return (
          <div key={item.title} className="rounded-xl border border-gray-200 p-6">
            {Icon && (
              <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${accent.bg}`}>
                <Icon size={20} className={accent.text} strokeWidth={2} />
              </span>
            )}
            <p className="font-bold text-base mb-2">{item.title}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

const PROBLEMS = [
  { title: "Inconsistent", body: "no Carbon foundation meant inconsistent UI and hierarchy.", icon: Layers, color: "purple" },
  { title: "Disconnected", body: "the asset trial experience was disconnected from the subscription page.", icon: Unlink, color: "magenta" },
  { title: "Unclear", body: "plans, subscriptions, and applications had unclear relationships.", icon: HelpCircle, color: "cyan" },
  { title: "Underused", body: "limited search and no reviews meant the asset page wasn't working as a real marketplace.", icon: Search, color: "teal" },
  { title: "Fragmented", body: "comments were scattered across individual pages.", icon: MessagesSquare, color: "blue" },
];

const CHANGES = [
  {
    title: "Made discovery work",
    body: "improved the asset page with stronger search and signals like reviews, so it works as a real marketplace.",
    icon: Search,
    color: "blue",
  },
  {
    title: "Connected trial to subscription",
    body: "linked the asset trial experience directly to subscription, so developers move from trying an asset to accessing it without restarting.",
    icon: Link2,
    color: "blue",
  },
  {
    title: "Clarified access",
    body: "one global subscription view connecting plans, applications, status, and next steps.",
    icon: CreditCard,
    color: "blue",
  },
  {
    title: "Built community",
    body: "replaced fragmented page comments with a dedicated forum for each asset.",
    icon: Users,
    color: "blue",
  },
];

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "system", label: "Design System" },
  { id: "process", label: "Process" },
  { id: "impact", label: "Impact" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function IBMDeveloperPortal() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = TABS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveTab(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const selectTab = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projectKeys = Object.keys(projectData);
  const currentIndex = projectKeys.indexOf("ibmDeveloperPortal");
  const prevProjectID = projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length];
  const nextProjectID = projectKeys[(currentIndex + 1) % projectKeys.length];
  const prevProject = projectData[prevProjectID];
  const nextProject = projectData[nextProjectID];

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative bg-white z-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl w-full px-8 md:px-0">
          {/* ---------------------------------------------------------- */}
          {/*  Hero                                                      */}
          {/* ---------------------------------------------------------- */}
          <div className="w-full bg-[#181818] rounded-2xl mt-[5vh] mb-6 px-8 py-12 md:px-16 md:py-16">
            <h3 className="font-bold leading-none text-[2.25rem] md:text-[3.25rem] mb-2 text-white">
              IBM Developer Portal
            </h3>
            <p className="text-lg md:text-2xl text-[#78A9FF] font-medium max-w-2xl mb-5">
              Designing an end-to-end developer journey.
            </p>
            <p className="text-[#C6C6C6] leading-relaxed max-w-2xl mb-6">
              IBM sells this portal to companies so they can run their own developer program. I
              redesigned it around the journey developers actually take — discovering an asset,
              learning it, testing it, subscribing, and continuing to engage with it.
            </p>
            <p className="text-[#8D8D8D] text-xs tracking-[0.15em] uppercase">
              Product Designer · UX/UI · Information Architecture · Carbon · Developer Experience
            </p>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*  Disclaimer — product hasn't shipped yet, so no visuals     */}
          {/* ---------------------------------------------------------- */}
          <p className="rounded-lg border border-[#F1C21B] bg-[#FCF4D6] text-[#4D3800] px-4 py-3 text-sm md:text-base mb-6">
            This product hasn't shipped yet, so I'm not able to share visuals or screenshots here.
            The write-up below walks through my process and thinking instead.
          </p>

          {/* ---------------------------------------------------------- */}
          {/*  Role / Timeline / Skills                                   */}
          {/* ---------------------------------------------------------- */}
          <div className="border-t border-b border-gray-200 py-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                <h2 className="text-gray-500">About the Project</h2>
                <p className="text-gray-600">
                  A case study on improving the IBM Developer Portal — helping developers find the
                  right tools, trust the documentation, and get to work faster.
                </p>
              </div>
              <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
                <div>
                  <h2 className="text-gray-500">Role</h2>
                  <p>Product Design Intern</p>
                  <div className="border-b border-gray-200 mt-2" />
                </div>
                <div>
                  <h2 className="text-gray-500">Timeline</h2>
                  <p>In progress</p>
                  <div className="border-b border-gray-200 mt-2" />
                </div>
                <div>
                  <h2 className="text-gray-500">Skills</h2>
                  <div className="flex flex-col">
                    {["Product Design", "Information Architecture", "Developer Experience"].map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          {/*  Story shell — one continuous page; side nav scroll-spies   */}
          {/* ---------------------------------------------------------- */}
          <div className="lg:flex lg:items-start lg:gap-14">
            <nav
              aria-label="Case study sections"
              className="lg:w-40 lg:shrink-0 lg:self-start sticky top-16 md:top-20 lg:top-24 z-30 bg-white/95 backdrop-blur -mx-8 px-8 lg:mx-0 lg:px-0 mb-2 lg:mb-0 border-b lg:border-b-0 border-gray-200"
            >
              <div className="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar py-4 lg:py-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => selectTab(tab.id)}
                    className={`text-left text-sm tracking-wide whitespace-nowrap px-3 py-2 lg:border-l-2 transition-colors ${
                      activeTab === tab.id
                        ? "text-[#161616] font-medium lg:border-[#0F62FE]"
                        : "text-gray-400 hover:text-gray-600 lg:border-transparent"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="flex-1 min-w-0">
              {/* ======================== OVERVIEW ======================== */}
              <section id="overview" className="scroll-mt-28">
                <Block subtitle="Overview" title="I was asked to Carbonize the portal. It needed more than that." first>
                  <p className="text-gray-600 max-w-xl">
                    IBM's Developer Portal is a product IBM sells to companies so they can run
                    their own developer program — publishing their APIs, MCP servers, and GraphQL
                    services for their developers to discover, evaluate, and integrate. My
                    original task was to apply IBM's Carbon Design System to it — but it was clear
                    from the start that a visual refresh alone wouldn't fix how disconnected the
                    experience actually felt.
                  </p>
                </Block>
              </section>

              {/* ======================== PROBLEM ======================== */}
              <section id="problem" className="scroll-mt-28">
                <Block subtitle="The Problem" title="The portal had the pieces. The journey was fragmented." first>
                  <CardGrid items={PROBLEMS} />
                  <Callout>
                    Adopting Carbon meant rethinking the information architecture underneath it —
                    not just swapping components.
                  </Callout>
                </Block>
              </section>

              {/* ======================== SOLUTION ======================== */}
              <section id="solution" className="scroll-mt-28">
                <Block subtitle="The Solution" title="Four moves that closed the gaps." first>
                  <CardGrid items={CHANGES} cols="lg:grid-cols-2" />
                </Block>
              </section>

              {/* ===================== DESIGN SYSTEM ===================== */}
              <section id="system" className="scroll-mt-28">
                <Block subtitle="Design System" title="One foundation. Many assets." first>
                  <div className="flex items-center gap-3 flex-wrap mb-8">
                    {["REST", "SOAP", "GraphQL", "MCP", "LLM"].map((a) => (
                      <span key={a} className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#161616] text-white">
                        {a}
                      </span>
                    ))}
                    <span className="text-gray-400 text-sm">and more</span>
                  </div>
                  <p className="text-gray-600 max-w-xl">
                    I created reusable patterns that could adapt across different asset types
                    rather than designing one-off experiences.
                  </p>
                  <Callout>Consistency in the experience. Flexibility in the content.</Callout>

                  <p className="mt-12 font-bold text-xl md:text-2xl max-w-xl">
                    Carbon wasn't just a visual refresh.
                  </p>
                  <p className="mt-3 text-gray-600 max-w-xl">
                    The original portal wasn't using Carbon. I used its components and patterns
                    across the experience while rethinking hierarchy, spacing, typography,
                    contrast, and visual emphasis.
                  </p>
                  <div className="mt-4">
                    <FlowLine
                      words={["Grid", "Components", "Typography", "Spacing", "Color"]}
                      separator="·"
                      size="text-base md:text-lg"
                    />
                  </div>
                  <Callout>I used Carbon to create consistency, but improved the IA to create clarity.</Callout>
                </Block>
              </section>

              {/* ======================== PROCESS ======================== */}
              <section id="process" className="scroll-mt-28">
                <Block subtitle="The Process" title="The process wasn't linear." first>
                  <FlowLine
                    words={["Research", "Design", "Prototype", "Validate", "Develop"]}
                    separator="⇄"
                    size="text-lg md:text-xl"
                  />
                  <p className="mt-6 text-gray-600 max-w-xl">
                    I didn't design first and prototype later — I used IBM Bob to design and
                    prototype at the same time, building multiple coded variations and validating
                    them with A/B testing and developer feedback instead of finalizing one
                    direction before building it. My engineering background made that workflow
                    feel natural.
                  </p>
                </Block>
              </section>

              {/* ======================== IMPACT ======================== */}
              <section id="impact" className="scroll-mt-28">
                <Block subtitle="Impact" title="A more connected developer experience." first>
                  <FlowLine words={["Discover", "Learn", "Test", "Subscribe", "Continue"]} />

                  <p className="mt-10 text-gray-600 max-w-xl">
                    I handed off a working prototype built with IBM Bob, so engineering could pick
                    up from something closer to production code instead of static specs.
                  </p>

                  <p className="mt-12 font-bold text-xl md:text-2xl max-w-xl">
                    I didn't just redesign the pages. I redesigned how they connect.
                  </p>
                  <p className="mt-3 text-gray-600 max-w-xl">
                    This project taught me the value of designing as a journey, not just
                    individual pages — and to design with scalability in mind from the start, so
                    the same patterns could support new asset types as they're added.
                  </p>
                  <p className="font-bold text-2xl md:text-4xl leading-tight mt-10">
                    Discover. Learn. Test. Subscribe. Continue.
                  </p>
                </Block>
              </section>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 my-14">
            <Link
              to={`/portfolio/${prevProjectID}`}
              className="flex items-center justify-center bg-white hover:bg-[#9E76FF] text-[#181818] font-bold w-[300px] md:w-auto px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition z-10 text-xs md:text-base"
            >
              <ArrowRight size={20} className="rotate-180 mr-2" />
              {prevProject.title}
            </Link>
            <Link
              to={`/portfolio/${nextProjectID}`}
              className="flex items-center justify-center bg-white hover:bg-[#9E76FF] text-[#181818] font-bold w-[300px] md:w-auto px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition text-xs md:text-base"
            >
              <span className="mr-2">{nextProject.title}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <footer className="pointer-events-auto sticky bottom-0 z-5 w-full">
        <Footer className="pointer-events-auto" />
      </footer>
    </div>
  );
}
