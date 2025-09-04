import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, FileText } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <Heart className="w-4 h-4 mr-2" />
              Trusted Healthcare Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Smart Healthcare &{" "}
              <span className="bg-gradient-to-r from-secondary to-secondary-soft bg-clip-text text-transparent">
                Insurance
              </span>{" "}
              Support System
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
              Seamlessly manage hospital visits, doctor consultations, prescriptions, and insurance claims. 
              One platform for patients, doctors, and administrators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <Heart className="w-5 h-5 group-hover:text-secondary transition-colors" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 animate-bounce-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-white/70 text-sm">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Doctors</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Healthcare professionals using digital technology" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -left-6 top-20 p-4 bg-white shadow-elevated animate-bounce-soft">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Insurance Verified</div>
                  <div className="text-xs text-muted-foreground">Claim Approved</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -right-6 bottom-20 p-4 bg-white shadow-elevated animate-bounce-soft">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Prescription Ready</div>
                  <div className="text-xs text-muted-foreground">Dr. Johnson</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;