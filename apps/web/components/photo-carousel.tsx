"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Water } from '@paper-design/shaders-react';

type Photo = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

type PhotoCarouselProps = {
  photos: Photo[];
  secondsPerPhoto?: number;
};

export function PhotoCarousel({
  photos,
  secondsPerPhoto = 10,
}: PhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];
  const hasMultiplePhotos = photos.length > 1;
  const nextPhoto = hasMultiplePhotos
    ? photos[(activeIndex + 1) % photos.length]
    : null;

  if (!activePhoto) {
    return null;
  }

  return (
    <div className="relative mt-5 aspect-4/5 w-full overflow-hidden bg-neutral-200">
      <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-black/10">
        <motion.div
          key={activeIndex}
          animate={{ scaleX: 1 }}
          className="h-full origin-left bg-[#ffffff]"
          initial={{ scaleX: 0 }}
          onAnimationComplete={() => {
            if (hasMultiplePhotos) {
              setActiveIndex(
                (currentIndex) => (currentIndex + 1) % photos.length,
              );
            }
          }}
          transition={{ duration: secondsPerPhoto, ease: "linear" }}
        />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={activePhoto.src}
          animate={{ x: 0 }}
          className="absolute inset-0"
          exit={{ x: "-100%" }}
          initial={{ x: "100%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* <Image
            alt={activePhoto.alt}
            className="h-full w-full object-cover"
            height={activePhoto.height}
            priority={activeIndex === 0}
            src={activePhoto.src}
            width={activePhoto.width}
          /> */}
          <div
            aria-label={activePhoto.alt}
            className="h-full w-full"
            role="img"
          >
            <Water
              className="h-full w-full object-cover"
              image={activePhoto.src}
              colorBack="#8f8f8f"
              colorHighlight="#ffffff"
              highlights={0.07}
              layering={0.5}
              edges={0}
              waves={0.02}
              caustic={0.01}
              size={0.5}
              speed={0.5}
              scale={1}
              fit="cover"
              minPixelRatio={1}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {nextPhoto ? (
        <Image
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0"
          height={nextPhoto.height}
          loading="eager"
          src={nextPhoto.src}
          width={nextPhoto.width}
        />
      ) : null}
    </div>
  );
}
