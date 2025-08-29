function ProjectCover({ imgSrc, alt, href, title, description, projectType }) {
  // turn "UI/UX Case Study | Personal Project" into an array
  const tags = projectType.includes("|")
    ? projectType.split("|").map((t) => t.trim())
    : projectType;

  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] bg-white flex flex-col gap-0 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105 relative">
      <div className="relative w-full">
        <img
          src={imgSrc}
          alt={alt}
          className="w-full aspect-square object-cover"
        />

        {/* projectType tags overlay on image */}
        {Array.isArray(tags) ? (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white text-black text-[10px] rounded-full border border-[#E0E0E0] font-medium shadow-sm"

              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="absolute bottom-2 left-2 px-3 py-1 bg-white text-black text-xs rounded-full border border-[#E0E0E0] font-medium shadow-sm">
            {tags}
          </span>
        )}
      </div>

      <div className="w-full px-6 py-4 flex flex-col items-start">
        <a href={href}>
          <h4 className="text-[#212121] font-bold text-xl hover:underline">
            {title}
          </h4>
        </a>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function RecentProjects() {
  return (
    <div className="h-auto w-full bg-white flex flex-col items-center justify-center">
      <h3 className={`recProj text-[#212121] ${window.innerWidth<540 ? "text-[7vw]" : "text-[8vw] mx-[1vw]"} mt-[2vh] font-bold`}>FEATURED ✦ PROJECTS</h3>
      <div className="flex justify-center items-center p-0 m-10 mb-20">
        <div className="flex justify-center items-center flex-wrap gap-10">
          <ProjectCover
            imgSrc="/portfolio-covers/goAppCover.png"
            alt="GO Transit Redesign"
            href="/portfolio/goTransitRedesign"
            title="GO Transit Redesign"
            description="Transforming transit apps - starting at home with GO transit redesign"
            projectType={"UI/UX Case Study | Personal Project | User Research "}
          />
          <ProjectCover
            imgSrc="/portfolio-covers/plateItForwardCover.png"
            alt="PlateItForward"
            href="/portfolio/plateItForward"
            title="Plate It Forward"
            description="From leftovers to impact: students leading the way in food waste reduction"
            projectType={"UI/UX Case Study | CodePath x AmazonNext 2025 "}
          />
          <ProjectCover
            imgSrc="/portfolio-covers/tinkercover.png"
            alt="Tinker"
            href="/portfolio/tinker"
            title="Tinker"
            description="Where creative technologists share what they can’t stop building"
            projectType={"Full Stack Development | Intermediate Web Dev Course"}
          />
        </div>
      </div>
    </div>
  );
}