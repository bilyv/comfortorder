import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-guest.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-warm/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              🎯 Psychology-Driven Restaurant Tech
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Chaos is optional.</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Let your guests tap — and relax.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Staff stress, guest complaints, and lost revenue — solved in one scan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Try Live Demo
              </Button>
              <Button variant="warm" size="lg" className="text-lg px-8 py-6">
                Start Free – No Setup Needed
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <span className="flex items-center gap-2">
                ✓ <span>Instant setup</span>
              </span>
              <span className="flex items-center gap-2">
                ✓ <span>No credit card</span>
              </span>
              <span className="flex items-center gap-2">
                ✓ <span>30-day trial</span>
              </span>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant animate-float">
              <img 
                src={heroImage} 
                alt="Guest relaxing while using ComfortOrder"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-warm animate-pulse-glow">
              ✨ Guest in Control
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-soft border">
              📱 One Tap Solution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;