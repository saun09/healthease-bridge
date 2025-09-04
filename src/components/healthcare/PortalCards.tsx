import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Stethoscope, 
  Settings, 
  Calendar, 
  FileText, 
  Shield,
  Heart,
  ClipboardList,
  Users,
  TrendingUp,
  ChevronRight
} from "lucide-react";

const PortalCards = () => {
  const portals = [
    {
      title: "Patient Portal",
      description: "Manage your health records, appointments, and Ayushman Bharat benefits in one secure place",
      icon: User,
      gradient: "bg-gradient-primary",
      features: [
        "Digital Health Records",
        "Online Appointment Booking",
        "E-Prescription Access",
        "Ayushman Bharat Integration",
        "Bill Payment & GST"
      ],
      stats: { users: "10,000+", satisfaction: "98%" }
    },
    {
      title: "Doctor Dashboard", 
      description: "Comprehensive tools for patient care, digital prescriptions, and medical record management",
      icon: Stethoscope,
      gradient: "bg-gradient-secondary",
      features: [
        "Patient Management System",
        "Digital Prescription Pad",
        "Treatment & Follow-up Notes",
        "Clinic Appointment Calendar",
        "Medical Council Integration"
      ],
      stats: { doctors: "500+", efficiency: "+40%" }
    },
    {
      title: "Admin Control Panel",
      description: "Hospital management, billing with GST compliance, and government scheme integration",
      icon: Settings,
      gradient: "bg-gradient-card",
      features: [
        "Multi-Hospital Management",
        "GST Billing & Compliance",
        "Government Scheme Claims",
        "Staff & Resource Planning",
        "Analytics & MIS Reports"
      ],
      stats: { hospitals: "25+", claims: "99.9%" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Multi-Role Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Three Portals, One Digital India Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed for patients, healthcare professionals, and administrators across India. 
            Each portal integrates with government schemes and Indian healthcare standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <Card 
                key={portal.title}
                className="relative overflow-hidden hover:shadow-elevated transition-all duration-300 group border-0 shadow-card"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${portal.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${portal.gradient} flex items-center justify-center text-white shadow-medical`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Active {index === 0 ? 'Patients' : index === 1 ? 'Doctors' : 'Hospitals'}</div>
                      <div className="font-bold text-primary">{Object.values(portal.stats)[0]}</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{portal.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {portal.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="space-y-3 mb-6">
                    {portal.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Success Rate: </span>
                      <span className="font-semibold text-success">{Object.values(portal.stats)[1]}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Growing
                    </Badge>
                  </div>

                  <Button 
                    variant="medical" 
                    className="w-full group"
                    size="sm"
                  >
                    Access {portal.title}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortalCards;