import { IoLogoJavascript as IconJS } from "react-icons/io5";

export type ProjectData = {
  title?: string;
  description?: string;
  thumbnail?: string;
  screenshots?: string[];
  target: string;
  tech?: { icon: React.JSX.Element; name: string }[];
  links?: { icon: React.JSX.Element; name: string; url: string }[];
};

export const ProjectsData = [
  {
    id: 1,
    title: "Document Search Engine (Lexical Search)",
    description: "lorem ipsim",
    target: "Bank of Algeria",
    thumbnail: "https://picsum.photos/1920/1080",
    screenshots: [
      "https://picsum.photos/1200/720",
      "https://picsum.photos/1820/980",
      "https://picsum.photos/1440/1200",
    ],
    tech: [
      { icon: <IconJS />, name: "tech1" },
      { icon: <IconJS />, name: "tech2" },
    ],
    links: [
      {
        icon: <IconJS />,
        name: "Github",
        url: "https://www.github.com/younex-hq",
      },
      {
        icon: <IconJS />,
        name: "official page",
        url: "https://www.github.com/younex-hq",
      },
    ],
  },
];
