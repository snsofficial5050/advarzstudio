import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: "all", label: "All Work" },
    { id: "branding", label: "Branding" },
    { id: "web", label: "Web Design" },
    { id: "marketing", label: "Marketing" },
  ];

  const projects = [
    {
      id: 1,
      title: "Tech Startup Brand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      color: "from-[#004AC3] to-[#011880]",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      color: "from-[#0052D6] to-[#002E80]",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      color: "from-[#0066FF] to-[#003D99]",
    },
    {
      id: 4,
      title: "Restaurant Rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      color: "from-[#004AC3] to-[#001A66]",
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "web",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      color: "from-[#0057E6] to-[#002D73]",
    },
    {
      id: 6,
      title: "Product Launch",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-[#0061F2] to-[#00338C]",
    },
    {
      id: 7,
      title: "Fashion Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      color: "from-[#0048B8] to-[#001F5C]",
    },
    {
      id: 8,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "from-[#005CE6] to-[#003380]",
    },
    {
      id: 9,
      title: "Email Marketing Series",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      color: "from-[#0063F5] to-[#003699]",
    },
    {
      id: 10,
      title: "Coffee Shop Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      color: "from-[#004DBF] to-[#00236B]",
    },
    {
      id: 11,
      title: "Portfolio Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      color: "from-[#0055D9] to-[#002B70]",
    },
    {
      id: 12,
      title: "Influencer Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      color: "from-[#0069FF] to-[#003B99]",
    },
    {
      id: 13,
      title: "Luxury Hotel Brand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      color: "from-[#004AC3] to-[#011880]",
    },
    {
      id: 14,
      title: "Fintech Mobile App",
      category: "web",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
      color: "from-[#0052D6] to-[#002E80]",
    },
    {
      id: 15,
      title: "Content Marketing Strategy",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      color: "from-[#0066FF] to-[#003D99]",
    },
    {
      id: 16,
      title: "Wellness Brand Identity",
      category: "branding",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      color: "from-[#004AC3] to-[#001A66]",
    },
    {
      id: 17,
      title: "Booking Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      color: "from-[#0057E6] to-[#002D73]",
    },
    {
      id: 18,
      title: "SEO Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
      color: "from-[#0061F2] to-[#00338C]",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 9);

  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 fade-in-up">
          <h2 className="mb-6">
            Some <span className="text-gradient">Projects</span> We Completed
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of our recent work and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-accent text-white shadow-accent"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all cursor-pointer hover-lift animate-fade-in"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}>
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm uppercase tracking-wider opacity-90">
                    {categories.find((c) => c.id === project.category)?.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        {filteredProjects.length > 9 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-medium bg-gradient-accent text-white shadow-accent hover:shadow-accent-hover transition-all hover-lift"
            >
              {showAll ? "View Less" : `View More (${filteredProjects.length - 9} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
