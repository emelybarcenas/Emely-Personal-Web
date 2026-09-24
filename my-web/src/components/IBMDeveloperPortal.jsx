import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import { CaseStudyTabNav, useScrollSpyTabs } from "./CaseStudy/CaseStudyTabNav.jsx";
import ExploreCaseStudies from "./CaseStudy/ExploreCaseStudies.jsx";
import AISearchBar from "./AISearchBar.jsx";
import { useEffect, useRef, useState } from "react";
import {
  FlaskConical,
  Code2,
  Network,
  Ruler,
  CreditCard,
  Compass,
  BookOpen,
  Users,
  Building2,
  Star,
  Package,
  ListChecks,
  Boxes,
  Plus,
  KeyRound,
  CheckCircle2,
  MessageSquare,
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
        <p className="text-3xl md:text-4xl font-medium leading-[1.1]">{title}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/* A colored callout — differentiates a key takeaway with a tinted
   background instead of just bolding the text. */
function Callout({ children }) {
  return (
    <p className="mt-6 inline-block rounded-lg bg-[#EDF5FF] text-[#0F62FE] px-4 py-3 text-base md:text-lg font-medium">
      {children}
    </p>
  );
}

/* A stat number that flickers up from 0 to its target once it scrolls into
   view — runs once per mount, not on every re-render. */
function CountUpValue({ value, color = "blue" }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const hasRun = useRef(false);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const duration = 900;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(String(Math.round(eased * target)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <p ref={ref} className={`text-3xl md:text-4xl font-bold tabular-nums ${ACCENTS[color].text}`}>
      {display}
      {suffix}
    </p>
  );
}

/* A single bold line of words joined by a separator — the one diagram device
   reused for every journey / relationship / grouping on the page. */
function FlowLine({ words, separator = "→", size = "text-xl md:text-2xl" }) {
  const sepColor = separator === "✕" ? "text-gray-300" : "text-[#0F62FE]";
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 uppercase tracking-wide ${size}`}>
      {words.map((word, i) => (
        <span key={word} className="flex items-center gap-3">
          <span>{word}</span>
          {i < words.length - 1 && <span className={sepColor}>{separator}</span>}
        </span>
      ))}
    </div>
  );
}

/* A small dummy annotated page — stands in for a real spec screenshot,
   since the shipped UI can't be shown here. Redlines + spacing labels only. */
function AnnotatedSpecMockup() {
  return (
    <svg viewBox="0 0 220 150" className="h-full w-auto max-w-full" role="img" aria-label="Dummy page with spacing annotations">
      <rect x="4" y="4" width="212" height="142" rx="6" fill="#F4F4F4" stroke="#C6C6C6" />
      <rect x="4" y="4" width="212" height="24" rx="6" fill="#161616" />
      <rect x="16" y="12" width="60" height="8" rx="2" fill="#8D8D8D" />
      <rect x="16" y="42" width="90" height="10" rx="2" fill="#161616" />
      <rect x="16" y="60" width="188" height="6" rx="2" fill="#C6C6C6" />
      <rect x="16" y="70" width="150" height="6" rx="2" fill="#C6C6C6" />
      <rect x="16" y="92" width="86" height="42" rx="4" fill="#EDF5FF" stroke="#0F62FE" strokeWidth="1" />
      <rect x="112" y="92" width="92" height="42" rx="4" fill="#EDF5FF" stroke="#0F62FE" strokeWidth="1" />

      {/* vertical spacing: gap between the text block and the boxes below */}
      <line x1="16" y1="78" x2="16" y2="90" stroke="#0F62FE" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="12" y1="78" x2="20" y2="78" stroke="#0F62FE" strokeWidth="1" />
      <line x1="12" y1="90" x2="20" y2="90" stroke="#0F62FE" strokeWidth="1" />
      <text x="26" y="87" fontSize="7" fill="#0F62FE">16px</text>

      {/* horizontal spacing: gap between the two boxes */}
      <line x1="102" y1="113" x2="112" y2="113" stroke="#0F62FE" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="102" y1="109" x2="102" y2="117" stroke="#0F62FE" strokeWidth="1" />
      <line x1="112" y1="109" x2="112" y2="117" stroke="#0F62FE" strokeWidth="1" />
      <text x="107" y="106" textAnchor="middle" fontSize="6.5" fill="#0F62FE">8px</text>

      {/* outer margin */}
      <line x1="16" y1="134" x2="16" y2="142" stroke="#0F62FE" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="204" y1="134" x2="204" y2="142" stroke="#0F62FE" strokeWidth="1" strokeDasharray="2 2" />
      <text x="16" y="146" fontSize="6" fill="#8D8D8D">24px margin</text>
    </svg>
  );
}

/* Simplified IA site map — how the portal's pages branch from a single
   asset entry point down to learn / tryout / subscribe. */
function SitemapFlowMockup() {
  const node = (x, y, w, label, filled) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="22" rx="5" fill={filled ? "#0F62FE" : "#FFFFFF"} stroke="#0F62FE" strokeWidth="1.25" />
      <text x={x + w / 2} y={y + 14} textAnchor="middle" fontSize="7.5" fontWeight="700" fill={filled ? "#FFFFFF" : "#161616"}>
        {label}
      </text>
    </g>
  );

  return (
    <svg viewBox="0 0 260 170" className="h-full w-auto max-w-full" role="img" aria-label="Simplified information architecture map">
      {node(96, 6, 68, "HOME", true)}

      <line x1="130" y1="28" x2="130" y2="42" stroke="#8D8D8D" strokeWidth="1.25" />
      {node(74, 42, 112, "ASSET DIRECTORY", false)}

      <line x1="130" y1="64" x2="130" y2="78" stroke="#8D8D8D" strokeWidth="1.25" />
      {node(80, 78, 100, "ASSET DETAIL", true)}

      <path d="M80 100 C 40 112, 30 112, 30 122" fill="none" stroke="#8D8D8D" strokeWidth="1.25" />
      <path d="M130 100 L 130 122" fill="none" stroke="#8D8D8D" strokeWidth="1.25" />
      <path d="M180 100 C 220 112, 230 112, 230 122" fill="none" stroke="#8D8D8D" strokeWidth="1.25" />

      {node(2, 122, 56, "LEARN", false)}
      {node(102, 122, 56, "TRYOUT", false)}
      {node(202, 122, 56, "SUBSCRIBE", false)}

      <line x1="130" y1="144" x2="130" y2="150" stroke="#8D8D8D" strokeWidth="1.25" strokeDasharray="2 2" />
      <line x1="230" y1="144" x2="230" y2="150" stroke="#8D8D8D" strokeWidth="1.25" strokeDasharray="2 2" />
      <line x1="130" y1="150" x2="230" y2="150" stroke="#8D8D8D" strokeWidth="1.25" strokeDasharray="2 2" />
      <line x1="180" y1="150" x2="180" y2="156" stroke="#8D8D8D" strokeWidth="1.25" strokeDasharray="2 2" />
      {node(140, 156, 80, "ACCOUNT", false)}
    </svg>
  );
}

/* The tryout opens as a side panel on the same page, not a separate
   destination — the docs stay visible while the panel slides in. */
function SidePanelMockup() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-auto" role="img" aria-label="The tryout opens in a side panel over the asset page">
      <rect x="4" y="4" width="212" height="142" rx="6" fill="#F4F4F4" stroke="#C6C6C6" />
      <rect x="4" y="4" width="212" height="20" rx="6" fill="#161616" />
      <rect x="14" y="10" width="50" height="8" rx="2" fill="#8D8D8D" />

      <text x="14" y="36" fontSize="6" fontWeight="700" fill="#8D8D8D">LEARN</text>
      <rect x="14" y="42" width="112" height="8" rx="2" fill="#161616" />
      <rect x="14" y="56" width="112" height="5" rx="2" fill="#C6C6C6" />
      <rect x="14" y="65" width="82" height="5" rx="2" fill="#C6C6C6" />
      <rect x="14" y="80" width="112" height="48" rx="4" fill="#FFFFFF" stroke="#C6C6C6" strokeWidth="1" />

      <rect x="138" y="34" width="70" height="96" rx="4" fill="#EDF5FF" stroke="#0F62FE" strokeWidth="1.25" />
      <text x="146" y="46" fontSize="6" fontWeight="700" fill="#0F62FE">TRYOUT</text>
      <rect x="146" y="52" width="54" height="30" rx="2" fill="#FFFFFF" stroke="#0F62FE" strokeWidth="0.75" />
      <rect x="146" y="88" width="54" height="8" rx="2" fill="#0F62FE" />
      <rect x="146" y="102" width="54" height="8" rx="2" fill="#FFFFFF" stroke="#0F62FE" strokeWidth="0.75" />
    </svg>
  );
}

/* A radio-style option row, reused for the asset and plan lists below —
   dashed/gray for the unselected state, solid blue for the selected one. */
function MockOptionRow({ label, selected }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border px-2 py-1.5 text-xs ${
        selected ? "border-[#0F62FE] bg-[#EDF5FF] font-semibold text-[#161616]" : "border-dashed border-gray-300 text-gray-400"
      }`}
    >
      <span
        className={`w-2.5 h-2.5 rounded-full border-2 shrink-0 ${
          selected ? "border-[#0F62FE] bg-[#0F62FE]" : "border-gray-300"
        }`}
      />
      <span className="truncate">{label}</span>
    </div>
  );
}

