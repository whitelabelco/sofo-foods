import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Careers() {
    const heroTitle = "Careers"
    const heroParagraph = "Something about working with us."

    return (
      <div>
      <Header />
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
      <Footer />
    </div>
    );
  }