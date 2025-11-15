import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToCheckout = () => {
    scrollToSection("checkout");
  };

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[80%] max-w-7xl transition-all duration-300 ease-in-out",
        isVisible 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "-translate-y-[150%] opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
          <div className="relative">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              e
            </span>
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-foreground whitespace-nowrap">eMoney</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-0.5 px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10 whitespace-nowrap"
          >
            Features
          </button>
          <button
            onClick={scrollToCheckout}
            className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10 whitespace-nowrap"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10 whitespace-nowrap"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10 whitespace-nowrap"
          >
            FAQs
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToCheckout}
            className="text-xs px-2.5 py-1.5 h-auto"
          >
            Join
          </Button>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToCheckout}
          className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 md:px-4 py-2 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 flex-shrink-0"
        >
          <span className="text-sm font-medium whitespace-nowrap">Join eMoney</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </Button>
      </nav>
    </header>
  );
};

