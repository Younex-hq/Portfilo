import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { educationData } from "../../data/DegreesData";
import { IoLanguage as IconLanguage } from "react-icons/io5";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Language = "eng" | "ar" | "fr";
const languages: Language[] = ["eng", "ar", "fr"];

const labels: Record<
  Language,
  { specialization: string; degree: string; institute: string }
> = {
  eng: {
    specialization: "Specialization",
    degree: "Degree",
    institute: "Institute",
  },
  ar: {
    specialization: "التخصص",
    degree: "الشهادة",
    institute: "المعهد",
  },
  fr: {
    specialization: "Spécialisation",
    degree: "Diplôme",
    institute: "Institut",
  },
};

export function Degrees() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState<Language>("eng");

  const handleNextLanguage = () => {
    setCurrentLang((prev) => {
      const nextIndex = (languages.indexOf(prev) + 1) % languages.length;
      return languages[nextIndex];
    });
  };

  const DegreesContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".degree-title", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: ".degree-title",
          start: "top 90%",
          end: "top 70%",
          immediateRender: false,
          scrub: true,
        },
      });

      gsap.from(".degree-card", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".degree-card",
          start: "top 90%",
          end: "top 60%",
          immediateRender: false,
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative w-full px-4 sm:px-0">
      {/* Header */}
      <div className="mb-9 sm:mb-12">
        <div className="degree-title text-3xl sm:text-4xl">
          <span className="font-italianno text-6xl md:text-7xl">A</span>cademic{" "}
          <span className="font-italianno text-6xl md:text-7xl">B</span>
          ackground
        </div>
      </div>

      <div
        ref={DegreesContainerRef}
        className="relative flex flex-col gap-17 md:mx-5 md:gap-10"
      >
        {educationData[currentLang].map((item, index) => {
          return (
            <div
              key={index}
              className="degree-card relative flex w-full flex-col md:w-[90%] md:flex-row"
            >
              {/* language */}
              <div
                onClick={handleNextLanguage}
                className="absolute top-5 right-5 z-10 flex items-center gap-1.5 opacity-70 transition-opacity select-none hover:cursor-pointer hover:opacity-100"
                title={`Language: ${item.language} (Click to switch: English → Arabic → French)`}
              >
                <span className="text-xs font-semibold uppercase">
                  {currentLang}
                </span>
                <IconLanguage title="Change Language" />
              </div>

              {/* Dates & Category Tag */}
              <div className="border-off-white/10 from-bg-dark via-bg-darker relative flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-linear-to-br p-5">
                <div className="text-off-white/80 flex items-center gap-2 text-sm">
                  <span className="font-medium tracking-wider" dir="ltr">
                    {item.period}
                  </span>
                  <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 text-9xl opacity-30 md:block">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div
                dir={currentLang === "ar" ? "rtl" : "ltr"}
                className={`border-off-white/10 from-bg-dark via-bg-darker border-b-off-white/05 flex-1 rounded-2xl border-0 border-r border-b bg-linear-to-br p-6 sm:border-r-0 sm:border-b-0 sm:p-8 ${
                  currentLang === "ar" ? "text-right" : "text-left"
                }`}
              >
                {/* Institute & Field Details Grid */}
                <div className="border-off-white/5 flex flex-col gap-1">
                  <span className="text-off-white/50 flex items-center gap-2 text-xs uppercase">
                    <HiOutlineAcademicCap className="text-sm" />{" "}
                    {labels[currentLang].specialization}
                  </span>
                  <h3 className="text-off-white/90 font-bold">
                    {item.specialization}
                  </h3>
                </div>

                <div className="mt-5 flex flex-col gap-5 md:gap-0">
                  {/* Degree Info */}
                  <div className="flex flex-col md:flex-row md:gap-6">
                    <div className="text-off-white/50 flex items-center gap-2 text-xs uppercase">
                      <FaGraduationCap />
                      <span>{labels[currentLang].degree}</span>
                    </div>
                    <div className="text-off-white/80">{item.degree}</div>
                  </div>

                  {/* Institute */}
                  <div className="mt-5 flex flex-col md:flex-row md:gap-3">
                    <div className="text-off-white/50 flex items-center gap-2 text-xs font-medium uppercase">
                      <FaUniversity className="text-xs" />{" "}
                      {labels[currentLang].institute}
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
