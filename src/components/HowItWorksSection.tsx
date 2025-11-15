import { User, Bell, ShoppingCart, TrendingUp, Repeat } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: User,
      number: "1",
      title: "Join eMoney on Whop",
      description: "instantly unlock alerts",
    },
    {
      icon: Bell,
      number: "2",
      title: "Get notified",
      description: "the moment deals or price errors appear",
    },
    {
      icon: ShoppingCart,
      number: "3",
      title: "Buy online or in-store",
      description: "using our exact instructions",
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Flip for profit",
      description: "many items go 3x-10x",
    },
    {
      icon: Repeat,
      number: "5",
      title: "Repeat daily",
      description: "with new drops",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 lg:space-y-20">
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] tracking-tight">
              How Members Secure Drops in Minutes
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Simple. Scannable. Profitable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50 overflow-visible">
                      {/* Animated flashing dots flowing along the line from step 1 to step 5 */}
                      {[...Array(8)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className="absolute top-1/2 left-0 w-3 h-3 bg-primary rounded-full animate-sparkle-flow shadow-[0_0_12px_3px_hsl(160_60%_45%_/_1)] animate-flash"
                          style={{
                            animationDelay: `${dotIndex * 0.4}s`,
                            animationDuration: '3s',
                          }}
                        />
                      ))}
                      {/* Additional smaller flashing dots */}
                      {[...Array(5)].map((_, dotIndex) => (
                        <div
                          key={`small-${dotIndex}`}
                          className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full animate-sparkle-flow shadow-[0_0_8px_2px_hsl(160_60%_45%_/_0.8)] animate-flash"
                          style={{
                            animationDelay: `${dotIndex * 0.5 + 0.2}s`,
                            animationDuration: '3.5s',
                          }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="relative space-y-5 group">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow hover:shadow-glow hover:scale-110 transition-all duration-300 border-2 border-primary/20">
                      <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-center space-y-3">
                      <div className="text-4xl lg:text-5xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">{step.number}</div>
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-tight whitespace-nowrap">{step.title}</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed px-2">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
