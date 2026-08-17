"use client";

import Image from "next/image";
import { KeyboardEvent, useState } from "react";

import paintballTeam from "../../public/experience/cisco/paintball-team.webp";
import teamGathering from "../../public/experience/cisco/team-gathering.webp";
import teamPool from "../../public/experience/cisco/team-pool.webp";

const slides = [
  {
    image: teamGathering,
    title: "A wider team gathering",
    description: "Connecting across the group beyond the day-to-day work.",
    alt: "A large group of colleagues posing together outdoors at night.",
  },
  {
    image: teamPool,
    title: "Team day · Pool",
    description: "A lighter moment away from the usual engineering rhythm.",
    alt: "Colleagues celebrating together in a swimming pool during a team outing.",
  },
  {
    image: paintballTeam,
    title: "Team day · Paintball",
    description: "Collaboration with a playful, competitive edge.",
    alt: "Colleagues in protective gear holding paintball markers after a team activity.",
  },
];

const CiscoTeamSlideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  const activeSlide = slides[activeIndex];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Cisco team moments"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ded7] md:rounded-3xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[#090b10]">
        <Image
          key={activeSlide.title}
          src={activeSlide.image}
          alt={activeSlide.alt}
          fill
          sizes="(max-width: 1023px) 90vw, 660px"
          className="object-contain"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        <p className="border-white/15 absolute bottom-4 right-4 rounded-full border bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e4ded7] backdrop-blur-sm">
          {activeIndex + 1} / {slides.length}
        </p>
      </div>

      <div className="border-t border-white/10 p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div aria-live="polite">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6ea8ff]">
              Team moments
            </p>
            <p className="mt-2 text-[15px] font-semibold text-[#e4ded7]">
              {activeSlide.title}
            </p>
            <p className="mt-1 max-w-[460px] text-[12px] font-medium leading-relaxed text-[#95979D] md:text-[13px]">
              {activeSlide.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous team photo"
              className="border-white/15 hover:border-white/35 flex h-10 w-10 items-center justify-center rounded-full border text-[18px] text-[#e4ded7] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ded7] hover:bg-white/5 motion-reduce:transition-none"
            >
              ←
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next team photo"
              className="border-white/15 hover:border-white/35 flex h-10 w-10 items-center justify-center rounded-full border text-[18px] text-[#e4ded7] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e4ded7] hover:bg-white/5 motion-reduce:transition-none"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-5 flex gap-2" aria-label="Choose a team photo">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}: ${slide.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ded7] motion-reduce:transition-none ${
                index === activeIndex
                  ? "w-10 bg-[#6ea8ff]"
                  : "w-5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CiscoTeamSlideshow;
