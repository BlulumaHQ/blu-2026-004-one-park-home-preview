import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/onepark-logo.svg";

const navLinks = [
  { label: "Location", href: "/location" },
  { label: "Interiors", href: "/interiors" },
  { label: "Amenities", href: "/amenities" },
  { label: "Floorplans", href: "/floorplans" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary py-3 shadow-lg" : "bg-secondary/90 py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="One Park Living" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs font-body tracking-[0.2em] uppercase transition-colors ${
                location.pathname === link.href
                  ? "text-gold"
                  : "text-secondary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:604-821-8883"
            className="flex items-center gap-2 text-xs font-body tracking-wider text-gold hover:text-gold-light transition-colors"
          >
            <Phone className="w-3 h-3" />
            604-821-8883
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-secondary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden bg-secondary border-t border-secondary-foreground/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block text-sm tracking-[0.15em] uppercase transition-colors ${
                location.pathname === link.href
                  ? "text-gold"
                  : "text-secondary-foreground/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:604-821-8883"
            className="flex items-center gap-2 text-sm tracking-wider text-gold"
          >
            <Phone className="w-4 h-4" />
            604-821-8883
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
