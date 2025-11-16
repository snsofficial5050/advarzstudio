import { useRef, useState, useEffect } from "react";

const Clients = () => {
  const clients = [
    { name: "Client 1", logo: "https://i.postimg.cc/MHNk4JQj/1.png" },
    { name: "Client 2", logo: "https://i.postimg.cc/9M0njNVZ/2.png" },
    { name: "Client 3", logo: "https://i.postimg.cc/x8MrWFyp/3.png" },
    { name: "Client 4", logo: "https://i.postimg.cc/W12RH8FN/4.png" },
    { name: "Client 5", logo: "https://i.postimg.cc/Y0cZfzKx/5.png" },
    { name: "Client 6", logo: "https://i.postimg.cc/bwYMTvM4/6.png" },
    { name: "Client 7", logo: "https://i.postimg.cc/x8SpbjLn/7.png" },
    { name: "Client 8", logo: "https://i.postimg.cc/CKBcPnNY/8.png" },
    { name: "Client 9", logo: "https://i.postimg.cc/tCQrkg60/9.png" },
    { name: "Client 10", logo: "https://i.postimg.cc/XvssQMt6/Logo-01.png" },
    { name: "Client 11", logo: "https://i.postimg.cc/J0ZcwSYh/Logo-02.png" },
    { name: "Client 12", logo: "https://i.postimg.cc/pdSDmP3w/Logo-03.png" },
    { name: "Client 13", logo: "https://i.postimg.cc/HLFypBy7/Logo-04.png" },
    { name: "Client 14", logo: "https://i.postimg.cc/XYJGdTKW/Logo-05.png" },
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
              className="flex items-center justify-center flex-shrink-0"
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
