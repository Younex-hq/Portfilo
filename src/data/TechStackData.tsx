import { FaHtml5 as IconHTML } from "react-icons/fa";
import { FaCss3 as IconCSS } from "react-icons/fa";
import { FaReact as IconReact } from "react-icons/fa";
import { RiTailwindCssFill as IconTailwindCSS } from "react-icons/ri";
import { SiGsap as IconGSAP } from "react-icons/si";
import { SiShadcnui as IconShadcn } from "react-icons/si";
import { IoLogoJavascript as IconJS } from "react-icons/io5";
import { SiTypescript as IconTS } from "react-icons/si";

import { SiNestjs as IconNestJs } from "react-icons/si";
import { SiExpress as IconExpressJs } from "react-icons/si";
import { FaLaravel as IconLaravel } from "react-icons/fa6";

import { GrMysql as IconMySQL } from "react-icons/gr";
import { SiPostgresql as IconPostgreSQL } from "react-icons/si";
import { PiVectorThreeFill as IconVector } from "react-icons/pi";
import { SiSqlite as IconSQLite } from "react-icons/si";
import { SiMongodb as IconMongoDB } from "react-icons/si";

export type StackType = {
  icon: React.JSX.Element;
  name: string;
};

export const frontendStack: StackType[] = [
  {
    icon: <IconHTML />,
    name: "HTML",
  },
  {
    icon: <IconCSS />,
    name: "CSS",
  },
  {
    icon: <IconJS />,
    name: "JavaScript",
  },
  {
    icon: <IconTS />,
    name: "TypeScript",
  },
  {
    icon: <IconReact />,
    name: "React",
  },
];
export const frontendMoreStack: StackType[] = [
  {
    icon: <IconTailwindCSS />,
    name: "TailwindCSS",
  },
  {
    icon: <IconGSAP />,
    name: "GSAP",
  },
];
export const frontendExtraStack: StackType[] = [
  { icon: <IconShadcn />, name: "Shadcn UI + . .  ." },
];

export const backendStack: StackType[] = [
  {
    icon: <IconTS />,
    name: "TypeScript",
  },
  {
    icon: <IconNestJs />,
    name: "NestJs",
  },
  {
    icon: <IconExpressJs />,
    name: "Express.js",
  },
];
export const backMoreStack: StackType[] = [
  {
    icon: <IconLaravel />,
    name: "Laravel",
  },
];

export const databaseStack: StackType[] = [
  {
    icon: <IconSQLite />,
    name: "SQLite",
  },
  {
    icon: <IconMySQL />,
    name: "TypeScript",
  },
  {
    icon: <IconPostgreSQL />,
    name: "PostgreSQL",
  },
];

export const databaseMoreStack: StackType[] = [
  {
    icon: <IconMongoDB />,
    name: "MongoDB",
  },
];

export const databaseExtraStack: StackType[] = [
  {
    icon: <IconVector />,
    name: "Vector DB",
  },
];
