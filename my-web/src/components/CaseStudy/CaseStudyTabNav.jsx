import { useEffect, useState } from "react";

export function useScrollSpyTabs(tabs) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  useEffect(() => {
    const sections = tabs.map(({ id }) => document.getElementById(id)).filter(Boolean);
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
  }, [tabs]);

  const selectTab = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { activeTab, selectTab };
}

export function CaseStudyTabNav({ tabs, activeTab, onSelect, accent = "#181818" }) {
  return (
    <nav
      aria-label="Case study sections"
      className="lg:w-40 lg:shrink-0 lg:self-start lg:sticky lg:top-24 z-30 bg-white/95 backdrop-blur -mx-8 px-8 lg:mx-0 lg:px-0 mb-2 lg:mb-0 border-b lg:border-b-0 border-gray-200"
    >
      <div className="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar py-4 lg:py-2">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelect(tab.id)}
              className={`text-left text-sm tracking-wide uppercase whitespace-nowrap px-3 py-2 lg:border-l-2 transition-colors ${
                active ? "text-[#181818] font-bold" : "text-gray-400 hover:text-gray-600 font-medium"
              }`}
              style={{ borderColor: active ? accent : "transparent" }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
