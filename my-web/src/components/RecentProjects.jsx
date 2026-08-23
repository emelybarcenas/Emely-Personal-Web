import downArrowIcon from "../assets/down-arrow-icon.svg";

function ProjectCover({ imgSrc, alt, href, title, caption, description, projectType, objectPosition = "center" }) {
  const tags = projectType.includes("|")
    ? projectType.split("|").map((t) => t.trim())
    : [projectType];

  return (
    <div className="flex flex-col items-stretch w-full group">
      <a href={href} className="block w-full">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <img
            src={imgSrc}
            alt={alt}
            className="w-full h-52 md:h-64 lg:h-72 object-cover bg-[#181818] transition-transform duration-300 group-hover:scale-[1.03]"
            style={{ objectPosition }}
          />
          <img
            src={downArrowIcon}
            alt=""
            className="absolute right-5 top-5 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ transform: "rotate(225deg)" }}
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
        <h4 className="text-black font-medium text-lg md:text-2xl mb-1 text-left">{caption || title}</h4>
        <p className="text-gray-700 text-base text-left">{description}</p>
      </div>
    </div>
  );
}

const featured = [
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
  {
    imgSrc: "/portfolio-covers/cleanSlateCover.svg",
    alt: "Miami Heat Clean Slate",
    href: "/portfolio/cleanSlate",
    title: "Miami Heat Clean Slate",
    description: "Rebuilding a key internal experience during my HEAT internship",
    projectType: "UI/UX | Internship | React | TypeScript",
    objectPosition: "center",
  },
  {
    imgSrc: "/portfolio-covers/ibmPortalCover.svg",
    alt: "IBM Developer Portal",
    href: "/portfolio/ibmDeveloperPortal",
    title: "IBM Developer Portal",
    description: "Designing a connected developer journey across discovery, learning, testing, and subscription",
    projectType: "Product Design | Internship | Developer Experience | Design Systems",
    objectPosition: "center",
  },
];

export default function RecentProjects() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-t-xl recentProjects bg-white py-12 px-6 md:px-10">
      <h3 className="featuredProjects text-black text-[10vw] md:text-[4vw] mb-10">
        Featured ✦ Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 w-full max-w-6xl">
        {featured.map((project) => (
          <ProjectCover key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
