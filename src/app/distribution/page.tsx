import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "next/image";
import Text from "../components/Text";
import HeadquartersGrid from "../components/HeadquartersGrid";

export default function Distribution() {
    const heroTitle = "Distribution"
    const heroParagraph = "Give us a call and talk to a person."

    const map = (
      <section className="flex flex-row justify-center items-center bg-lightest-blue h-[232px] sm:h-[440px] lg:h-[720px] overflow-hidden lg:my-20">
        <div className="flex flex-row lg:max-w-screen-2xl">
          <Image className="max-w-none rounded-lg object-cover w-[324px] sm:w-[762px] lg:w-[1100px]" src="/images/map.webp" alt="Distribution Map" width={1200} height={1200} />
        </div>
        </section>
    )

    const contentplaceholder = "Is forward performance loop immersion highway bottom eye inside day fruit convergence identify has world. Forward thinking focusing win.";

    const contentTextColor = "text-darkest/70";
    const headline = (<Text variant="paragraphL" className={contentTextColor}>Headline</Text>);
    const paragraph = (<Text variant="paragraphL" className={contentTextColor}>{contentplaceholder}</Text>);

    const contentSection = (
      <section className="flex ml-4 justify-center items-center py-4 sm:h-[440px] lg:h-[340px] overflow-hidden">
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:w-4/5 max-w-screen-2xl">
          <div className="flex flex-col space-y-4 md:space-y-8 lg:hidden">
            {headline}
            {paragraph}
          </div>
          <div className="flex sm:pl-12 sm:pt-12 md:pt-16 lg:hidden">
            {paragraph}
          </div>
      
          <div className="hidden lg:flex lg:flex-row">
            <div className="flex w-1/3">
              {headline}
            </div>
            <div className="flex w-2/3 space-x-8">
              {paragraph}
              {paragraph}
            </div>
          </div>
        </div>
      </section>
    );

    return (
      <div>
      <Header />
      <Hero variant="single" title={heroTitle} paragraph={heroParagraph} firstButtonText="Get in touch" firstButtonVariant="red" firstButtonRoute="/contact" />
        {map}
        {contentSection}
      <HeadquartersGrid />
      <ContactCallout />
      <CareersCallout />
      <Footer />
    </div>
    );
  }