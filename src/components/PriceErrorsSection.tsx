import { Sparkles, HelpCircle } from "lucide-react";

export const PriceErrorsSection = () => {
  const priceErrorCards = [
    {
      title: "Apple AirPods Max - Sky Blue",
      price: "$0.00",
      originalPrice: "$549.00",
      image: "🎧",
    },
    {
      title: "NVIDIA GeForce RTX 3090",
      price: "$10.00",
      savings: "$199.99",
      originalPrice: "$199.99",
      image: "🎮",
    },
    {
      title: "Apple AirPods Pro (2nd generation) - White",
      price: "$9.99",
      originalPrice: "$249.99",
      image: "🎧",
    },
    {
      title: "Apple AirPods Max - Silver",
      price: "$24.00",
      originalPrice: "$549.00",
      image: "🎧",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">SIDE HUSTLES</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            PRICE ERRORS, A COMMUNITY
            <br />
            FAVORITE
          </h2>
          
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30">
              <span className="text-sm font-medium text-foreground">
                Frugal community price error results
              </span>
            </div>
            
            <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <span className="font-medium underline">What Is A Price Error?</span>
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {priceErrorCards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4">{card.image}</div>
              <h3 className="font-semibold text-card-foreground mb-2 text-sm">
                {card.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-primary">{card.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  was {card.originalPrice}
                </span>
              </div>
              {card.savings && (
                <div className="inline-block px-2 py-1 bg-destructive/20 text-destructive text-xs font-semibold rounded">
                  Save {card.savings}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            * Screenshots from real community members
          </p>
        </div>
      </div>
    </section>
  );
};
