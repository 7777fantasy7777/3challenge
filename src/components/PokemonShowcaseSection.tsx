"use client";

import { ArrowRight, CheckCircle, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageData {
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  name: string;
}

interface PokemonShowcaseSectionProps {
  title: React.ReactNode;
  bullets: string[];
}

// All Pokémon image filenames
const pokemonImages = [
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225677/image_1_za09qg.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225548/20250125_091508_aapjdq.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225492/20250125_091937_jjjisy.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225472/0E7CC490-9BBA-495C-955E-ACE4583BF645_myqu2m.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225447/Gyz0p7ma0AAxMe1_lnavef.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225416/IMG_20250127_140306_jvwvmg.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225409/PXL_20250323_142414120_wp0kxw.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225394/89bac790-4c3e-4ca6-be3d-5715187f143d_qmpbcw.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225352/s-l500_3_kqr9hm.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225348/s-l500_1_ot2zuf.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225334/Messenger_creation_CDA4FDAA-8732-4DF8-861B-61C984F116A7_cdq3pr.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225328/IMG_20250326_051757_bzjdsm.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225325/s-l500_2_affuhe.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225280/Messenger_creation_CDA4FDAA-8732-4DF8-861B-61C984F116A7_1_z60tzo.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225278/IMG_7971_fzjbxu.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225272/IMG_4722_xd3n56.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225270/IMG_9093_dzumsc.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225212/IMG_2062_xwonh7.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225197/IMG_2518_oclc2y.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225194/IMG_7516_acxki7.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225192/IMG_5722_xdyuty.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225150/IMG_2309_e3tuqn.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225148/IMG_3182_mg06ev.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225146/IMG_5721_ckobua.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225142/IMG_4224_odjanb.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225120/IMG_0161_gulwdh.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225114/IMG_2745_rrkxjl.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225112/IMG_2254_wmxwj6.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225108/IMG_2744_kt5xtq.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225103/IMG_0899_leiuuf.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225090/IMG_2383_u4oy4t.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225073/IMG_2151_tr5gps.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225046/20250327_151233_o3z8x8.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225026/IMG_0052_ggwn56.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763225023/20250327_151307_feqcr4.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224981/image000000_wdjmor.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224955/Gy4yVcfbQAE9q2f_igbc1r.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224904/image_7_tmjlac.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224901/20250307_123053_tikjfv.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224884/cachedImage_2_k0bsdf.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763224837/5516638d-5cf3-41cf-b245-944d60af93f2_dum6qp.jpg",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227476/IMG_7445_n8tdng.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227448/IMG_7982_yvhprw.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227442/20250227_225400_tgqxvl.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227439/IMG_3568_yvdbeh.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227438/IMG_2004_af5szj.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227416/IMG_2004_1_chlc80.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227415/image0_ocy9tv.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227412/IMG_0433_ban7zu.png",
  "https://res.cloudinary.com/dngvhkjz9/image/upload/v1763227408/IMG_2026_fjfile.png",
];

const IMAGES_PER_ROW = 3;
const INITIAL_VISIBLE = 9;

export const PokemonShowcaseSection = ({
  title,
  bullets,
}: PokemonShowcaseSectionProps) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    // Safety guard in case something tries to run this in a non-DOM env
    if (typeof window === "undefined") return;

    const loadImages = async () => {
      const imagePromises = pokemonImages.map((src) => {
        return new Promise<ImageData>((resolve) => {
          const img = new window.Image();
          img.src = src;

          img.onload = () => {
            resolve({
              src,
              width: img.naturalWidth,
              height: img.naturalHeight,
              aspectRatio: img.naturalWidth / img.naturalHeight || 1,
              name: src,
            });
          };

          img.onerror = () => {
            resolve({
              src,
              width: 800,
              height: 600,
              aspectRatio: 4 / 3,
              name: src,
            });
          };
        });
      });

      try {
        const loadedImages = await Promise.all(imagePromises);
        const shuffled = [...loadedImages].sort(() => Math.random() - 0.5);

        setImages(shuffled);
        // Make sure visibleCount never exceeds actual number of images
        setVisibleCount((prev) => Math.min(prev, shuffled.length));
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_ROW, images.length)
    );
  };

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start mb-12"> */}
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] tracking-tight text-center">
                {title}
              </h3> 
              <ul className="space-y-4 sm:space-y-5">
                {bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed text-primary">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          {/* </div> */}

          {images.length > 0 ? (
            <>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {visibleImages.map((image, index) => (
                  <Dialog key={`${image.name}-${index}`}>
                    <DialogTrigger asChild>
                      <div className="aspect-square rounded-xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group cursor-pointer relative">
                        <img
                          src={image.src}
                          alt={`Pokémon win ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading={index < INITIAL_VISIBLE ? "eager" : "lazy"}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-primary/10">
                                  <div class="text-center space-y-2">
                                    <div class="text-2xl font-bold text-primary">Win #${index + 1}</div>
                                    <div class="text-xs text-muted-foreground">Member Success</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <ZoomIn className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] p-4 bg-transparent border-none shadow-none">
                      <div className="relative w-full max-h-[90vh] flex items-center justify-center bg-card/95 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                        <img
                          src={image.src}
                          alt={`Pokémon win ${index + 1} - Full size`}
                          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={handleShowMore}
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Show More
                  </Button>
                </div>
              )}

              <p className="text-center text-muted-foreground mt-10 text-sm md:text-base italic">
                Showing {Math.min(visibleCount, images.length)} of{" "}
                {images.length} verified Pokémon clearance wins from our
                community members
              </p>
            </>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {Array.from({ length: INITIAL_VISIBLE }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-card border border-border animate-pulse"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-center pt-4">
          <Button onClick={(e) => {
              e.preventDefault();
              const checkoutSection = document.getElementById('checkout');
              if (checkoutSection) {
                const yOffset = -80;
                const y = checkoutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }} variant="hero" size="xl" className="w-full sm:w-auto min-w-[200px] sm:min-w-[250px] shadow-glow hover:shadow-glow text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
            Start 3-Day Free Trial
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </Button>
        </div>  
      </div>
    </section>
  );
};
