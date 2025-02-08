export default function RecentProjects() {
  return (
    <div className="min-h-screen w-full bg-[#212121]">
      <h3 className="recProj text-white">Recent Projects</h3>
    <div className="flex justify-center items-center p-0 m-10 mb-20">
      <div className="flex justify-center items-center flex-wrap gap-6">
        <div className="rounded-2xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex flex-col gap-0 justify-center items-center">
          <img
            src="/Binding.png"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <a
            href="/projects"
          >
            <button className="text-black relative translate-x-[-5vw] translate-y-[-2vh] font-bold text-xl">
            See Work ↗
           </button>
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex justify-center items-center">
          <img
            src="/path-to-your-image2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg w-[60vw]  sm:w-[40vw] md:w-[25vw] lg:w-[22vw] h-[37vh] sm:h-[50vh] bg-white flex justify-center items-center">
          <img
            src="/path-to-your-image3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    </div>
  
  );
}
