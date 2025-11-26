import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "/assets/hero-image/hero-image (1).jpg";
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
import GradientText from './GradientText'
import StarBorder from './StarBorder'

export const HeroSection = () => {
  const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Product Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        {/* First row - scrolling right */}
        <div className="absolute top-[10%] left-0 right-0 flex animate-scroll-right">
          {[...products, ...products].map((product, i) => (
            <img
              key={`top-${i}`}
              src={product}
              alt=""
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-lg mx-2 sm:mx-3 md:mx-4 flex-shrink-0"
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
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-lg mx-2 sm:mx-3 md:mx-4 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10 top-margin">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 flex flex-col w-full" style={{ boxSizing: "revert" }}>
            {/* Success Points - Always at the top */}
            <div className="flex flex-col items-center lg:items-start order-0 sentence-gap">
              {/* <button className="sm:w-auto min-w-[280px] sm:min-w-[320px] px-6 py-4 rounded-[999px] bg-gradient-to-b from-[#14254b] via-[#0d1b3a] to-[#070f26] text-white font-semibold text-sm sm:text-base tracking-wide border border-white/15 shadow-[0_0_20px_rgba(59,130,246,0.35)] ring-1 ring-cyan-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.55)] transition-all duration-300">
                5,000+ Active Members on Whop
              </button> */}
              <StarBorder
                as="button"
                className="custom-class rounded-[999px] "
                color="cyan"
                speed="5s"
              >
                <Star className="w-4 h-4" />
                5,000+ Active Members on Whop
              </StarBorder>
              {/* <button className="sm:w-auto min-w-[280px] sm:min-w-[320px] px-6 py-4 rounded-[999px] bg-gradient-to-b from-[#14254b] via-[#0d1b3a] to-[#070f26] text-white font-semibold text-sm sm:text-base tracking-wide border border-white/15 shadow-[0_0_20px_rgba(59,130,246,0.35)] ring-1 ring-cyan-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.55)] transition-all duration-300">
                Thousands of verified success posts
              </button> */}
              <StarBorder
                as="button"
                className="custom-class rounded-[999px]"
                color="cyan"
                speed="5s"
              >
                <Star className="w-4 h-4" />
                Thousands of verified success posts
              </StarBorder>
              {/* <button className="sm:w-auto min-w-[280px] sm:min-w-[320px] px-6 py-4 rounded-[999px] bg-gradient-to-b from-[#14254b] via-[#0d1b3a] to-[#070f26] text-white font-semibold text-sm sm:text-base tracking-wide border border-white/15 shadow-[0_0_20px_rgba(59,130,246,0.35)] ring-1 ring-cyan-400/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.55)] transition-all duration-300">
                Success you can actually see
              </button> */}
              <StarBorder
                as="button"
                className="custom-class rounded-[999px]"
                color="cyan"
                speed="5s"
              >
                <Star className="w-4 h-4" />
                Success you can actually see
              </StarBorder>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 order-2 w-full title-margin">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-tight px-4 sm:px-6 md:px-8 lg:px-0 text-center lg:text-left title-size">
                ADD AN {" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent block sm:inline">
                  EXTRA $2,000+/MONTH
                </span>{" "}
                <span className="block sm:inline"> TO YOUR  INCOME</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 order-3">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed" style={{ marginBottom: "15px" }}>
                In our <strong className="text-foreground font-semibold">3-Day First Flip Challenge</strong>, you'll use our Clearance AI + real community data to find, buy & flip your first profitable item.
              </p>
            </div>

            {/* Hero Image - Mobile: Above Button (order-4), Desktop: Hidden (moved to right column) */}
            <div className="mt-4 sm:mt-6 lg:hidden flex items-center justify-center w-full order-4 title-margin">
              <div className="w-full max-w-sm sm:max-w-md px-6" style={{ marginBottom: "10px"}}>
                <div className="hero-image-frame">
                  <img
                    src={heroImage}
                    alt="Community success stories"
                    className="w-full rounded-[28px] object-cover hero-image-float"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0 order-6" style={{ padding: '0 50px' }}>
              <Button
                variant="hero"
                size="xl"
                className="cta-button-animated w-full sm:w-auto min-w-[200px] sm:min-w-[240px] md:min-w-[280px] text-white text-base sm:text-lg md:text-xl font-semibold px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 relative hero-button"
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
                <span className="relative z-10 flex items-center gap-3">
                  Start 3-Day Free Trial
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                </span>
              </Button>
            </div>

            {/* Footer Note */}
            <div className="pt-1 sm:pt-2 px-2 sm:px-0 order-7 my-5 mx-0">
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 flex-wrap">
                <span>Start Free 3-Day Challenge</span>
                <span className="text-border">•</span>
                <span>Cancel Anytime</span>
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <div className="w-full max-w-xl xl:max-w-[640px] px-6">
              <div className="hero-image-frame hero-image-frame--lg">
                <img
                  src={heroImage}
                  alt="Community success stories"
                  className="w-full rounded-[36px] object-cover hero-image-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
