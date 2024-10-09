import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";

export default function Brands() {
    return (
      <div>
      <Header />
        <ProductsCallout />
        <ContactCallout />
      <Footer />
    </div>
    );
  }