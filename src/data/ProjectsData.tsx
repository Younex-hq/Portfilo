import {
  FaGithub as IconGithub,
  FaReact as IconReact,
  FaLaravel as IconLaravel,
} from "react-icons/fa";
import { RiTailwindCssFill as IconTailwindcss } from "react-icons/ri";
import { SiShadcnui as IconShadcn } from "react-icons/si";
import { HiOutlineLink as IconApi } from "react-icons/hi2";
import { GrMysql as IconMysql } from "react-icons/gr";

export type ProjectData = {
  title?: string;
  target: string;
  description?: string;
  thumbnail?: string;
  screenshots?: string[];
  features?: string[];
  tech?: { icon: React.JSX.Element; name: string; color?: string }[];
  links?: { icon: React.JSX.Element; name: string; url: string }[];
};

export const ProjectsData = [
  {
    id: 1,
    title: "Document Search & Management Platform for Banque of Algeria ",
    description:
      "A full-stack document search and management platform developed during my internship at the Bank of Algeria. The application provides a public interface for quickly searching and accessing regulatory PDF documents, alongside a role-based administrative panel for managing documents, document types, statuses, users, and related resources. The system is powered by a Laravel REST API and MySQL, with optional AI-assisted search and response generation through Ollama or Gemini.",
    target: "Bank of Algeria",
    thumbnail: "https://picsum.photos/1920/1080",
    screenshots: [
      "https://picsum.photos/1200/720",
      "https://picsum.photos/1820/980",
      "https://picsum.photos/1440/1200",
    ],
    features: [
      "Full-text document search : Search across indexed document content and metadata to quickly locate relevant regulatory documents.",
      "Advanced document management : Administrators can add, update, delete, restore, classify, and manage document statuses and related documents.",
      "Role-based administration : Separate public, restricted-admin, and full-admin capabilities control access to administrative operations",
      "Secure API & controlled access : Authentication-protected admin endpoints, rate-limited public search and PDF downloads, and API documentation for the backend.",
      "Optional AI-assisted search : Integrates with local Ollama models or Google Gemini to generate AI-assisted responses based on retrieved documents, while remaining fully functional without AI.",
    ],
    tech: [
      { icon: <IconReact />, name: "React" },
      { icon: <IconLaravel />, name: "Laravel" },
      { icon: <IconApi />, name: "Rest-API" },
      { icon: <IconMysql />, name: "MySQL" },
      { icon: <IconTailwindcss />, name: "TailwindCss" },
      { icon: <IconShadcn />, name: "Shadcn ui (for Admin Panel)" },
    ],
    links: [
      {
        icon: <IconGithub />,
        name: "Source Code",
        url: "https://github.com/Younex-hq/boa-search-engine-full",
      },
    ],
  },
  {
    id: 2,
    title: ""
  }
];
