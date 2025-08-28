import React from "react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "Changelog", "Documentation"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Partners", "Blog"]
    },
    {
      title: "Resources",
      links: ["Community", "Help Center", "Support", "API", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"]
    }
  ];

  return (
    <footer className="bg-content2 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-md p-1.5">
                <Icon icon="lucide:layers" className="text-white text-xl" />
              </div>
              <span className="font-semibold text-xl text-foreground">Nexus</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Empowering businesses with intelligent solutions that drive growth, enhance efficiency, and deliver exceptional customer experiences.
            </p>
            <div className="flex gap-4">
              {["lucide:twitter", "lucide:facebook", "lucide:instagram", "lucide:linkedin"].map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2 rounded-full bg-default/10 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={`Social media link ${i+1}`}
                >
                  <Icon icon={icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Nexus Business Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};