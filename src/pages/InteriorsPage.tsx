import PageBanner from "@/components/PageBanner";
import NowSellingCTA from "@/components/NowSellingCTA";
import interiorsHero from "@/assets/interiors_02.jpg";
import interiors03 from "@/assets/interiors_03.jpg";
import interiors04 from "@/assets/interiors_04.jpg";
import interiors05 from "@/assets/onepark_interiors_05.jpg";
import interiors06 from "@/assets/interiors_06.jpg";
import interiors07 from "@/assets/interiors_07.jpg";
import interiors08 from "@/assets/interiors_08.jpg";

const features = [
  "Views of One Park's private park, the Fraser River, and the city centre beyond",
  "Finishes styled in two tasteful colour schemes",
  "Hard-surface flooring throughout with airy 8'6\" ceiling",
  "Air conditioning with programmable thermostats",
  "Engineered quartz countertop kitchens complete with Miele appliances",
  "Spa-inspired bathrooms with a polished quartz countertop and soaker tub",
  "Outdoor balcony or patio outfitted with electrical outlets",
];

const InteriorsPage = () => {
  return (
    <>
      <PageBanner title="Room to Grow" />

      <section>
        <img src={interiorsHero} alt="One Park interiors" className="w-full h-64 md:h-[500px] object-cover" />
      </section>

      {/* Contemporary Living */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={interiors03} alt="Living room" className="w-full h-80 object-cover" />
            </div>
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-5xl font-light">The Best of Contemporary Living</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Experience modern-day living at One Park, with airy ceilings, Miele appliances, and engineered laminate flooring throughout. All homes have expansive and generous floorplans—perfect for any family—with which to express your individual style and create new memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Plan */}
      <section>
        <img src={interiors04} alt="Open plan kitchen" className="w-full h-64 md:h-[500px] object-cover" />
      </section>
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            The One Park homes are open plan, for a seamless living and dining experience. To ensure clean lines and a paired-back aesthetic, the homes feature a fully integrated and panelled refrigerator and dishwasher.
          </p>
        </div>
      </section>

      {/* Family Sized */}
      <section>
        <img src={interiors05} alt="Interior living space" className="w-full h-64 md:h-[500px] object-cover" />
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-muted-foreground leading-relaxed">
            One Park 2 & 3 bedroom homes are family sized, with residences over 1,000 sqft.
          </p>
        </div>
      </section>

      {/* Features & Finishes */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img src={interiors06} alt="Bedroom" className="w-full h-80 object-cover mb-4" />
              <p className="text-sm text-muted-foreground">
                Bright and spacious bedrooms with views overlooking the city or park/courtyard.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-light">Features & Finishes</h2>
              <ul className="mt-6 space-y-3">
                {features.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bathrooms */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={interiors07} alt="Bathroom" className="w-full h-72 object-cover" />
            <img src={interiors08} alt="Bathroom detail" className="w-full h-72 object-cover" />
          </div>
          <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
            Contemporary, spa-inspired baths provide opportunities for reflection and relaxation.
          </p>
        </div>
      </section>

      <NowSellingCTA />
    </>
  );
};

export default InteriorsPage;
