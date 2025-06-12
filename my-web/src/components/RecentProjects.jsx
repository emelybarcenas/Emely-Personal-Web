function ProjectCover({ imgSrc, alt, href }) {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-lg w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] aspect-square bg-white flex flex-col gap-0 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <a className="self-start ml-[4vh]" href={href}>
        <button className="text-[#212121] relative font-bold text-xl translate-y-[-4vh] hover:underline">
          See Work ↗
        </button>
      </a>
    </div>
  );
}

export default function RecentProjects() {
  return (
    <div className="h-auto w-full bg-white flex flex-col items-center justify-center">
      <h3 className={`recProj text-[#212121] ${window.innerWidth<540 ? "text-[10vw]" : "text-[8vw] mx-[1vw]"} mt-[2vh] font-bold`}>FEATURED ✦ PROJECTS</h3>
      <div className="flex justify-center items-center p-0 m-10 mb-20">
        <div className="flex justify-center items-center flex-wrap gap-10">
         <ProjectCover
            imgSrc="/PlateItForwardRecProj.png"
            alt="PlateItForward"
            href="/portfolio/plateItForward"
          />
          <ProjectCover
            imgSrc="/TinkerRecProj.png"
            alt="Tinker"
            href="/portfolio/tinker"
          />
          <ProjectCover
            imgSrc="/Binding.png"
            alt="Binding"
            href="/portfolio/binding"
          />
         
        </div>
      </div>
    </div>
  );
}