import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";
import BrandsCallout from "../components/BrandsCallout";

export default function Brands() {
    const productsTitle = "Products";
    const productsParagraph = "Browse through our extensive range of products available across multiple categories, all carefully selected to meet your needs." 

    return (
      <div>
      <Header />
      <BrandsCallout backgroundImage />
      <ProductsCallout variant="single" title={productsTitle} paragraph={productsParagraph} firstButtonText="All products" firstButtonVariant="red" firstButtonRoute="/products" />
      <ContactCallout />
      <Footer />
    </div>
    );
  }