import { Target, Lightbulb, Zap, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description: "Data-driven strategies tailored to achieve your business goals",
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Fresh, original ideas that make your brand stand out",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized excellence in design and marketing",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Talented professionals dedicated to your success",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of driving growth for our clients",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="mb-6">
            Where Your <span className="text-gradient">Dream Designs</span> Come to Reality
          </h2>
          <p className="text-lg text-muted-foreground">
            We're a passionate team of designers, marketers, and strategists committed to transforming brands through creative excellence and innovative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
          <div
            key={index}
            className="card-elegant hover-lift group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all bg-gradient-accent group-hover:bg-white">
              <feature.icon className="w-8 h-8 text-white group-hover:text-[#004AC3] transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
