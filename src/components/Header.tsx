import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Header = () => {
  return <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CO</span>
            </div>
            <span className="text-xl font-bold text-foreground">ComfortOrder</span>
          </div>

          {/* Navigation Tabs */}
          <Tabs defaultValue="home" className="hidden md:block">
            <TabsList className="bg-muted/50">
              
              <TabsTrigger value="who-we-are" className="data-[state=active]:bg-background">Who We Are</TabsTrigger>
              <TabsTrigger value="what-we-provide" className="data-[state=active]:bg-background">What We Provide</TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-background">Contact Us</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            
            <Button variant="hero" size="sm">
              Start Now
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4">
          <Tabs defaultValue="home">
            <TabsList className="w-full bg-muted/50">
              <TabsTrigger value="home" className="flex-1 data-[state=active]:bg-background">Home</TabsTrigger>
              <TabsTrigger value="who-we-are" className="flex-1 data-[state=active]:bg-background">Who We Are</TabsTrigger>
              <TabsTrigger value="what-we-provide" className="flex-1 data-[state=active]:bg-background">What We Provide</TabsTrigger>
              <TabsTrigger value="contact" className="flex-1 data-[state=active]:bg-background">Contact</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </header>;
};
export default Header;