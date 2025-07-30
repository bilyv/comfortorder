import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-warm/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-primary text-primary-foreground shadow-elegant">
            <div className="space-y-8">
              {/* Headline */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Transform Your
                  <br />
                  <span className="text-primary-glow">Hospitality Business?</span>
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Join thousands of businesses already using ComfortOrder to improve guest satisfaction and reduce costs.
                </p>
              </div>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  Start Now – It's Free to Try
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  Watch Real Guest Experience
                </Button>
              </div>

              {/* Urgency/Social Proof */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm opacity-80 mb-3">
                  Join 500+ hospitality businesses already saving money with ComfortOrder
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2">
                    ⚡ <span>Instant setup</span>
                  </span>
                  <span className="flex items-center gap-2">
                    🔒 <span>No credit card</span>
                  </span>
                  <span className="flex items-center gap-2">
                    ✅ <span>Cancel anytime</span>
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Footer Trust Signals */}
          <div className="mt-12 text-center space-y-6">
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-sm">🔒 Enterprise Security</div>
              <div className="text-sm">🏆 Industry Leader</div>
              <div className="text-sm">⭐ 4.9/5 Rating</div>
              <div className="text-sm">🚀 500+ Hospitality Businesses</div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Trusted by hospitality businesses worldwide • GDPR compliant • SOC 2 certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;