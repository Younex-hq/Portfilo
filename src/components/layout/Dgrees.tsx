import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaPaintBrush,
  FaUniversity,
} from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type EducationItem = {
  period: string;
  degree: string;
  institute: string;
  fieldOfStudy: string;
  icon: React.ReactNode;
};

const educationData: EducationItem[] = [
  {
    period: "02/2023 → 10/2025",
    degree: "Higher Technician Diploma in Computer Science",
    institute:
      "Boucenna Mohamed Tayeb National Vocational Training Institute (INSFP)",
    fieldOfStudy: "Web and Mobile Development",
    icon: <FaLaptopCode />,
  },
  {
    period: "09/2017 → 02/2020",
    degree: "Advanced Technician Diploma in Graphic Design",
    institute:
      "Institut National Spécialisé en Art et Industrie Graphique (INSIAG) BMR, Algiers, Algeria",
    fieldOfStudy: "Graphic Design and Visual Communication",
    icon: <FaPaintBrush />,
  },
];

export function Degrees() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full px-4 sm:px-0">
      {/* Header */}
      <div className="mb-12">
        <div className="text-4xl">
          <span className="font-italianno text-6xl md:text-7xl">L</span>
          earning <span className="font-italianno text-6xl md:text-7xl">j</span>
          ourney
        </div>
      </div>

      <div className="relative flex flex-col gap-8 md:gap-10">
        {educationData.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative flex flex-col md:flex-row"
            >
              {/* Top Bar: Dates & Category Tag */}
              <div className="border-off-white/10 from-bg-dark via-bg-darker relative flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-linear-to-br p-5">
                <div className="text-off-white/80 flex items-center gap-2 text-sm">
                  <span className="font-medium tracking-wider">
                    {item.period}
                  </span>
                  <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 text-9xl opacity-30 sm:block">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div
                className={`border-off-white/10 from-bg-dark via-bg-darker flex-1 bg-linear-to-br p-6 sm:p-8`}
              >
                {/* Institute & Field Details Grid */}
                <div className="border-off-white/5 flex flex-col gap-1">
                  <span className="text-off-white/50 flex items-center gap-2 text-xs uppercase">
                    <HiOutlineAcademicCap className="text-sm" /> Specialization
                  </span>
                  <h3 className="text-off-white/90 font-bold">
                    {item.fieldOfStudy}
                  </h3>
                </div>

                <div className="mt-5 flex flex-col gap-5 md:gap-0">
                  {/* Degree Info */}
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="text-off-white/50 flex items-center gap-2 text-xs uppercase">
                      <FaGraduationCap />
                      <span>Degree</span>
                    </div>
                    <div className="text-off-white/80">{item.degree}</div>
                  </div>

                  {/* Institute */}
                  <div className="mt-5 flex flex-col md:flex-row md:gap-3">
                    <div className="text-off-white/50 flex items-center gap-2 text-xs font-medium uppercase">
                      <FaUniversity className="text-xs" /> Institute
                    </div>
                    <div className="text-off-white/80 text-md font-medium">
                      {item.institute}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Degrees;
