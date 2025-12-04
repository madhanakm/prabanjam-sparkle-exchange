import { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';


const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-luxury-cream via-background to-accent/10 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/3 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo animation */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 rounded-full animate-spin" style={{animationDuration: '2s'}}></div>
            <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
              <Building2 className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          {/* Sparkle effects */}
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        </div>

        {/* Company name */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 animate-fade-in">
          Prabanjam <span className="text-accent">Groups</span>
        </h1>
        <p className="text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
          Excellence Across Multiple Sectors
        </p>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;