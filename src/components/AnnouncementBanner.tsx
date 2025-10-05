import { X, Sparkles } from "lucide-react";
import { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-hero text-primary-foreground py-3 px-4 relative overflow-hidden slide-in-down">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
        <Sparkles size={18} className="flex-shrink-0" />
        <p className="font-medium text-center">
          <span className="hidden sm:inline">🎉 Special Offer: </span>
          Get 20% off on all branding packages this month!
          <a href="#contact" className="ml-2 underline hover:no-underline font-bold">
            Learn More →
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
