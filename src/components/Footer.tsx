import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/onepark-logo.svg";
import teamGrandLong from "@/assets/team_grand-long.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Dev */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="One Park Living" className="h-10" />
            </Link>
            <div className="mt-4">
              <p className="text-xs tracking-wider text-secondary-foreground/50 uppercase mb-2">A development by</p>
              <img src={teamGrandLong} alt="Grand Long" className="h-6 brightness-0 invert opacity-60" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-heading text-lg text-gold mb-4">Explore</h5>
            <nav className="space-y-2">
              {["Location", "Interiors", "Amenities", "Floorplans", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="block text-sm text-secondary-foreground/70 hover:text-gold transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Presentation Centre */}
          <div>
            <h5 className="font-heading text-lg text-gold mb-4">Presentation Centre</h5>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-gold/60" />
                <div>
                  <p>Open Daily 12–5pm</p>
                  <p>Closed Fridays</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold/60" />
                <a
                  href="https://maps.app.goo.gl/s3fRMDS1qH8cb7Bv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  8071 Park Rd, Richmond, BC
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-heading text-lg text-gold mb-4">Contact</h5>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <a href="tel:604-821-8883" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold/60" />
                604-821-8883
              </a>
              <a href="tel:604-565-2836" className="flex items-center gap-2 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold/60" />
                604-565-2836
              </a>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.137!3d49.168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b2b8ad41565%3A0x665b35557a9cb95b!2s8071%20Park%20Rd%2C%20Richmond%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="One Park Presentation Centre"
                className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[10px] text-secondary-foreground/40 tracking-wider">
            © {new Date().getFullYear()} One Park Living. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] text-secondary-foreground/40">
            <Link to="/privacy-policy" className="hover:text-secondary-foreground/60 transition-colors">Privacy Policy</Link>
            <Link to="/disclaimer" className="hover:text-secondary-foreground/60 transition-colors">Disclaimer</Link>
            <span>|</span>
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-foreground/60 transition-colors">
              Web Design by Bluluma Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
