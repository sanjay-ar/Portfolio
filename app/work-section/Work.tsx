import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
      aria-labelledby="featured-work-title"
    >
      <div className="mb-10 w-[90%] text-[#e4ded7] md:mb-16 lg:max-w-[1200px]">
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.24em] text-[#95979D] md:text-[14px]">
          Selected projects
        </p>
        <h2
          id="featured-work-title"
          className="text-[44px] font-bold leading-none tracking-tight md:text-[64px] lg:text-[80px]"
        >
          Featured Work
        </h2>
        <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-relaxed text-[#95979D] md:text-[18px]">
          A selection of products I&apos;ve designed and developed, from
          booking experiences to creative web tools.
        </p>
      </div>

      <ProjectGrid />
    </section>
  );
};

export default Work;
