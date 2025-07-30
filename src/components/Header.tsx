import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CO</span>
            </div>
            <span className="text-xl font-bold text-foreground">ComfortOrder</span>
          </div>

          {/* Desktop Navigation */}
          <Tabs defaultValue="home" className="hidden lg:block">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="home" className="data-[state=active]:bg-background">Home</TabsTrigger>
              <TabsTrigger value="who-we-are" className="data-[state=active]:bg-background">Who We Are</TabsTrigger>
              <TabsTrigger value="what-we-provide" className="data-[state=active]:bg-background">What We Provide</TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-background">Contact Us</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
            <Button variant="hero" size="sm">
              Start Now
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" className="justify-start text-lg">
                  Home
                </Button>
                <Button variant="ghost" className="justify-start text-lg">
                  Who We Are
                </Button>
                <Button variant="ghost" className="justify-start text-lg">
                  What We Provide
                </Button>
                <Button variant="ghost" className="justify-start text-lg">
                  Contact Us
                </Button>
                <div className="flex flex-col gap-3 mt-8">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                  <Button variant="hero" size="lg">
                    Start Now
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Header;