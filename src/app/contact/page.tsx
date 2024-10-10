import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Contact() {
    const heroTitle = "Get in Touch"
    const heroParagraph = "Give us a call and talk to a person."
    return (
      <div>
        <Header />
        <Hero variant="single" title={heroTitle} paragraph={heroParagraph} firstButtonText="Online order signup" firstButtonVariant="red" firstButtonRoute="/order" />
        <ContactCallout />
        <CareersCallout />
        <Footer />
      </div>
    );
  }