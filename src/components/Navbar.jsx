import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI Exam Prep
        </div>

        {/* Desktop Links */}
       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
  {navLinks.map((link) => (
    <li key={link.name}>
      <a
        href={link.href}
        className="hover:text-blue-600 transition-colors"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>

        {/* Desktop Button */}
        <Link
  to="/login"
  className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:opacity-90 transition-opacity"
>
  Get Started
</Link>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-white/30 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
  <a
    key={link.name}
    href={link.href}
    className="text-gray-700 font-medium"
    onClick={() => setMenuOpen(false)}
  >
    {link.name}
  </a>
))}
<Link
  to="/login"
  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-center"
>
  Get Started
</Link>

        </div>
      )}
    </nav>
  );
}