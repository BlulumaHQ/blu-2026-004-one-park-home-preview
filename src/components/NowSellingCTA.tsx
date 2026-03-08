import { Link } from "react-router-dom";

const NowSellingCTA = () => {
  return (
    <section className="bg-gold py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70 font-body mb-3">
          Available for
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground">
          Immediate Occupancy!
        </h2>
        <p className="mt-6 text-primary-foreground/80 max-w-lg mx-auto">
          For more information on One Park's 1, 2, & 3 bedroom homes, please register today.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 bg-secondary text-secondary-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-secondary/90 transition-colors"
        >
          Register Now
        </Link>
      </div>
    </section>
  );
};

export default NowSellingCTA;
