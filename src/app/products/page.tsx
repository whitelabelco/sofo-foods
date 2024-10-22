import React from "react";

import BrandsCallout from "../components/BrandsCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";
import ProductsGrid from "../components/ProductsGrid";
import ProductsSidebar from "../components/ProductsSidebar";


export default function Products() {

    const productsTitle = "Products";
    const productsParagraph = "Explore our diverse products, from premium dairy and meats to fresh produce and dry goods. Each product is selected for its quality and consistency."
  
    const productsSection = (
      <section className="flex flex-col md:flex-row justify-center gap-12 xl:gap-28 mx-4">
        <ProductsSidebar />
        <div className="flex flex-col items-center justify-center my-8 md:my-20 md:w-2/3 sm:mx-2">
          <ProductsGrid full />
        </div>
      </section>
    )

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
        {productsSection}
      <BrandsCallout />
      <ContactCallout />
      <Footer />
    </div>
    );
  }