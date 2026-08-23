import Navigation from "./Navigation-Bar/Navigation";
import Footer from "./Footer";
import LazyImage from "./LazyImage.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";

const cases = {
  cleanSlate: {
    title: "Miami Heat Clean Slate",
    subtitle: "Rebuilding a key internal experience from the ground up",
    image: "/portfolio-covers/cleanSlateCover.svg",
    about:
      "During my Break Through Tech Sprinternship with the Miami HEAT, I collaborated with other interns to redesign and implement the frontend of a key application. We used Figma for UI/UX, React and TypeScript for development, and Azure DevOps for version control and task management.",
    role: "Software Engineer Intern",
    timeline: "May 2025",
    skills: ["UI/UX", "Figma", "React", "TypeScript", "Azure DevOps"],
  },
  ibmDeveloperPortal: {
    title: "IBM Developer Portal",
    subtitle: "Making developer tools and documentation easier to find and use",
    image: "/portfolio-covers/ibmPortalCover.svg",
    about:
      "A case study on improving the IBM Developer Portal — helping developers find the right tools, trust the documentation, and get to work faster. Full walkthrough, process, and visuals are coming next.",
    role: "Product Design Intern",
    timeline: "In progress",
    skills: ["Product Design", "Information Architecture", "Developer Experience"],
  },
};

export default function FeaturedCase({ projectId }) {
  const study = cases[projectId];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  if (!study) return null;

  const projectKeys = Object.keys(projectData);
  const currentIndex = projectKeys.indexOf(projectId);
  const nextIndex = (currentIndex + 1) % projectKeys.length;
  const nextProjectID = projectKeys[nextIndex];
  const nextProject = projectData[nextProjectID];

  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <Navigation />
      </nav>

      <div className="relative bg-white z-10 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl w-full px-8 md:px-0">
          <LazyImage
            src={study.image}
            alt={study.title}
            className="w-full object-cover mb-6 rounded-2xl mt-[5vh] h-56 md:h-[60vh]"
          />
          <h3 className="font-bold leading-none text-[2.5rem] md:text-[3.5rem] mt-2 mb-2 text-left">
            {study.title}
          </h3>
          <p className="text-left text-lg md:text-xl mb-8">{study.subtitle}</p>

          <div className="border-t border-b border-gray-200 py-8 mb-8" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-gray-500">About the Project</h2>
                <p>{study.about}</p>
              </div>
              <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
                <div>
                  <h2 className="text-gray-500">Role</h2>
                  <p>{study.role}</p>
                  <div className="border-b border-gray-200 mt-2" />
                </div>
                <div>
                  <h2 className="text-gray-500">Timeline</h2>
                  <p>{study.timeline}</p>
                  <div className="border-b border-gray-200 mt-2" />
                </div>
                <div>
                  <h2 className="text-gray-500">Skills</h2>
                  <div className="flex flex-col">
                    {study.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-500 mb-16">
            Process, screens, and outcomes will live here. Drop in the case study assets when you’re ready.
          </p>
        </div>

        {nextProject && (
          <div className="border-t border-gray-200 py-10 px-8 md:px-0 max-w-5xl mx-auto">
            <p className="text-gray-500 mb-2">Next project</p>
            <Link to={`/portfolio/${nextProjectID}`} className="text-2xl font-bold hover:underline">
              {nextProject.title} →
            </Link>
          </div>
        )}
      </div>

      <footer className="sticky bottom-0 z-0 pointer-events-auto">
        <Footer />
      </footer>
    </div>
  );
}
