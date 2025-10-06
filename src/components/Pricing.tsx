import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "1,999",
      description: "Perfect for small businesses just getting started",
      features: [
        "Logo Design",
        "Basic Brand Guidelines",
        "3 Social Media Templates",
        "Business Card Design",
        "1 Revision Round",
        "2 Week Delivery",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "4,999",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Complete Brand Identity",
        "Comprehensive Brand Guidelines",
        "10 Social Media Templates",
        "Marketing Collateral",
        "Website Design (5 pages)",
        "3 Revision Rounds",
        "Priority Support",
        "4 Week Delivery",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "9,999",
      description: "Full-scale solutions for established companies",
      features: [
        "Premium Brand Identity",
        "Advanced Brand Strategy",
        "Unlimited Social Templates",
        "Full Marketing Suite",
        "Custom Website (Unlimited pages)",
        "Video Production",
        "Unlimited Revisions",
        "24/7 Support",
        "6 Week Delivery",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-secondary via-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="mb-6">
            Our <span className="text-gradient">Pricing</span> Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent, flexible pricing designed to fit your budget and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.highlighted
                  ? "card-elegant border-2 border-primary scale-105 shadow-card-hover"
                  : "card-elegant"
              } hover-lift`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-accent">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-primary">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="accent" size="lg">
            Contact Us for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
