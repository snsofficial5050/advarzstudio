import { useRef, useState, useEffect } from "react";
import logo1 from "@/assets/clients/logo-1.png";
import logo2 from "@/assets/clients/logo-2.png";
import logo3 from "@/assets/clients/logo-3.png";
import logo4 from "@/assets/clients/logo-4.png";
import logo5 from "@/assets/clients/logo-5.png";
import logo6 from "@/assets/clients/logo-6.png";
import logo7 from "@/assets/clients/logo-7.png";
import logo8 from "@/assets/clients/logo-8.png";
import logo14 from "@/assets/clients/logo-14.png";

const Clients = () => {
  const clients = [
    { name: "Client 1", logo: logo1 },
    { name: "Client 2", logo: logo2 },
    { name: "Client 3", logo: logo3 },
    { name: "Client 4", logo: logo4 },
    { name: "Client 5", logo: logo5 },
    { name: "Client 6", logo: logo6 },
    { name: "Client 7", logo: logo7 },
    { name: "Client 8", logo: logo8 },
    { name: "Client 9", logo: "https://i.postimg.cc/SRpCGJZG/Logo-01.png" },
    { name: "Client 10", logo: "https://i.postimg.cc/Ssczjmyk/Logo-02.png" },
    { name: "Client 11", logo: "https://i.postimg.cc/L6xgJCMq/Logo-03.png" },
    { name: "Client 12", logo: "https://i.postimg.cc/vTQDB9qL/Logo-04.png" },
    { name: "Client 13", logo: "https://i.postimg.cc/L6Qh9Jzf/Logo-05.png" },
    { name: "Client 14", logo: logo14 },
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
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
