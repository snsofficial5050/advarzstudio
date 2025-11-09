import { useRef, useState, useEffect } from "react";

const Clients = () => {
  const clients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&q=80" },
    { name: "GrowthWave", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80" },
    { name: "BrightFuture", logo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&q=80" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
    { name: "Visionary", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80" },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Continuous left-to-right scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      if (!isDragging) {
        container.scrollLeft += 0.6; // Smooth scroll speed
        
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
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Trusted by Leading Brands
          </h3>
          <p className="text-muted-foreground">Some of the amazing companies we've worked with</p>
        </div>
      </div>

      <div 
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={containerRef}
          className="flex gap-16 items-center overflow-x-auto scrollbar-hide" 
          style={{ 
            width: 'fit-content',
            scrollBehavior: 'auto'
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain"
                style={{ filter: 'contrast(1.3) brightness(1.15) saturate(1.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
