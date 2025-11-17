import { HeroSection } from "@/components/HeroSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DropShowcaseSection } from "@/components/DropShowcaseSection";
import { PokemonShowcaseSection } from "@/components/PokemonShowcaseSection";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reviews } from "@/components/Review";
import { Header } from "@/components/Header";
import WhopCheckoutSection from "@/components/WhopCheckoutSection";
import ReviewsSection from "@/components/ReviewsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>

      <StatsSection />

      <WhyDifferentSection />

      <SocialProofSection />

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <DropShowcaseSection
        title="Starbucks Bearista – $30 → $200 Profit Per Item"
        bullets={[
          "Members secured dozens within hours",
          "Simple alert → buy → flip",
          "Fast-moving item with massive margins",
        ]}
        // imageNote="20–50 photos of members holding the Bearista, receipts, carts, etc."
        variant="default"
      />

      {/* <DropShowcaseSection
        title="Monster Jam Christmas Drop – $20 → $200 Profit"
        bullets={[
          "One of the easiest flips of the season",
          "Over 100+ verified success posts",
          "Members stacked multiple units per trip",
        ]}
        imageNote="Huge set of Monster Jam / Monster High wins."
        variant="alternate"
      /> */}

      <PokemonShowcaseSection
        title="Pokémon Clearance Wins – Turn $5-$15 Packs Into Fast Cash"
        bullets={[
          "Hidden clearance finds members would never spot alone",
          "Pokémon products flip fast with near-zero risk",
          "Dozens of real results from stores nationwide",
        ]}
      />

      {/* <DropShowcaseSection
        title="Creepers & Hype Drops – Low Cost. High Profit."
        bullets={[
          "High-demand, low-stock items",
          "Super fast turnaround time",
          "Perfect for beginners wanting simple wins",
        ]}
        variant="alternate"
      /> */}

      {/* <DropShowcaseSection
        title="Hidden Clearance – Everyday Stores, Big Profits"
        bullets={[
          "Members use our alerts to find hidden markdowns",
          "Low cost items that flip for 3–8x in days",
          "The most consistent daily wins in the community",
        ]}
        variant="default"
      /> */}

      <div id="reviews">
        {/* <Reviews /> */}
        <ReviewsSection />
      </div>

      {/* <div id="faqs" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Coming soon - FAQs section will be added here.
            </p>
          </div>
        </div>
      </div> */}

      <ThemeToggle />

      <CTASection />

      <WhopCheckoutSection />

      <footer className="py-12 lg:py-16 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <p className="text-sm md:text-base text-muted-foreground">
              © 2025 eMoney Deals. All rights reserved.
            </p>
            {/* <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base text-muted-foreground">
              <a 
                href="#" 
                className="hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <span className="text-border">•</span>
              <a 
                href="#" 
                className="hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                Terms of Service
              </a>
              <span className="text-border">•</span>
              <a 
                href="#" 
                className="hover:text-primary transition-colors duration-300 hover:underline underline-offset-4"
              >
                Contact
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
