import { useLocation } from "react-router";
import { Link } from "react-router";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl shadow-[0_24px_48px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto font-['Space_Grotesk'] tracking-tight">
        <div className="text-2xl font-bold tracking-tighter text-[#b6a0ff]">
          <Link to="/">ADRIEN SOUBIGOU</Link>
        </div>
        {isHome && (
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-gray-400 hover:text-white transition-all duration-300"
              href="/#projects"
            >
              Projets
            </a>
            <a
              className="text-gray-400 hover:text-white transition-all duration-300"
              href="/#skills"
            >
              Compétences
            </a>
            <a
              className="text-gray-400 hover:text-white transition-all duration-300"
              href="/#contact"
            >
              Contact
            </a>
          </div>
        )}
        <div className="flex items-center gap-4">
          <a
            className="bg-gradient-primary text-on-primary-fixed px-6 py-2 rounded-lg font-medium active:scale-95 transition-transform"
            href="/public/CV_soubigou_adrien.pdf"
            target="_blank"
          >
            Mon CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
