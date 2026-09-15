import {
  FaCss3 as IconCSS,
  FaHtml5 as IconHTML,
  FaReact as IconReact,
} from "react-icons/fa";
import {
  SiGsap as IconGSAP,
  SiShadcnui as IconShadcn,
  SiTypescript as IconTS,
  SiNestjs as IconNestJs,
  SiExpress as IconExpressJs,
  SiSqlite as IconSQLite,
  SiMongodb as IconMongoDB,
  SiPostgresql as IconPostgreSQL,
} from "react-icons/si";
import { IoLogoJavascript as IconJS } from "react-icons/io5";
import { FaLaravel as IconLaravel } from "react-icons/fa6";
import { GrMysql as IconMySQL } from "react-icons/gr";
import { PiVectorThreeFill as IconVector } from "react-icons/pi";
import { RiTailwindCssFill as IconTailwindCSS } from "react-icons/ri";
import { HiOutlineCircleStack as IconDatabase } from "react-icons/hi2";

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
  {
    icon: <IconDatabase />,
    name: "IndexedDB",
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
