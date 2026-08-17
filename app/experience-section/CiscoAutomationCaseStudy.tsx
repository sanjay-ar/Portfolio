import Image from "next/image";

import teamDinner from "../../public/experience/cisco/team-dinner.webp";
import workflowImage from "../../public/experience/cisco/e2e-workflow.webp";
import CiscoTeamSlideshow from "./CiscoTeamSlideshow";

const workflowSteps = [
  {
    number: "01",
    title: "Define scope",
    description:
      "Capture the goals, acceptance boundaries, and E2E responsibilities for the completed development task.",
  },
  {
    number: "02",
    title: "Plan scenarios",
    description:
      "Map user paths, roles, data, edge cases, and expected behavior before implementation begins.",
  },
  {
    number: "03",
    title: "Write tests",
    description:
      "Generate and refine maintainable Java Playwright and TestNG tests with the engineer in control.",
  },
  {
    number: "04",
    title: "Audit coverage",
    description:
      "Review planned, added, and missed scenarios so risks and evidence gaps stay visible.",
  },
  {
    number: "05",
    title: "Validate in CI",
    description:
      "Run the suite, investigate failures, review evidence, and verify the resulting behavior.",
  },
  {
    number: "06",
    title: "Review & document",
    description:
      "Prepare review context, respond to feedback, and capture outcomes, decisions, and follow-up.",
  },
];

const CiscoAutomationCaseStudy = () => {
  return (
    <section
      aria-labelledby="cisco-automation-case-study-title"
      className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-[#151821] p-4 sm:p-6 md:mt-16 md:rounded-[36px] md:p-8 lg:p-10"
    >
      <div className="grid gap-6 border-b border-white/10 pb-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:pb-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6ea8ff] md:text-[11px]">
            Featured case study · Developer productivity
          </p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#95979D]">
            AI-assisted E2E automation
          </p>
        </div>
        <div>
          <h4
            id="cisco-automation-case-study-title"
            className="text-[32px] font-bold leading-[0.98] tracking-tight text-[#e4ded7] sm:text-[40px] lg:text-[50px]"
          >
            FROM REQUIREMENT TO REVIEW-READY TESTS, IN ONE GUIDED WORKFLOW.
          </h4>
          <p className="mt-5 max-w-[760px] text-[15px] font-medium leading-relaxed text-[#b7b8bd] md:text-[17px]">
            At Cisco, I designed and built an internal developer-productivity
            plugin that helps engineers move from a requirement to review-ready
            end-to-end tests. It brings planning, implementation, coverage
            checks, CI validation, debugging, and documentation into a
            repeatable workflow that teammates can reuse and extend.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-10">
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Problem
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            A fragmented, multi-step E2E workflow
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Solution
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            One guided developer plugin
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Collaboration
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            A shared workflow the team can use and improve
          </p>
        </div>
      </div>

      <figure className="mt-8 md:mt-10">
        <a
          href={workflowImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the AI-assisted E2E workflow graphic at full size"
          className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ded7] md:rounded-3xl"
        >
          <Image
            src={workflowImage}
            alt="Workflow graphic showing six connected stages: define, plan, write, audit, validate, and document."
            sizes="(max-width: 1279px) 90vw, 1060px"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.01] motion-reduce:transform-none"
            priority={false}
          />
        </a>
        <figcaption className="mt-4 flex flex-col gap-2 text-[12px] font-medium leading-relaxed text-[#95979D] sm:flex-row sm:items-center sm:justify-between md:text-[13px]">
          <span>
            Public-safe workflow reconstruction; internal systems, identifiers,
            and implementation details are intentionally omitted.
          </span>
          <span className="font-bold uppercase tracking-[0.14em] text-[#b7b8bd]">
            Open full diagram ↗
          </span>
        </figcaption>
      </figure>

      <p className="mt-8 max-w-[820px] text-[15px] font-medium leading-relaxed text-[#b7b8bd] md:mt-10 md:text-[17px]">
        The plugin connects planning, implementation, validation, and review in
        one evidence-driven path.
      </p>

      <ol
        aria-label="AI-assisted E2E workflow"
        className="mt-5 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workflowSteps.map((step) => (
          <li
            key={step.number}
            className="rounded-2xl border border-white/10 bg-[#0E1016] p-5"
          >
            <span className="text-[11px] font-bold text-[#6ea8ff]">
              {step.number}
            </span>
            <h5 className="mt-4 text-[17px] leading-tight text-[#e4ded7]">
              {step.title}
            </h5>
            <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#95979D]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-[1.35fr_0.9fr]">
        <CiscoTeamSlideshow />

        <figure className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] md:rounded-3xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#090b10] lg:flex-1">
            <Image
              src={teamDinner}
              alt="Cisco colleagues seated together around tables during a team gathering."
              fill
              sizes="(max-width: 1023px) 90vw, 390px"
              className="object-contain"
            />
          </div>
          <figcaption className="border-t border-white/10 p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6ea8ff]">
              The people behind the work
            </p>
            <p className="mt-2 text-[15px] font-semibold text-[#e4ded7]">
              Cisco · Splunk AppDynamics
            </p>
            <p className="mt-1 text-[12px] font-medium leading-relaxed text-[#95979D] md:text-[13px]">
              The shared momentum that turns a useful tool into a team workflow.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CiscoAutomationCaseStudy;
