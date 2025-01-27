import "../../index.css";

function Navigation() {
  return (
    <nav className="fixed w-full flex justify-between items-center p-4 bg-[#212121] text-white z-50 font-sans font-bold">
      {/* Left navigation items */}
      <div className="justify-start">
<a href="\Users\Emely\Desktop\eb-pweb\my-web\src\assets\Jan-2025-Resume.pdf" download>
  <button>
    <img src=""></img>
  </button>
</a>
      </div>
      <div className="centerNav justify-center flex space-x-8 mx-auto">
        <a 
          href="#about" 
          className="px-6 py-2 rounded-full bg-[#FF97DB] hover:bg-white text-[#212121] transition-colors"
        >
          About
        </a>
        <a 
          href="#portfolio" 
          className="px-6 py-2 rounded-full bg-[#9E76FF] hover:bg-white hover:text-black text-[#212121] transition-colors font-sans"
        >
          Portfolio
        </a>
        <a 
          href="#contact" 
          className="px-6 py-2 rounded-full bg-[#CDDC3D] text-[#212121] hover:bg-white hover:text-black transition-colors font-sans"
        >
          Contact Me
        </a>
      </div>

      {/* Right navigation items (social media links) */}
      <div className="rightNav flex justify-end space-x-4">
        <a
          href="https://github.com/emelybarcenas"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 w-8 bg-transparent mx-4"
        >
          <img src="/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/emelybarcenas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 w-8 bg-transparent mx-4"
        >
          <img src="/linkedin.png" alt="linkedin" />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
