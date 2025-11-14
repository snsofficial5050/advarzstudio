import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import footerLogo from "@/assets/footer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" }
    ],
    Services: [
      { name: "Brand Identity", href: "#portfolio" },
      { name: "Web Design", href: "#portfolio" },
      { name: "Marketing", href: "#portfolio" }
    ],
    Resources: [
      { name: "Clients Feedback", href: "#testimonials" },
      { name: "Case Studies", href: "#about" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#about" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ]
  };
  const socialLinks = [{
    icon: Facebook,
    href: "https://www.facebook.com/advarzstudio"
  }, {
    icon: Instagram,
    href: "https://www.instagram.com/advarzstudio"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/advarzstudio/"
  }, {
    icon: Youtube,
    href: "https://www.youtube.com/@AdvarzStudio"
  }];
  return <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src={footerLogo} alt="Advarz Studio" className="h-12" />
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Transforming brands through creative excellence and innovative marketing strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.href} className="w-10 h-10 bg-background/10 hover:bg-[#004AC3] rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => <li key={link.name}>
                    <a href={link.href} className="text-background/70 hover:text-background transition-colors">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © {currentYear} Advarz Studio. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;