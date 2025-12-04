import { Hero } from "@/components/Hero";
import { SeriesATimeTrap } from "@/components/SeriesATimeTrap";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { ROICalculator } from "@/components/ROICalculator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <SeriesATimeTrap />
      <ROICalculator />
      <About />
      <FAQ />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
