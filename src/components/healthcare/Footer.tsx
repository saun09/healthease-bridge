import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Mail, Phone, MapPin, Shield, Lock, Globe } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Patient Portal", href: "#" },
        { label: "Doctor Dashboard", href: "#" },
        { label: "Admin Panel", href: "#" },
        { label: "Mobile App", href: "#" }
      ]
    },
    {
      title: "Features",
      links: [
        { label: "Appointment Management", href: "#" },
        { label: "Digital Prescriptions", href: "#" },
        { label: "Insurance Claims", href: "#" },
        { label: "Medical Records", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "API Documentation", href: "#" },
        { label: "System Status", href: "#" },
        { label: "Contact Support", href: "#" }
      ]
    },
    {
      title: "Compliance",
      links: [
        { label: "HIPAA Compliance", href: "#" },
        { label: "Security Overview", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
            <div>
              <div className="font-bold text-xl text-foreground">MedCare India</div>
              <div className="text-sm text-muted-foreground">Digital Healthcare Platform</div>
            </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming Indian healthcare with digital solutions for patients, doctors, and hospitals. 
              Integrated with Ayushman Bharat and trusted by healthcare professionals across India.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                support@medcareindia.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                1800-MEDCARE (24x7 Helpline)
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                Mumbai, Bangalore, Delhi
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Security & Compliance Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-success" />
            <span>Digital India Certified</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-success" />
            <span>Government Approved</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Globe className="w-4 h-4 text-success" />
            <span>99.9% Uptime SLA</span>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get latest updates on Digital India healthcare initiatives and platform features.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="medical">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 MedCare India. All rights reserved. Built for Digital India healthcare transformation.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;