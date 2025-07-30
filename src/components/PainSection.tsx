import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import beforeAfterImage from "@/assets/before-after.jpg";

const PainSection = () => {
  const [activeView, setActiveView] = useState<'without' | 'with'>('without');

  const scenarios = {
    without: {
      title: "WITHOUT ComfortOrder",
      color: "destructive",
      items: [
        { icon: "👋", text: "Guests waving & waiting" },
        { icon: "😰", text: "Staff burnout" },
        { icon: "❌", text: "Missed requests & errors" },
        { icon: "💸", text: "Lost revenue from delays" }
      ]
    },
    with: {
      title: "WITH ComfortOrder", 
      color: "success",
      items: [
        { icon: "⚡", text: "Guests in control instantly" },
        { icon: "😌", text: "Fewer employees, more flow" },
        { icon: "✅", text: "Every order tracked clearly" },
        { icon: "💰", text: "Higher revenue, lower costs" }
      ]
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every delay costs you. 
            <span className="text-destructive"> Staff. Guests. Revenue.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the stark difference between chaos and control
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-2 rounded-lg inline-flex gap-2">
            <Button
              variant={activeView === 'without' ? 'destructive' : 'ghost'}
              onClick={() => setActiveView('without')}
              className="px-6 py-3"
            >
              Current Reality
            </Button>
            <Button
              variant={activeView === 'with' ? 'default' : 'ghost'}
              onClick={() => setActiveView('with')}
              className="px-6 py-3"
            >
              With ComfortOrder
            </Button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Scenario Cards */}
          <div className="space-y-6">
            <Card className={`p-8 transition-all duration-500 ${
              activeView === 'without' 
                ? 'ring-2 ring-destructive shadow-lg scale-105' 
                : activeView === 'with' 
                ? 'ring-2 ring-success shadow-lg scale-105'
                : 'opacity-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                activeView === 'without' ? 'text-destructive' : 'text-success'
              }`}>
                {scenarios[activeView].title}
              </h3>
              
              <div className="space-y-4">
                {scenarios[activeView].items.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={beforeAfterImage}
                alt="Hospitality business before and after ComfortOrder"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              Real Hospitality Impact
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            See the Transformation →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainSection;