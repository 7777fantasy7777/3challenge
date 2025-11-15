import { CheckCircle } from "lucide-react";

export const WhyDifferentSection = () => {
  const benefits = [
    "Real alerts for real drops — not recycled info",
    "Success proven by thousands of posted wins",
    "Works for online & in-store shopping",
    "Built for beginners and experts alike",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 lg:space-y-16">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              Why Thousands Trust eMoney
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We deliver what others promise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-base sm:text-lg md:text-xl text-left leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
