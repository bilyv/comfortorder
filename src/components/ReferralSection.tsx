import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ReferralSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-warm/20 border-primary/20">
            <div className="space-y-8">
              {/* Headline */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Turn fans into promoters — 
                  <span className="text-primary"> and save big</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Share ComfortOrder with fellow restaurant owners and unlock incredible savings
                </p>
              </div>

              {/* Referral Benefits */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold mb-2">You Get 50% Off</h3>
                  <p className="text-muted-foreground">
                    Pro Plan discount for 3 months when your referral signs up
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold mb-2">They Get 30% Off</h3>
                  <p className="text-muted-foreground">
                    Your friend saves money on their first 3 months too
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">Everyone Wins</h3>
                  <p className="text-muted-foreground">
                    Build your network while saving money together
                  </p>
                </div>
              </div>

              {/* Special Offer */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  🎉 Bonus: Refer 3 friends, unlock Business Plan features FREE
                </h3>
                <p className="text-muted-foreground">
                  Multi-location management, advanced analytics, and priority support at no extra cost
                </p>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Share Your Referral Link Now
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  Generate your unique link in seconds • Track referrals in real-time
                </div>
              </div>

              {/* How it Works */}
              <div className="grid md:grid-cols-3 gap-4 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="text-sm">Share your link</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="text-sm">Friend signs up</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="text-sm">You both save</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;