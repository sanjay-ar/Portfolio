export type Experience = {
  id: "cisco" | "naatscorp" | "incois";
  number: string;
  company: string;
  team?: string;
  role: string;
  startDate: string;
  startDateTime: string;
  endDate: string;
  endDateTime?: string;
  location: string;
  summary: string;
  highlights: string[];
  workflow: string[];
  technologies: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "cisco",
    number: "01",
    company: "Cisco",
    team: "Splunk AppDynamics",
    role: "Software Developer — AppDynamics Controller",
    startDate: "Aug 2025",
    startDateTime: "2025-08",
    endDate: "Present",
    location: "Bengaluru",
    summary:
      "I build backend workflows and developer tooling for the AppDynamics Controller, including an AI-assisted plugin that helps engineers move from requirements to review-ready E2E tests.",
    highlights: [
      "Created a guided E2E workflow for scope analysis, scenario planning, test implementation, coverage review, CI validation, and documentation.",
      "Packaged reusable guidance for planning, writing, auditing, and debugging so engineers can follow a consistent path.",
      "Designed the plugin for collaborative team use, with developers reviewing decisions, evidence, and test code throughout.",
    ],
    workflow: [
      "Define scope",
      "Plan & write scenarios",
      "Audit & debug",
      "Validate & document",
    ],
    technologies: [
      "Java",
      "Playwright",
      "TestNG",
      "AI-assisted tooling",
      "CI/CD",
      "Developer tooling",
    ],
    current: true,
  },
  {
    id: "naatscorp",
    number: "02",
    company: "Naatscorp Private Limited",
    role: "Full Stack Development Intern",
    startDate: "Feb 2025",
    startDateTime: "2025-02",
    endDate: "Jul 2025",
    endDateTime: "2025-07",
    location: "Coimbatore",
    summary:
      "I developed a mobile-first HMI prototype for an assistive healthcare bed, giving users a practical alternative to a fixed bedside panel and clinicians a separate status view.",
    highlights: [
      "Connected a mobile HMI and assistive smart bed through REST-based application workflows.",
      "Built reusable full-stack and Kotlin/Android modules with MySQL-backed validation.",
      "Tested API, database, and error paths; troubleshot integrations and documented implementation decisions.",
    ],
    workflow: [
      "Patient mobile HMI",
      "Same local network",
      "REST & MySQL application layer",
      "Smart-bed controller",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MySQL",
      "Kotlin / Android",
      "REST APIs",
    ],
  },
  {
    id: "incois",
    number: "03",
    company: "INCOIS",
    team: "Ministry of Earth Sciences",
    role: "Machine Learning Engineer",
    startDate: "Dec 2023",
    startDateTime: "2023-12",
    endDate: "May 2024",
    endDateTime: "2024-05",
    location: "Hyderabad",
    summary:
      "I worked on AAIDeS, a computer-vision system for marine-species detection and classification, translating a hackathon idea into an implementation evaluated with INCOIS.",
    highlights: [
      "Built Python pipelines for marine-image preprocessing, augmentation, inference, and evaluation.",
      "Used TensorFlow and OpenCV to develop and analyze species-classification workflows.",
      "Collaborated through model error analysis and implementation reviews for a real ocean-information use case.",
    ],
    workflow: [
      "Marine image data",
      "Preprocess & augment",
      "Model evaluation",
      "Species classification",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Pandas", "NumPy"],
  },
];
