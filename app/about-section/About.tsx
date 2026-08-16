import AchievementGallery from "./AchievementGallery";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-20 md:py-28 lg:py-32"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"CURIOUS ABOUT THE SYSTEM. RESPONSIBLE FOR THE OUTCOME."}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I’m Sanjay A R, a software developer currently at Cisco on the AppDynamics Controller team. I care about dependable systems, useful automation, and product experiences that make complex work feel clear."
              }
            />
            <AnimatedBody
              text={
                "I enjoy working at the seam between backend engineering and product thinking—turning an ambiguous problem into APIs, data flows, interfaces, tests, and documentation that fit together."
              }
            />
            <AnimatedBody
              text={
                "My approach is simple: understand the full system, make the path visible, test the unhappy cases, and keep improving after the first version ships."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Currently"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={"Cisco — AppDynamics Controller Team, Bengaluru."}
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"How I Work"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Systems thinking, product ownership, clear communication, error-path testing, and a bias for shipping useful work."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Certified"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "ServiceNow Certified Application Developer and Certified System Administrator."
                }
              />
            </div>
          </div>
        </div>
        <AchievementGallery />
      </div>
    </section>
  );
};

export default About;
