import "../../index.css";
import resumeIcon from "../../assets/resume-icon.svg";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full flex justify-between items-center p-4 bg-[#212121] text-white z-50 font-sans font-bold">
      {/* Left navigation items */}
      <div className="justify-start hidden sm:block">
        <a href="/Jan-2025-Resume.pdf" download className="hover:text-gray-400 w-8 bg-transparent mx-4">
          <button className="p-0 border-none" style={{ width: '2vw', height: 'auto' }}>
            <img src={resumeIcon} alt="Resume icon" />
          </button>
        </a>
      </div>

      {/* Center navigation items (for larger screens) */}
      <div className="centerNav hidden sm:flex sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
        <a
          href="#about"
          className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#FF97DB] hover:bg-white text-[#212121] transition-colors"
        >
          About
        </a>
        <a
          href="#portfolio"
          className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#9E76FF] hover:bg-white hover:text-black text-[#212121] transition-colors font-sans"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#CDDC3D] text-[#212121] hover:bg-white hover:text-black transition-colors font-sans"
        >
          Contact
        </a>
    
      </div>

      <div className="rightNav sm:flex justify-end space-x-4 hidden">
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

      {/* Hamburger Icon (visible only on mobile screens) */}
      <div className="sm:hidden flex flex-col right-4 top-4 absolute items-center" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
      </div>

      {/* Mobile Menu (Hamburger - only visible when `isMenuOpen` is true) */}
      <div
        className={`sm:hidden absolute top-16 right-0 w-full bg-[#212121] ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a
            href="#about"
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://github.com/emelybarcenas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/emelybarcenas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            LinkedIn
          </a>
          <a
            href="/Jan-2025-Resume.pdf"
            download
            className="text-white text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  
  );
}

export default Navigation;
