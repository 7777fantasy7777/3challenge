import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useMemo, ReactNode } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardRotateProps {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <div className="card-rotate">
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY
        }}
        drag
        dragElastic={0.6}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        onDragEnd={handleDragEnd}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface CardData {
  id: number;
  img: string;
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number } | null;
  cardsData?: CardData[];
  animationConfig?: { stiffness: number; damping: number };
  sendToBackOnClick?: boolean;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = null, // Now optional, will be calculated responsively
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const { width: windowWidth } = useWindowSize();
  const isMobile = useIsMobile();
  
  // Calculate responsive dimensions
  const responsiveDimensions = useMemo(() => {
    // If cardDimensions is provided, use it (for backward compatibility)
    if (cardDimensions) {
      return cardDimensions;
    }

    // Calculate based on viewport width
    let cardWidth: number;
    let cardHeight: number;

    if (windowWidth < 640) {
      // Mobile (sm) - optimized for 320px to 640px
      if (windowWidth < 360) {
        // Very small screens (320px - 360px)
        cardWidth = windowWidth - 20; // Minimal padding (10px each side)
        cardHeight = cardWidth * 0.58;
      } else {
        // Standard mobile (360px - 640px)
        const availableWidth = windowWidth - 32; // 16px padding on each side
        cardWidth = Math.min(availableWidth, windowWidth * 0.88);
        cardHeight = cardWidth * 0.58;
      }
    } else if (windowWidth < 768) {
      // Small tablets
      cardWidth = Math.min(windowWidth - 96, 400);
      cardHeight = cardWidth * 0.57;
    } else if (windowWidth < 1024) {
      // Tablets (md)
      cardWidth = Math.min(windowWidth * 0.85, 500);
      cardHeight = cardWidth * 0.57;
    } else if (windowWidth < 1280) {
      // Desktop (lg)
      cardWidth = Math.min(windowWidth * 0.45, 600);
      cardHeight = cardWidth * 0.57;
    } else {
      // Large desktop (xl+)
      cardWidth = Math.min(700, windowWidth * 0.4);
      cardHeight = 400;
    }

    return { width: cardWidth, height: cardHeight };
  }, [windowWidth, cardDimensions]);

  // Calculate container dimensions with extra space for rotated cards
  // Cards can rotate, so we need extra space to prevent clipping
  const containerDimensions = useMemo(() => {
    const maxRotation = isMobile ? 10 : 20; // Max rotation in degrees
    // Calculate diagonal length when rotated
    const diagonal = Math.sqrt(
      responsiveDimensions.width * responsiveDimensions.width + 
      responsiveDimensions.height * responsiveDimensions.height
    );
    const rotationRad = maxRotation * Math.PI / 180;
    // Calculate how much extra space we need when card is rotated
    const extraSpace = diagonal * Math.abs(Math.sin(rotationRad)) * 0.5;
    
    // Adaptive padding based on screen size
    let minPadding: number;
    if (windowWidth < 360) {
      minPadding = 12; // Very small screens (320px) - minimal padding to prevent clipping
    } else if (windowWidth < 640) {
      minPadding = 18; // Small mobile screens (375px)
    } else {
      minPadding = 60; // Larger screens
    }
    
    const padding = Math.max(extraSpace, minPadding);
    
    // Calculate container width, but ensure it fits within viewport
    const calculatedWidth = responsiveDimensions.width + padding * 2;
    const maxAllowedWidth = windowWidth - (windowWidth < 360 ? 8 : 16); // Smaller margin on tiny screens
    
    // If calculated width exceeds max, reduce padding
    let actualPadding = padding;
    let containerWidth = calculatedWidth;
    
    if (calculatedWidth > maxAllowedWidth) {
      // Reduce padding to fit within viewport
      actualPadding = Math.max((maxAllowedWidth - responsiveDimensions.width) / 2, minPadding * 0.5);
      containerWidth = responsiveDimensions.width + actualPadding * 2;
      // Final check to ensure it doesn't exceed
      containerWidth = Math.min(containerWidth, maxAllowedWidth);
    }
    
    return {
      width: containerWidth,
      height: responsiveDimensions.height + actualPadding * 2,
      padding: actualPadding
    };
  }, [responsiveDimensions, isMobile, windowWidth]);

  // Adjust sensitivity for mobile
  const responsiveSensitivity = useMemo(() => {
    if (isMobile) {
      return Math.min(sensitivity, 120); // Lower sensitivity on mobile
    }
    return sensitivity;
  }, [isMobile, sensitivity]);

  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format' },
          { id: 2, img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format' },
          { id: 3, img: 'https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format' },
          { id: 4, img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format' }
        ]
  );

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Ensure container width doesn't exceed viewport
  const finalContainerWidth = Math.min(containerDimensions.width, windowWidth - 16);

  return (
    <div
      className="stack-container w-full max-w-full mx-auto"
      style={{
        width: finalContainerWidth,
        height: containerDimensions.height,
        perspective: isMobile ? 400 : 600,
        maxWidth: `${finalContainerWidth}px`
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        // Reduce rotation on mobile for better visibility
        const rotationMultiplier = isMobile ? 2 : 4;

        return (
          <CardRotate 
            key={card.id} 
            onSendToBack={() => sendToBack(card.id)} 
            sensitivity={responsiveSensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * rotationMultiplier + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: 'center center'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: responsiveDimensions.width,
                height: responsiveDimensions.height
              }}
            >
              <img src={card.img} alt={`card-${card.id}`} className="card-image" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
