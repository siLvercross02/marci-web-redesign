// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ArticleSection from "./components/ArticleSection";
import ListingSection from "./components/ListingSection";
import PartnerSection from "./components/PartnerSection";
import ServicesSection from "./components/ServicesSection";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="site-shell">
        {/* Navigation */}
        <Header />
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Article Section */}
          <ArticleSection />

          {/* Listing Section */}
          <ListingSection />

          {/* Partners Section */}
          <PartnerSection />

          {/* Carousel Section */}
          <Carousel />

          {/* Services Section */}
          <ServicesSection />

          {/* Contact Section */}
          <Contact />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
