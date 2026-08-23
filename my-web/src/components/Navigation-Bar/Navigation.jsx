import "../../index.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "play", path: "/portfolio", color: "#CDDC3D" },
  { label: "about", path: "/about-page", color: "#FF97DB" },
  { label: "contact", path: "/contact-page", color: "#9E76FF" },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state to track mobile view
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

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
      <nav className="fixed top-0 left-0 w-full h-[7vh] flex justify-between items-center px-4 sm:px-6 bg-[#181818] text-white z-50 font-sans font-bold">
        {/* Left: logo / home */}
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity bg-transparent">
          <img src="/icons/eb-logo.svg" alt="Emely Barcenas home" className="w-6 h-auto" />
        </a>

        {/* Right navigation items (desktop) */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            {NAV_LINKS.map(({ label, path, color }) => {
              const active = isActivePath(path);
              return (
                <a
                  key={path}
                  href={path}
                  className={`flex items-center gap-2 px-1 py-2 text-[1vw] sm:text-base hover:text-white hover:-translate-y-0.5 transition-all font-sans ${active ? "font-bold" : "font-medium"}`}
                  style={{ color }}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {label}
                </a>
              );
            })}
            <a
              href="https://www.linkedin.com/in/emelybarcenas/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        )}

        {/* Hamburger Icon (visible only on mobile screens) */}
        {isMobile && (
          <div
            className="flex flex-col h-10 items-center justify-center gap-1"
            onClick={toggleMenu}
          >
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        )}
      </nav>

      {/* Mobile Menu (Hamburger - only visible when `isMenuOpen` is true) */}
      {isMobile && (
        <div
        className={`sm:hidden fixed top-11 left-0 w-full bg-[#181818] z-[10000] ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex flex-col items-center space-y-4 py-4 z-[10000]"> {/* Added z-50 to make sure menu stays on top */}
            {NAV_LINKS.map(({ label, path, color }) => {
              const active = isActivePath(path);
              return (
                <button
                  key={path}
                  className={`flex items-center gap-2 text-lg ${active ? "font-bold" : "font-medium"}`}
                  style={{ color }}
                  onClick={() => handleNavigation(path)}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </button>
              );
            })}
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
