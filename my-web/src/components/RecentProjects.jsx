import CoverMedia from "./CoverMedia.jsx";

function ProjectCover({ imgSrc, videoSrc, alt, href, title, caption, description, objectPosition = "center" }) {
  const mediaClass =
    "w-full h-72 sm:h-80 md:h-[26rem] lg:h-[30rem] object-cover bg-[#181818]";

  return (
    <div className="flex flex-col items-stretch w-full">
      <a href={href} className="block w-full">
        <div className="relative w-full overflow-hidden rounded-[3px]">
          <CoverMedia imgSrc={imgSrc} videoSrc={videoSrc} alt={alt} className={mediaClass} style={{ objectPosition }} />
        </div>
      </a>
      <div className="mt-5">
        <h4 className="text-gray-900 font-normal text-base md:text-xl mb-1 text-left">{caption || title}</h4>
        <p className="text-gray-500 text-sm md:text-base font-light text-left">{description}</p>
      </div>
    </div>
  );
}

const featured = [
  {
    imgSrc: "/portfolio-covers/ibmPortalCover.jpg",
    videoSrc: "/portfolio-covers/ibm-cover-animated.mp4",
    alt: "IBM Developer Portal",
    href: "/portfolio/ibmDeveloperPortal",
    title: "IBM Developer Portal",
    description: "Designing and AI-prototyping a scalable developer journey on IBM's Carbon Design System",
    projectType: "Product Design | Internship | Developer Experience | Design Systems",
    objectPosition: "center",
  },
  {
    imgSrc: "/miamiHeat/cleanslatecover3.png",
    alt: "Miami Heat Clean Slate",
    href: "/portfolio/cleanSlate",
    title: "Miami Heat Clean Slate",
    description: "Designing a data deletion workflow that balances automation with human review",
    projectType: "UI/UX | Internship | Angular | TypeScript",
    objectPosition: "center",
  },
  {
    imgSrc: "/musaic/demo-poster.webp",
    videoSrc: "/musaic/musaic-demo.mp4",
    alt: "Musaic",
    href: "/portfolio/musaic",
    title: "Musaic",
    description: "Designing a mobile-to-desktop songwriting tool where AI helps develop ideas, not write them",
    projectType: "Product Design | Mobile & Desktop | AI",
    objectPosition: "center",
  },
  {
    imgSrc: "/goApp/goCover.jpg",
    alt: "GO Transit Redesign",
    href: "/portfolio/goTransitRedesign",
    title: "GO Transit Redesign",
    description: "Turning complexity into clarity through thoughtful app design",
    projectType: "UI/UX Case Study | Personal Project | User Research",
    objectPosition: "center",
  },
];

export default function RecentProjects() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-t-xl recentProjects bg-white pt-6 pb-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 w-full max-w-[1600px]">
        {featured.map((project) => (
          <ProjectCover key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
