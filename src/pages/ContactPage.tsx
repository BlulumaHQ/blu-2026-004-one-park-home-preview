import { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { MapPin, Phone, Clock } from "lucide-react";

const hearAboutOptions = [
  "Friend/Family Referral",
  "Online Search",
  "Realtor Referral",
  "Signage",
  "Word of Mouth",
  "Other",
];

const homeTypeOptions = ["1 Bedroom", "2 Bedroom", "3 Bedroom", "Strata Office"];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hearAbout: "",
    isRealtor: "",
    homeType: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Now Selling—1, 2 and 3 Bedroom Homes" />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-light mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Presentation Centre</h3>
                    <a
                      href="https://maps.app.goo.gl/s3fRMDS1qH8cb7Bv7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      8071 Park Rd, Richmond, BC
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Hours</h3>
                    <p className="text-sm text-muted-foreground">Open Daily 12–5pm</p>
                    <p className="text-sm text-muted-foreground">Closed Fridays</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg mb-1">Phone</h3>
                    <a href="tel:604-821-8883" className="block text-sm text-muted-foreground hover:text-gold transition-colors">604-821-8883</a>
                    <a href="tel:604-565-2836" className="block text-sm text-muted-foreground hover:text-gold transition-colors">604-565-2836</a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.137!3d49.168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b2b8ad41565%3A0x665b35557a9cb95b!2s8071%20Park%20Rd%2C%20Richmond%2C%20BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="One Park Presentation Centre"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-light mb-8">Register Now</h2>
              <form action="https://formspree.io/f/mbdabbql" method="POST" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">How did you hear about us? *</label>
                  <select
                    name="hearAbout"
                    required
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select...</option>
                    {hearAboutOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Are you a realtor?</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="radio" name="isRealtor" value="Yes" onChange={handleChange} className="accent-gold" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="radio" name="isRealtor" value="No" onChange={handleChange} className="accent-gold" />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">What type of home are you looking for? *</label>
                  <select
                    name="homeType"
                    required
                    value={formData.homeType}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select...</option>
                    {homeTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-start gap-3 text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent as unknown as boolean}
                      onChange={handleChange}
                      className="mt-0.5 accent-gold"
                    />
                    Yes I confirm the information provided and consent to receive email updates from Grand Long, BakerWest Real Estate Incorporated and CBRE Limited.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground py-4 text-xs tracking-[0.2em] uppercase font-body hover:bg-gold/90 transition-colors mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
