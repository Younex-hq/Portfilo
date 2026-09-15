import {
  FaGithub as IconGithub,
  FaReact as IconReact,
  FaLaravel as IconLaravel,
  FaHtml5 as IconHtml,
  FaCss3Alt as IconCss,
  FaJs as IconJavascript,
} from "react-icons/fa";
import {
  SiShadcnui as IconShadcn,
  SiTypescript as IconTypescript,
  SiVite as IconVite,
  SiNextdotjs as IconNextjs,
  SiTailwindcss as IconTailwindcss,
  SiChartdotjs as IconChartjs,
  SiPwa as IconPwa,
} from "react-icons/si";
import { IoLogoVercel as IconVercel } from "react-icons/io5";
import { IoIosGitNetwork as IconRestApi } from "react-icons/io";
import { LuEarth as IconEarth } from "react-icons/lu";
import { HiOutlineCircleStack as IconDatabase } from "react-icons/hi2";
import { GrMysql as IconMysql } from "react-icons/gr";
import { FaRegClosedCaptioning as IconCloseCaption } from "react-icons/fa6";

export type ProjectData = {
  id: number;
  title?: string;
  client: string;
  description?: string;
  thumbnail?: string;
  screenshots?: string[];
  features?: string[];
  tech?: { icon: React.JSX.Element; name: string; color?: string }[];
  links?: { icon: React.JSX.Element; name: string; url: string }[];
};

