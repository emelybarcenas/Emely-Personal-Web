import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

// Reusable Section Component
function InfoSection({ title, items }) {
  return (
    <div className="contentSection mb-8">
      <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-white font-bold leading-none uppercase mb-4"
        style={{ fontSize: 'clamp(1.2rem, 2vw, 2.5rem)' }}>
        {title}
      </h3>
      {items.map((item, idx) => (
        <div key={idx} className="mb-2">
          {item.label && (
            <h3 className="font-semibold text-lg md:text-xl text-white" style={{ marginBottom: 2 }}>{item.label}</h3>
          )}
          <p className="text-white text-lg">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isIpad, setIsIpad] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
      setIsIpad(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Section Data
  const technical = [
    { label: "Programming Languages:", text: "Java, JavaScript, HTML/CSS" },
    { label: "Front-end Development:", text: "React, Tailwind CSS" },
    { label: "Tools:", text: "SQLite, GitHub, IntelliJ IDEA, VS Code" }
  ];
  const design = [
    { label: "Adobe Creative Suite:", text: "Photoshop, Illustrator, After Effects, InDesign, Premiere Pro" },
    { label: "UI/UX & Design:", text: "Figma, Canva" },
    { label: "3D:", text: "Blender" }
  ];
  const certifications = [
    { label: "Adobe Certified Professional", text: "Graphic Design & Illustration using Adobe Illustrator" },
    { label: "Adobe Certified Professional", text: "Visual Design using Adobe Photoshop" }
  ];
  const experience = [
     { label: <>Miami HEAT | <em className="font-normal italic">May 2025</em></>, text: "Software Engineer Intern" },
    { label: <>The CuCompany | <em className="font-normal italic">Jul - Aug 2023</em></>, text: "Graphic Design & Social Media Marketing Intern" },
    { label: <>Private Tutor | <em className="font-normal italic">Feb 2022 - Current</em></>, text: <>Assist middle and high school students in mastering <span>essential topics like Algebra.</span></> }
  ];

  // Desktop Layout
  const desktopContent = (
    <section className="h-auto w-[100vw] pb-[1vh] bg-[#212121] top-0 flex flex-col">
      <h3 className="text-white font-sans font-bold text-[16vw] w-[100vw] leading-none mb-10 ml-1 mr-1 mt-0 whitespace-nowrap overflow-hidden flex justify-center">
        ABOUT ✦ ME
      </h3>
      <section className="meText text-[1.5vw] mb-[7vh] ml-[5vw] w-2/3 leading-relaxed text-white">
        <span>
          With experience in <strong>software</strong> development, graphic <strong>design</strong>, and marketing, I love crafting engaging <strong>user
            experiences</strong>-whether it’s through <strong>web development</strong>, UI/UX design, or interactive projects. My goal is to bridge the gap
          between design and technology, ensuring that every project is not only visually compelling but also user-friendly,
          <strong> efficient</strong>, and impactful.
        </span>
        <a href="/about-page">
          <span className="ml-4 font-bold underline cursor-pointer whitespace-nowrap">Read More</span> ↗
        </a>
      </section>
      <div className={`content flex text-white ${windowWidth > 1200 ? "flex-row" : "flex-col"}`}>
        <div className="textArea flex flex-col gap-[2vw] ml-[5vw]">
          <div className="flex flex-col md:flex-row gap-[3vw]">
            <section className="w-full md:w-1/2  text-white"><InfoSection title="Technical" items={technical} /></section>
            <section className="w-full md:w-1/2  text-white"><InfoSection title="Design" items={design} /></section>
          </div>
          <div className="flex flex-col md:flex-row gap-[3vw]">
            <section className="w-full md:w-1/2"><InfoSection title="Experience" items={experience} /></section>
            <section className="w-full md:w-1/2"><InfoSection title="Certifications" items={certifications} /></section>
          </div>
        </div>
        <section className={`photoArea ${windowWidth < 1200 ? "w-1/2 mx-auto mb-10" : "w-1/3 ml-[1vw] mr-[5vw]"}`}>
          <img src="/me-pink.png" className="w-fit h-5/6 object-cover object-top border-white border-4 transition-transform duration-400 ease-in-out transform hover:scale-105 " />
        </section>
      </div>
    </section>
  );

  // Mobile Layout
const mobileContent = (
    <section className="h-auto w-[100vw] bg-[#212121] top-0 flex flex-col justify-center items-center">
      <h3 className="text-white font-sans font-bold text-[16vw] w-[100vw] leading-none mb-10 ml-1 mr-1 mt-0 whitespace-nowrap overflow-hidden flex justify-center">
        ABOUT ✦ ME
      </h3>
      <section className="meText text-[4vw] w-3/4 leading-relaxed text-white">
        <span>
          With experience in <strong>software</strong> development, graphic <strong>design</strong>, branding, and marketing, I love crafting engaging <strong>user
            experiences</strong>-whether it’s through <strong>web development</strong>, UI/UX design, or interactive projects. My goal is to bridge the gap
          between design and technology, ensuring that every project is not only visually compelling but also user-friendly,
          <strong> efficient</strong>, and impactful.
        </span>
        <a href="/about-page">
          <span className="ml-4 font-bold underline cursor-pointer whitespace-nowrap">Read More</span> ↗
        </a>
      </section>
      <section className="photoArea w-3/4 m-[5vw] ">
        <img src="/me-pink.png" className="w-auto object-fit border-white border-4  " />
      </section>
      <div className="content flex flex-col justify-center items-center mb-10">
        <section className="textArea w-2/3 flex flex-col justify-center items-center gap-[8vw]">
          <InfoSection title="Technical" items={technical} />
          <InfoSection title="Certifications" items={certifications} />
          <InfoSection title="Design" items={design} />
          <InfoSection title="Experience" items={experience} />
        </section>
      </div>
    </section>
  );

  return <div>{isMobile ? mobileContent : desktopContent}</div>;
}