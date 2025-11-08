import { useRef, useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 100);
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
        className="relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div 
          ref={containerRef}
          className="flex gap-16 items-center overflow-x-auto scrollbar-hide" 
          style={{ 
            animation: isPaused ? 'none' : 'scroll-left 25s linear infinite',
            width: 'fit-content'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => !isDragging && setIsPaused(false)}
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
                style={{ filter: 'contrast(1.2) brightness(1.1)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
