import type { ReactNode } from "react";

import ProcessFlow from "./ProcessFlow";
import type { Experience } from "./experienceDetails";

type ExperienceEntryProps = {
  experience: Experience;
  children?: ReactNode;
};

const ExperienceEntry = ({ experience, children }: ExperienceEntryProps) => {
  return (
    <li>
      <article
        aria-labelledby={`${experience.id}-experience-title`}
        className="border-t border-white/[0.15] py-12 md:py-16"
      >
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          <header className="md:pr-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#6ea8ff]">
                Chapter {experience.number}
              </span>
              {experience.current && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[#65d6c0]/30 bg-[#65d6c0]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce7d5]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#65d6c0]"
                  />
                  Current
                </span>
              )}
            </div>
            <p className="mt-5 text-[16px] font-semibold text-[#e4ded7] md:text-[18px]">
              <time dateTime={experience.startDateTime}>
                {experience.startDate}
              </time>{" "}
              —{" "}
              {experience.endDateTime ? (
                <time dateTime={experience.endDateTime}>
                  {experience.endDate}
                </time>
              ) : (
                experience.endDate
              )}
            </p>
            <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.16em] text-[#95979D]">
              {experience.location}
            </p>
          </header>

          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#95979D] md:text-[13px]">
              {experience.team
                ? `${experience.company} · ${experience.team}`
                : experience.company}
            </p>
            <h3
              id={`${experience.id}-experience-title`}
              className="mt-3 text-[34px] font-bold leading-[1.02] tracking-tight text-[#e4ded7] sm:text-[42px] lg:text-[52px]"
            >
              {experience.role}
            </h3>
            <p className="mt-6 max-w-[780px] text-[17px] font-medium leading-relaxed text-[#c5c2bd] md:text-[20px]">
              {experience.summary}
            </p>

            <ul className="mt-8 grid list-none gap-4 md:grid-cols-3">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l border-white/[0.15] pl-4 text-[14px] font-medium leading-relaxed text-[#95979D] md:text-[15px]"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <ProcessFlow steps={experience.workflow} />

            <ul
              aria-label={`${experience.company} technologies`}
              className="mt-7 flex list-none flex-wrap gap-2"
            >
              {experience.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b7b8bd] md:text-[11px]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {children}
      </article>
    </li>
  );
};

export default ExperienceEntry;
