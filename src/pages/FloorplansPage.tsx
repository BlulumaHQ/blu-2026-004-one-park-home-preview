import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import NowSellingCTA from "@/components/NowSellingCTA";
import floorplanHero from "@/assets/floorplan_hero.jpg";
import floorplanB1 from "@/assets/floorplan_B1.jpg";
import floorplanD6 from "@/assets/floorplan_D6.jpg";
import floorplanD7 from "@/assets/floorplan_D7.jpg";
import floorplanE1 from "@/assets/floorplan_E1.jpg";
import floorplanE4 from "@/assets/floorplan_E4.jpg";

const plans = [
  {
    name: "Plan B1",
    type: "1 Bedroom + 1 Bath + Flex",
    tower: "C",
    interior: "590 sqft",
    exterior: "104–107 sqft",
    total: "694–697 sqft",
    image: floorplanB1,
    pdf: "https://oneparkliving.com/download/OnePark_Tower_C_B1.pdf",
  },
  {
    name: "Plan D6",
    type: "2 Bed + 2 Bath + Flex",
    tower: "C",
    interior: "878 sqft",
    exterior: "53 sqft",
    total: "931 sqft",
    image: floorplanD6,
    pdf: "https://oneparkliving.com/download/OnePark_Tower_C_D6.pdf",
  },
  {
    name: "Plan D7",
    type: "2 Bed + 2 Bath + Den + Flex",
    tower: "C",
    interior: "1,195 sqft",
    exterior: "122 sqft",
    total: "1,317 sqft",
    image: floorplanD7,
    pdf: "https://oneparkliving.com/download/OnePark_Tower_C_D7.pdf",
  },
  {
    name: "Plan E1",
    type: "3 Bed + 2 Bath",
    tower: "C",
    interior: "1,136 sqft",
    exterior: "129–244 sqft",
    total: "1,265–1,380 sqft",
    image: floorplanE1,
    pdf: "https://oneparkliving.com/download/OnePark_Tower_C_E1.pdf",
  },
  {
    name: "Plan E4",
    type: "3 Bed + 2 Bath + Flex",
    tower: "C",
    interior: "1,047 sqft",
    exterior: "164–449 sqft",
    total: "1,211–1,496 sqft",
    image: floorplanE4,
    pdf: "https://oneparkliving.com/download/OnePark_Tower_C_E4.pdf",
  },
];

const FloorplansPage = () => {
  return (
    <>
      <PageBanner title="Room to Grow" />

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <h2 className="font-heading text-3xl md:text-5xl font-light">Plans for Every Lifestyle</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                One Park has a wide variety of floorplans available—sure to suit all preferences. Below is a small selection; please get in touch for additional options.
              </p>
              <a
                href="mailto:info@oneparkliving.com"
                className="inline-block mt-8 bg-gold text-primary-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold/90 transition-colors"
              >
                Email Us
              </a>
            </div>
            <div>
              <img src={floorplanHero} alt="Floorplans" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Floorplan Cards */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 space-y-20">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`bg-card p-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={plan.image} alt={plan.name} className="w-full object-contain" />
              </div>
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center`}>
                <h3 className="font-heading text-3xl font-light">{plan.name}</h3>
                <p className="mt-2 text-sm text-gold tracking-wider">{plan.type}</p>

                <div className="mt-6 space-y-2">
                  {[
                    ["Tower", plan.tower],
                    ["Interior", plan.interior],
                    ["Exterior", plan.exterior],
                    ["Total Space", plan.total],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between border-b border-border py-2 text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-primary-foreground transition-colors self-start"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NowSellingCTA />
    </>
  );
};

export default FloorplansPage;
