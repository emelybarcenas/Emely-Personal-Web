import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import { CaseStudyTabNav, useScrollSpyTabs } from "./CaseStudy/CaseStudyTabNav.jsx";
import ExploreCaseStudies from "./CaseStudy/ExploreCaseStudies.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import React from "react";

const TABS = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "approach", label: "Design Approach" },
  { id: "solution", label: "Solution" },
  { id: "reflection", label: "Reflection" },
];

export function CaseStudyInfo() {
  const details = [
    {
      title: "Role",
      info: "Product Designer"
    },
    {
      title: "Timeline",
      info: "Jul-Aug 2025"
    },
    {
      title: "Skills",
      info: ["User Research", "Competitive Analysis", "Interviews", "Wireframing", "Personas", "Affinity Mapping"]
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
        <h2 className="text-gray-500">About the Project</h2>
        <p className="text-gray-600">
          During an internship, I relied on Miami-Dade public transit for the first time and noticed the GO app made navigation unnecessarily frustrating. Thinking as a designer, I took the initiative to reimagine the app.
          I translated commuter frustrations into a concept redesign of the GO app, crafting wireframes that make the app more accessible, efficient, and easier to navigate.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
        {details.map((detail, idx) => (
          <div key={idx}>
            <h2 className="text-gray-500">{detail.title}</h2>
            {Array.isArray(detail.info) ? (
              <div className="flex flex-col">
                {detail.info.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            ) : (
              <p>{detail.info}</p>
            )}
            {idx < details.length - 1 && (
              <div className="border-b border-gray-200 mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export function CaseBlock({ subtitle, title, children, ...props }) {
  return (
    <div className="max-w-5xl mx-auto py-10 flex flex-col gap-2 border-b border-gray-200" {...props}>
      <div className="w-full">
        <p className="text-gray-500 whitespace-nowrap">{subtitle}</p>
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="my-5">
        {children}
      </div>
    </div>
  );
}


export default function GoRedesign() {
  const { activeTab, selectTab } = useScrollSpyTabs(TABS);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      {/* Content with padding for fixed nav */}
      <div className="relative bg-white z-10 pt-16 md:pt-20 pb-16 md:pb-20">
        <div className="mx-auto max-w-[86rem] w-full px-8 md:px-0">
          <div className="lg:grid lg:items-start lg:gap-x-14 lg:grid-cols-[minmax(10rem,1fr)_min(56rem,100%)_minmax(10rem,1fr)]">
            <CaseStudyTabNav tabs={TABS} activeTab={activeTab} onSelect={selectTab} accent="#9E76FF" />

            <div className="min-w-0">
              {/* ======================== CONTEXT ======================== */}
              <section id="context" className="scroll-mt-28">
                {/* Banner image */}
                <LazyImage
                  src="/goApp/goCover.jpg"
                  alt="GO App Cover"
                  className="w-full  object-cover mb-6 rounded-2xl mt-[5vh] sm:h-56 md:h-[70vh]"
                  width={1200}
                  height={400}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />

                {/* Headings */}
                <h3 className="font-bold leading-none text-[2.5rem] md:text-[3.5rem] mt-2 mb-2 text-left">
                  GO Redesign
                </h3>
                <p className="text-left text-lg md:text-xl mb-8">
                  Transforming Transit Apps – Starting at Home
                </p>

                {/* CaseStudyInfo */}
                <div className="border-t border-b border-gray-200 py-8 mb-8" data-aos="fade-up">
                  <CaseStudyInfo />
                </div>
              </section>

              {/* ======================== PROBLEM ======================== */}
              <section id="problem" className="scroll-mt-28">
              {/* Problem Section */}
              <CaseBlock
                subtitle="Problem"
                title="The problem that hit too close to home..."
                data-aos="fade-up"
              >
            <p className="text-gray-600">
              As a native Miamian, relying on the GO app for public transport revealed a
              navigation experience that was far from intuitive and often frustrating.
              Cluttered layouts, distracting ads, and unclear icons made navigation
              frustrating and slow. And I wasn't alone; checking the app store confirmed
              my experience — a painfully low <b>1.8-star rating</b>. If thousands of users were
              struggling, I had to find a better solution.
            </p>
          </CaseBlock>
              </section>

              {/* ======================== RESEARCH ======================== */}
              <section id="research" className="scroll-mt-28">
          {/* App Store Reviews */}
          <section className="py-10 flex flex-col gap-2" data-aos="fade-up">
            <div>
              <p className="text-gray-500 whitespace-nowrap">App Store Reviews</p>
              <p className="text-2xl font-bold">Stories Behind the Stars</p>
              <p className="text-gray-600">
                I analyzed <span className="font-bold">25+ App Store Reviews.</span> Feedback consistently mentioned difficulties finding information, confusing interfaces, and inefficient payment UX.
              </p>
            </div>
            <div className="grid grid-cols-2 md:flex mt-10 gap-4">
              {["review1r", "review2r", "review3r", "review4r"].map((img, i) => (
                <div key={i} className="w-full md:w-1/4 h-40 overflow-hidden rounded-xl shadow-lg">
                  <LazyImage
                    src={`/goApp/${img}.png`}
                    className="w-full h-full object-cover scale-110 md:scale-[1.75]"
                    alt={`Review ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* On-Site Interviews */}
          <section className="pb-10 flex flex-col gap-2" data-aos="fade-up">
            <div>
              <p className="text-gray-500 whitespace-nowrap">On-Site Interviews</p>
              <p className="text-2xl font-bold">Conversations on the Go</p>
              <div className="flex flex-col md:flex-row gap-5 mt-3">
                <p className="w-full text-base text-gray-600">
                  Reading reviews was just the start;
                  to feel users' real frustration, I met
                  them where it mattered most—at the Park
                  & Ride station where they awaited their bus…
                  There, I conducted
                  <span className="font-bold"> 7 face-to-face interviews
                  </span> and gathered additional insights through
                  <span className="font-bold"> 5 quick surveys</span>
                  , gaining valuable  perspectives
                  to complement my initial research.
                </p>
                <div className="flex flex-col md:flex-row gap-1 justify-center">
                  <div className="flex flex-col items-center">
                    <LazyImage src="/goApp/affinitymapping.png" className="w-full max-w-[300px] sm:w-auto h-40 object-cover" />
                    <p className="text-gray-500 whitespace-nowrap text-xs md:text-base">Affinity mapping from user quotes</p>
                  </div>
                  <div className="flex flex-col items-center text-gray-500 whitespace-nowrap">
                    <LazyImage src="/goApp/surveys.jpg" className="w-full max-w-[300px] sm:w-auto h-40 object-cover" />
                    <p className="text-xs md:text-base">Survey Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pain Points Section */}
          <CaseBlock
            subtitle="Pain Points"
            title="What wasn't working"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-start">
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <LazyImage
                  src="/goApp/Puzzled.png"
                  className="h-20 w-20 mb-4 object-contain"
                  alt="Confusing UI"
                />
                <div className="text-center md:text-left">
                  <p className="font-bold">Confusing & Visually Inconsistent Interface</p>
                  <p className="text-gray-600">Cluttered layouts, overwhelming menus, misplaced ads, pixelated icons, misaligned text, and limited accessibility options made navigation difficult.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <LazyImage
                  src="/goApp/Browse page.png"
                  className="h-20 w-20 mb-4 object-contain"
                  alt="Difficulty Finding Transit Information"
                />
                <div className="text-center md:text-left">
                  <p className="font-bold">Difficulty Finding Transit Information</p>
                  <p className="text-gray-600">Routes, stops, and schedules were buried or hard to access, making trips slower and more stressful.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <LazyImage
                  src="/goApp/Split Money.png"
                  className="h-20 w-20 mb-4 object-contain"
                  alt="Weak Integration of Passes"
                />
                <div className="text-center md:text-left">
                  <p className="font-bold">Weak integration of passes and Easy Cards</p>
                  <p className="text-gray-600">Users struggled to add or use Easy Cards and passes within the app, with unintuitive steps and lack of integration with mobile wallets.</p>
                </div>
              </div>
            </div>
          </CaseBlock>

          {/* Personas Section */}
          <CaseBlock subtitle="Personas" title="Meet the Users" data-aos="fade-up">
            <div className="flex flex-col md:flex-row w-fit">
              <LazyImage src="/goApp/mariaNew.png" alt="Personas" className="md:w-1/2" />
              <LazyImage src="/goApp/nicolasNew.png" alt="Personas" className="md:w-1/2" />
            </div>
          </CaseBlock>

          {/* Competitive Analysis + SWOT Analysis */}
          <CaseBlock
            subtitle="Competitive Analysis + SWOT Analysis"
            title="Transit Apps Under the Lens"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-5">
              <p className="text-gray-600">
                Users shouldn't have to use 3 different apps to
                find navigation information. I decided to <b>compare
                3 transportation apps with 4.6+ ratings</b> to identify
                design patterns and features that address common
                user pain points. Next, I <b>evaluated the current
                app </b>using a SWOT Analysis.
              </p>
              {/* First row */}
              <div className="flex flex-col md:flex-row gap-2">
                <LazyImage
                  src="/goApp/CA1.jpg"
                  className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
                  alt="SWOT Analysis"
                />
                <LazyImage
                  src="/goApp/CA2.jpg"
                  className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
                  alt="SWOT Analysis"
                />
              </div>
              {/* Second row */}
              <div className="flex flex-col md:flex-row gap-2">
                <LazyImage
                  src="/goApp/CA3.jpg"
                  className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
                  alt="SWOT Analysis"
                />
                <LazyImage
                  src="/goApp/SWOT.jpg"
                  className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
                  alt="SWOT Analysis"
                />
              </div>
            </div>
          </CaseBlock>
              </section>

              {/* ======================== DESIGN APPROACH ======================== */}
              <section id="approach" className="scroll-mt-28">
          {/* Design Goals Section */}
          <CaseBlock
            subtitle="Design Goals in Action"
            title="How might we redesign the GO app to be faster, clearer, and easier to use?"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <p className="text-gray-600">
                  <span className="font-bold">1. Create a clean, accessible interface</span><br />
                  Reduce clutter, bring consistency to the UI, and use clearer iconography with a modern, accessible design system (including dark and light modes) to make navigation more intuitive.
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">2. Surface key information faster</span><br />
                  Highlight routes, stops, and schedules upfront with fewer steps and added search functionality.
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">3. Streamline Cards & Passes</span><br />
                  Integrate Easy Cards and passes more smoothly, reducing friction and enabling mobile wallet support.
                </p>
              </div>
              {/* Images + Caption Section */}
              <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
                <div className="flex flex-col md:flex-row gap-2">
                  <LazyImage
                    src="/goApp/low-fidelity.png"
                    alt="low-fidelity mockups"
                    className="max-w-full md:h-[260px] rounded-lg shadow object-cover"
                  />
                  <LazyImage
                    src="/goApp/sketches.png"
                    alt="sketches"
                    className="max-w-full md:h-[260px] rounded-lg shadow object-cover"
                  />
                </div>
                <p className="text-gray-500 text-xs md:text-base mt-2 text-center">
                  Low-Fidelity Wireframes and Ideation
                </p>
              </div>
            </div>
          </CaseBlock>
              </section>

              {/* ======================== SOLUTION ======================== */}
              <section id="solution" className="scroll-mt-28">
          {/* Final Product Section */}
          <CaseBlock
            subtitle="High Fidelity Mockups"
            title="The Final Product"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-none">
              {/* Before Mockups */}
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold text-center">Before</p>
                <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                  <LazyImage src="/goApp/og1.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 1" />
                  <LazyImage src="/goApp/og2.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 2" />
                </div>
              </div>
              {/* Arrow only visible on wider screens */}
              <ArrowRight size={40} className="mx-4 text-gray-400 hidden md:block" />
              {/* After Mockups */}
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold text-center">After</p>
                <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                  <LazyImage src="/goApp/finalHome.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 3" />
                  <LazyImage src="/goApp/finalTracker.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 4" />
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold mt-8 text-left">Key Improvements at a Glance</p>
            <LazyImage src="/goApp/finalKeyFeatures.jpg" className="w-full object-contain mt-4" alt="Key Features" />
          </CaseBlock>
              </section>

              {/* ======================== REFLECTION ======================== */}
              <section id="reflection" className="scroll-mt-28">
          {/* Conclusion Section */}
          <CaseBlock
            subtitle="Conclusion"
            title="Takeaways & Next Steps"
            data-aos="fade-up"
          >
            <p className="text-gray-600">
              This project gave me the chance to design with real users and real feedback,
              highlighting the power of user interviews and meeting users where they are.
              Many simple changes can make a big impact and can make two experiences feel like night and day.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-gray-600"><span className="font-bold">Validated insights:</span> Conversations with users informed not just the app's design but also ideas for broader improvements.  </p>
              <p className="text-gray-600"><span className="font-bold">Future impact:</span> Propose this solution to Miami-Dade County to make a tangible, city-wide improvement.</p>
              <p className="font-bold mt-2">Opportunities for iteration:</p>
              <ul className="list-disc ml-6">
                <li>Enhance accessibility for all users</li>
                <li>Add features like real-time bus occupancy</li>
                <li>Support multiple languages</li>
                <li>Improve accuracy of bus arrival times</li>
              </ul>
            </div>
          </CaseBlock>
              </section>
            </div>
          </div>

          <div className="max-w-[56rem] mx-auto">
            <ExploreCaseStudies currentId="goTransitRedesign" />
          </div>
        </div>
      </div>

      {/* Footer sticky at bottom, clickable */}
      <footer className="pointer-events-auto sticky bottom-0 z-5 w-full">
        <Footer className="pointer-events-auto" />
      </footer>
    </div>
  );
}