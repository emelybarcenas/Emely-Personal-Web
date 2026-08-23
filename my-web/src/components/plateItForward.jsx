import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projectData } from "../data/projectData";
import { ArrowRight, Cog, ChartColumnDecreasing, BadgeHelp, Lightbulb, Heart, MonitorSmartphone, MousePointer, Users } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ImageWithPlaceholder component for loading skeleton
function ImageWithPlaceholder({ src, alt, className }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-lg z-10">
          <span className="text-gray-400 text-xs">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`object-contain h-full w-full rounded-lg ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

function FeaturesCarousel() {
  const features = [
    {
      title: "Can’t find a donation spot? No problem.",
      subtitle: "Navigation & Awareness",
      description:
        "Students can quickly find nearby donation spots with ease. Clear directions reduce confusion and save time, making food drop-off fast and stress-free.",
      images: [
        {
          src: "/plateItForward/donationSpot.gif",
          alt: "Donation Spot",
          className: "w-full max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Scan & Serve",
      subtitle: "AI Powered Scanner",
      description:
        "Makes donating leftovers fast and accessible for busy students by using AI scanner to simplify the input process. It encourages peer-to-peer reminders, minimizes steps, and helps schools track impact in real time.",
      images: [
        {
          src: "/plateItForward/scan.gif",
          alt: "Scan & Serve",
          className: "w-full max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Impact & Incentivization",
      subtitle: "Gamification",
      description: `Students are more 
        likely to stay engaged when 
        they see their peers participating. 
        Grade-based leaderboards spark 
        friendly competition while fostering 
        social responsibility, helping students 
        feel part of something bigger while seeing 
        the impact they’re making.`,
      images: [
        {
          src: "/plateItForward/profileScreen.png",
          alt: "Profile Screen",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
        {
          src: "/plateItForward/leaderboard.png",
          alt: "Leaderboard",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Breaking the Cycle",
      subtitle: "Gamified Learning Hub",
      description: `Through gamification and bite-sized lessons, 
        students stay engaged while learning about the bigger 
        picture of food insecurity. One action and one lesson 
        at a time, they see the impact they’re making—and 
        discover new ways to create lasting change.`,
      images: [
        {
          src: "/plateItForward/letslearn.png",
          alt: "Learning Hub",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
        {
          src: "/plateItForward/learn2.png",
          alt: "Learn 2",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + features.length) % features.length);
  const next = () => setCurrent((current + 1) % features.length);

  return (
    <div className="mx-0 mb-20">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Desktop: arrows beside card */}
        <div className="hidden md:flex w-full items-center justify-center gap-2 sm:gap-6 md:gap-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="bg-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-[#F3F3F3] transition duration-200"
            style={{ width: 48, height: 48 }}
          >
            <span className="sr-only">Previous</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 rounded-2xl p-4 sm:p-8 md:p-12 w-full max-w-[1200px] min-h-[650px] min-w-[320px] sm:min-w-[600px] md:min-w-[900px]">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left mb-6 md:mb-0">
              <Feature
                title={features[current].title}
                subtitle={features[current].subtitle}
                description={features[current].description}
              />
            </div>
            <div className={`w-full md:w-1/2 flex ${features[current].images.length > 1 ? "flex-row" : "flex-col"} justify-center items-center gap-4 sm:gap-8`}>
              {features[current].images.map((img, idx) => (
                <ImageWithPlaceholder
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className={`${img.className} flex items-center justify-center rounded-lg`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="bg-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-[#F3F3F3] transition duration-200"
            style={{ width: 48, height: 48 }}
          >
            <span className="sr-only">Next</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Mobile: Card only, arrows beside card but with margin from edge */}
        <div className="flex flex-col md:hidden gap-6 items-center w-full">
          <div className="flex flex-row w-full items-center justify-between px-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="bg-white border rounded-full shadow p-2 z-10 hover:bg-gray-100"
              style={{ minWidth: 36, minHeight: 36 }}
            >
              <span className="sr-only">Previous</span>
              <svg width="24" height="24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="flex-1 flex flex-col rounded-2xl p-4 max-w-[95vw] min-w-[220px]">
              <Feature
                title={features[current].title}
                subtitle={features[current].subtitle}
                description={features[current].description}
              />
              <div className={`flex ${features[current].images.length > 1 ? "flex-row" : "flex-col"} justify-center items-center mt-4 gap-4`}>
                {features[current].images.map((img, idx) => (
                  <ImageWithPlaceholder
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`${img.className} flex items-center justify-center rounded-lg`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="bg-white border rounded-full shadow p-2 z-10 hover:bg-gray-100"
              style={{ minWidth: 36, minHeight: 36 }}
            >
              <span className="sr-only">Next</span>
              <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2 sm:gap-3">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${current === idx ? "bg-[#0E956D]" : "bg-gray-300"}`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyInfo() {
  const details = [
    {
      title: "Role",
      info: "Lead Product Designer"
    },
    {
      title: "Timeline",
      info: "May 2025"
    },
    {
      title: "Skills",
      info: ["User Interviews", "Prototyping", "User Flows", "Design Systems"]
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
        <h2 className="text-gray-500">About the Project</h2>
        <p>
          PlateItForward is a student-centered app created 
          for the CodePath x Amazon Next Challenge, addressing 
          food waste and food insecurity on campus.
          After uncovering that students care about making an impact 
          but feel unmotivated due to inefficient systems, we designed an engaging,
          accessible solution that makes action easier and more meaningful. 
          We focused on a user-first design approach that combined clarity, connection, and purpose.
          Throughout the process, we received valuable feedback from multiple Amazonian designers,
          helping us refine the experience for real-world impact.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-1/2">
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
    <div className="max-w-5xl mx-auto px-6 md:px-0 py-10 flex flex-col gap-2 border-b border-gray-200" {...props}>
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

export function Feature({ title, subtitle, description }) {
  return (
    <>
      <p className="text-gray-500 text-xl">{subtitle}</p>
      <p className="text-[#0E956D] font-bold text-3xl">{title}</p>
      <p className="text-lg">{description}</p>
    </>
  );
}

export default function PlateItForward() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const projectKeys = Object.keys(projectData);
  const currentIndex = projectKeys.indexOf("plateItForward");
  const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
  const nextIndex = (currentIndex + 1) % projectKeys.length;
  const prevProjectID = projectKeys[prevIndex];
  const nextProjectID = projectKeys[nextIndex];
  const prevProject = projectData[prevProjectID];
  const nextProject = projectData[nextProjectID];

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation/>
      </nav>
      <div className="relative bg-white z-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl w-full px-6 md:px-0 mt-[10vh]">
        
          <LazyImage
            src="/banners/plateItForwardBanner.png"
            alt="PlateItForward Banner"
            className="w-full object-cover mb-6 rounded-2xl mt-[5vh]"
            width={1200}
            height={400}
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
            <h3 className="mt-[2vh] font-bold leading-none text-[2.5rem] md:text-[3.5rem] text-left">
            PlateItForward
          </h3>
          <p className="text-left text-lg md:text-xl mb-8">
            From Leftovers to Impact - Students Leading the Way
          </p>
          <div className="border-t border-b border-gray-200 py-8 mb-8" data-aos="fade-up">
            <CaseStudyInfo />
          </div>

          <CaseBlock
            subtitle={"Problem"}
            title={
              <>
                “We throw away so much food.. but <span className="text-[#0E956D]">what difference do I make?</span>
              </>
            }
            data-aos="fade-up"
          >
            Every week, public schools in the US produce approximately 14,000 tons of food waste. Students want to reduce school food waste, but current systems within their schools are confusing, time-consuming, and invisible. Without clarity, simplicity, and motivation, willing students stop trying.
          </CaseBlock>

          <CaseBlock
            subtitle={"User Research"}
            title={"6 Student Interviews. 3 Themes. Actionable Insights."}
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <Lightbulb color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Theme 1: Awareness</p>
                <p className="text-center">“It’s a problem, but no one really does anything about it”</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <MonitorSmartphone color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Theme 2: Tech Habits</p>
                <p className="text-center">“I’ll use trackers but then forget about them or get bored of them”</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <Heart color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Theme 3: Motivation</p>
                <p className="text-center">“It’s fun when you can customize something”</p>
              </div>
            </div>
          </CaseBlock>

          <CaseBlock
            subtitle={"Insights"}
            title={"The Barriers to Student Action"}
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <Cog color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Unclear & inefficient systems</p>
                <p className="text-center">Current processes make it hard for students to take action</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                <ChartColumnDecreasing color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Low engagement & motivation</p>
                <p className="text-center">Students don’t feel compelled to act because of invisbility</p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <BadgeHelp color="#0E956D" size={64} className="mb-4" />
                <p className="font-bold text-center">Unclear sense of impact & purpose</p>
                <p className="text-center">Without a clear sense of how their actions create change, students lose interest or doubt their efforts matter.</p>
              </div>
            </div>
          </CaseBlock>

          <CaseBlock
            subtitle="Solution"
            title={
              <>Giving students the <span className="text-[#0E956D]">tools</span> for impact &amp; the <span className="text-[#0E956D]">motivation</span> to keep going</>
            }
            data-aos="fade-up"
          >
            <p>
              Our solution allows students to donate effortlessly, stay engaged, and feel connected to a larger mission—transforming small daily choices into lasting change.
            </p>
            <p className="mt-4">Our Approach:</p>
            <ul className="list-disc pl-6 my-4 space-y-2">
              <li>Make food donation easier to find and faster to use</li>
              <li>Boost engagement with gamified, community experiences</li>
              <li>Show students their impact and why it matters</li>
            </ul>
            <div className="flex justify-center">
              <LazyImage src="/plateItForward/earlyiterations.jpg" className="w-full max-w-[800px] mt-4" alt="Early Iterations" />
            </div>
          </CaseBlock>

          <CaseBlock subtitle={"Testing & Improvements"} data-aos="fade-up">
            <div className="space-y-8">
              {/* 1. Refining Point System */}
              <div>
                <p className="text-2xl font-bold mb-2">1. Refining Point System</p>
                <p>
                  Our original gamification model 
                  awarded students points for every donation made. 
                  However, after initial testing, we realized this 
                  system risked incentivizing quantity over quality, 
                  potentially encouraging unhealthy behaviors.
                </p>
                <p className="mt-4">To shift the focus toward meaningful engagement, we redesigned the system so that:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Points are earned through completing educational lessons, not donating.</li>
                  <li>
                    After donation, students can nudge a friend as a social call-to-action or share their impact via social media, maintaining visibility and motivation without encouraging mindless contributions.
                  </li>
                </ul>
              </div>
              {/* 2. Improving Scanning Flow */}
              <div>
                <p className="text-2xl font-bold mb-2">2. Improving Scanning Flow</p>
                <p>
                  During early feedback sessions, we identified a gap in the item scanning flow. Originally, there was no way for students to add or review multiple items efficiently. It felt tedious and unclear.
                </p>
                <p className="mt-4">To improve this:</p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>We added confirmation screens and subtle microcopy indicating when an item was successfully added.</li>
                  <li>
                    We introduced a "donation list" view, resembling a shopping cart, where students could:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>View all scanned items at once</li>
                      <li>Edit quantities or remove items</li>
                      <li>Submit all donations in one streamlined action, rather than approving each individually</li>
                    </ul>
                  </li>
                </ul>
                <p>
                  This significantly sped up the donation process while giving users more control and clarity.
                </p>
              </div>
              {/* 3. Enhancing Long-Term Engagement */}
              <div>
                <p className="text-2xl font-bold mb-2">3. Enhancing Long-Term Engagement</p>
                <p>
                  To further encourage returning users without relying solely on points, we:
                </p>
                <ul className="list-disc pl-6 my-4 space-y-2">
                  <li>Introduced unlockable personalization features (e.g. character customization)</li>
                  <li>Added impact metrics, like “meals saved” or “friends nudged,” to visually show a student’s contribution</li>
                  <li>Ensured that the main CTA (Call to Action) was consistently visible on the homepage for ease of access and clarity</li>
                </ul>
              </div>
            </div>
          </CaseBlock>

          <CaseBlock subtitle={"Final Product"} title={"Here's how we brought it all together"} data-aos="fade-up">
            <FeaturesCarousel data-aos="fade-up" />
          </CaseBlock>

          <CaseBlock
            subtitle="Prospective Impact"
            title={
              <>
                PlateItForward: <span className="text-[#0E956D]">Engaging.</span>{" "}
                <span className="text-[#0E956D]">Accessible.</span>{" "}
                <span className="text-[#0E956D]">Purpose-Driven.</span>
              </>
            }
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-12 text-center items-stretch" data-aos="fade-up">
              {/* Clarity */}
              <div className="flex-1 flex flex-col items-center">
                <MousePointer className="w-9 h-9 text-[#0E956D] mb-3" />
                <h3 className="font-semibold text-lg">Clarity by Design</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Intuitive flows and confirmations make donating simple and stress-free.
                </p>
              </div>

              {/* Engagement */}
              <div className="flex-1 flex flex-col items-center">
                <Users className="w-9 h-9 text-[#0E956D] mb-3" />
                <h3 className="font-semibold text-lg">Meaningful Engagement</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Gamified progress and peer nudges keep students connected and motivated.
                </p>
              </div>

              {/* Accessibility */}
              <div className="flex-1 flex flex-col items-center">
                <Cog className="w-9 h-9 text-[#0E956D] mb-3" />
                <h3 className="font-semibold text-lg">Systemic Simplicity</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Designed consistent patterns and components for a unified, scalable experience.
                </p>
              </div>
            </div>
          </CaseBlock>

          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 my-10">
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