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
  cardDimensions = null,
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const { width: windowWidth } = useWindowSize();
  const isMobile = useIsMobile();
  
  const responsiveDimensions = useMemo(() => {
    if (cardDimensions) {
      return cardDimensions;
    }

    let cardWidth: number;
    let cardHeight: number;

    if (windowWidth < 640) {
      if (windowWidth < 360) {
        cardWidth = windowWidth - 20;
        cardHeight = cardWidth * 0.58;
      } else if (windowWidth < 480) {
        const availableWidth = windowWidth - 28;
        cardWidth = Math.min(availableWidth, windowWidth * 0.9);
        cardHeight = cardWidth * 0.58;
      } else {
        const availableWidth = windowWidth - 40;
        cardWidth = Math.min(availableWidth, windowWidth * 0.85);
        cardHeight = cardWidth * 0.57;
      }
    } else if (windowWidth < 768) {
      cardWidth = Math.min(windowWidth - 96, 400);
      cardHeight = cardWidth * 0.57;
    } else if (windowWidth < 1024) {
      cardWidth = Math.min(windowWidth * 0.85, 500);
      cardHeight = cardWidth * 0.57;
    } else if (windowWidth < 1280) {
      cardWidth = Math.min(windowWidth * 0.45, 600);
      cardHeight = cardWidth * 0.57;
    } else {
      cardWidth = Math.min(700, windowWidth * 0.4);
      cardHeight = 400;
    }

    return { width: cardWidth, height: cardHeight };
  }, [windowWidth, cardDimensions]);

  const containerDimensions = useMemo(() => {
    const maxRotation = isMobile ? 10 : 20;
    const diagonal = Math.sqrt(
      responsiveDimensions.width * responsiveDimensions.width + 
      responsiveDimensions.height * responsiveDimensions.height
    );
    const rotationRad = maxRotation * Math.PI / 180;
    const extraSpace = diagonal * Math.abs(Math.sin(rotationRad)) * 0.5;
    
    let minPadding: number;
    if (windowWidth < 360) {
      minPadding = 12;
    } else if (windowWidth < 640) {
      minPadding = 18;
    } else {
      minPadding = 60;
    }
    
    const padding = Math.max(extraSpace, minPadding);
    
    const calculatedWidth = responsiveDimensions.width + padding * 2;
    const maxAllowedWidth = windowWidth - (windowWidth < 360 ? 8 : 16);
    
    let actualPadding = padding;
    let containerWidth = calculatedWidth;
    
    if (calculatedWidth > maxAllowedWidth) {
      actualPadding = Math.max((maxAllowedWidth - responsiveDimensions.width) / 2, minPadding * 0.5);
      containerWidth = responsiveDimensions.width + actualPadding * 2;
      containerWidth = Math.min(containerWidth, maxAllowedWidth);
    }
    
    return {
      width: containerWidth,
      height: responsiveDimensions.height + actualPadding * 2,
      padding: actualPadding
    };
  }, [responsiveDimensions, isMobile, windowWidth]);

  const responsiveSensitivity = useMemo(() => {
    if (isMobile) {
      return Math.min(sensitivity, 120);
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
