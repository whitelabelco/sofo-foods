
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
        <div className="flex h-screen items-center justify-center text-3xl py-20">Home Page</div>
      <Footer />
    </div>
  );
}
