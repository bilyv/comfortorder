import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const FinalCTASection = () => {
  return <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-warm/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          

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
    </section>;
};
export default FinalCTASection;