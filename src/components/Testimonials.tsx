import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shahidul Islam",
      role: "Founder, CEO at Markertion",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote: "We used to struggle to explain what we wanted visually. After Advarz Studio stepped in, everything became much easier. They understood our brand and created designs that honestly surprised us. The quality of their work and their way of dealing with clients feels very genuine.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      quote: "Working with this team was an absolute pleasure. They delivered stunning designs ahead of schedule and within budget.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrightWave",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      quote: "The marketing campaign they created for us generated incredible results. Our engagement increased by 300% in just two months!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Owner, Café Moderne",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      quote: "From concept to execution, everything was flawless. They truly understood our vision and brought it to life beautifully.",
      rating: 5,
    },
  ];

  // Triple array makes perfect seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto scroll LEFT → RIGHT
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleWidth = container.scrollWidth / 3;

    const animate = () => {
      if (!isDragging) {
        const speed = isHovering ? 0.2 : 0.7;
        container.scrollLeft -= speed;

        if (container.scrollLeft <= 0) {
          container.scrollLeft = singleWidth;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging, isHovering]);

  // Drag Logic
  const handleDown = (x: number) => {
    setIsDragging(true);
    setStartX(x);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleMove = (x: number) => {
    if (!isDragging || !containerRef.current) return;
    const walk = (startX - x) * 1.4;
    containerRef.current.scrollLeft = scrollStart + walk;
  };

  const handleUp = () => setIsDragging(false);

  return (
    <section id="testimonials" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <h2 className="mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>
      </div>

      <div className="relative select-none">
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ width: "100%", scrollBehavior: "auto" }}
          onMouseDown={(e) => handleDown(e.pageX)}
          onMouseMove={(e) => handleMove(e.pageX)}
          onMouseUp={handleUp}
          onMouseLeave={handleUp}
          onTouchStart={(e) => handleDown(e.touches[0].pageX)}
          onTouchMove={(e) => handleMove(e.touches[0].pageX)}
          onTouchEnd={handleUp}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="card-elegant min-w-[350px] w-[350px] h-[350px] flex-shrink-0 flex flex-col transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic line-clamp-4">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
