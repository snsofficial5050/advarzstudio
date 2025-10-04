const Clients = () => {
  const clients = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&q=80" },
    { name: "GrowthWave", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80" },
    { name: "BrightFuture", logo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=200&q=80" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
    { name: "Visionary", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Trusted by Leading Brands
          </h3>
          <p className="text-muted-foreground">Some of the amazing companies we've worked with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
