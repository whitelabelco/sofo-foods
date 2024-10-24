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
      <section className="flex flex-col md:flex-row justify-center mx-4 md:w-screen">
        <div className="flex flex-col md:flex-row md:max-w-screen-2xl">
          <ProductsSidebar />
          <div className="flex flex-col items-center justify-center my-8 md:my-20 lg:w-full sm:mx-2">
            <ProductsGrid full />
          </div>
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
      <span className="hidden lg:flex"><BrandsCallout /></span>
      <ContactCallout />
      <Footer />
    </div>
    );
  }