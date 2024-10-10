import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function History() {
    const heroTitle = "History"
    const heroParagraph = "Going strategies identify in framework evolved keeping day offline. Mentality indicators your robust agile inside devops."

    return (
      <div>
      <Header />
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
      <ContactCallout />
      <Footer />
    </div>
    );
  }