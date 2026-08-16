import type { StaticImageData } from "next/image";

import ciscoJoining from "../../public/achievements/cisco-joining.jpeg";
import ciscoPlayToWin from "../../public/achievements/cisco-play-to-win.jpeg";
import ciscoDriveGrowth from "../../public/achievements/cisco-drive-growth.jpeg";
import ciscoThinkBig from "../../public/achievements/cisco-think-big.jpeg";
import ciscoCodexWinner from "../../public/achievements/cisco-codex-winner.jpeg";
import incoisImplementation from "../../public/achievements/incois-implementation.jpeg";
import incoisGrant from "../../public/achievements/incois-grant.jpeg";
import incoisCertificate from "../../public/achievements/incois-certificate.jpeg";
import hackathonBit from "../../public/achievements/hackathon-bit.jpeg";
import nationalInnovationEvent from "../../public/achievements/national-innovation-event.jpeg";
import studentWinner from "../../public/achievements/student-winner.jpeg";
import serviceNowCad from "../../public/achievements/servicenow-cad.png";
import serviceNowCsa from "../../public/achievements/servicenow-csa.png";

export type Achievement = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  meta: string;
  fit: "cover" | "contain";
};

export type AchievementGroup = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  achievements: Achievement[];
};

export const achievementGroups: AchievementGroup[] = [
  {
    id: "cisco",
    eyebrow: "Current chapter",
    title: "Building and growing at Cisco",
    summary:
      "Working with the AppDynamics Controller team across backend engineering, quality, automation, and AI-assisted developer workflows.",
    achievements: [
      {
        title: "Joined Cisco",
        description:
          "Started my current engineering chapter at Cisco as part of the AppDynamics Controller team.",
        image: ciscoJoining,
        alt: "Cisco welcome kit beside a laptop displaying I'm joining Cisco.",
        meta: "Cisco · Current",
        fit: "cover",
      },
      {
        title: "Codex Challenge Winner",
        description:
          "Recognized for experimenting early and turning an AI automation idea into an engineering tool.",
        image: ciscoCodexWinner,
        alt: "Cisco and Workhuman award recognizing Sanjay A R as a Codex Challenge winner.",
        meta: "Cisco · Innovation",
        fit: "contain",
      },
      {
        title: "Think Really Big",
        description:
          "Recognition connected to the Codex Challenge win and its potential to improve engineering productivity.",
        image: ciscoThinkBig,
        alt: "Cisco recognition naming Sanjay A R a Think Really Big Codex Challenge winner.",
        meta: "Cisco · Recognition",
        fit: "contain",
      },
      {
        title: "Drive Durable Growth",
        description:
          "Recognized for helping strengthen engineering quality through automation and continuous improvement.",
        image: ciscoDriveGrowth,
        alt: "Cisco recognition for Sanjay A R for Drive Durable Growth.",
        meta: "Cisco · Recognition",
        fit: "contain",
      },
      {
        title: "Play to Win",
        description:
          "Recognition for ownership, curiosity, and moving ambitious engineering work forward.",
        image: ciscoPlayToWin,
        alt: "Cisco recognition for Sanjay A R for Play to Win.",
        meta: "Cisco · Recognition",
        fit: "contain",
      },
    ],
  },
  {
    id: "incois",
    eyebrow: "Research to reality",
    title: "AAIDeS at INCOIS",
    summary:
      "A Smart India Hackathon 2022-recommended marine-species vision project implemented at INCOIS, Hyderabad, with ₹2.18 lakh in grant-in-aid support.",
    achievements: [
      {
        title: "INCOIS Implementation",
        description:
          "Worked with the project team and INCOIS experts to move AAIDeS from a prototype toward real-world implementation.",
        image: incoisImplementation,
        alt: "AAIDeS project team at INCOIS above a meeting-room project presentation.",
        meta: "INCOIS · 2024",
        fit: "cover",
      },
      {
        title: "₹2.18 lakh Grant-in-Aid",
        description:
          "INCOIS supported the AAIDeS project with grant-in-aid for stipends, contingency expenses, and compute resources.",
        image: incoisGrant,
        alt: "INCOIS sanction order awarding ₹2.18 lakh in grant-in-aid to the AAIDeS project.",
        meta: "INCOIS · Grant support",
        fit: "contain",
      },
      {
        title: "Implementation Certificate",
        description:
          "Completed the INCOIS implementation program for AAIDeS between February and July 2024.",
        image: incoisCertificate,
        alt: "INCOIS participation certificate for Sanjay A R's work implementing AAIDeS in 2024.",
        meta: "INCOIS · Feb–Jul 2024",
        fit: "contain",
      },
    ],
  },
  {
    id: "innovation",
    eyebrow: "Early momentum",
    title: "Student innovation awards",
    summary:
      "Team recognitions earned by building, presenting, and competing in student engineering and innovation events.",
    achievements: [
      {
        title: "Hackathon Winner at BIT",
        description:
          "Celebrating a team award onstage at Bannari Amman Institute of Technology.",
        image: hackathonBit,
        alt: "A student team receives an award cheque onstage at Bannari Amman Institute of Technology.",
        meta: "Team achievement",
        fit: "cover",
      },
      {
        title: "National Innovation Event",
        description:
          "A student-team recognition at an ISIEINDIA innovation event hosted at Galgotias University.",
        image: nationalInnovationEvent,
        alt: "Student teams at an ISIEINDIA award ceremony at Galgotias University.",
        meta: "Engineering competition",
        fit: "cover",
      },
      {
        title: "Prize Ceremony",
        description:
          "Another milestone from competing, collaborating, and shipping ideas as a student team.",
        image: studentWinner,
        alt: "A student team receives a winner cheque at an award ceremony.",
        meta: "Student innovation",
        fit: "cover",
      },
    ],
  },
  {
    id: "certifications",
    eyebrow: "Credentials",
    title: "ServiceNow certified",
    summary:
      "Earned both the Certified System Administrator and Certified Application Developer credentials in 2024.",
    achievements: [
      {
        title: "Certified Application Developer",
        description:
          "Completed the ServiceNow application-development certification requirements in November 2024.",
        image: serviceNowCad,
        alt: "ServiceNow Certified Application Developer certificate for Sanjay A R, issued November 11, 2024.",
        meta: "ServiceNow · Nov 2024",
        fit: "contain",
      },
      {
        title: "Certified System Administrator",
        description:
          "Completed the ServiceNow system-administration certification requirements in October 2024.",
        image: serviceNowCsa,
        alt: "ServiceNow Certified System Administrator certificate for Sanjay A R, issued October 1, 2024.",
        meta: "ServiceNow · Oct 2024",
        fit: "contain",
      },
    ],
  },
];
