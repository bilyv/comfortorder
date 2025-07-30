import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is it hard to set up?",
      answer: "No. QR codes are auto-generated instantly. Orders work immediately. No technical setup, no training required. Your restaurant can be live in under 5 minutes."
    },
    {
      question: "Does it replace our staff?",
      answer: "No — it frees them to do what matters most. Staff spend less time running around taking orders and more time creating memorable experiences for your guests."
    },
    {
      question: "What if guests don't want to use their phones?",
      answer: "ComfortOrder works alongside traditional service. Guests can choose how they want to interact. Many find the control and convenience irresistible once they try it."
    },
    {
      question: "How does the loyalty program work?",
      answer: "Built-in automatic tracking. Every order earns points. Guests get personalized rewards. You get valuable customer data and increased repeat visits — no extra tools needed."
    },
    {
      question: "What about internet connectivity issues?",
      answer: "ComfortOrder works with standard restaurant WiFi. Orders queue automatically if connection is temporarily lost. 99.9% uptime guarantee with redundant systems."
    },
    {
      question: "Can we customize it for our brand?",
      answer: "Absolutely. Custom themes, colors, logos, and messaging. Your brand stays front and center while ComfortOrder handles the technology seamlessly."
    },
    {
      question: "How much money will we actually save?",
      answer: "Most restaurants save $2,000-4,000 monthly in labor costs. Faster table turns increase revenue. Fewer errors reduce waste. ROI typically achieved within the first week."
    },
    {
      question: "What kind of support do you provide?",
      answer: "24/7 chat support, phone support during business hours, comprehensive video tutorials, and a dedicated success manager for Business plan customers."
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Common Questions — 
            <span className="text-primary"> Clear Answers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calm your doubts. Frame this as an easy "why not."
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Quick Decision Helpers */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-success/5 border-success/20">
            <div className="text-2xl mb-3">✅</div>
            <h3 className="font-bold mb-2">No Risk Trial</h3>
            <p className="text-sm text-muted-foreground">
              30 days free, cancel anytime
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Instant Setup</h3>
            <p className="text-sm text-muted-foreground">
              Live in under 5 minutes
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-warm/20 border-primary/20">
            <div className="text-2xl mb-3">💰</div>
            <h3 className="font-bold mb-2">Pays for Itself</h3>
            <p className="text-sm text-muted-foreground">
              ROI within first week
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;