import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  FileText,
  Shield,
  CreditCard,
  Bell,
  Lock,
  Database,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Appointment Management",
      description: "AI-powered scheduling with WhatsApp reminders and multi-language support",
      benefits: ["Reduce wait times by 60%", "WhatsApp & SMS alerts", "Hindi, English, Regional languages"],
      status: "live"
    },
    {
      icon: FileText,
      title: "Digital Prescription System",
      description: "Electronic prescriptions with drug interaction checks and local pharmacy network",
      benefits: ["Eliminate prescription errors", "Drug interaction alerts", "Local pharmacy integration"],
      status: "live"
    },
    {
      icon: Shield,
      title: "Ayushman Bharat Integration",
      description: "Seamless integration with government health schemes and cashless treatment",
      benefits: ["Instant eligibility check", "Cashless treatment", "Direct scheme settlement"],
      status: "live"
    },
    {
      icon: Lock,
      title: "Data Protection & Privacy",
      description: "Government-compliant security with biometric authentication and OTP verification",
      benefits: ["Aadhaar integration", "OTP verification", "Government data standards"],
      status: "live"
    },
    {
      icon: Database,
      title: "Unified Health Records",
      description: "Centralized patient data with cross-hospital sharing and emergency access",
      benefits: ["Complete medical history", "Emergency data access", "Cross-hospital sharing"],
      status: "live"
    },
    {
      icon: Globe,
      title: "Multi-Hospital Network",
      description: "Scalable architecture supporting rural clinics to metro hospital chains across India",
      benefits: ["Pan-India connectivity", "Rural-urban bridge", "Telemedicine support"],
      status: "coming-soon"
    }
  ];

  const securityFeatures = [
    "Aadhaar-based authentication",
    "OTP & biometric verification", 
    "Government data compliance",
    "Digital India standards",
    "Encrypted health records",
    "Multi-language support"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features Grid */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            Core Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Digital Healthcare for India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every tool you need to manage healthcare efficiently across urban and rural India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="relative overflow-hidden hover:shadow-elevated transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-medical">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge 
                      variant={feature.status === 'live' ? 'default' : 'secondary'}
                      className={feature.status === 'live' ? 'bg-success' : ''}
                    >
                      {feature.status === 'live' ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Live
                        </>
                      ) : (
                        <>
                          <Zap className="w-3 h-3 mr-1" />
                          Coming Soon
                        </>
                      )}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-destructive text-destructive">
              <Lock className="w-3 h-3 mr-1" />
              Government Compliance
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Digital India Healthcare Standards
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Your patients' data is protected by government-approved security standards. 
              Every interaction follows Digital India guidelines with Aadhaar integration and multi-language support.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <Shield className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-0 shadow-elevated">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white shadow-medical mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl">Compliance Certification</CardTitle>
              <CardDescription>
                Certified by Government of India and healthcare regulatory bodies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Digital India</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">GOI</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;