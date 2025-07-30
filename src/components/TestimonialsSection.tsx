import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We've cut labor costs, guests are happier, and the team isn't exhausted. ComfortOrder makes us feel in control again.",
      author: "Sarah Chen",
      role: "Hospitality Manager",
      business: "Urban Bistro",
      metric: "30% reduction in labor costs"
    },
    {
      quote: "I wish I had this during our busiest season — it paid for itself in days. Our staff can finally focus on what matters.",
      author: "Marcus Rivera", 
      role: "Owner",
      business: "Rivera's Family Hospitality",
      metric: "ROI in 5 days"
    },
    {
      quote: "Guests love the control, staff love the simplicity. No more chaos during rush hours. Just smooth operations.",
      author: "Jennifer Kim",
      role: "Operations Director", 
      business: "Metro Food Group",
      metric: "95% guest satisfaction"
    },
    {
      quote: "The loyalty program alone brought back 40% more repeat customers. ComfortOrder isn't just tech — it's business transformation.",
      author: "David Thompson",
      role: "Franchise Owner",
      business: "Coastal Cafés",
      metric: "40% more repeat visits"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">"ComfortOrder makes us</span>
            <br />
            feel in control again."
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from hospitality owners who transformed their operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <span className="text-6xl text-primary/20 absolute -top-4 -left-2">"</span>
                  <p className="text-lg leading-relaxed pl-8 relative z-10">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Metric Highlight */}
                <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                  <div className="font-bold text-primary text-lg">
                    📊 {testimonial.metric}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.business}</div>
                  </div>
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Hospitality businesses served</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Customer rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support available</div>
          </div>
        </div>

        {/* Social Proof CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join hundreds of hospitality businesses already using ComfortOrder
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-primary">⭐</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;