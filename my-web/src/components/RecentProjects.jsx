export default function RecentProjects() {
    return (
     
      <div className="flex justify-center items-center h-screen bg-[#212121]">
        <div className="grid grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg w-[25vw] h-40 bg-white flex justify-center items-center">
            <img
              src="/path-to-your-image1.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg w-[25vw] h-40 bg-white flex justify-center items-center">
            <img
              src="/path-to-your-image2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg w-[25vw] h-40 bg-white flex justify-center items-center">
            <img
              src="/path-to-your-image3.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
  
    );
  }
  
  
