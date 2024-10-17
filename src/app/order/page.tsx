import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LocationCard from "../components/LocationCard";
import Form from "../components/SignUpForm";
import Text from "../components/Text";

export default function Order() {
    const heroTitle = "Sign Up for Online Ordering"
    const heroParagraph = "Brief instructions about ordering."

    const signUpSection = (
      <section className="flex flex-col md:flex-row justify-center items-center overflow-hidden mt-12 mb-32">
        <div className="flex flex-col gap-20 md:gap-0 md:flex-row items-center w-4/5 xl:w-1/2">
          <div className="flex flex-col items-center w-full md:w-2/5">
            <div className="border-b border-2 border-darkest/10 w-full mb-8 pb-4">
              <Text variant="mainNav" className="text-darkest uppercase">Sign Up</Text>
            </div>
            <Form />
          </div>
          <div className="flex flex-col items-center w-3/5 gap-4">
            <LocationCard variant="ohio" />
            <LocationCard variant="georgia" />
            <LocationCard variant="texas" />
          </div>
        </div>
      </section>

    );

    return (
      <div>
      <Header />
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
        {signUpSection}
      <Footer />
    </div>
    );
  }