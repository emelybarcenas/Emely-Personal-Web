export default function RecentProjects() {
  return (
    <div className="min-h-screen w-fulll=">
      <div className="p-0">
      <h3 className="recProj">Recent Projects</h3></div>
    <div className="flex justify-center items-center bg-[#212121] p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full mx-auto lg:p-0">
        <div className="rounded-2xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-[40vh] sm:h-[50vh] bg-white flex justify-center items-center">
          <img
            src="/path-to-your-image1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg  w-[60vw] sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-[40vh] sm:h-[50vh] bg-white flex justify-center items-center">
          <img
            src="/path-to-your-image2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg w-[60vw]  sm:w-[40vw] md:w-[25vw] lg:w-[20vw] h-[40vh] sm:h-[50vh] bg-white flex justify-center items-center">
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
