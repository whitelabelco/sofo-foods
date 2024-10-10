import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Order() {
    const heroTitle = "Sign Up for Online Ordering"
    const heroParagraph = "Brief instructions about ordering."

    return (
      <div>
      <Header />
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
      <Footer />
    </div>
    );
  }