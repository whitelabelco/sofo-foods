import ProductsSidebar from "@/app/components/ProductsSidebar";
import Hero from "@/app/components/Hero";
import ProductContent from "@/app/components/ProductContent";
import ContactCallout from "@/app/components/ContactCallout";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const Poultry = () => {

    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget bibendum nunc. Donec nec erat ac libero ultrices aliquam. Nullam nec commodo tortor. Sed nec purus in purus tincidunt fermentum."

    const products = [
        "Fresh Mozz",
        "Bulk A&M",
        "Mozz & Sub",
        "Brick/Muen/Pizza",
        "Provolone",
        "Cheddar/Colby",
        "Mont Jack",
        "Swiss",
        "Private Label",
        "Sliced Natural",
        "Shredded Stock A&M",
        "Shred Special Order",
        "Shred & Diced-Branded (non A&M)",
        "Yellow Shred/Diced",
        "Diced Stock A&M",
        "Frozen",
        "Diced Special Order – Use proprietary code",
        "Proprietary Blnd – Use proprietary code",
        "Retail Shredded",
        "Process/Amer/Swiss",
        "Cream",
        "Cottage & Sour Cream",
        "Specialty Domestic",
        "Specialty Imported",
        "Retail RW",
        "Parmesan",
        "Romano",
        "Parm/Romano Blends",
        "Feta",
        "Ricotta",
        "Retail Grated",
        "Dairy – Milk",
        "Whipped Cream",
        "Butter & Margarine (Portions)",
        "Butter & Margarine 1 LB",
        "Butter & Margarine (Bulk)"
    ];

    return (
        <div>
            <Header />
            <Hero variant="single" title="Poultry" firstButtonVariant="blackText" firstButtonRoute="/order" firstButtonText="Place an Order" className="bg-[url('/products/poultry.webp')] bg-cover bg-no-repeat bg-center" titleColor="text-white" overlay />
            <section className="flex flex-col md:flex-row justify-center gap-12 xl:gap-28 mx-4">
                <ProductsSidebar />
                <ProductContent headline="Headline" content={content} products={products}/>
            </section>
            <ContactCallout />
            <Footer />
        </div>
    );

}

export default Poultry;