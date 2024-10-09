import BrandsCallout from "../components/BrandsCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Products() {
    return (
      <div>
      <Header />
        <BrandsCallout />
        <ContactCallout />
      <Footer />
    </div>
    );
  }