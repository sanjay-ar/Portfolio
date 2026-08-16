import Image from "next/image";

import architectureImage from "../../public/experience/smart-bed-architecture.png";
import interfaceImage from "../../public/experience/smart-bed-interfaces.png";
import teamImage from "../../public/experience/naats-team.jpeg";

const systemSteps = [
  {
    number: "01",
    title: "Choose a control",
    description:
      "A patient or attendant uses the mobile HMI for supported movement, bed settings, or entertainment.",
  },
  {
    number: "02",
    title: "Stay on the local network",
    description:
      "The phone, clinician dashboard, application service, and bed communicate over the same local Wi-Fi or LAN.",
  },
  {
    number: "03",
    title: "Validate and route",
    description:
      "The REST application layer mediates requests and status while MySQL supports application data—clients do not connect to the database directly.",
  },
  {
    number: "04",
    title: "Control and monitor",
    description:
      "The bed controller exchanges supported commands and status; clinicians sign in separately to view patient and bed state.",
  },
];

const SmartBedCaseStudy = () => {
  return (
    <section
      aria-labelledby="smart-bed-case-study-title"
      className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-[#151821] p-4 sm:p-6 md:mt-16 md:rounded-[36px] md:p-8 lg:p-10"
    >
      <div className="grid gap-6 border-b border-white/10 pb-8 md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:pb-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6ea8ff] md:text-[11px]">
            Featured case study · R&amp;D prototype
          </p>
          <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#95979D]">
            Healthcare HMI Bed Control
          </p>
        </div>
        <div>
          <h4
            id="smart-bed-case-study-title"
            className="text-[32px] font-bold leading-[0.98] tracking-tight text-[#e4ded7] sm:text-[40px] lg:text-[50px]"
          >
            A MOBILE HMI FOR A CONNECTED SMART BED.
          </h4>
          <p className="mt-5 max-w-[720px] text-[15px] font-medium leading-relaxed text-[#b7b8bd] md:text-[17px]">
            The concept moves core bedside interactions to a person&apos;s own
            phone. Patients get a focused control experience, while doctors use
            a separate role-based view for patient and bed status.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-10">
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Product idea
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            Mobile alternative to a fixed bedside HMI
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Connection model
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            Same local Wi-Fi or LAN
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#0E1016] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#95979D]">
            Role-based views
          </p>
          <p className="mt-3 text-[15px] font-semibold leading-snug text-[#e4ded7]">
            Patient controls · Doctor status dashboard
          </p>
        </div>
      </div>

      <figure className="mt-8 md:mt-10">
        <a
          href={architectureImage.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the smart-bed system architecture diagram at full size"
          className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4ded7] md:rounded-3xl"
        >
          <Image
            src={architectureImage}
            alt="Architecture diagram showing patient and doctor interfaces connected over a local network to a REST service, MySQL database, smart-bed controller, and assistive bed."
            sizes="(max-width: 1279px) 90vw, 1060px"
            className="h-auto w-full transition duration-500 group-hover:scale-[1.01] motion-reduce:transform-none"
          />
        </a>
        <figcaption className="mt-4 flex flex-col gap-2 text-[12px] font-medium leading-relaxed text-[#95979D] sm:flex-row sm:items-center sm:justify-between md:text-[13px]">
          <span>
            System reconstruction based on the original project topology.
          </span>
          <span className="font-bold uppercase tracking-[0.14em] text-[#b7b8bd]">
            Open full diagram ↗
          </span>
        </figcaption>
      </figure>

      <ol
        aria-label="Smart-bed system flow"
        className="mt-8 grid list-none gap-3 sm:grid-cols-2 md:mt-10 lg:grid-cols-4"
      >
        {systemSteps.map((step) => (
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

      <div className="mt-8 grid gap-4 md:mt-10 lg:grid-cols-[1.65fr_0.85fr]">
        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] md:rounded-3xl">
          <Image
            src={interfaceImage}
            alt="Concept interface showing mobile smart-bed controls and a separate doctor dashboard with patient and bed status."
            sizes="(max-width: 1023px) 90vw, 700px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-white/10 p-5 text-[12px] font-medium leading-relaxed text-[#95979D] md:text-[13px]">
            Concept reconstruction based on my NaaTS work—not the production
            interface or real patient data.
          </figcaption>
        </figure>

        <figure className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0E1016] md:rounded-3xl">
          <div className="relative min-h-[220px] flex-1 overflow-hidden sm:min-h-[300px] lg:min-h-0">
            <Image
              src={teamImage}
              alt="Naatscorp team posing together outside the office."
              fill
              sizes="(max-width: 1023px) 90vw, 330px"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-white/10 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6ea8ff]">
              The team
            </p>
            <p className="mt-2 text-[14px] font-semibold text-[#e4ded7]">
              Naatscorp · Coimbatore
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default SmartBedCaseStudy;
