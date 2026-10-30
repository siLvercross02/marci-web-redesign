import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Carousel1 from "../assets/carousel-1.webp";
import Carousel2 from "../assets/carousel-2.webp";
import Carousel3 from "../assets/carousel-3.webp";
import Carousel4 from "../assets/carousel-4.webp";
import Carousel5 from "../assets/carousel-5.webp";
import Carousel6 from "../assets/carousel-6.webp";
import Carousel7 from "../assets/carousel-7.webp";

const galleryImages = [
  { src: Carousel1, alt: "Sunroom with a red chair and desert views" },
  { src: Carousel2, alt: "Open plan luxury kitchen and living area" },
  { src: Carousel3, alt: "Residential home with a swimming pool" },
  { src: Carousel4, alt: "House keys on a wooden surface" },
  { src: Carousel5, alt: "Residential community with full amenities" },
  { src: Carousel6, alt: "Community facilities for sports lovers" },
  { src: Carousel7, alt: "Modern residential houses" },
];

const Carousel = () => {
  const [activeGallery, setActiveGallery] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const changeImage = (direction) => {
    setActiveGallery(
      (current) =>
        (current + direction + galleryImages.length) % galleryImages.length,
    );
  };

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="gallery section-pad">
      <div className="section-heading section-heading--light">
        <div>
          <p className="eyebrow eyebrow--light">Properties &amp; community</p>
          <h2>Photo Gallery</h2>
        </div>

        <p>Select an image to explore the gallery.</p>
      </div>

      <div className="gallery-container">
        {/* Main Image */}
        <div className="gallery-stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={activeGallery}
              src={galleryImages[activeGallery].src}
              alt={galleryImages[activeGallery].alt}
              initial={
                shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, scale: 0.99 }
              }
              transition={transition}
              draggable={false}
            />
          </AnimatePresence>

          {/* Image Counter */}
          <div className="gallery-counter">
            <span>{String(activeGallery + 1).padStart(2, "0")}</span>
            <span className="gallery-counter-divider">/</span>
            <span>{String(galleryImages.length).padStart(2, "0")}</span>
          </div>

          {/* Navigation */}
          <div className="gallery-navigation">
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => changeImage(-1)}
            >
              &#8592;
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={() => changeImage(1)}
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div
          className="gallery-thumbs"
          role="group"
          aria-label="Choose a gallery image"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              className={activeGallery === index ? "is-active" : ""}
              aria-label={`View image ${index + 1}`}
              aria-pressed={activeGallery === index}
              onClick={() => setActiveGallery(index)}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <img src={image.src} alt="" />

              {activeGallery === index && (
                <motion.span
                  className="gallery-thumb-indicator"
                  layoutId="gallery-active-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
