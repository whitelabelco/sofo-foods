import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HistoryImageBanner from "../components/HistoryImageBanner";
import Text from "../components/Text";

export default function History() {
    const heroTitle = "History"
    const heroParagraph = "Going strategies identify in framework evolved keeping day offline. Mentality indicators your robust agile inside devops."

    const placeholder = "Key a real ballpark content identify foster capitalize. That bring taking workflows via with iterative loop has day overviews survival user beta ball. Framework keeping bring digital in inside heading immersion collaborative holistic information survival generated. Holistic overviews solely frameworks devops hanging iterative low grow beta going robust generated with. Collaborative close new clickthroughs time iterative high new information strategies level strategy offshoring digital."

    const sections = [
      {
        background: "bg-[url(/images/1920-1963.webp)]",
        date: "1920-1963",
        gallery: "/images/gallery-1920-1963.webp",
        headline: "Bringing Italy to Ohio",
        firstParagraph: "In the 1920s, Antonio Sofo embarked on a journey from Bagnara Calabria, Italy, arriving in the United States aboard the Dante Alighieri. Settling in Toledo, Ohio, Antonio was driven by a passion to bring the authentic flavors of his homeland to the local Italian community.By the 1940s, Antonio began pursuing this passion in earnest by selling traditional Italian foods throughout Toledo. On weekends, he would travel to Detroit to procure essentials like cheeses, salami, and olive oil, offering locals a nostalgic taste of the old country. As Italian pizzerias and restaurants started to flourish within the community, Antonio, alongside his son Joe, recognized an opportunity to support these growing businesses. This led to the establishment of the Sofo Foods wholesale distribution company, dedicated to supplying high-quality Italian products across the region.",
        secondParagraph: "In 1956, after returning from service in the Korean War, Joseph Sofo joined forces with his father to expand the family's culinary enterprise. They opened the first Sofo Foods retail store on the 2300 block of Monroe Street, near the Toledo Museum of Art, which quickly became a beloved destination for authentic Italian groceries. Later that year, the store relocated to 3253 Monroe Street, near Swayne Field, featuring Joe's office situated above and a repurposed semi-truck behind the building serving as freezer and cooler storage.The family business continued to grow, and in 1963, Sofo Foods acquired their first warehouse on Cardinal Road in Toledo. This facility was utilized for storing essential supplies such as cardboard pizza circles and pizza boxes, supporting the expanding network of Italian eateries they served. Tragically, in 1960, the Sofo family and the wider community mourned the loss of their patriarch, Antonio Sofo, whose legacy of sharing and celebrating Italian cuisine continued to thrive through the foundations he had laid."
      },
      {
        background: "bg-[url(/images/1964-1985.webp)]",
        date: "1964-1985",
        gallery: "/images/gallery-1920-1963.webp",
        headline: "From Upton Ave to Everywhere",
        firstParagraph: "By 1975, Sofo Foods introduced its first branded products, which included staples like cheese, tomatoes, and salami. This marked a significant milestone for the company, showcasing their commitment to providing high-quality, authentic Italian ingredients. The following year, the third generation of the Sofo family, Mike and Tony Sofo, began taking on responsibilities within the company, continuing the legacy their grandfather had started.With Mike and Tony now deeply involved in the family business, Joe Sofo Sr. began envisioning the future of Sofo Foods. In 1985, his dream became a reality with the opening of a new Sofo’s retail store at 5400 Monroe Street in Toledo. This expansion not only catered to the growing demand for Italian products but also solidified Sofo Foods as a beloved local institution.",
        secondParagraph: "In addition to the retail business, Joe Sr. established A&M Cheese Company in a building on Upton Avenue. This new venture specialized in shredding and dicing blocks of cheese for pizzerias and was among the first to offer custom-blended pizza cheese, furthering Sofo Foods’ reputation for innovation and quality. By this time, the wholesale distribution side of the business, which served pizzerias and restaurants across Ohio, Michigan, and Indiana, had grown to represent 75% of the company’s operations.In the early 1980s, Sofo Foods expanded further by purchasing a building on Belmont Avenue to serve as a warehouse and office space for the distribution business. This growth continued into 1986 when Sofo Box Company was established, allowing the family business to offer custom-printed pizza boxes to their customers, enhancing their comprehensive service to the Italian food industry."
      },
      {
        background: "bg-[url(/images/1986-1995.webp)]",
        date: "1986-1995",
        gallery: "/images/gallery-1986-1995.webp",
        headline: "The Sofo Family Legacy Continues",
        firstParagraph: "In 1989, Sofo Foods made a significant move, relocating its corporate office from Belmont Avenue to 253 Waggoner Boulevard. This transition marked the beginning of the company's most substantial growth period, as the warehouse distribution followed suit. With this expansion, Sofo Foods increased its reach, extending its distribution network across Ohio, Michigan, Indiana, and Kentucky.The following year, in 1990, Sofo Foods hosted its first Expo at the Hotel Sofitel on Summit Street, an event that brought together customers and partners to celebrate the company’s progress. As part of the Expo, an open house was held at the new office and warehouse, offering customers a chance to tour the modern facility and witness the advancements in Sofo Foods' operations.",
        secondParagraph: "During this period of growth, Mike and Tony Sofo's younger brother, Joe Sofo Jr., joined the family business, further strengthening the family’s involvement in its operations. One of the notable innovations from this era was the development and introduction of Misto D'oro cheese, a unique pizza cheese blend known for its distinctive flavor and golden color. This product quickly became the company’s most popular pizza cheese blend, cementing Sofo Foods' reputation for quality and innovation in the industry.In 1995, the Sofo family and the company faced the loss of Joe Sofo Sr., whose legacy of dedication and passion for the business continued to guide the family and the company as they moved forward. His contributions laid a strong foundation for Sofo Foods, which remained committed to upholding the traditions he established."
      },
      {
        background: "bg-[url(/images/2006-2015.webp)]",
        date: "2006-2015",
        gallery: "/images/gallery-2006-2015.webp",
        headline: "Sofo Foods Expands Reach",
        firstParagraph: placeholder,
        secondParagraph: placeholder
      },
      {
        background: "bg-[url(/images/2016-present.webp)]",
        date: "2016-Present",
        headline: "Headline",
        firstParagraph: placeholder,
        secondParagraph: placeholder
      }
    ]
    
    const contentTextColor = "text-darkest/70";

    const pageContent = 
      sections.map((section) => {
        return (
          <>
            <HistoryImageBanner background={section.background} date={section.date} gallery={section.gallery} />
              <section className="flex ml-4 justify-center items-center pt-4 pb-20 overflow-hidden">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:w-4/5 max-w-screen-2xl">
                  <div className="flex flex-col space-y-4 md:space-y-8 lg:hidden">
                    <Text variant="paragraphL" className={contentTextColor}>{section.headline}</Text>
                    <Text variant="paragraphL" className={contentTextColor}>{section.firstParagraph}</Text>
                  </div>
                  <div className="flex sm:pl-12 sm:pt-12 md:pt-16 lg:hidden">
                    <Text variant="paragraphL" className={contentTextColor}>{section.secondParagraph}</Text>
                  </div>
              
                  <div className="hidden lg:flex lg:flex-row">
                    <div className="flex w-1/3">
                      <Text variant="paragraphL" className={contentTextColor}>{section.headline}</Text>
                    </div>
                    <div className="flex w-2/3 space-x-8">
                      <Text variant="paragraphL" className={contentTextColor}>{section.firstParagraph}</Text>
                      <Text variant="paragraphL" className={contentTextColor}>{section.secondParagraph}</Text>
                    </div>
                  </div>
                </div>
              </section>
          </>
        )
      })
    

    return (
      <div>
      <Header />
      <Hero variant="base" title={heroTitle} paragraph={heroParagraph} />
        {pageContent}
      <ContactCallout />
      <Footer />
    </div>
    );
  }