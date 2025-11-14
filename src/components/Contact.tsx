import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary via-background to-card relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="mb-6">
            Let's Start a <span className="text-gradient">Cool Project</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your brand? Get in touch and let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input placeholder="Your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                </label>
                <Input placeholder="What can we help you with?" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button variant="hero" size="lg" type="submit" className="w-full">
                Send Message
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elegant hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#004AC3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">advarzstudio@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="card-elegant hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#004AC3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+8801634-391240</p>
                </div>
              </div>
            </div>

            <div className="card-elegant hover-lift">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#004AC3] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Visit Us</h4>
                  <p className="text-muted-foreground">Dhaka, Bangladesh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
