export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Aahaaram Restaurant",
    description:
      "Discover, order, and switch themes hassle-free. Dive into a virtual culinary journey – the flavors are online, the delivery is in your imagination!.",
    technologies: ["React", "Tailwind css", "Firebase"],
    github: "https://github.com/sanjay-ar/AharamSerenades_RestaurantBooking",
    demo: "https://aahaaramservices-sanju.vercel.app",
    image: require(".//../../public/projects/flixify.webp"),
    available: true,
  },
  {
    id: 1,
    name: "MediConnect",
    description:
      "Effortlessly schedule appointments with our React-powered booking site.",
    technologies: ["React", "Mysql", "Rasa"],
    github: "https://github.com/sanjay-ar/MediConnect",
    demo: "https://www.linkedin.com/posts/sanjay-ar_bithack23-webdevelopment-softwaredevelopment-activity-7128807042231779329-TN2N?utm_source=share&utm_medium=member_desktop",
    image: require(".//../../public/projects/skywatch-new.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Collegiate-Corner",
    description:
      "Simplify your class scheduling with our user-friendly dashboard. Easily manage class details and book venues hassle-free.",
    technologies: ["React", "CSS"],
    github: "https://github.com/sanjay-ar/Collegiate-Corner",
    demo: "https://www.linkedin.com/posts/sanjay-ar_reactjs-html-css-activity-6983065032066564097-8k3B?utm_source=share&utm_medium=member_desktop",
    image: require(".//../../public/projects/alpaca-new.webp"),
    available: true,
  },
  {
    id: 3,
    name: "LinkLeap",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/sanjay-ar/LinkLeap",
    demo: "https://url-shortener-nine-delta.vercel.app",
    image: require(".//../../public/projects/shortener-new.webp"),
    available: true,
  },
  {
    id: 4,
    name: "ImageForge",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/sanjay-ar/ImagiForge",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/alpaca-new-1.webp"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
