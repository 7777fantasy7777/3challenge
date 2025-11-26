import { HeroSection } from "@/components/HeroSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
// import { SocialProofSection } from "@/components/SocialProofSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DropShowcaseSection } from "@/components/DropShowcaseSection";
import { PokemonShowcaseSection } from "@/components/PokemonShowcaseSection";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { Reviews } from "@/components/Review";
import { Header } from "@/components/Header";
import WhopCheckoutSection from "@/components/WhopCheckoutSection";
import ReviewsSection from "@/components/ReviewsSection";
import PersonalPolicySalesCalculator from "@/components/PersonalPolicySalesCalculator";
import EarningsCalculatorSection from "@/components/EarningsCalculatorSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      
      <EarningsCalculatorSection />

      <StatsSection />

      <WhyDifferentSection />

      {/* <SocialProofSection /> */}

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <DropShowcaseSection
        title={
          <>
            <span style={{ color: "#37d09d" }}>$30</span> into{" "}
            <span style={{ color: "#37d09d" }}>$370 - $400</span> profit each
          </>
        }
        bullets={[
        ]}
        variant="default"
      />

      <PokemonShowcaseSection
        title={
          <>
            <span style={{ color: "#37d09d" }}>Pokémon</span> <br /> Clearance Wins – Turn <span style={{ color: "#37d09d" }}>$5-$15</span> Packs Into Fast Cash
          </>
        }
        bullets={[
        ]}
      />

      <div id="reviews">
        <ReviewsSection />
      </div>

      <CTASection />

      <WhopCheckoutSection />

      <footer className="py-12 lg:py-16 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <p className="text-sm md:text-base text-muted-foreground">
              © 2025 eMoney Deals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
