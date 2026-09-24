import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import LazyImage from "./LazyImage.jsx";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useState, useEffect} from "react";

export default function AboutPage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }


  handleResize()

  window.addEventListener("resize", handleResize);

  return () =>
    window.removeEventListener("resize", handleResize);

  },[]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

function ExperienceTile({ exp, idx }) {
  const Wrapper = exp.link ? (exp.external ? "a" : Link) : "div";
  const wrapperProps = exp.link
    ? exp.external
      ? { href: exp.link, target: "_blank", rel: "noopener noreferrer" }
      : { to: exp.link }
    : {};

  return (
    <div data-aos="fade-up" data-aos-delay={(idx % 4) * 80} className="flex flex-col items-start text-left">
      <Wrapper
        {...wrapperProps}
        className="block w-full aspect-square overflow-hidden rounded-[2px]"
      >
        <LazyImage
          src={exp.img}
          alt={exp.imgAlt || exp.title}
          className="w-full h-full object-cover object-center"
        />
      </Wrapper>
      <p className="mt-3 text-base font-bold text-left">
        {exp.link ? (
          <Wrapper {...wrapperProps} className="hover:underline">
            {exp.title}
          </Wrapper>
        ) : (
          exp.title
        )}
      </p>
      {exp.subtitle && <p className="text-xs text-gray-500 font-normal text-left">{exp.subtitle}</p>}
    </div>
  );
}

