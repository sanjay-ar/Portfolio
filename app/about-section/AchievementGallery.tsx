import AnimatedTitle from "../animations/AnimatedTitle";
import AchievementCard from "./AchievementCard";
import { achievementGroups } from "./achievementDetails";

const AchievementGallery = () => {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="mt-20 w-full md:mt-28 lg:mt-36"
    >
      <div className="grid gap-8 border-t border-white/[0.15] pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:pt-14">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#95979D] md:text-[14px]">
          Milestones · 2022—Now
        </p>
        <div>
          <AnimatedTitle
            id="achievements-title"
            text="BUILT, SHIPPED, RECOGNIZED."
            className="text-[40px] font-bold leading-[0.92em] tracking-tighter text-[#e4ded7] sm:text-[48px] md:text-[58px] lg:text-[72px]"
            wordSpace="mr-[0.22em]"
            charSpace="mr-[0.001em]"
          />
          <p className="mt-6 max-w-[680px] text-[17px] font-medium leading-relaxed text-[#b7b8bd] md:text-[20px]">
            A few moments behind the work—from hackathon stages and an INCOIS
            implementation to certifications and recognition at Cisco.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
        {achievementGroups.map((group) => (
          <article key={group.id} aria-labelledby={`${group.id}-title`}>
            <header className="mb-8 grid gap-4 md:mb-10 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#95979D] md:text-[12px]">
                {group.eyebrow}
              </p>
              <div>
                <h3
                  id={`${group.id}-title`}
                  className="text-[30px] leading-tight text-[#e4ded7] md:text-[40px]"
                >
                  {group.title}
                </h3>
                <p className="mt-3 max-w-[720px] text-[15px] font-medium leading-relaxed text-[#95979D] md:text-[17px]">
                  {group.summary}
                </p>
              </div>
            </header>

            <ul className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {group.achievements.map((achievement) => (
                <AchievementCard
                  key={achievement.title}
                  achievement={achievement}
                />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AchievementGallery;
