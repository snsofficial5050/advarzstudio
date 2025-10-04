import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Creative Marketing Agency</span>
            </div>

            <h1 className="text-foreground leading-tight">
              Transform Your Brand with{" "}
              <span className="text-gradient">Creative Excellence</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              We craft stunning visual identities and marketing strategies that elevate your business and captivate your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={() => scrollToSection("#contact")}>
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="xl" onClick={() => scrollToSection("#portfolio")}>
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Creative marketing and design illustration"
                className="w-full h-auto rounded-3xl shadow-2xl hover-lift"
              />
            </div>
            {/* Decorative Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-2xl rotate-12 opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(var(--card))"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
