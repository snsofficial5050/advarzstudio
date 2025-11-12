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

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const dragOffsetRef = useRef(0);

  // Continuous left-to-right scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isDragging) {
        // Slow down to 30% speed when hovering
        const scrollSpeed = isHovering ? 0.24 : 0.8;
        container.scrollLeft += scrollSpeed;
        
        // Reset scroll position for infinite loop
        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isHovering]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) * 1.5; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollStart + walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollStart(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) * 1.5;
    containerRef.current.scrollLeft = scrollStart + walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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
          style={{ 
            width: 'fit-content',
            scrollBehavior: 'auto'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elegant min-w-[350px] w-[350px] h-[350px] flex-shrink-0 flex flex-col transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground italic line-clamp-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
