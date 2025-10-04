import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 4,
      title: "Restaurant Rebrand",
      category: "branding",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "web",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Product Launch",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
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
      </div>
    </section>
  );
};

export default Portfolio;
