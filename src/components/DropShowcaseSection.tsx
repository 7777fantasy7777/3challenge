import { CheckCircle, ZoomIn } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import 'swiper/css';

interface DropShowcaseSectionProps {
  title: ReactNode;
  bullets: string[];
  imageNote?: string;
  variant?: "default" | "alternate";
}

const getShowcaseImageIndex = (index: number) => {
  const countingImages = Array.from({ length: 23 }, (_, i) => i + 1);
  return countingImages[index % countingImages.length];
};

export const DropShowcaseSection = ({
  title,
  bullets,
  imageNote,
  variant = "default",
}: DropShowcaseSectionProps) => {
  const [images, setImages] = useState<number[]>([]);

  useEffect(() => {
    const indices = Array.from({ length: 4 }, () => Math.floor(Math.random() * 34));
    setImages(indices);
  }, []);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${variant === "alternate" ? "bg-card" : "bg-background"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center recent-wins-stack">
            <span className="recent-wins-pill">Community Proof</span>
            <h2 className="recent-wins-title">
              <span className="" style={{ color: "#37d09d" }}>Recent</span>
              <span className="" style={{ color: "#37d09d" }}>Wins</span>
            </h2>
            <p className="recent-wins-subtext">
              Real flips, real revenue from inside the 7-Day Free Trial
            </p>
          </div>
          
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${variant === "alternate" ? "lg:grid-flow-dense" : ""}`}>
            <div className={`space-y-6 lg:space-y-8 ${variant === "alternate" ? "lg:col-start-2" : ""}`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] tracking-tight text-center">{title}</h3>
              <ul className="space-y-4 sm:space-y-5">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <span className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-primary">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`space-y-4 ${variant === "alternate" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="flex animate-scroll-left gap-4">
                  {[...Array.from({ length: 8 }, (_, i) => i), ...Array.from({ length: 8 }, (_, i) => i)].map((i, idx) => {
                    const imgIndex = i + 1;
                    const imgSrc = `/assets/starbuck/starbuck (${imgIndex}).jpg`;

                    return (
                      <Dialog key={`top-${idx}`}>
                        <DialogTrigger asChild>
                          <div className="flex-shrink-0 w-[calc(50%-0.5rem)] min-w-[calc(50%-0.5rem)] aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer relative">
                            <img
                              src={imgSrc}
                              alt={`Showcase ${imgIndex}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl w-[95vw] p-4 bg-transparent border-none shadow-none">
                          <div className="relative w-full max-h-[90vh] flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                            <img
                              src={imgSrc}
                              alt={`Showcase ${imgIndex} - Full size`}
                              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <div className="flex animate-scroll-right gap-4">
                  {[...Array.from({ length: 8 }, (_, i) => 7 - i), ...Array.from({ length: 8 }, (_, i) => 7 - i)].map((i, idx) => {
                    const imgIndex = i + 1;
                    const imgSrc = `/assets/starbuck/starbuck (${imgIndex}).jpg`;

                    return (
                      <Dialog key={`bottom-${idx}`}>
                        <DialogTrigger asChild>
                          <div className="flex-shrink-0 w-[calc(50%-0.5rem)] min-w-[calc(50%-0.5rem)] aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer relative">
                            <img
                              src={imgSrc}
                              alt={`Showcase ${imgIndex}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl w-[95vw] p-4 bg-transparent border-none shadow-none">
                          <div className="relative w-full max-h-[90vh] flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                            <img
                              src={imgSrc}
                              alt={`Showcase ${imgIndex} - Full size`}
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
          </div>

          {imageNote && (
            <p className="text-center text-muted-foreground mt-10 text-sm md:text-base italic">
              {imageNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
