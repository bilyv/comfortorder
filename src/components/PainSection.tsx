import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GlowCard } from "@/components/ui/spotlight-card";
import beforeAfterImage from "@/assets/before-after.jpg";
const PainSection = () => {
  const [activeView, setActiveView] = useState<'without' | 'with'>('without');
  const painPoints = [{
    title: "Order Management",
    without: "Stress and embarrassment as angry customers complain about wrong or missed orders.",
    with: "Guests scan a QR code, browse the menu, and place orders themselves — no need to call the waiter.",
    icon: "📝"
  }, {
    title: "High Labor Operational Costs",
    without: "Hiring extra waitstaff during peak hours drains profits. Labor-heavy operations reduce scalability and hurt profit margins.",
    with: "Guests order directly via QR code, reducing the need for 2–3 staff per shift. Save over $1,000/month with leaner operations.",
    icon: "💰"
  }, {
    title: "Lack of Online Ordering",
    without: "No online ordering = lost customers at home or office.",
    with: "You get a shareable online ordering page (e.g., `yourhospitality.com/menu`). Own your experience, your brand, and 100% of the revenue.",
    icon: "🌐"
  }, {
    title: "Complex Menu Management",
    without: "Updating printed or third-party menus takes time, costs money, and needs tech skills. Changes get delayed.",
    with: "Update your menu in seconds. All changes reflect instantly across all QR table menus and online menus — keeping your offerings fresh and accurate.",
    icon: "📋"
  }, {
    title: "Slow Ordering Process",
    without: "Waiting for waiters to take orders or bring bills causes delays, bottlenecks, and poor guest experiences.",
    with: "Guests scan, tap, and order instantly — even request the bill — all without waiting. Faster turnover and happier guests.",
    icon: "⚡"
  }, {
    title: "Lack of Home Delivery",
    without: "Limited options mean you lose customers who want takeout or delivery, especially from home or remote areas.",
    with: "A flexible ordering page allows for pickup or delivery orders seamlessly — customers stay connected wherever they are.",
    icon: "🚚"
  }, {
    title: "Guest Requests",
    without: "No way to ask for music preference, call staff, ask billing or their special requests.",
    with: "Guests can request music, summon a waiter and ask for the bill.",
    icon: "🔔"
  }, {
    title: "Language Barriers",
    without: "Menus in only one language exclude non-local customers, leading to confusion and lost orders.",
    with: "Multi-language support (e.g., Kinyarwanda, English) breaks barriers — making it easy for all guests to order confidently.",
    icon: "🌍"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every delay costs you. 
            <span className="text-destructive">Profit, bad review and growth of your competition.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">See the difference between your "current business without ComfortOrder" and with ComfortOrder.</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-2 rounded-lg inline-flex gap-2">
            <Button variant={activeView === 'without' ? 'destructive' : 'ghost'} onClick={() => setActiveView('without')} className="px-6 py-3">You without</Button>
            <Button variant={activeView === 'with' ? 'default' : 'ghost'} onClick={() => setActiveView('with')} className="px-6 py-3">With ComfortOrder</Button>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {painPoints.map((point, index) => <Card key={index} className="p-6 transition-all duration-500 hover:shadow-elegant hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{point.icon}</span>
                  <h3 className="font-bold text-lg leading-tight">{point.title}</h3>
                </div>
                
                <div className="space-y-4">
                  <GlowCard 
                    customSize={true} 
                    glowColor="red" 
                    className={`w-full h-auto transition-all duration-300 ${activeView === 'without' ? 'ring-2 ring-destructive/30' : 'opacity-50'}`}
                  >
                    <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-destructive font-semibold text-sm">WITHOUT:</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.without}</p>
                    </div>
                  </GlowCard>
                  
                  <GlowCard 
                    customSize={true} 
                    glowColor="green" 
                    className={`w-full h-auto transition-all duration-300 ${activeView === 'with' ? 'ring-2 ring-success/30' : 'opacity-50'}`}
                  >
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="text-success font-semibold text-sm">WITH:</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.with}</p>
                    </div>
                  </GlowCard>
                </div>
              </Card>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">Explore</Button>
        </div>
      </div>
    </section>;
};
export default PainSection;