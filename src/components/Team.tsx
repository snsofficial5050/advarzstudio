import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import emilyProfile from "@/assets/emily-profile.png";
import sarahProfile from "@/assets/sarah-profile.jpg";
import michaelProfile from "@/assets/michael-profile.jpg";
import davidProfile from "@/assets/david-profile.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Ferdous Hasan",
      role: "Founder & Video Editor",
      image: sarahProfile,
      bio: "Founder & CEO of Advarz Studio",
      social: {
        facebook: "https://www.facebook.com/md.hasan.296222",
        instagram: "https://www.instagram.com/ferdousmarketer/?utm_source=qr&r=nametag",
        linkedin: "https://www.linkedin.com/in/ferdous-hasan-648b5a2a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      }
    },
    {
      name: "NH Nabil",
      role: "Creative Lead",
      image: michaelProfile,
      bio: "Crafting brand narratives through strategic visuals",
      social: {
        facebook: "https://www.facebook.com/designernhnabil.art",
        instagram: "https://www.instagram.com/designernhnabil/",
        linkedin: "#"
      }
    },
    {
      name: "Shahriar Nayem Suny",
      role: "Sr. Visualizer",
      image: emilyProfile,
      bio: "Visual Storyteller, Skilled in brand visuals",
      social: {
        facebook: "https://www.facebook.com/shahriarnayemsuny",
        instagram: "https://www.instagram.com/shahriarnayemsuny/",
        linkedin: "https://www.linkedin.com/in/shahriarnayemsuny/"
      }
    },
    {
      name: "Antar Bala",
      role: "Sr. Visualizer",
      image: davidProfile,
      bio: "Senior Graphic Designer at Advarz Studio",
      social: {
        facebook: "https://www.facebook.com/antar.bala.2024",
        instagram: "https://www.instagram.com/antarbala7/",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center fade-in mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Creative Minds
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-elegant p-6 text-center hover-lift"
            >
              <div className="mb-6 flex justify-center">
                <Avatar className="h-32 w-32 border-4 border-primary/20">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.social.facebook}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={member.social.instagram}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
