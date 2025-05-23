import "../../index.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile view
  const navigate = useNavigate();

  // Detect screen size and update state
  const updateMobileView = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true); // If width is less than 768px, it's mobile
    } else {
      setIsMobile(false); // Otherwise, it's desktop
    }
  };

  // Run the updateMobileView function on component mount and window resize
  useEffect(() => {
    updateMobileView(); // Initial check on mount
    window.addEventListener("resize", updateMobileView); // Add resize event listener

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateMobileView);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed w-full h-[7vh] flex justify-between items-center p-4 bg-[#212121] text-white z-50 font-sans font-bold">
        {/* Left navigation items */}
        <div className="justify-start hidden sm:flex mt-2 space-x-4">
  <a href="/EmelyBarcenasResume.pdf" download className="hover:text-gray-400 bg-transparent mx-4">
    <img src="/icons/resume icon.svg" alt="Resume icon" className="w-8 h-auto" />
  </a>
  <a href="/" className="hover:text-gray-400 bg-transparent mx-4">
    <img src="/icons/home-icon.svg" alt="home icon" className="w-8 h-auto" />
  </a>
</div>

        {/* Center navigation items (for larger screens) */}
        {!isMobile && (
          <div className="centerNav sm:flex sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 mx-auto">
            <a
              href="/about-page"
              className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#FF97DB] hover:bg-white text-[#212121] transition-colors"
            >
              About
            </a>
            <a
              href="/portfolio"
              className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#9E76FF] hover:bg-white hover:text-black text-[#212121] transition-colors font-sans"
            >
              Portfolio
            </a>
            <a
              href="/contact-page"
              className="px-6 py-2 text-[1vw] sm:text-base rounded-full bg-[#CDDC3D] text-[#212121] hover:bg-white hover:text-black transition-colors font-sans"
            >
              Contact
            </a>
          </div>
        )}

        {/* Right Navigation items (for larger screens) */}
        {!isMobile && (
          <div className="rightNav mr-4 sm:flex justify-end space-x-4 hidden">
            <a
              href="https://github.com/emelybarcenas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 w-8 bg-transparent mx-4"
            >
              <img src="/icons/github-icon.svg" alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/emelybarcenas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 w-8 bg-transparent mx-4"
            >
              <img src="/icons/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        )}

        {/* Hamburger Icon (visible only on mobile screens) */}
        {isMobile && (
          <div
            className="sm:hidden flex flex-col h-10 left-4 top-4 absolute items-center gap-1" 
            onClick={toggleMenu}
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        )}

{isMobile && (
  <div className="absolute right-4 top-3">
    <a href="/" className="hover:text-gray-400">
      <button className="p-0 border-none" style={{ width: '30px', height: '30px' }}>
        <img src="/icons/home-icon.svg" alt="home icon" className="w-full h-full" />
      </button>
    </a>
  </div>
)}

      </nav>
     

      {/* Mobile Menu (Hamburger - only visible when `isMenuOpen` is true) */}
      {isMobile && (
        <div
        className={`sm:hidden fixed top-11 left-0 w-full bg-[#212121] z-[10000] ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center space-y-4 py-4 z-[10000]"> {/* Added z-50 to make sure menu stays on top */}
            <button
              className="text-white text-lg"
              onClick={() => handleNavigation("/about-page")}
            >
              About
            </button>
            <button
              className="text-white text-lg"
              onClick={() => handleNavigation("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className="text-white text-lg"
              onClick={() => handleNavigation("/contact-page")}
            >
              Contact
            </button>
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
              href="/EmelyBarcenasResume.pdf"
              download
              className="text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
