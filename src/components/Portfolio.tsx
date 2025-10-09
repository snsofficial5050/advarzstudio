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
      title: "Advarz Studio Full Brand Identity Design",
      category: "branding",
      image: "https://i.postimg.cc/QxLd9DZQ/Cover.jpg",
      link: "https://www.behance.net/gallery/226996267/Advarz-Studio-Full-Brand-Identity-Design",
      color: "from-[#004AC3] to-[#011880]",
    },
    {
      id: 2,
      title: "Gadget Ads Campaign Banner",
      category: "marketing",
      image: "https://i.postimg.cc/Y00DMZ8y/05.jpg",
      link: "https://www.behance.net/gallery/234793933/Gadget-Ads-Campaign-Banner-for-KRY-INTERNATIONAL",
      color: "from-[#0052D6] to-[#002E80]",
    },
    {
      id: 3,
      title: "Organic Food Social Media Creative Ads",
      category: "marketing",
      image: "https://i.postimg.cc/K8xqY19H/4-1-1.jpg",
      link: "https://www.behance.net/gallery/214654759/Organic-Food-Social-Media-Creative-Ads-Design",
      color: "from-[#0066FF] to-[#003D99]",
    },
    {
      id: 4,
      title: "Edtech E-Learning Social Media Ads",
      category: "marketing",
      image: "https://i.postimg.cc/SshJ0pQ7/thumb17.jpg",
      link: "https://www.behance.net/gallery/221117629/Edtech-E-Learning-Social-Media-Ads-Skill-Sphere",
      color: "from-[#004AC3] to-[#001A66]",
    },
    {
      id: 5,
      title: "EdTech Social Media Creative Ads",
      category: "marketing",
      image: "https://i.postimg.cc/rpqv7nXD/thumb9.png",
      link: "https://www.behance.net/gallery/214807127/EdTech-Social-Media-Creative-Ads-Skill-Sphere",
      color: "from-[#0057E6] to-[#002D73]",
    },
    {
      id: 6,
      title: "EdTech Social Media Design",
      category: "marketing",
      image: "https://i.postimg.cc/qvQTBVGt/thumb12.png",
      link: "https://www.behance.net/gallery/215967743/EdTech-Social-Media-Design-Data-Solution-360",
      color: "from-[#0061F2] to-[#00338C]",
    },
    {
      id: 7,
      title: "Fashion Visual Identity Design",
      category: "branding",
      image: "https://i.postimg.cc/wMtvLxwp/B-1.jpg",
      link: "https://www.behance.net/gallery/229736177/Fashion-Visual-Identity-Design-for-Fabrilife",
      color: "from-[#0048B8] to-[#001F5C]",
    },
    {
      id: 8,
      title: "Coffee Advertising Design Concept",
      category: "marketing",
      image: "https://i.postimg.cc/TPYWhxMQ/B-P-08.jpg",
      link: "https://www.behance.net/gallery/227389975/Coffee-Advertising-Design-Concept-Art",
      color: "from-[#005CE6] to-[#003380]",
    },
    {
      id: 9,
      title: "Creative Healthcare Ad Posts",
      category: "marketing",
      image: "https://i.postimg.cc/YC2Szxnv/19.jpg",
      link: "https://www.behance.net/gallery/223075109/Creative-Healthcare-Ad-Posts",
      color: "from-[#0063F5] to-[#003699]",
    },
    {
      id: 10,
      title: "Pustighar Cerelac Smart Nutrition",
      category: "marketing",
      image: "https://i.postimg.cc/JzdRcCBW/SAVE-20250727-224932.jpg",
      link: "https://www.behance.net/gallery/231202641/Pustighar-Cerelac-Smart-Nutrition-for-Smart-Kids",
      color: "from-[#004DBF] to-[#00236B]",
    },
    {
      id: 11,
      title: "Bakery Food Social Media Post",
      category: "marketing",
      image: "https://i.postimg.cc/bY6VvYXz/12-1-1.jpg",
      link: "https://www.behance.net/gallery/220907155/Bakery-Food-Social-Media-Post-Design",
      color: "from-[#0055D9] to-[#002B70]",
    },
    {
      id: 12,
      title: "Creative Advertising Banner Design",
      category: "marketing",
      image: "https://i.postimg.cc/4xFhKMfZ/thumb18.jpg",
      link: "https://www.behance.net/gallery/226325745/Creative-Advertising-Banner-Design-Freelance-GURU",
      color: "from-[#0069FF] to-[#003B99]",
    },
    {
      id: 13,
      title: "Carousel Social Media Post",
      category: "marketing",
      image: "https://i.postimg.cc/0jLB2Z6v/thumbnail3.png",
      link: "https://www.behance.net/gallery/216780973/Carousel-Social-Media-Post-Instagram-LinkedIn",
      color: "from-[#004AC3] to-[#011880]",
    },
    {
      id: 14,
      title: "Carousel Post Design",
      category: "marketing",
      image: "https://i.postimg.cc/FHmQysKw/thumbnail-1.jpg",
      link: "https://www.behance.net/gallery/216330071/Carousel-Post-Design-LinkedIn-Instagram",
      color: "from-[#0052D6] to-[#002E80]",
    },
    {
      id: 15,
      title: "Carousel Social Media Post",
      category: "marketing",
      image: "https://i.postimg.cc/7P7cK8dt/thumbnail2.jpg",
      link: "https://www.behance.net/gallery/216462429/Carousel-Social-Media-Post-LinkedIn-Instagram",
      color: "from-[#0066FF] to-[#003D99]",
    },
    {
      id: 16,
      title: "EdTech Social Media Ads",
      category: "marketing",
      image: "https://i.postimg.cc/jjtdS4NY/0ebea2209161199-66faf457ad4e2.png",
      link: "https://www.behance.net/gallery/209161199/EdTech-Social-Media-Ads-CodersTrust-Bangladesh",
      color: "from-[#004AC3] to-[#001A66]",
    },
    {
      id: 17,
      title: "EdTech Social Media Design",
      category: "marketing",
      image: "https://i.postimg.cc/05M63ZCR/thumb3.jpg",
      link: "https://www.behance.net/gallery/209775013/EdTech-Social-Media-Design-ROOTs-Edu",
      color: "from-[#0057E6] to-[#002D73]",
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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all cursor-pointer hover-lift animate-fade-in block"
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
            </a>
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
