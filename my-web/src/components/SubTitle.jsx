import { Search, Layout, PenTool, Code } from "lucide-react";
import RecentProjects from "./RecentProjects";
import { useEffect, useState } from "react";



function SubTitle() {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tags = [
    { label: "User Research", icon: <Search size={16} className="mr-2" /> },
    { label: "Strategy", icon: <Layout size={16} className="mr-2" /> },
    { label: "Prototyping", icon: <PenTool size={16} className="mr-2" /> },
    { label: "Development", icon: <Code size={16} className="mr-2" /> },
  ];

  function ProjectCover({ imgSrc, alt, href, title, caption, description, projectType }) {
    const tags = projectType.includes("|")
      ? projectType.split("|").map((t) => t.trim())
      : projectType;
  
    const isWIP = description?.toLowerCase().includes("work in progress");
    const [isHovered, setIsHovered] = useState(false);
  
    // Card layout restored
    const cardContent = (
      <div className="rounded-2xl overflow-hidden shadow-lg w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[32vw] bg-white flex flex-col items-start transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imgSrc}
            alt={alt}
            className="w-full aspect-[2/1] object-cover"
          />
          {isHovered && (
            <div
              className="absolute top-2 right-2 flex items-center justify-center "
              style={{ width: 32, height: 32 }}
            >
              <img
                src={downArrowIcon}
                alt="Arrow"
                style={{
                  width: 30,
                  height: 30,
                  transform: "rotate(225deg)"
                }}
              />
            </div>
          )}
        </div>
        <div className="w-full px-6 py-4 flex flex-col items-start">
          <h4 className="text-[#212121] font-bold text-lg mb-2">{caption || title}</h4>
          <p className="text-gray-500 text-sm mb-2">{description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {Array.isArray(tags)
              ? tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-white text-black text-[10px] rounded-full border border-[#E0E0E0] font-medium shadow-sm"
                  >
                    {tag}
                  </span>
                ))
              : (
                  <span className="px-3 py-1 bg-white text-black text-xs rounded-full border border-[#E0E0E0] font-medium shadow-sm">
                    {tags}
                  </span>
                )
            }
          </div>
        </div>
      </div>
    );
  
    return href ? (
      <a href={href} className="block w-full h-full">{cardContent}</a>
    ) : cardContent;
  }
  return (
    <div className="w-screen">
        {isMobile ? (
        <div className="designer-text-mobile">
          <span>Designing meaningful experiences</span>
          <br />
          <span>through strategy and technology</span>
        </div>
      ) : (
        <div className="designer-text">
          Designing meaningful experiences through strategy and technology
        </div>
      )}
      <div className="flex flex-wrap gap-2 mt-3 px-1 tags">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1 rounded-full border border-white text-white font-medium text-xs md:text-sm bg-transparent flex items-center"
          >
            {tag.icon}
            {tag.label}
          </span>
        ))}
      </div>

<div className="circle-lines-wrapper">
  <img src="/circle-lines.svg" className='circleLinesBott overflow-x-clip'/>
  <img src="/circle-lines.svg" className='circleLinesTop'/> 
</div>
    </div>
  );
}

export default SubTitle;