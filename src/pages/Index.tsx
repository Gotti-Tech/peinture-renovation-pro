
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import InteractiveMap from "@/components/InteractiveMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <BeforeAfterGallery />
      <Testimonials />
      <QuoteForm />
      <InteractiveMap />
      <Footer />
    </div>
  );
};

export default Index;
