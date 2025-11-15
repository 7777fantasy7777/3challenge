import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";

export const HeroSection = () => {
  const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Product Background */}
      <div className="absolute inset-0 opacity-10">
        {/* First row - scrolling right */}
        <div className="absolute top-[10%] left-0 right-0 flex animate-scroll-right">
          {[...products, ...products].map((product, i) => (
            <img
              key={`top-${i}`}
              src={product}
              alt=""
              className="w-32 h-32 object-cover rounded-lg mx-4 flex-shrink-0"
            />
          ))}
        </div>

        {/* Second row - scrolling left */}
        <div className="absolute bottom-[10%] left-0 right-0 flex animate-scroll-left">
          {[...products, ...products].map((product, i) => (
            <img
              key={`bottom-${i}`}
              src={product}
              alt=""
              className="w-32 h-32 object-cover rounded-lg mx-4 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 sm:px-5 sm:py-2.5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">30,000+ Active Members</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                Build an Extra{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent block sm:inline">
                  $2,000/Month Flipping,
                </span>{" "}
                Hidden Clearance Deals
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground leading-relaxed">
                In our <strong className="text-foreground font-semibold">3-Day First Flip Challenge</strong>, you'll use our Clearance AI + real community data to find, buy & flip your first profitable item.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start pt-2">
              <div className="flex items-start gap-3 group max-w-md">
                <Star className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground leading-relaxed">5,000+ Active Members on Whop</span>
              </div>
              <div className="flex items-start gap-3 group max-w-md">
                <Star className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground leading-relaxed">Thousands of verified success posts</span>
              </div>
              <div className="flex items-start gap-3 group max-w-md">
                <Star className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground leading-relaxed">Success you can actually see</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="min-w-[250px] shadow-glow hover:shadow-glow text-base sm:text-lg px-8 py-6" 
                onClick={(e) => {
                  e.preventDefault();
                  const checkoutSection = document.getElementById('checkout');
                  if (checkoutSection) {
                    const yOffset = -80; // Offset for better visual positioning
                    const y = checkoutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Start Winning Today
              </Button>
            </div>

            {/* Footer Note */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>Start Free 3-Day Challenge</span>
                <span className="text-border">•</span>
                <span>Cancel Anytime</span>
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative group mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src={heroImage}
              alt="eMoney Deals Success - Member showing profitable deals on smartphone"
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-border hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
