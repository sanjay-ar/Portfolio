import AnimatedTitle from "../animations/AnimatedTitle";
import CiscoAutomationCaseStudy from "./CiscoAutomationCaseStudy";
import ExperienceEntry from "./ExperienceEntry";
import SmartBedCaseStudy from "./SmartBedCaseStudy";
import { experiences } from "./experienceDetails";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] py-20 md:py-28 lg:py-32"
    >
      <div className="w-[90%] lg:max-w-[1200px]">
        <div className="grid gap-8 pb-12 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:pb-16">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#95979D] md:text-[14px]">
              Experience · 2023—Now
            </p>
          </div>
          <div>
            <AnimatedTitle
              id="experience-title"
              text="THREE CHAPTERS. ONE THROUGH-LINE."
              className="text-[42px] font-bold leading-[0.92] tracking-tighter text-[#e4ded7] sm:text-[50px] md:text-[64px] lg:text-[78px]"
              wordSpace="mr-[0.22em]"
              charSpace="mr-[0.001em]"
            />
            <p className="mt-6 max-w-[760px] text-[17px] font-medium leading-relaxed text-[#b7b8bd] md:text-[20px]">
              From applied machine learning at INCOIS and a connected-care
              R&amp;D product at Naatscorp to backend engineering and developer
              tooling at Cisco.
            </p>
          </div>
        </div>

        <ol className="list-none">
          {experiences.map((experience) => (
            <ExperienceEntry key={experience.id} experience={experience}>
              {experience.id === "cisco" ? <CiscoAutomationCaseStudy /> : null}
              {experience.id === "naatscorp" ? <SmartBedCaseStudy /> : null}
            </ExperienceEntry>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
