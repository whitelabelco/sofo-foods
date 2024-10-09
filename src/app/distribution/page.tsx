import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Distribution() {
    return (
      <div>
      <Header />
        <ContactCallout />
        <CareersCallout />
      <Footer />
    </div>
    );
  }