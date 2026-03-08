import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="bg-secondary pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-secondary-foreground tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-sm md:text-base text-secondary-foreground/60 tracking-wider max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-6 w-16 h-px bg-gold mx-auto" />
      </div>
    </section>
  );
};

export default PageBanner;
