import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/homepage_hero.jpg";
import locationImg from "@/assets/location_hero.jpg";
import interiorsImg from "@/assets/homepage_interiors.jpg";
import amenitiesImg from "@/assets/homepage_amenities.jpg";
import builtByImg from "@/assets/onepark_homepage_05.jpg";
import teamGrandLong from "@/assets/team_grand-long.png";
import teamAcai from "@/assets/team_acai.png";
import teamItc from "@/assets/team_itc.png";
import teamGs from "@/assets/team_gs.png";
import NowSellingCTA from "@/components/NowSellingCTA";

const featureCards = [
  {
    image: heroImg,
    title: "Extraordinary and Luxury Living Experience",
    link: "/interiors",
  },
  {
    image: locationImg,
    title: "A Prime Location Across from Richmond Centre",
    link: "/location",
  },
  {
    image: amenitiesImg,
    title: "An Ecosystem of Amenities & Wellness",
    link: "/amenities",
  },
  {
    image: builtByImg,
    title: "Spectacular Views & Contemporary Design",
    link: "/floorplans",
  },
];

const partners = [
  { logo: teamGrandLong, name: "Grand Long", role: "Developer" },
  { logo: teamAcai, name: "ACAI", role: "Architecture & Interior" },
  { logo: teamItc, name: "ITC", role: "Construction" },
  { logo: teamGs, name: "GS", role: "Structural Engineering" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-section-dark/50" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-secondary-foreground/70 font-body mb-6">
            The One Community That Has it All
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-secondary-foreground leading-tight">
            You Will<br />Flourish Here
          </h1>
          <p className="mt-6 text-secondary-foreground/70 text-sm md:text-base max-w-xl mx-auto tracking-wider">
            1, 2 & 3 Bedroom Move-in Ready Homes in Central Richmond
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-gold text-primary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold/90 transition-colors"
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Sticky Nav Bar (following MaisonCo reference) */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto">
            {["Location", "Interiors", "Amenities", "Floorplans", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-gold whitespace-nowrap transition-colors font-body"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Cards Grid (MaisonCo 4-column) */}
      <section className="py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card) => (
            <Link key={card.title} to={card.link} className="group relative h-72 md:h-80 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-section-dark/40 group-hover:bg-section-dark/60 transition-colors" />
              <div className="relative h-full flex items-end p-6">
                <h3 className="font-heading text-xl md:text-2xl text-secondary-foreground font-light leading-tight">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4">A Community in Bloom</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light leading-tight text-balance">
              One Park is a Community in Bloom: Three Terraced Towers Encircling a Private Park in Central Richmond
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              With a wide selection of 1, 2, & 3 bedroom residences—recently completed and ready for move in—there is a home for everyone.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              Register Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section (Image Left + Text Right - MaisonCo Amenities layout) */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
            <img src={locationImg} alt="One Park Location" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">Plan Your Stay</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light">
                Explore Our Location
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Experience the best of city living with close proximity to Richmond Centre, the SkyTrain, shopping, dining, and more—all while enjoying the tranquility of living beside a 31,000 sqft private park.
              </p>
              <Link
                to="/location"
                className="inline-flex items-center gap-3 mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                Discover More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interiors Section (Text Left + Image Right - MaisonCo Interior Design layout) */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-background px-8 md:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">Modern Furniture</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light">
                Interior Design Room
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Experience modern-day living at One Park, with airy ceilings, Miele appliances, and engineered laminate flooring throughout. All homes have expansive and generous floorplans—perfect for any family.
              </p>
              <Link
                to="/interiors"
                className="inline-flex items-center gap-3 mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                View Interiors
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
            <img src={interiorsImg} alt="One Park Interiors" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Amenities Section (Image Left + Text Right) */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
            <img src={amenitiesImg} alt="One Park Amenities" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">Providing High Quality</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light">
                Amenity Spaces
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                With ample greenspace, an international grocery store—and a well-equipped gym, sauna, and steam room built in—One Park is the epitome of well-being and self-care.
              </p>
              <Link
                to="/amenities"
                className="inline-flex items-center gap-3 mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                Explore Amenities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Now Selling CTA */}
      <NowSellingCTA />

      {/* Partners / Designed and Built By */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light">Designed and Built by</h2>
            <div className="mt-4 w-16 h-px bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.name} className="text-center space-y-3">
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 max-w-[140px] object-contain opacity-70"
                  />
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
