import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import DistributionCallout from "../components/DistributionCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LocationCard from "../components/LocationCard";

export default function Contact() {
    const heroTitle = "Get in Touch"
    const heroParagraph = "Give us a call and talk to a person."

    const headquartersGrid = (
      <section className="flex justify-center items-center my-16 max-w-screen mx-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <LocationCard variant="ohio" />
          <LocationCard variant="georgia" />
          <LocationCard variant="texas" />
        </div>
      </section>
    );

    return (
      <div>
        <Header />
        <Hero variant="single" title={heroTitle} paragraph={heroParagraph} firstButtonText="Online order signup" firstButtonVariant="red" firstButtonRoute="/order" />
          {headquartersGrid}
        <DistributionCallout />
        <ContactCallout />
        <CareersCallout />
        <Footer />
      </div>
    );
  }