import BrandsCallout from "../components/BrandsCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";

export default function Products() {
    const productsTitle = "Products";
    const productsParagraph = "Explore our diverse products, from premium dairy and meats to fresh produce and dry goods. Each product is selected for its quality and consistency."

    return (
      <div>
      <Header />
      <ProductsCallout
        variant="double"
        title={productsTitle}
        paragraph={productsParagraph}
        firstButtonText="Our brands"
        firstButtonVariant="redText"
        firstButtonRoute="/brands"
        secondButtonText="Place an order"
        secondButtonVariant="transparentWhite"
        secondButtonRoute="/order"
      />
      <BrandsCallout />
      <ContactCallout />
      <Footer />
    </div>
    );
  }