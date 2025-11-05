import downArrowIcon from "../assets/down-arrow-icon.svg";
import { useState } from "react";

function ProjectCover({ imgSrc, alt, href, title, caption, description, projectType }) {
  const tags = projectType.includes("|")
    ? projectType.split("|").map((t) => t.trim())
    : [projectType];

  return (
    <div className="flex flex-col items-center w-full max-w-2xl group px-4 sm:px-0">
      <div className="relative flex flex-col items-center w-full">
        {href ? (
          <a href={href} className="block w-full">
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-lg md:max-w-xl">
              <img
                src={imgSrc}
                alt={alt}
                className="w-full h-56 md:h-56 lg:h-64 object-cover rounded-2xl shadow-lg bg-[#212121] transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {/* Diagonal arrow icon on hover */}
              <img
                src={downArrowIcon}
                alt="Arrow Icon"
                className="absolute right-6 top-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ transform: "rotate(225deg)" }}
              />
              {/* Tags overlay on hover */}
              <div className="absolute left-0 right-0 bottom-0 flex flex-wrap gap-1 justify-start items-end pb-2 pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white text-black text-xs rounded-full border border-gray-300 font-medium shadow-sm m-1 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ) : (
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-lg md:max-w-xl">
            <img
              src={imgSrc}
              alt={alt}
              className="w-full h-40 md:h-56 lg:h-64 object-cover rounded-2xl shadow-lg bg-[#212121]"
            />
          </div>
        )}
      </div>
      {/* Text block matches image width and alignment */}
      <div className="mt-6 flex flex-col items-center w-full">
        <div className="mx-auto w-full max-w-[420px] sm:max-w-lg md:max-w-xl">
          <h4 className="text-black font-medium text-lg md:text-3xl mb-2 text-left">{caption || title}</h4>
          <p className="text-gray-700 text-base md:text-md mb-2 text-left">{description}</p>
        </div>
      </div>
    </div>
  );
}




export default function RecentProjects() {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-t-xl recentProjects bg-white py-12">
      <h3 className={`featuredProjects text-black ${window.innerWidth<540 ? "text-[10vw]" : "text-[4vw] mx-[1vw]"} mb-10`}>
        Featured ✦ Projects
      </h3>
      <div className="flex justify-center items-start w-full">
        <div className="flex flex-col md:flex-row gap-20 items-start w-full max-w-5xl">
          <ProjectCover
            imgSrc="/goApp/goCover.jpg"
            alt="GO Transit Redesign"
            href="/portfolio/goTransitRedesign"
            title="GO Transit Redesign"
            description="Turning complexity into clarity through thoughtful app design"
            projectType={"UI/UX Case Study | Personal Project | User Research "}
          />
          <ProjectCover
            imgSrc="/banners/plateItForwardBanner.png"
            alt="PlateItForward"
            href="/portfolio/plateItForward"
            title="PlateItForward"
            description="Designing for action: making food donations simple and rewarding"
            projectType={"UI/UX Case Study | CodePath x AmazonNext 2025 "}
          />
        </div>
      </div>
    </div>
  );
}