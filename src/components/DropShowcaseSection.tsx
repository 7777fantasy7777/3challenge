import { CheckCircle, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { log } from "console";

interface DropShowcaseSectionProps {
  title: string;
  bullets: string[];
  imageNote?: string;
  variant?: "default" | "alternate";
}

// Use top-counting images as showcase (they're in public/assets)
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
    // Generate random selection of showcase images
    const indices = Array.from({ length: 4 }, () => Math.floor(Math.random() * 34));
    setImages(indices);
  }, []);

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${variant === "alternate" ? "bg-card" : "bg-background"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${variant === "alternate" ? "lg:grid-flow-dense" : ""}`}>
            <div className={`space-y-6 lg:space-y-8 ${variant === "alternate" ? "lg:col-start-2" : ""}`}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] tracking-tight">{title}</h3>
              <ul className="space-y-4 sm:space-y-5">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    {/* <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div> */}
                    <span className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-primary">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`space-y-4 ${variant === "alternate" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              {/* Top row - scrolling left - shows all 8 images */}
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
                              onError={(e) => {
                                // Fallback to placeholder
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center bg-gradient-primary/10">
                                      <div class="text-center space-y-2">
                                        <div class="text-2xl font-bold text-primary">Win #${imgIndex}</div>
                                        <div class="text-xs text-muted-foreground">Member Success</div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
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

              {/* Bottom row - scrolling right - shows all 8 images in reverse order */}
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
                              onError={(e) => {
                                // Fallback to placeholder
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center bg-gradient-primary/10">
                                      <div class="text-center space-y-2">
                                        <div class="text-2xl font-bold text-primary">Win #${imgIndex}</div>
                                        <div class="text-xs text-muted-foreground">Member Success</div>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
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
          {/* <div className={`flex flex-cols gap-4 ${variant === "alternate" ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            {[0, 1, 2, 3].map((i) => {
              const imgIndex = i + 1;
              const imgSrc = `/assets/starbuck/starbuck (${imgIndex}).jpg`;
              console.log("😱😱😱", i);

              return (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-105 group cursor-pointer relative">
                      <img
                        src={imgSrc}
                        alt={`Showcase ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-primary/10">
                                  <div class="text-center space-y-2">
                                    <div class="text-2xl font-bold text-primary">Win #${i + 1}</div>
                                    <div class="text-xs text-muted-foreground">Member Success</div>
                                  </div>
                                </div>
                              `;
                          }
                        }}
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
                        alt={`Showcase ${i + 1} - Full size`}
                        className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div> */}

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
