import { RxCode as IconDev } from "react-icons/rx";
import { CiPen as IconDesign } from "react-icons/ci";

type edData = {
  language: string;
  period: string;
  degree: string;
  institute: string;
  specialization: string;
  icon: React.ReactNode;
};

type EducationItem = {
  eng: edData[];
  ar: edData[];
  fr: edData[];
};

export const educationData: EducationItem = {
  eng: [
    {
      language: "English",
      period: "02/2023 → 10/2025",
      degree: "Higher Technician Diploma in Computer Science",
      specialization: "Web and Mobile Development",
      institute:
        "National Specialized Institute of Vocational Training, Mohammedia",
      icon: <IconDev />,
    },
    {
      language: "English",
      period: "09/2017 → 02/2020",
      degree: "Higher Technician Diploma",
      specialization: "Infographics and Graphic Design",
      institute:
        "National Specialized Institute of Graphic Arts and Industry (INSIAG), BMR",
      icon: <IconDesign />,
    },
  ],
  ar: [
    {
      language: "Arabic",
      period: "02/2023 → 10/2025",
      degree: "شهادة تقني سامي في اختصاص إعلام آلي",
      specialization: "مطور الواب والمحمول",
      institute: "المعهد الوطني المتخصص في التكوين المهني المحمدية",
      icon: <IconDev />,
    },
    {
      language: "Arabic",
      period: "09/2017 → 02/2020",
      degree: "شهادة تقني سامي",
      specialization: "مخطط معلوماتي ومصمم",
      institute:
        "المعهد الوطني المتخصص في الفنون والصناعات المطبعية BMR، الجزائر",
      icon: <IconDesign />,
    },
  ],
  fr: [
    {
      language: "French",
      period: "02/2023 → 10/2025",
      degree: "Diplôme de Technicien Supérieur (BTS) en Informatique",
      specialization: "Développement Web et Mobile",
      institute:
        "Institut National Spécialisé de la Formation Professionnelle (INSFP), Mohammadia",
      icon: <IconDev />,
    },
    {
      language: "French",
      period: "09/2017 → 02/2020",
      degree: "Diplôme de Technicien Supérieur (BTS) en Design Graphic",
      specialization: "Design Graphic, Infographie et Communication Visuelle",
      institute:
        "Institut National Spécialisé en Art et Industrie Graphique (INSIAG) BMR",
      icon: <IconDesign />,
    },
  ],
};
