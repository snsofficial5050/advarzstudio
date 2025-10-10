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
  const duplicatedClients = [...clients, ...clients];

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

      <div className="relative">
        <div className="flex gap-16 items-center group hover:[animation-play-state:paused]" 
             style={{ 
               animation: 'scroll-left 25s linear infinite',
               width: 'fit-content'
             }}>
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
