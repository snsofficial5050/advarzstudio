import { Palette, Megaphone, Code, Video, PenTool, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity packages including logo, color palette, typography, and style guides",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Stationery Design"],
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive marketing campaigns that drive engagement and convert leads into customers",
      features: ["Social Media", "Content Strategy", "SEO Optimization", "Email Campaigns"],
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Beautiful, responsive websites that deliver exceptional user experiences",
      features: ["UI/UX Design", "Responsive Design", "Custom Development", "E-commerce"],
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Engaging video content that tells your story and captivates your audience",
      features: ["Promotions Ads", "Reels Editing", "Campaign Short Editing", "Full Video Editing"],
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Eye-catching visuals for all your marketing and branding needs",
      features: ["Campaign Ads Design", "Social Media Visuals", "Print Materials", "Brand Visual Design"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Data-driven insights to optimize your marketing performance",
      features: ["Performance Tracking", "Market Research", "Competitor Analysis", "Growth Strategy"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-secondary via-background to-muted relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to elevate your brand and drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elegant hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-[#004AC3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center fade-in">
          <Button variant="hero" size="xl">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
