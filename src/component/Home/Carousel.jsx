"use client";
import React from "react";
import { DotButton, useDotButton } from "./EmblaButtons";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {["/image/Vishnu.png", "/image/Cource-cmp.png"].map((e, index) => (
            <div className="embla__slide border" key={index}>
              <div className=" overflow-hidden">
                <img src={e} className=" w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
