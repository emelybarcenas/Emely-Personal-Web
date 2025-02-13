export default function RecentProjects() {
  return (
    <div className="h-auto w-full bg-[#212121] flex flex-col items-center justify-center">
      <h3 className={`recProj text-white ${window.innerWidth<540 ? "text-[10vw]" : "text-[4vw]"} mt-[2vh] font-bold text-white`}>RECENT PROJECTS</h3>
    <div className="flex justify-center items-center p-0 m-10 mb-20">
      <div className="flex justify-center items-center flex-wrap gap-6">
        <div className="rounded-3xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex flex-col gap-0 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/HerTechPathCover1.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <a className="self-start ml-[4vh]"
            href="/portfolio"
          >
            <button className="text-[#212121] relative font-bold text-xl translate-y-[-4vh] hover:underline">
            See Work ↗
           </button>
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex flex-col gap-0 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/Binding.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <a className="self-start ml-[4vh]"
            href="/portfolio"
          >
            <button className="text-[#212121] relative font-bold text-xl translate-y-[-4vh] hover:underline">
            See Work ↗
           </button>
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex flex-col gap-0 justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img
            src="/BrillianceCover.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <a className="self-start ml-[4vh]"
            href="/portfolio"
          >
            <button className="text-[#212121] relative font-bold text-xl translate-y-[-4vh] hover:underline">
            See Work ↗
           </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  
  );
}
