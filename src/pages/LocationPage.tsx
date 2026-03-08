import PageBanner from "@/components/PageBanner";
import NowSellingCTA from "@/components/NowSellingCTA";
import locationHero from "@/assets/location_02.jpg";
import locationRichmond from "@/assets/location_richmond_centre.jpg";
import locationSkytrain from "@/assets/location_skytrain.jpg";
import locationAberdeen from "@/assets/location_aberdeen.jpg";
import locationDining from "@/assets/location_dining.jpg";
import locationWellness from "@/assets/location_wellness.jpg";
import locationSungiven from "@/assets/location_sungiven.jpg";
import location03 from "@/assets/location_03.jpg";

const conveniences = [
  "Richmond Centre", "Lansdowne Centre", "Walmart Supercentre", "Richmond General Hospital",
  "T&T Supermarket", "Aberdeen Centre", "Minoru Aquatic Centre & Park", "Garden City Park",
  "Richmond Olympic Oval", "Richmond Art Gallery"
];

const restaurants = [
  "Kirin Seafood Restaurant", "Shanghai River Restaurant", "Empire Seafood Restaurant",
  "Dinesty Dumpling House", "Neptune Seafood Restaurant", "SETO Japanese",
  "Nan Chuu Ramen Izakaya", "Happy Tree House BBQ", "Yue Restaurant", "Cocoru Beer & Chicken"
];

const education = [
  "Samuel Brighouse Elementary", "Blundell Elementary", "General Currie Elementary",
  "William Cook Elementary", "Richmond Secondary", "AR MacNeill Secondary",
  "Kwantlen Polytechnic University", "Henry Anderson Elementary"
];

const LocationPage = () => {
  return (
    <>
      <PageBanner title="A Prime Environment" />

      {/* Hero Image */}
      <section>
        <img src={locationHero} alt="One Park neighbourhood" className="w-full h-64 md:h-[500px] object-cover" />
      </section>

      {/* Everything You Want */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-5xl font-light">Everything You Want</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Experience the best of city living with close proximity to Richmond Centre, the SkyTrain, shopping, dining, and more—all while enjoying the tranquility of living beside a 31,000 sqft private park.
              </p>
            </div>
            <div>
              <img src={location03} alt="Richmond Centre area" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Richmond Centre */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
            <img src={locationRichmond} alt="Richmond Centre" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-light">Richmond Centre</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Directly across the street from the city's largest shopping mall, Richmond Centre, enjoy the conveniences of city living with hundreds of boutique and brand name stores, restaurants, and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SkyTrain */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-background px-8 md:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-light">SkyTrain Station</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Minutes away from Richmond-Brighouse SkyTrain station, One Park residents can be whisked in under half an hour to Downtown Vancouver and UBC, and to Vancouver International Airport in less than 20 minutes.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
            <img src={locationSkytrain} alt="SkyTrain Station" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Aberdeen Centre */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[500px]">
            <img src={locationAberdeen} alt="Aberdeen Centre" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-light">Aberdeen Centre</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Aberdeen Centre is known for shopping, dining, entertainment—such as arts and cultural performances, seasonal celebrations, and themed exhibitions—as well as beauty and fashion brands from Japan, Korea, and around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section>
        <img src={locationDining} alt="Dining in Richmond" className="w-full h-64 md:h-[400px] object-cover" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-light">A Feast from Around the Globe</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Central Richmond is home to a multitude of dining experiences from across the Asian continent and beyond—from fine dining, drinks, desserts and more. Living here means enjoying one of life's greatest pleasures—food—with a new restaurant to try, always.
              </p>
            </div>
            <div>
              <img src={locationSungiven} alt="Sungiven Foods" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-background px-8 md:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-light">Community Amenities for Health and Wellbeing</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Central Richmond is a rich ecosystem of amenities—for the health and wellbeing of all. A fifteen minute walk brings you to Minoru Park—with a collection of sporting fields for track, soccer and other activities.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto lg:min-h-[500px] order-1 lg:order-2">
            <img src={locationWellness} alt="Minoru Centre" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Lists */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-center mb-16">A Have-It-All Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-heading text-xl text-gold mb-4">Convenience</h3>
              <ul className="space-y-2">
                {conveniences.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-gold mb-4">Restaurants</h3>
              <ul className="space-y-2">
                {restaurants.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-gold mb-4">Education</h3>
              <ul className="space-y-2">
                {education.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NowSellingCTA />
    </>
  );
};

export default LocationPage;
