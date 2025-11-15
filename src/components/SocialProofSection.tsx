import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const Counting = Array.from({ length: 23 }, (_, i) => i + 1);

export const SocialProofSection = () => {

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">VERIFIED RESULTS</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.2] tracking-tight px-4">
              30,000 Members Have Generated
              <br />
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                $55,000,000
              </span>{" "}
              and Counting
            </h2>
          </div>

          <div className="space-y-8">
            {/* First row - scrolling left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...Counting, ...Counting, ...Counting].map((num, i) => {
                  const imageIndex = ((num - 1) % 23) + 1;
                  const imageSrc = `/assets/top-counting (${imageIndex}).jpg`;
                  return (
                    <Dialog key={`left-${i}`}>
                      <DialogTrigger asChild>
                        <div className="flex-shrink-0 w-80 h-80 mx-4 rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer relative"
                        >
                          <img
                            src={imageSrc}
                            alt={`Member success ${num}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-[95vw] p-4 bg-transparent border-none shadow-none">
                        <div className="relative w-full max-h-[90vh] flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                          <img
                            src={imageSrc}
                            alt={`Member success ${num} - Full size`}
                            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>

            {/* Second row - scrolling right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...Counting, ...Counting, ...Counting].map((num, i) => {
                  const imageIndex = ((num - 1) % 23) + 1;
                  const imageSrc = `/assets/top-counting (${imageIndex}).jpg`;
                  return (
                    <Dialog key={`right-${i}`}>
                      <DialogTrigger asChild>
                        <div className="flex-shrink-0 w-80 h-80 mx-4 rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer relative"
                        >
                          <img
                            src={imageSrc}
                            alt={`Member success ${num}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-[95vw] p-4 bg-transparent border-none shadow-none">
                        <div className="relative w-full max-h-[90vh] flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                          <img
                            src={imageSrc}
                            alt={`Member success ${num} - Full size`}
                            className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm md:text-base">
            All screenshots are pulled directly from our private Whop community. Click any image to view in full size.
          </p>
        </div>
      </div>
    </section>
  );
};
