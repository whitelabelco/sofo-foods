import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";
import BrandsCallout from "../components/BrandsCallout";
import BrandsSection from "../components/Brands";

export default function Brands() {
    const productsTitle = "Products";
    const productsParagraph = "Browse through our extensive range of products available across multiple categories, all carefully selected to meet your needs." 

    const placeholderBrandParagraph = "Quality products are the world’s best internationally sourced ingredients. Bellissimo products range from cheese, meat toppings, and tomatoes, to cleaning supplies and disposables."
    
    const houseBrandCards = [
      {brandTitle: "Antonio Original", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/antonio.webp"},
      {brandTitle: "Antonio Old World", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/antoniooldworld.webp"},
      {brandTitle: "Athena Farms", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/athenafarms.webp"},
      {brandTitle: "Belmont Dairy", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/belmontdairy.webp"},
      {brandTitle: "Gina", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/gina.webp"},
      {brandTitle: "Misto D'Oro", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/mistodoro.webp"},
      {brandTitle: "Josepes", brandParagraph: placeholderBrandParagraph, logo: "/house-brands/josepes.webp"},
    ];

    const nationalBrandCards = [
      {brandTitle: "Bellissimo", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/bellisimo.webp"},
      {brandTitle: "Vantaggio", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/vantaggio.webp"},
      {brandTitle: "Vantaggio D'Oro", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/vantaggiodoro.webp"},
      {brandTitle: "Altissima", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/altissima.webp"},
      {brandTitle: "Grande", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/grande.webp"},
      {brandTitle: "Stanislaus", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/stanislaus.webp"},
      {brandTitle: "Tesoro", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/tesoro.webp"},
      {brandTitle: "Spendida", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/spendida.webp"},
      {brandTitle: "Tyson", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/tyson.webp"},
      {brandTitle: "Smithfield", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/smithfield.webp"},
      {brandTitle: "Swift", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/swift.webp"},
      {brandTitle: "Hormel", brandParagraph: placeholderBrandParagraph, logo: "/national-brands/hormel.webp"},
    ];

    return (
      <div>
      <Header />
      <BrandsCallout backgroundImage />
      <BrandsSection sectionTitle="Our House Brands" brandCards={houseBrandCards}/>
      <BrandsSection sectionTitle="National Brands We Carry" brandCards={nationalBrandCards}/>
      <ProductsCallout variant="single" title={productsTitle} paragraph={productsParagraph} firstButtonText="All products" firstButtonVariant="red" firstButtonRoute="/products" />
      <ContactCallout />
      <Footer />
    </div>
    );
  }