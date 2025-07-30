import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import restaurantTechImage from "@/assets/restaurant-tech.jpg";
const DemoSection = () => {
  const demoSteps = [{
    step: "01",
    title: "Guest scans QR code",
    description: "Simple table-side QR code scan"
  }, {
    step: "02",
    title: "Instant menu & requests",
    description: "Order food, ask for bill, request service"
  }, {
    step: "03",
    title: "Staff notified immediately",
    description: "Real-time alerts to the right team member"
  }, {
    step: "04",
    title: "Guest stays relaxed",
    description: "No waving, no stress, complete control"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Demo Steps */}
          <div className="space-y-6">
            {demoSteps.map((step, index) => {})}
          </div>

          {/* Visual Demo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <img src={restaurantTechImage} alt="ComfortOrder in action" className="w-full rounded-lg shadow-soft" />
              
              {/* Overlays */}
              <div className="absolute top-12 left-12 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float">
                ✨ Zero Wait Time
              </div>
              
              <div className="absolute bottom-12 right-12 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{
              animationDelay: '1s'
            }}>
                💫 Happy Staff
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Watch Guest Flow Demo
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-6">
              Try It Yourself – 10-sec Experience
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            See real guest reactions and staff testimonials
          </p>
        </div>
      </div>
    </section>;
};
export default DemoSection;