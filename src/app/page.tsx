"use client";

import React from "react";
import { useRouter } from 'next/navigation'

import BrandsCallout from "./components/BrandsCallout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Text from "./components/Text";
import CustomerServiceCallout from "./components/CustomerServiceCallout";
import Testimonial from "./components/Testimonial";
import ProductsCallout from "./components/ProductsCallout";
import ProductCard from "./components/ProductCard";
import ContactCallout from "./components/ContactCallout";
import Hero from "./components/Hero";

export default function Home() {
  const router = useRouter()

  const productsTitle = "Products";
  const productsParagraph = "Our pride and dedication to quality Italian foods led us to create our own family of brands which we have been developing over the decades. Each of our family brands represents a commitment to quality, flavor and consistency."

  const testimonials = [
    {
      quote: `"I have been a customer of Sofo Foods for over 60 years, and they have provided me with great service in addition to helping my business be a success. I feel like family with Sofo Foods!"`,
      title: "Frank Incorvaia Sr. Owner | Inky's Italian Foods"
    },
    {
        quote: `"We have been a customer of Sofo Foods for many years. The pride and dedication that Sofo Foods has for my business truly shines through its sales representatives."`,
        title: "Kim Morrison Moran, Owner | Sal's Italian Restaurant"
      },
      {
        quote: `"Mancino's Pizza & Grinders "Sofo Foods has been our main food supplier since we opened in 1997 and we feel our success is significantly influenced by our service and product from them."`,
        title: "Wayne and Sandy Braun, Owners | Mancino's Pizza and Grinders of Alma, Michigan"
      },
  ];

  const heroTitle = "Quality Ingredients, Dependable Service";

  const welcomeParagraph = `With over 75 years of experience, Sofo Foods is one of the Midwest's largest family-owned foodservice distributor. 
              Our deep roots in Italian cuisine have expanded over the decades, allowing us to supply a diverse range of top-quality food products to restaurants of all kinds. 
              As a family-operated business, our dedication to exceptional quality and service is unmatched in the industry.`
  
  const welcome = (
    <section className="flex justify-center items-center bg-tan h-[500px] md:h-[603px] overflow-hidden">
      <div className="flex flex-col w-[342px] md:w-[764px] justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <Text variant="paragraphSans" className="text-red uppercase font-bold">Welcome</Text>
          <Text variant="headline" className="uppercase">- Hello from Sofo -</Text>
          <span className="md:hidden flex flex-col gap-8">
            <Text variant="paragraph" className="text-darkest/70">{welcomeParagraph}</Text>
          </span>
          <span className="hidden md:flex flex-col gap-8">
            <Text variant="paragraphL" className="text-darkest/70">{welcomeParagraph}</Text>
          </span>
        </div>
        <div className="flex flex-row gap-6">
          <span className="inline-flex">
            <Button onClick={() => router.push('/about')} variant="transparentBlack">About sofo</Button>
          </span>
          <span className="inline-flex">
            <Button onClick={() => router.push('/history')} variant="transparentBlack">Our history</Button>
          </span>
        </div>
      </div>
    </section>
  )

  const productsNames = [
      "bread",
      "cheese",
      "meat",
      "dairy",
      "produce",
      "deli"
  ]

  const products = (
    <div className="flex flex-col items-center justify-center my-8 md:my-20">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 max-w-screen-xl">
          {productsNames.map((name, index) => (
              <div key={index} className="flex justify-center items-center">
                  <ProductCard name={name}/>
              </div>
          ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 my-16">
          <Text variant="paragraphL" className="text-darkest/70"> Check out our full product listing</Text>
          <Button onClick={() => router.push('/products')} variant="transparentBlack">all products</Button>
      </div>
    </div>
  )

  return (
    <div>
      <Header />
      <Hero
        variant="double"
        title={heroTitle}
        firstButtonText="Online order signup"
        firstButtonVariant="redText"
        firstButtonRoute="/contact"
        secondButtonText="Our products"
        secondButtonVariant="redText"
        secondButtonRoute="/products"
      />
        {welcome}
        <BrandsCallout />
        <ProductsCallout variant="single" title={productsTitle} paragraph={productsParagraph} firstButtonText="All products" firstButtonVariant="red" firstButtonRoute="/products" />
          {products}
        <Testimonial testimonials={testimonials} />
        <CustomerServiceCallout />
        <ContactCallout />
      <Footer />
    </div>
  );
}
