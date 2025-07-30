import { Card } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🧠",
      title: "Fewer Staff, Lower Costs",
      description: "One system reduces the need for more employees",
      details: [
        "Automated request handling",
        "Self-service ordering", 
        "Reduced labor expenses",
        "Better staff efficiency"
      ]
    },
    {
      icon: "💬", 
      title: "Requests & Ordering in One Tap",
      description: "Guests can ask for the bill, change music, or order — stress-free",
      details: [
        "QR code simplicity",
        "Instant communication",
        "No more hand waving",
        "Complete guest control"
      ]
    },
    {
      icon: "📊",
      title: "Real-Time Analytics", 
      description: "Track orders, preferences, and optimize your operations",
      details: [
        "Order tracking insights",
        "Guest behavior patterns",
        "Peak hour analysis", 
        "Revenue optimization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built for what hospitality 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> actually needs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core features that transform your hospitality operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="space-y-3">
                {benefit.details.map((detail, detailIndex) => (
                  <div 
                    key={detailIndex}
                    className="flex items-center gap-3 text-sm p-3 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">30%</div>
            <div className="text-sm text-muted-foreground">Lower labor costs</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">90%</div>
            <div className="text-sm text-muted-foreground">Faster service</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">50%</div>
            <div className="text-sm text-muted-foreground">More repeat visits</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Always available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;