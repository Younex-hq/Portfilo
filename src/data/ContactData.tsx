import {
  FaLinkedin as IconLinkedin,
  FaGithub as IconGithub,
  FaCodepen as IconCodepen,
  FaBehance as IconBehance,
} from "react-icons/fa";
import { SiGmail as IconGmail } from "react-icons/si";
import { IoIosMail as IconMail } from "react-icons/io";

type ContactItem = {
  icon: React.ReactNode;
  name: string;
  link: string;
  title?: string;
};

export const ContactData: ContactItem[] = [
  {
    icon: <IconGmail color="#ff707f" />,
    name: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=beliamineyounes00%2Bportfolio@gmail.com",
    title: "send me an email through Gmail",
  },
  {
    icon: <IconMail color="#ffd070" />,
    name: "Email",
    link: "mailto:beliamineyounes00%2Bportfolio@gmaill.com",
    title: "send me an email using your default email client",
  },
  {
    icon: <IconLinkedin color="#6bceff" />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/beliamine",
    title: "linkedin.com/in/beliamine",
  },
  {
    icon: <IconBehance color="#6187ff" />,
    name: "Behance",
    link: "https://www.behance.net/beliamine",
    title: "behance.net/beliamine",
  },
  {
    icon: <IconGithub color="#e1d6eb" />,
    name: "GitHub",
    link: "https://github.com/Younex-hq",
    title: "github.com/Younex-hq",
  },
  {
    icon: <IconCodepen color="#c1cce2" />,
    name: "CodePen",
    link: "https://codepen.io/Younex-hq",
    title: "codepen.io/Younex-hq",
  },
];
