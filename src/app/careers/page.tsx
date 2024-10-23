import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Text from "../components/Text";

export default function Careers() {
    const heroTitle = "Careers"
    const heroParagraph = "Something about working with us."

    const contentPlaceholder = "Is forward performance loop immersion highway bottom eye inside day fruit convergence identify has world. Forward thinking focusing win.";

    const contentTextColor = "text-darkest/70";
    const headline = (<Text variant="paragraphL" className={contentTextColor}>Headline</Text>);
    const paragraph = (<Text variant="paragraphL" className={contentTextColor}>{contentPlaceholder}</Text>);

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
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
        {contentSection}
      <Footer />
    </div>
    );
  }