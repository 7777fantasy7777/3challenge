import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
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
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isVisible 
          ? "translate-y-0 opacity-100 pointer-events-auto" 
          : "-translate-y-[150%] opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2.5 sm:py-3 md:py-4 bg-card/80 backdrop-blur-md border-b border-border/50 shadow-lg">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
          <div className="relative">
            <img src="/logo.webp" alt="logo" className="w-10 h-10" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-foreground whitespace-nowrap logo-title-text">eMoney</span>
        </div>

        <div className="hidden 850:flex items-center gap-0.5 px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-xl border border-border/30">
          <button
            onClick={() => scrollToSection("hero")}
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
            onClick={() => scrollToSection("how-it-works")}
            className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10 whitespace-nowrap"
          >
            FAQs
          </button>
        </div>

        <div className="flex 850:hidden items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <Button
            onClick={scrollToCheckout}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 text-sm font-medium whitespace-nowrap"
          >
            Get Started
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Button>
        </div>

        <div className="hidden 850:flex items-center gap-2 flex-shrink-0">
          <ThemeToggle />
          <Button
            onClick={scrollToCheckout}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 md:px-4 py-2 rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span className="text-sm font-medium whitespace-nowrap">Get Started</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

