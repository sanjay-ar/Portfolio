import Image from "next/image";

import type { Achievement } from "./achievementDetails";

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  const { title, description, image, alt, meta, fit } = achievement;

  return (
    <li className="h-full">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View full image for ${title}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#212531] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ded7] hover:-translate-y-1 hover:border-white/20 motion-reduce:transform-none"
      >
        <figure className="flex h-full flex-col">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#161922]">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 767px) 90vw, (max-width: 1279px) 44vw, 30vw"
              className={`transition duration-500 group-hover:scale-[1.02] motion-reduce:transform-none ${
                fit === "cover" ? "object-cover" : "object-contain p-3 sm:p-5"
              }`}
            />
            <span className="bg-[#0E1016]/85 absolute right-4 top-4 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e4ded7] backdrop-blur-sm sm:text-[11px]">
              View image ↗
            </span>
          </div>
          <figcaption className="flex flex-1 flex-col p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
              {meta}
            </p>
            <h4 className="mt-3 text-[24px] leading-tight text-[#e4ded7] sm:text-[27px]">
              {title}
            </h4>
            <p className="mt-3 text-[14px] font-medium leading-relaxed text-[#b7b8bd] sm:text-[15px]">
              {description}
            </p>
          </figcaption>
        </figure>
      </a>
    </li>
  );
};

export default AchievementCard;
