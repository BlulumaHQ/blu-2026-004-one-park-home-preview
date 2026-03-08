import PageBanner from "@/components/PageBanner";
import NowSellingCTA from "@/components/NowSellingCTA";
import amenitiesHero from "@/assets/onepark_amenities_02.jpg";
import amenities03 from "@/assets/amenities_03.jpg";
import amenities04 from "@/assets/amenities_04.jpg";
import amenities05 from "@/assets/amenities_05.jpg";
import amenities06 from "@/assets/amenities_06.jpg";
import amenities07 from "@/assets/amenities_07.jpg";
import amenities08 from "@/assets/amenities_08.jpg";
import amenities09 from "@/assets/amenities_09.jpg";
import locationSungiven from "@/assets/location_sungiven.jpg";

const AmenitiesPage = () => {
  return (
    <>
      <PageBanner title="An Ecosystem of Amenities" />

      <section>
        <img src={amenitiesHero} alt="One Park amenities" className="w-full h-64 md:h-[500px] object-cover" />
      </section>

      {/* Private Park */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={amenities03} alt="Private park" className="w-full h-80 object-cover" />
            </div>
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-5xl font-light">Your Very Own Private Park</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                One Park is centred around a 31,000 sqft private park that features a playground, luscious landscaping, walking pathways and places to bring together families, friends, and neighbours alike. With generous greenspace, Sungiven Foods and the Wellness Wing built in, One Park is the epitome of well-being and self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sungiven Foods */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg order-2 lg:order-1">
              <h2 className="font-heading text-3xl md:text-4xl font-light">Fresh Food at Your Front Door</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                One Park is proud to include Sungiven Foods—a top-quality Asian supermarket chain committed to products that are more natural, less processed, and with fewer additives—for people who care deeply about their food and families.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={locationSungiven} alt="Sungiven Foods" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Wing */}
      <section>
        <img src={amenities04} alt="Wellness Wing" className="w-full h-64 md:h-[500px] object-cover" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-5xl font-light">Fitness Meets Wellness</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Care for your health and wellbeing with One Park's state-of-the-art Wellness Wing—with a fitness centre, yoga and dance studio, and private steam and sauna rooms.
              </p>
            </div>
            <div>
              <img src={amenities05} alt="Yoga studio" className="w-full h-80 object-cover" />
              <p className="mt-3 text-sm text-muted-foreground">
                One Park yoga and dance studio, with floor-to-ceiling mirrors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sauna */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[400px]">
            <img src={amenities06} alt="Sauna Room" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              One Park's Sauna Room—a private space for relaxation and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      {/* Entertainment */}
      <section>
        <img src={amenities07} alt="Entertainment amenities" className="w-full h-64 md:h-[500px] object-cover" />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={amenities08} alt="Social lounge" className="w-full h-80 object-cover" />
              <p className="mt-3 text-sm text-muted-foreground">
                One Park's social lounge, complete with media console and pool table.
              </p>
            </div>
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-4xl font-light">Entertain and Live Large</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                From the 31,000 sqft park to the entertainment amenities, One Park is all about bringing people together. With a social lounge, chef's kitchen, sound-proof music rooms, and outdoor BBQ area—there is sure to be a space for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ping Pong */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto lg:min-h-[400px]">
            <img src={amenities09} alt="Ping pong room" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="flex items-center bg-card px-8 md:px-16 py-16 lg:py-0">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              One Park's ping pong room—one of many entertainment spaces designed for community connection.
            </p>
          </div>
        </div>
      </section>

      <NowSellingCTA />
    </>
  );
};

export default AmenitiesPage;