/* The subscription flow made concrete — four small mockup cards showing
   the actual moments a developer moves through: picking an asset,
   choosing a plan, assigning it to an application, then getting access.
   Dashed card outlines and a gray/blue-only palette keep this reading as
   a diagram of the concept, not a screenshot of finished UI. */
function SubscriptionFlowMockup() {
  const steps = [
    {
      title: "Choose an asset",
      icon: Package,
      content: (
        <div className="flex flex-col gap-1">
          <MockOptionRow label="Payments API" selected />
          <MockOptionRow label="Inventory API" />
          <MockOptionRow label="Shipping API" />
        </div>
      ),
    },
    {
      title: "Select a plan",
      icon: ListChecks,
      content: (
        <div className="flex flex-col gap-1">
          <MockOptionRow label="Free" />
          <MockOptionRow label="Standard" selected />
          <MockOptionRow label="Enterprise" />
        </div>
      ),
    },
    {
      title: "Assign an application",
      icon: Boxes,
      content: (
        <div className="flex flex-col gap-1">
          <MockOptionRow label="Mobile App" selected />
          <MockOptionRow label="Internal Tool" />
          <div className="flex items-center gap-2 rounded-md border border-dashed border-gray-300 px-2 py-1.5 text-xs text-gray-400">
            <Plus size={12} className="shrink-0" />
            New application
          </div>
        </div>
      ),
    },
    {
      title: "Get access",
      icon: KeyRound,
      content: (
        <div className="flex flex-col gap-1.5">
          <div className="rounded-md border border-dashed border-[#007D79] bg-[#DEFBFB] px-2 py-1.5 text-[11px] font-mono text-[#007D79] truncate">
            sk_live_••••4f2a
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#007D79]">
            <CheckCircle2 size={12} className="shrink-0" />
            Access granted
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="relative rounded-xl border border-dashed border-gray-300 bg-white p-3 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-400 font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
              <Icon size={13} className="text-gray-400" />
            </div>
            <p className="text-xs font-semibold text-[#161616] leading-snug">{step.title}</p>
            {step.content}
            {i < steps.length - 1 && (
              <span className="hidden lg:block absolute top-6 -right-[19px]">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <line x1="0" y1="5" x2="12" y2="5" stroke="#C6C6C6" strokeWidth="1.25" strokeDasharray="2 2" />
                  <path d="M10 1 L14 5 L10 9" stroke="#C6C6C6" strokeWidth="1.25" fill="none" />
                </svg>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}


/* One numbered beat in the solution's journey — eyebrow number + label,
   a short tagline, freeform body content, and a blue closing line that's
   the one thing meant to stick. */
function JourneyBeat({ number, label, tagline, closing, children }) {
  return (
    <div className="py-6 border-t border-gray-200 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-[#0F62FE] font-bold text-xl md:text-2xl">{number}</span>
        <span className="text-[#161616] text-xl md:text-2xl font-medium leading-[1.1]">{label}</span>
      </div>
      {tagline && <p className="text-xl md:text-2xl font-medium mb-4">{tagline}</p>}
      <div className="text-gray-600 flex flex-col gap-3">{children}</div>
      {closing && (
        <p className="mt-5 font-bold text-lg md:text-xl text-[#0F62FE]">{closing}</p>
      )}
    </div>
  );
}

/* IBM Bob's actual logo, sized to match the other deliverable visuals. */
function CodedPrototypeVisual() {
  return <LazyImage src="/ibm-bob.webp" alt="IBM Bob" className="h-full w-auto max-w-full object-contain" />;
}

/* The competitive analysis collage — fades and pops in once the section
   scrolls into view. */
function CompetitiveAnalysisMockup() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-lg overflow-hidden border border-gray-200 transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(14px) scale(0.96)",
      }}
    >
      <LazyImage
        src="/competitors/competitive-analysis.png"
        alt="A competitive analysis collage of Mintlify, a ReadMe-style API reference, Swagger Petstore, and Stripe's developer docs"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

/* The How Might We statement sitting at the center of a scalable asset
   ecosystem — REST, MCP, LLM, GraphQL, SOAP orbiting the goal, with the
   journey it needs to support running underneath. */
function GoalAssetOrbitDiagram() {
  const tag = (cx, cy, label) => {
    const w = label.length * 6.2 + 20;
    return (
      <g key={label}>
        <line
          x1={cx}
          y1={cy}
          x2="240"
          y2="105"
          stroke="#C6C6C6"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <rect x={cx - w / 2} y={cy - 11} width={w} height="22" rx="11" fill="#FFFFFF" stroke="#8D8D8D" strokeWidth="1" />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="0.3" fill="#525252">
          {label}
        </text>
      </g>
    );
  };

  const stage = (cx, label) => (
    <g key={label}>
      <circle cx={cx} cy="195" r="4" fill="#8D8D8D" />
      <text x={cx} y="213" textAnchor="middle" fontSize="9" fontWeight="700" fill="#525252">
        {label}
      </text>
    </g>
  );

  return (
    <svg viewBox="0 0 480 232" className="h-full w-auto max-w-full" role="img" aria-label="A How Might We goal at the center of an ecosystem of asset types — REST API, MCP, LLM, GraphQL, and SOAP — orbiting it, above the journey it needs to support: discover, learn, try, subscribe">
      {tag(240, 18, "REST API")}
      {tag(70, 70, "MCP")}
      {tag(410, 70, "LLM")}
      {tag(105, 160, "GRAPHQL")}
      {tag(375, 160, "SOAP")}

      <rect x="160" y="60" width="160" height="90" rx="12" fill="#EDF5FF" stroke="#0F62FE" strokeWidth="1.5" />
      <text x="240" y="80" textAnchor="middle" fontSize="8" fontWeight="700" letterSpacing="1" fill="#0F62FE">
        HOW MIGHT WE
      </text>
      <text x="240" y="100" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#161616">
        Create a seamless path
      </text>
      <text x="240" y="116" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#161616">
        from discovery to
      </text>
      <text x="240" y="132" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#161616">
        adoption?
      </text>

      <line x1="74" y1="195" x2="176" y2="195" stroke="#C6C6C6" strokeWidth="1.25" />
      <line x1="184" y1="195" x2="279" y2="195" stroke="#C6C6C6" strokeWidth="1.25" />
      <line x1="301" y1="195" x2="406" y2="195" stroke="#C6C6C6" strokeWidth="1.25" />

      {stage(70, "DISCOVER")}
      {stage(180, "LEARN")}
      {stage(290, "TRY")}
      {stage(410, "SUBSCRIBE")}
    </svg>
  );
}

/* A Carbon-styled search field for the proposed AI-search concept, plus
   Carbon tags and a stat line for the two more concrete improvements —
   sharp corners, field-gray fills, and the Carbon interactive blue instead
   of rounded SaaS chrome. */
function DiscoverySmarterMockup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-700">Natural language search</p>
          <AISearchBar />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-700">Restructured filtering</p>
          <div className="flex flex-wrap gap-2">
            {["Category", "Use case", "Compatibility"].map((label) => (
              <span key={label} className="text-xs font-medium text-[#161616] bg-[#E0E0E0] rounded-sm px-2 py-1">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-700">Ratings & reviews</p>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3].map((i) => (
              <Star key={i} size={14} className="text-[#F1C21B]" fill="#F1C21B" strokeWidth={0} />
            ))}
            <Star size={14} className="text-[#F1C21B]" fill="none" strokeWidth={1.5} />
            <span className="text-sm font-bold text-[#161616] ml-1">
              4.8 <span className="text-xs font-normal text-gray-500">· 142 reviews</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-gray-700">Community forums</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#EDF5FF] shrink-0">
              <MessageSquare size={16} className="text-[#0F62FE]" />
            </span>
            <p className="text-xs text-gray-500">Ask questions, share knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* The pre-redesign journey: four checkpoints, laid out end to end with a
   visible break between each. */
const JOURNEY_BREAKS = [
  {
    label: "Discover",
    stage: "Asset Directory",
    description: "Weak filtering and search made it hard to find the right asset.",
    icon: Compass,
  },
  {
    label: "Learn",
    stage: "Documentation",
    description: "Dense, poorly structured layouts made documentation hard to scan and navigate.",
    icon: BookOpen,
  },
  {
    label: "Try",
    stage: "Try",
    description: "Developers had to leave the docs entirely just to try an asset.",
    icon: FlaskConical,
  },
  {
    label: "Subscribe",
    stage: "Subscription",
    description: "The relationship between applications and subscriptions was unclear, obscuring the path to access.",
    icon: CreditCard,
  },
];

function JourneyBreakDiagram({ stages, cols = "grid-cols-2 lg:grid-cols-4" }) {
  return (
    <div className={`grid ${cols} gap-3`}>
      {stages.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.stage}
            className={`rounded-xl border p-4 flex flex-col gap-2 ${
              s.severe ? "border-[#D02670] bg-[#FFF0F6]" : "border-gray-200 bg-white"
            }`}
          >
            {Icon && (
              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-1 ${s.severe ? "bg-[#FFE0EC]" : "bg-[#EDF5FF]"}`}>
                <Icon size={16} className={s.severe ? "text-[#D02670]" : "text-[#0F62FE]"} strokeWidth={2} />
              </span>
            )}
            <p className={`text-[10px] font-bold uppercase tracking-wide ${s.severe ? "text-[#D02670]" : "text-gray-400"}`}>
              {s.label}
            </p>
            <p className="font-bold text-sm">{s.stage}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
          </div>
        );
      })}
    </div>
  );
}

const SHOWCASE_DELIVERABLES = [
  {
    title: "IA site map",
    body: "A complete information architecture mapping how pages, assets, and user flows connect.",
    icon: Network,
    Visual: SitemapFlowMockup,
  },
  {
    title: "Annotated design specs",
    body: "Page-by-page specifications covering spacing, sizing, states, and interaction behavior for engineering.",
    icon: Ruler,
    Visual: AnnotatedSpecMockup,
  },
  {
    title: "Coded prototype",
    body: "A working prototype built in Angular, giving engineering a functional reference for implementation.",
    icon: Code2,
    Visual: CodedPrototypeVisual,
  },
];

const ECOSYSTEM = [
  {
    label: "Developers",
    stage: "Find the right asset, faster",
    description: "Find and evaluate the right assets faster.",
    icon: Users,
  },
  {
    label: "Companies",
    stage: "Reach the right developers",
    description: "Get their APIs and offerings in front of the right developers.",
    icon: Building2,
  },
  {
    label: "IBM",
    stage: "The connective portal",
    description: "Creates a portal that drives discovery, adoption, and subscriptions.",
    icon: Network,
  },
];

/* Quick-hit numbers — three verified process facts, kept in their own row
   from the two directional outcomes that are projected rather than measured
   since the portal hasn't shipped yet. */
const IMPACT_STATS = [
  { value: "5+", label: "Developer portals analyzed" },
  { value: "3", label: "3-in-a-box collaboration — design, engineering, product manager" },
  { value: "15+", label: "Screens redesigned" },
];

const TABS = [
  { id: "context", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function IBMDeveloperPortal() {
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
          {/* ---------------------------------------------------------- */}
          {/*  Story shell — tabs start at the top, beside the hero       */}
          {/* ---------------------------------------------------------- */}
          <div className="lg:grid lg:items-start lg:gap-x-14 lg:grid-cols-[minmax(10rem,1fr)_min(56rem,100%)_minmax(10rem,1fr)]">
            <CaseStudyTabNav tabs={TABS} activeTab={activeTab} onSelect={selectTab} accent="#0F62FE" />

            <div className="min-w-0">
              {/* ======================== CONTEXT ======================== */}
              <section id="context" className="scroll-mt-28">
                <LazyImage
                  src="/portfolio-covers/ibmPortalCover.jpg"
                  alt="IBM Developer Portal"
                  className="w-full object-cover rounded-2xl mt-[5vh] mb-6 h-56 md:h-[60vh]"
                />

                <h3 className="font-bold leading-none text-[2.5rem] md:text-[3.5rem] mt-2 mb-2 text-left">
                  IBM Developer Portal
                </h3>
                <p className="text-left text-lg md:text-xl mb-8">
                  Designing and AI-prototyping a scalable developer journey on IBM's Carbon Design System
                </p>

                <div className="border-t border-b border-gray-200 py-8 mb-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                      <h2 className="text-gray-500">About the Project</h2>
                      <p className="text-gray-600">
                        IBM's Developer Portal gives companies a centralized place for developers to
                        discover, evaluate, and integrate the products and services they offer.
                      </p>
                      <p className="text-gray-600 mt-4">
                        As the sole product designer during my 12-week IBM internship, I owned the
                        redesign from research through development handoff, using IBM's Carbon
                        Design System. I used AI coding tools like IBM Bob to rapidly turn my
                        designs into working Angular prototypes, testing and iterating on real
                        interactions in hours instead of weeks. The
                        redesigned portal is set to deploy soon.
                      </p>
                      <p className="text-gray-600 text-sm font-medium mt-3">
                        <span className="font-bold">Confidentiality:</span> Final product screenshots
                        cannot be shared due to IBM's confidentiality requirements.
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
                      <div>
                        <h2 className="text-gray-500">Role</h2>
                        <p>Design Intern</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Timeline</h2>
                        <p>Summer 2026 · 12 weeks</p>
                        <div className="border-b border-gray-200 mt-2" />
                      </div>
                      <div>
                        <h2 className="text-gray-500">Skills</h2>
                        <div className="flex flex-col">
                          {["Design Systems", "Information Architecture", "Angular Development", "AI Prototyping"].map((skill) => (
                            <span key={skill}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Block subtitle="Overview" title="What started as a Carbonization effort became a redesign of the developer journey" first>
                  <p className="text-gray-600">
                     IBM’s Developer Portal helps companies make digital products like
                     APIs and MCP servers discoverable, giving developers a
                     place to explore, evaluate, and integrate what they need.
                    I was originally asked to apply Carbon
                    Design System to it, but it quickly became clear a visual refresh alone
                    wouldn't fix how disconnected the experience felt.
                  </p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
                    {IMPACT_STATS.map(({ value, label }) => (
                      <div key={label}>
                        <CountUpValue value={value} />
                        <p className="text-gray-500 text-sm mt-1 max-w-[14rem]">{label}</p>
                      </div>
                    ))}
                  </div>
                </Block>
              </section>

              {/* ======================== PROBLEM ======================== */}
              <section id="problem" className="scroll-mt-28">
                <Block subtitle="Problem" title="Friction across the journey was costing developers momentum—and companies subscriptions" first>
                  <p className="text-gray-600">
                    The portal had the pieces developers needed, but friction between each stage
                    made it harder to move from discovery to action. I found four points where the
                    experience was breaking down:
                  </p>

                  <div className="mt-8">
                    <JourneyBreakDiagram stages={JOURNEY_BREAKS} />
                  </div>
                </Block>
              </section>

              {/* ======================== RESEARCH ======================== */}
              <section id="research" className="scroll-mt-28">
                <Block subtitle="Research" title="I evaluated IBM's experience against developer platforms to identify working patterns and gaps" first>
                  <p className="mt-4 text-gray-600">
                    I focused my research on how other portals handled documentation and
                    tryout—the core interactions developers rely on to understand and validate an
                    asset.
                  </p>

                  <div className="mt-8 rounded-xl p-4">
                    <CompetitiveAnalysisMockup />
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">What worked</p>
                      <ul className="list-disc list-outside pl-5 space-y-3 text-gray-600">
                        <li>
                          <p className="font-semibold text-gray-800">Scannable documentation</p>
                          <p className="text-sm text-gray-500">Related technical information was clearly grouped, making documentation easier to scan and navigate.</p>
                        </li>
                        <li>
                          <p className="font-semibold text-gray-800">Familiar tryout interactions</p>
                          <p className="text-sm text-gray-500">Developers could rely on familiar patterns established by industry-standard tools like Postman.</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Where I saw opportunity</p>
                      <ul className="list-disc list-outside pl-5 space-y-3 text-gray-600">
                        <li>
                          <p className="font-semibold text-gray-800">Keep developers in context</p>
                          <p className="text-sm text-gray-500">Switching between documentation and tryout disrupted the flow — an opportunity to bring them into one continuous experience.</p>
                        </li>
                        <li>
                          <p className="font-semibold text-gray-800">Design beyond APIs</p>
                          <p className="text-sm text-gray-500">Most platforms I studied were built around APIs. IBM needed patterns that could scale across different types of assets.</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-8 text-gray-600">
                    Documentation and tryout became the central experience. Everything around
                    it—from discovery to community and subscription—had to connect naturally while
                    remaining flexible enough to scale across asset types.
                  </p>

                  <div className="mt-8 rounded-xl bg-[#F8F9FB] border border-gray-200 p-4">
                    <GoalAssetOrbitDiagram />
                  </div>
                </Block>
              </section>

              {/* ======================== PROCESS ======================== */}
              <section id="process" className="scroll-mt-28">
                <Block subtitle="Process" title="The process wasn't linear" first>
                  <FlowLine
                    words={["Research", "Design", "Prototype", "Validate", "Develop"]}
                    separator="⇄"
                    size="text-lg md:text-xl"
                  />
                  <p className="mt-8 text-gray-600">
                    I moved fluidly between Figma, AI-built prototypes, and validation, refining
                    each iteration through A/B tests and weekly design critiques.
                  </p>
                  <p className="mt-4 text-gray-600">
                    Using IBM Bob with the Figma and Carbon MCP servers, I turned my designs into
                    Angular prototypes built on real Carbon components in hours, not weeks, so I
                    could test more directions with users while the design was still taking shape.
                  </p>
                  <div className="mt-8 rounded-xl overflow-hidden border border-gray-200">
                    <LazyImage
                      src="/group-8.png"
                      alt="The design process — coded prototyping in IBM Bob, wireframing, and user testing and design critiques"
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <Callout>
                    💡 Pairing AI with my engineering background helped bridge design and
                    implementation. Rapidly prototyping in Angular with AI let me validate
                    interactions and technical feasibility before handoff, giving engineering a
                    functional reference alongside the design specs.
                  </Callout>
                </Block>
              </section>

              {/* ======================== SOLUTION ======================== */}
              <section id="solution" className="scroll-mt-28">
                <Block subtitle="The Solution" title="Building a more connected developer journey" first>
                  <JourneyBeat
                    number="01"
                    label="Rebuild the information architecture for scale"
                  >
                    <p>
                      I restructured the information architecture around how developers navigate
                      and evaluate assets, connecting discovery, documentation, community, and
                      subscriptions into a more cohesive journey. I then translated that structure
                      into reusable Carbon patterns, creating a consistent foundation that could
                      scale across the portal.
                    </p>
                    <LazyImage
                      src="/information-architecture.png"
                      alt="The reworked information architecture connecting discovery, documentation, community, and subscriptions"
                      className="w-full h-auto rounded-xl"
                    />
                  </JourneyBeat>

                  <JourneyBeat
                    number="02"
                    label="Make discovery and evaluation smarter"
                  >
                    <p>
                      Developers needed more than a way to browse—they needed to determine which
                      asset was right for them. I restructured discovery around that
                      decision-making process: starting with intent, narrowing the field through
                      more purposeful filters, then surfacing ratings, reviews, and community
                      discussion as signals of confidence.
                    </p>
                    <DiscoverySmarterMockup />
                  </JourneyBeat>

                  <JourneyBeat
                    number="03"
                    label="Connect learning to trying"
                  >
                    <p>
                      I brought tryout directly into the documentation experience through a side
                      panel, allowing developers to move from understanding an asset to interacting
                      with it without losing context. The pattern was designed to feel familiar
                      while remaining flexible across different asset types.
                    </p>
                    <div className="rounded-xl bg-[#F8F9FB] border border-gray-200 p-4 max-w-sm">
                      <SidePanelMockup />
                    </div>
                  </JourneyBeat>

                  <JourneyBeat
                    number="04"
                    label="Make subscribing make sense"
                  >
                    <p>
                      "Subscriptions" and "applications" were previously used interchangeably,
                      creating an unclear mental model. I clarified how plans, applications, and
                      access relate, while adding a persistent subscription entry point to make
                      getting started more direct.
                    </p>
                    <SubscriptionFlowMockup />
                  </JourneyBeat>
                </Block>
              </section>

              {/* ======================== IMPACT ======================== */}
              <section id="impact" className="scroll-mt-28">
                <Block subtitle="Impact" title="Helping developers find what they need—and businesses grow what they offer" first>
                  <p className="font-bold text-lg md:text-xl">
                    What I handed off
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SHOWCASE_DELIVERABLES.map(({ title, body, icon: Icon, Visual }) => (
                      <div key={title} className="rounded-2xl border border-gray-200 bg-[#F8F9FB] p-6 flex flex-col">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 bg-[#EDF5FF]">
                          <Icon size={20} className="text-[#0F62FE]" strokeWidth={2} />
                        </span>
                        <p className="font-bold text-base mb-1">{title}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">{body}</p>
                        <div className="mt-auto rounded-xl bg-white border border-gray-200 p-4 h-44 flex items-center justify-center">
                          <Visual />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-12 font-bold text-lg md:text-xl">
                    A better experience for everyone.
                  </p>
                  <div className="mt-6">
                    <JourneyBreakDiagram stages={ECOSYSTEM} cols="grid-cols-1 sm:grid-cols-3" />
                  </div>
                </Block>
              </section>
            </div>
          </div>

          <div className="max-w-[56rem] mx-auto">
            <ExploreCaseStudies currentId="ibmDeveloperPortal" />
          </div>
        </div>
      </div>

      <footer className="pointer-events-auto sticky bottom-0 z-5 w-full">
        <Footer className="pointer-events-auto" />
      </footer>
    </div>
  );
}
