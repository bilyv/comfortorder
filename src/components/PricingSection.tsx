import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const PricingSection = () => {
  const plans = [{
    name: "Basic",
    price: "$0",
    period: "Forever",
    description: "Perfect for trying ComfortOrder",
    features: ["QR ordering system", "10 requests per month", "Basic notifications", "Email support"],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false
  }, {
    name: "Pro",
    price: "Custom Pricing",
    period: "",
    description: "Best for most hospitality businesses",
    features: ["Unlimited requests", "Loyalty program included", "Custom themes & branding", "Priority support", "Analytics dashboard", "Staff management tools"],
    cta: "Contact Us",
    variant: "hero" as const,
    popular: true
  }, {
    name: "Business",
    price: "Custom Pricing",
    period: "",
    description: "For multi-location operations",
    features: ["Everything in Pro", "Multi-location management", "Advanced staff analytics", "Custom integrations", "Dedicated success manager", "White-label options"],
    cta: "Contact Us",
    variant: "warm" as const,
    popular: false
  }];
  return <section className="py-20 bg-gradient-warm bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Fits Your Budget — 
            <span className="text-primary"> and Reduces Your Costs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that saves you more than it costs
          </p>
        </div>

        {/* Cost Comparison Alert */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3 text-primary">
                💡 Reality Check: You're already spending more on extra staff
              </h3>
              <p className="text-muted-foreground">
                Average hospitality business saves $2,400/month in labor costs with ComfortOrder
              </p>
            </div>
          </Card>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`relative p-8 text-center transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-primary shadow-elegant bg-card' : 'hover:shadow-warm'}`}>
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3 text-left">
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-sm">{feature}</span>
                  </div>)}
              </div>

              <Button variant={plan.variant} size="lg" className="w-full text-lg py-6">
                {plan.cta}
              </Button>
            </Card>)}
        </div>


        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default PricingSection;