export const ProjectsData: ProjectData[] = [
  {
    id: 1,
    title: "Document Search & Management Platform for Banque of Algeria",
    description:
      "A full-stack document search and management platform developed during my internship at the Bank of Algeria. The application provides a public interface for quickly searching and accessing regulatory PDF documents, alongside a role-based administrative panel for managing documents, document types, statuses, users, and related resources. The system is powered by a Laravel REST API and MySQL, with optional AI-assisted search and response generation through Ollama or Gemini.",
    client: "Bank of Algeria",
    thumbnail: "https://picsum.photos/seed/boa-search/1920/1080",
    screenshots: [
      "https://picsum.photos/seed/boa-search-1/1200/720",
      "https://picsum.photos/seed/boa-search-2/1820/980",
      "https://picsum.photos/seed/boa-search-3/1440/1200",
    ],
    features: [
      "Full-text document search : Search across indexed document content and metadata to quickly locate relevant regulatory documents.",
      "Advanced document management : Administrators can add, update, delete, restore, classify, and manage document statuses and related documents.",
      "Role-based administration : Separate public, restricted-admin, and full-admin capabilities control access to administrative operations.",
      "Secure API & controlled access : Authentication-protected admin endpoints, rate-limited public search and PDF downloads, and API documentation for the backend.",
      "Optional AI-assisted search : Integrates with local Ollama models or Google Gemini to generate AI-assisted responses based on retrieved documents, while remaining fully functional without AI.",
    ],
    tech: [
      { icon: <IconReact />, name: "React" },
      { icon: <IconLaravel />, name: "Laravel" },
      { icon: <IconRestApi />, name: "REST API" },
      { icon: <IconMysql />, name: "MySQL" },
      { icon: <IconTailwindcss />, name: "Tailwind CSS" },
      { icon: <IconShadcn />, name: "shadcn/ui" },
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
    title: "TutoPlayer | Local Course Video Player",
    description:
      "A lightweight browser-based video player designed for watching locally stored tutorials and courses. It turns video folders into organized playlists and course tabs while keeping playback progress, subtitles, and user preferences available directly in the browser without requiring a backend.",
    client: "Personal Project",
    thumbnail: "https://picsum.photos/seed/tutoplayer/1920/1080",
    screenshots: [
      "https://picsum.photos/seed/tutoplayer-1/1200/720",
      "https://picsum.photos/seed/tutoplayer-2/1820/980",
      "https://picsum.photos/seed/tutoplayer-3/1440/1200",
    ],
    features: [
      "Multi-course playlists : Drop multiple course folders to automatically create separate tabs with collapsible lesson sections.",
      "Per-video progress tracking : Remembers the exact playback position for each individual video instead of using a single course-level position.",
      "Subtitle support : Automatically matches WebVTT subtitle files to videos and provides adjustable subtitle size and background opacity.",
      "Keyboard-focused playback : Includes shortcuts for play/pause, seeking, fullscreen, theater mode, mute, and subtitles.",
      "Local-first workflow : Runs directly in the browser using local video files and stores playlists, progress, and preferences in browser storage.",
    ],
    tech: [
      { icon: <IconHtml />, name: "HTML5" },
      { icon: <IconCss />, name: "CSS3" },
      { icon: <IconJavascript />, name: "JavaScript" },
    ],
    links: [
      {
        icon: <IconGithub />,
        name: "Source Code",
        url: "https://github.com/Younex-hq/TutoPlayer",
      },
    ],
  },

  {
    id: 3,
    title: "GengoLura | Audio & Transcript Player",
    description:
      "A local-first audio player built for language learning and focused listening. GengoLura synchronizes audio files with WebVTT transcripts, provides real-time word and sentence highlighting, and lets users organize tracks, bookmark important moments, and continue listening without sending their files to a server.",
    client: "Personal Project",
    thumbnail: "https://picsum.photos/seed/gengolura/1920/1080",
    screenshots: [
      "https://picsum.photos/seed/gengolura-1/1200/720",
      "https://picsum.photos/seed/gengolura-2/1820/980",
      "https://picsum.photos/seed/gengolura-3/1440/1200",
    ],
    features: [
      "Synchronized transcript highlighting : Tracks audio playback against WebVTT timestamps with precise word-level and sentence-level highlighting.",
      "Interactive transcript : Click a word or sentence to jump directly to the corresponding position in the audio.",
      "Playlist & library management : Organize audio files into folders and playlists or keep them as standalone tracks.",
      "Bookmarks for review : Save specific words, sentences, or timestamps for later revision and language study.",
      "Local-first storage : Uses IndexedDB for browser-based storage, keeping audio and transcript data on the user's device instead of uploading it to a server.",
    ],
    tech: [
      { icon: <IconTypescript />, name: "TypeScript" },
      { icon: <IconVite />, name: "Vite" },
      { icon: <IconDatabase />, name: "IndexedDB" },
      { icon: <IconCloseCaption />, name: "WebVTT" },
    ],
    links: [
      {
        icon: <IconEarth />,
        name: "Live Demo",
        url: "https://younex-hq.github.io/GengoLura/",
      },
      {
        icon: <IconGithub />,
        name: "Source Code",
        url: "https://github.com/Younex-hq/GengoLura",
      },
    ],
  },

  {
    id: 4,
    title: "Nyanya | Offline Pomodoro & Productivity Tracker",
    description:
      "A local-first Pomodoro productivity application built as an installable Progressive Web App. Nyanya combines customizable focus sessions with detailed productivity statistics, tagging, notifications, and long-term activity tracking while keeping all user data stored locally on the device.",
    client: "Personal Project",
    thumbnail: "https://picsum.photos/seed/nyanya/1920/1080",
    screenshots: [
      "https://picsum.photos/seed/nyanya-1/1200/720",
      "https://picsum.photos/seed/nyanya-2/1820/980",
      "https://picsum.photos/seed/nyanya-3/1440/1200",
    ],
    features: [
      "Customizable Pomodoro timer : Supports focus, short-break, and long-break sessions with configurable durations.",
      "Productivity tracking : Records focus time, breaks, interruptions, and session history for detailed productivity analysis.",
      "Advanced statistics : Provides charts, productive-hours heatmaps, yearly activity views, and filtering by custom tags.",
      "Offline-first PWA : Works without a network connection and can be installed on supported mobile and desktop devices.",
      "Local data management : Stores application data in IndexedDB and supports JSON import/export without requiring cloud accounts.",
    ],
    tech: [
      { icon: <IconTypescript />, name: "TypeScript" },
      { icon: <IconVite />, name: "Vite" },
      { icon: <IconDatabase />, name: "IndexedDB / Dexie.js" },
      { icon: <IconChartjs />, name: "Chart.js" },
      { icon: <IconPwa />, name: "PWA" },
    ],
    links: [
      {
        icon: <IconEarth />,
        name: "Live Demo",
        url: "https://younex-hq.github.io/Nyanya/",
      },
      {
        icon: <IconGithub />,
        name: "Source Code",
        url: "https://github.com/Younex-hq/Nyanya",
      },
    ],
  },

  {
    id: 5,
    title: "AudioMark | Timestamped Audio Notes",
    description:
      "A privacy-first web application for taking structured notes while listening to audio. AudioMark lets users create timestamped markers, attach notes to precise moments, export and import annotations, and resume listening sessions without uploading their audio or annotations to a server.",
    client: "Personal Project",
    thumbnail: "https://picsum.photos/seed/audiomark/1920/1080",
    screenshots: [
      "https://picsum.photos/seed/audiomark-1/1200/720",
      "https://picsum.photos/seed/audiomark-2/1820/980",
      "https://picsum.photos/seed/audiomark-3/1440/1200",
    ],
    features: [
      "Timestamped markers : Create precise markers while listening and jump directly back to important moments in the audio.",
      "Structured note taking : Attach free-form notes to specific timestamps for meetings, lectures, podcasts, interviews, and study material.",
      "Portable annotations : Export notes and markers as human-readable JSON files and import them later.",
      "Resume listening sessions : Restore previously saved annotations and continue working from where you stopped.",
      "Privacy-first architecture : Audio and annotations remain local to the browser with no accounts, tracking, or server-side uploads.",
    ],
    tech: [
      { icon: <IconNextjs />, name: "Next.js" },
      { icon: <IconReact />, name: "React" },
      { icon: <IconTypescript />, name: "TypeScript" },
      { icon: <IconTailwindcss />, name: "Tailwind CSS" },
      { icon: <IconShadcn />, name: "shadcn/ui" },
    ],
    links: [
      {
        icon: <IconVercel />,
        name: "Live Demo",
        url: "https://audio-mark.vercel.app/",
      },
      {
        icon: <IconGithub />,
        name: "Source Code",
        url: "https://github.com/Younex-hq/Audio-mark",
      },
    ],
  },
];
