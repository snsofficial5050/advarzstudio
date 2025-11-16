import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechVenture",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      quote: "Advarz Studio completely transformed our brand identity. Their creative approach and attention to detail exceeded all expectations.",
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

  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // --- Infinite Animation (never stops) ---
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const animate = () => {
      const speed = isHovering ? 0.25 : 1; // hover slow
      c.scrollLeft += speed;

      const max = c.scrollWidth / 3;
      if (c.scrollLeft >= max) c.scrollLeft = 0;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering]);

  // --- Drag Handlers (drag works but animation never pauses) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const walk = (startX - e.pageX) * 1.2;
    containerRef.current.scrollLeft = scrollStart + walk;
  };

  const stopDrag = () => setIsDragging(false);

  // Touch
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const walk = (startX - e.touches[0].pageX) * 1.2;
    containerRef.current.scrollLeft = scrollStart + walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <section id="testimonials" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center max-w-3xl mx-auto fade-in-up">
          <h2 className="mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from the businesses we've helped transform
          </p>
        </div>
      </div>

      <div className="relative select-none">
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ width: "fit-content", scrollBehavior: "auto" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="card-elegant min-w-[350px] w-[350px] h-[350px] flex-shrink-0 flex flex-col transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic line-clamp-4">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
