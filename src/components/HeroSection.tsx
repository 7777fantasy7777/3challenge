import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
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
import HeroImageSilde from "./HeroImageSilde";
import GradientText from './GradientText'
import StarBorder from './StarBorder'

const images = [
  { id: 1, img: "assets/hero-image/hero-image (1).jpg" },
  // { id: 2, img: "assets/hero-image/hero-image (2).jpg" },
  // { id: 3, img: "assets/hero-image/hero-image (3).jpg" },
  // { id: 4, img: "assets/hero-image/hero-image (5).jpg" },
  // { id: 5, img: "assets/hero-image/hero-image (4).jpg" },
];

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

      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10" style={{ marginTop: '60px' }}>
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 flex flex-col w-full" style={{ boxSizing: "revert" }}>
            {/* Success Points - Always at the top */}
            <div className="flex flex-col gap-1 sm:gap-1 items-center lg:items-start pb-2 sm:pb-4 order-0">
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
            <div className="space-y-3 sm:space-y-4 order-2">
              <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15] tracking-tight px-2 sm:px-0" style={{ padding: "0 30px" }}>
                Build an Extra{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent block sm:inline">
                  $2,000/Month Flipping,
                </span>{" "}
                Hidden Clearance Deals
                {/* <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={10}
                  showBorder={false}
                  className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.15] tracking-tight px-2 sm:px-0"
                >
                  Build an Extra{" "}
                  <span className="text-primary bg-gradient-primary bg-clip-text text-transparent block sm:inline">
                    $2,000/Month Flipping,
                  </span>{" "}
                  Hidden Clearance Deals
                </GradientText> */}
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 order-3">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed" style={{ marginBottom: '30px' }}>
                In our <strong className="text-foreground font-semibold">3-Day First Flip Challenge</strong>, you'll use our Clearance AI + real community data to find, buy & flip your first profitable item.
              </p>
            </div>

            {/* Hero Image - Mobile: Above Button (order-4), Desktop: Hidden (moved to right column) */}
            <div className="relative group mt-4 sm:mt-6 lg:hidden flex items-center justify-center w-full overflow-visible order-4">
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-primary opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="w-full max-w-full overflow-visible flex items-center justify-center px-1 sm:px-2">
                <HeroImageSilde
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardsData={images}
                />
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start pt-2 sm:pt-4 px-2 sm:px-0 order-6">
              <Button
                variant="hero"
                size="xl"
                className="cta-button-animated w-full sm:w-auto min-w-[180px] sm:min-w-[220px] md:min-w-[250px] shadow-glow hover:shadow-glow text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 relative overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  const checkoutSection = document.getElementById('checkout');
                  if (checkoutSection) {
                    const yOffset = -80; // Offset for better visual positioning
                    const y = checkoutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                style={{ fontSize: '35px', padding: '20px 40px', color: 'white' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start 3-Day Free Trial
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
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
          <div className="hidden lg:flex relative group mt-0 items-center justify-center w-full overflow-visible">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="w-full max-w-full overflow-visible flex items-center justify-center">
              <HeroImageSilde
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardsData={images}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
