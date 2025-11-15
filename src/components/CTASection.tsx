import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, X, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] tracking-tight">
              The Choice Is Yours
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of members already profiting from exclusive clearance deals and price errors. Start your journey today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group min-w-[250px] shadow-glow hover:shadow-glow"
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
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2 group">
              <Shield className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>3-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 group">
              <X className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