function ExperienceSection({ experiences }) {
  return (
    <section className="bg-white w-full text-[#181818] py-8 md:py-12">
      <div className="mx-auto max-w-5xl w-full px-8 md:px-0">
        <h3 className="text-4xl font-bold mb-2">EXPERIENCES</h3>
        <div className="w-16 h-1 bg-[#FF97DB] mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceTile key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
  const experiences = [
    {
      title: "IBM - Design Intern",
      subtitle: "May - Aug 2026 (12 Weeks)",
      description:
        "As the sole product designer on IBM's Developer Portal, I led a redesign end-to-end — running a competitive analysis of other developer portals, identifying testing as the real friction point in the journey, and rebuilding the experience on IBM's Carbon Design System.",
      img: "/me-ibm.jpg",
      imgAlt: "IBM Internship",
    },
    {
      title: "Miami Heat - Software Engineer Intern",
      subtitle: "Break Through Tech Sprinternship, May 2025",
      description:
        "Collaborated with other interns to redesign and implement the frontend of a key application for an enhanced user experience. We used Figma for UI/UX design, React and TypeScript for development, and Azure DevOps for version control and task management.",
      img: "/me-miamiheat.JPG",
      imgAlt: "Miami Heat Internship",
      link: "https://news.fiu.edu/2026/miami-heat-taps-fiu-students-to-harness-the-best-of-ai-and-tech",
      linkLabel: "Learn more",
      external: true,
    },
    {
      title: "CodePath - Tech Fellow",
      subtitle: "Jul 2025 - May 2026",
      description:
        "I facilitated web development learning as a Tech Fellow, tailoring content to diverse learners and simplifying complex concepts to build their confidence — contributing to a 30% increase in student tech job placements.",
      img: "/codepath-group-pic.jpg",
      imgAlt: "CodePath Tech Fellow",
    },
    {
      title: "The CuCompany - Graphic Design Intern",
      subtitle: "Summer Youth Internship Program, Summer 2023",
      description:
        "During my internship, I created daily Spanish social media content for a nursing home and produced content for a restaurant. I also redesigned Instagram highlight covers improving branding and increasing reach. Writing about marketing trends and new technology increased my knowledge on the evolving digital landscape. Knowing Spanish allowed me to bridge cultural and communication gaps in a global work environment.",
      img: "/cuco-phones.jpg",
      imgAlt: "CuCompany Internship",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navigation />
      
      {/* Content area */}
      <div className="relative bg-white z-10">
        <div className="flex flex-col">
          <section>
          
          </section>
          
          {isMobile && (
                    <section className="bg-[#ffffff] w-full min-h-screen mt-16">
                    <div className="mx-auto max-w-5xl w-full px-8 md:px-0 flex flex-col md:flex-row">
                      <div className="aboutAndEducation mb-4 md:w-1/2 mt-8 md:mt-16" data-aos="fade-up">
                        <h3 className="text-4xl font-bold mb-2 flex items-center gap-2">
                          ABOUT <span className="text-[#FF97DB]">✦</span> ME
                        </h3>
                        <div className="w-12 h-1 bg-[#FF97DB] mb-4" />
                        <p className="mb-4">
                          I'm Emely, a Computer Science student at Florida International University who loves bringing design and engineering together. I'm interested in solving real problems for people through thoughtful strategy, design, and engineering.
                        </p>
                        <p className="mb-4">
                          I've loved design for as long as I can remember, long before I knew it was something I'd actually pursue. As a kid, I spent hours designing clothes for Roblox, making fan edits, and creating logos just for fun. That eventually led me to graphic design, then UI/UX, where I found a way to combine my creativity with my interest in technology.
                        </p>
                        <p className="mb-4">
                          Today, I get to bring both sides together through design, code, and everything in between.
                        </p>
                        <p className="mb-4">
                          When I'm not designing or coding, you'll probably find me playing an instrument, reading, or{" "}
                          <a
                            href="https://www.instagram.com/emelybujo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-[#FF97DB] transition-colors"
                          >
                            bullet journaling
                          </a>{" "}
                          — little things that keep my creative brain happy :)
                        </p>
                      </div>

                      <div className="picsOfMe flex flex-col justify-center items-center md:w-1/2 mt-8 gap-4" data-aos="fade-up">
                        <LazyImage src="/me-init.jpg" className="w-full max-w-[400px] h-auto object-cover" />
                      </div>
                    </div>
                    </section>
          )}

          {!isMobile && (
                      <section className="bg-[#ffffff] w-full h-auto overflow-hidden">
                      <div className="mx-auto max-w-5xl w-full px-8 md:px-0 py-8 flex flex-row">
                        <div className="aboutAndEducation mb-4 w-1/2 mt-16" data-aos="fade-right">
                          <h3 className="text-5xl xl:text-6xl font-bold mb-2 flex items-center gap-3">
                            ABOUT <span className="text-[#FF97DB]">✦</span> ME
                          </h3>
                          <div className="w-16 h-1 bg-[#FF97DB] mb-6" />
                          <p className="mb-4 text-lg">
                            I'm Emely, a Computer Science student at Florida International University who loves bringing design and engineering together. I'm interested in solving real problems for people through thoughtful strategy, design, and engineering.
                          </p>
                          <p className="mb-4 text-lg">
                            I've loved design for as long as I can remember, long before I knew it was something I'd actually pursue. As a kid, I spent hours designing clothes for Roblox, making fan edits, and creating logos just for fun. That eventually led me to graphic design, then UI/UX, where I found a way to combine my creativity with my interest in technology.
                          </p>
                          <p className="mb-4 text-lg">
                            Today, I get to bring both sides together through design, code, and everything in between.
                          </p>
                          <p className="mb-4 text-lg">
                            When I'm not designing or coding, you'll probably find me playing an instrument, reading, or{" "}
                          <a
                            href="https://www.instagram.com/emelybujo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-[#FF97DB] transition-colors"
                          >
                            bullet journaling
                          </a>{" "}
                          — little things that keep my creative brain happy :)
                          </p>
                        </div>

                        <div className="picsOfMe flex flex-col justify-center items-center w-1/2 overflow-hidden mt-10 p-2 gap-2" data-aos="fade-left">
                <div className="h-[90%] w-full flex justify-center items-center group">
                  <LazyImage
                    src="/me-init.jpg"
                    className="w-full h-full object-cover border-[#FF97DB] border-8 transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                        </div>
                      </div>
                      </section>
          )}

          <ExperienceSection experiences={experiences} />

          {isMobile && (
                    <section className='bg-white w-full min-h-[50vh] text-[#181818]'>
                    <div className="mx-auto max-w-5xl w-full px-8 md:px-0 py-4 md:py-8 flex flex-col gap-8">
                      <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up">

                        <div className="flex flex-col md:w-1/2">
                          <h3 className="text-2xl font-bold mb-2">ACTIVITIES</h3>
                          <p className="mb-2 font-bold">INIT FIU - Creative Director</p>
                          <p>
                          With over 4,000 members,
                                      INIT is a nonprofit tech organization that empowers underserved communities to launch careers in technology.
                                      As Creative Director at INIT, I work to design assets for ShellHacks,
                                      Florida's Largest Hackathon (1,400+ participants). Collaborating with my team, I help create an
                                      engaging experience that empowers students to develop their skills and secure opportunities in the tech industry.
                          </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                          <LazyImage src="/init-group-pic.jpg" className="w-full max-w-[400px]" />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up">
                        <div className="flex flex-col md:w-1/2">
                          <p className="mb-2 font-bold">CodePath Emerging Engineers Empoweverrment Program</p>
                          <p>
                            I am part of the CodePath E3 program, a community of aspiring engineers where I receive mentorship, career resources, and networking opportunities to further develop my skills and career in tech. I successfully completed CodePath's Beginner and Intermediate Web Development course with honors, where I built my own websites, further strengthening my technical skills. I am also a CodePath Tech Fellow, and support classes as a teaching assistant.
                          </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                          <LazyImage src="/codepath-group-pic.jpg" className="w-full max-w-[400px]" />
                        </div>
                      </div>
                    </div>
                    </section>
          )}

          {!isMobile && (
                  <div>

                      <section className="bg-white w-full h-fit text-[#181818]">
                      <div className="mx-auto max-w-5xl w-full px-8 md:px-0 py-8 flex flex-row gap-8">
                        {/* Left Column (INIT FIU Image + CodePath Text) */}
                        <div className="w-1/2 flex flex-col gap-8 my-10 " data-aos="fade-right">
                          <LazyImage src="/init-group-pic.jpg" className="w-full h-auto object-cover border-[#FF97DB] border-8"/>

                          <div className="flex flex-col">
                            <p className="mb-2 font-bold text-xl">CodePath Emerging Engineers Empowerment Program</p>
                            <p className="mb-2 text-lg">
                              I am part of the CodePath E3 program, a community of aspiring engineers where I receive mentorship,
                              career resources, and networking opportunities to further develop my skills and career in tech.
                              I successfully completed CodePath's Web 101 course with honors, where I built my own website, further strengthening my technical skills.
                            </p>
                          </div>
                        </div>

                        {/* Right Column (INIT FIU Text + CodePath Image) */}
                        <div className="w-1/2 flex flex-col gap-8 my-10" data-aos="fade-left">
                          <div className="flex flex-col">
                            <h3 className="text-3xl font-bold mb-2 text-right">ACTIVITIES</h3>
                            <p className="mb-2 font-bold text-xl text-right">INIT FIU - Creative Director</p>
                            <p className="mb-2 text-lg text-right">
                              With over 4,000 members, INIT is a nonprofit tech organization that empowers underserved communities to launch careers in technology.
                              As Creative Director at INIT, I work to design assets for ShellHacks, Florida's Largest Hackathon (1,400+ participants).
                              Collaborating with my team, I help create an engaging experience that empowers students to develop their skills and secure opportunities in the tech industry.
                            </p>
                          </div>

                          <LazyImage src="/codepath-group-pic.jpg" className="w-full h-auto object-cover border-[#FF97DB] border-8"/>
                        </div>
                      </div>
                      </section>
                  </div>
          )}
        </div>
      </div>

      {/* Footer sticky at bottom, behind content */}
      <footer className="sticky bottom-0 z-0 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  );
}