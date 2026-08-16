const ProcessFlow = ({ steps }: { steps: string[] }) => {
  return (
    <ol
      aria-label="How the work flows"
      className="mt-8 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4"
    >
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative min-h-[112px] rounded-2xl border border-white/10 bg-[#171a23] p-4"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6ea8ff]">
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-4 text-[14px] font-semibold leading-snug text-[#e4ded7] md:text-[15px]">
            {step}
          </p>
          {index < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-[9px] top-1/2 z-10 hidden h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#212531] text-[10px] text-[#6ea8ff] lg:flex"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default ProcessFlow;
