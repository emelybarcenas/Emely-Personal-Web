function ProjectCover({ imgSrc, alt, href, title, caption, description, projectType, objectPosition = "center" }) {
  const tags = projectType.includes("|")
    ? projectType.split("|").map((t) => t.trim())
    : [projectType];

  return (
    <div className="flex flex-col items-stretch w-full group">
      <a href={href} className="block w-full">
        <div className="relative w-full overflow-hidden rounded-[3px]">
          <img
            src={imgSrc}
            alt={alt}
            className="w-full h-72 sm:h-80 md:h-[26rem] lg:h-[30rem] object-cover bg-[#181818] transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ objectPosition }}
          />
          <div className="absolute left-0 right-0 bottom-0 flex flex-wrap gap-1 justify-start items-end pb-2 pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white text-black text-xs rounded-full border border-gray-300 font-medium shadow-sm m-1 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
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
    alt: "IBM Developer Portal",
    href: "/portfolio/ibmDeveloperPortal",
    title: "IBM Developer Portal",
    description: "Designing a seamless, scalable developer journey with IBM's Carbon Design System",
    projectType: "Product Design | Internship | Developer Experience | Design Systems",
    objectPosition: "center",
  },
  {
    imgSrc: "/portfolio-covers/cleanSlateCover.png",
    alt: "Miami Heat Clean Slate",
    href: "/portfolio/cleanSlate",
    title: "Miami Heat Clean Slate",
    description: "Designing streamlined workflows for privacy requests, customer data, and account deletion",
    projectType: "UI/UX | Internship | Angular | TypeScript",
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
  {
    imgSrc: "/banners/plateItForwardBanner.png",
    alt: "PlateItForward",
    href: "/portfolio/plateItForward",
    title: "PlateItForward",
    description: "Designing for action: making food donations simple and rewarding",
    projectType: "UI/UX Case Study | CodePath x AmazonNext 2025",
    objectPosition: "center",
  },
];

export default function RecentProjects() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-t-xl recentProjects bg-white pt-6 pb-12 px-3 md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 w-full max-w-[1600px]">
        {featured.map((project) => (
          <ProjectCover key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
