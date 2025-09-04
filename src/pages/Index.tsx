import Navbar from "@/components/healthcare/Navbar";
import HeroSection from "@/components/healthcare/HeroSection";
import PortalCards from "@/components/healthcare/PortalCards";
import FeatureShowcase from "@/components/healthcare/FeatureShowcase";
import DashboardPreview from "@/components/healthcare/DashboardPreview";
import Footer from "@/components/healthcare/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortalCards />
      <FeatureShowcase />
      <DashboardPreview />
      <Footer />
    </div>
  );
};

export default Index;
