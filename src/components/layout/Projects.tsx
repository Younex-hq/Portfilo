import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { type ProjectData, ProjectsData } from "../../data/ProjectsData";
import { ImageViewer } from "../common/ImageViewer";
import ShinyText from "../common/ShinyText";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".project", {
        autoAlpha: 0,
        y: 100,
        scale: 0.85,

        scrollTrigger: {
          trigger: ".project",
          start: "top bottom",
          end: "top 80%",
          immediateRender: false,
          scrub: true,
        },
      });

      gsap.utils.toArray(".project-card > *").forEach((card: any) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 100,
          scale: 0.85,

          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            immediateRender: false,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <div
        ref={containerRef}
        className="relative m-auto mt-[35%] w-screen max-w-325 px-2 sm:px-4 md:mt-[10%] md:w-full"
      >
        {/* Header */}
        <div className="mb-9 sm:mb-12">
          <div className="project degree-title text-3xl sm:text-4xl">
            <span className="font-italianno text-6xl md:text-7xl">P</span>
            rojects
          </div>
        </div>
        <div className="project-card md:mx-5">
          {ProjectsData.map((pd) => (
            <ProjectCard
              key={pd.id}
              id={pd.id}
              title={pd.title}
              description={pd.description}
              client={pd.client}
              thumbnail={pd.thumbnail}
              screenshots={pd.screenshots}
              tech={pd.tech}
              links={pd.links}
              features={pd.features}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({
  title,
  description,
  client,
  thumbnail,
  screenshots,
  tech,
  links,
  features,
}: ProjectData) {
  const [selectedSecreenshot, setSelectedSecreenshot] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const screenshothandler = (e: React.MouseEvent, imgIndex: number) => {
    e.stopPropagation(); // prevent card from closing when clicking on the screenshot
    setSelectedSecreenshot(imgIndex);
    setIsOpen((prev) => !prev);
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border-off-white/10 hover:border-off-white/30 relative mb-5 overflow-hidden rounded-2xl border border-b-2 p-2 sm:w-full sm:p-5 ${expanded ? "border-off-white/20 shadow-xl shadow-gray-500/10" : "cursor-pointer"}`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      <div className="flex justify-between gap-5">
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="font-zodiak mt-[50%] text-2xl font-bold tracking-wide sm:mt-0">
              {title}
            </div>
            <div className="font-light opacity-70">
              for <span>{client}</span>
            </div>
          </div>
          <div
            className={`mt-[5vh] ${expanded ? "" : "line-clamp-3 opacity-80 md:line-clamp-none"}`}
          >
            {description}
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 -z-10 w-full flex-1 overflow-hidden rounded-2xl opacity-50 sm:relative sm:opacity-100`}
        >
          <img
            src={thumbnail}
            className={`h-full w-full object-cover [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] ${expanded ? "" : "sm:[-webkit-mask-image:linear-gradient(to_left,black,transparent)]"} `}
          />
        </div>
      </div>

      {/* # expended content */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`overflow-hidden transition-opacity duration-500 ${expanded ? "opacity-100" : "opacity-0"}`}>
          <div className="relative">
            {/*<div>Screenshots</div>*/}
            <div className="mt-5 flex gap-2 overflow-scroll sm:overflow-auto">
              {/* TODO: add magnatic effect to the image scroll on mobile view */}

              {screenshots?.map((pic, index) => (
                <div
                  key={index}
                  className="border-off-white/10 aspect-video min-w-[80vw] flex-1 overflow-hidden rounded-2xl border sm:min-w-0"
                  onClick={(e) => screenshothandler(e, index)}
                  style={{ cornerShape: "squircle" }}
                >
                  <img
                    src={pic}
                    className="h-full w-full scale-105 cursor-pointer object-cover hover:scale-100 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            {screenshots && (
              <ImageViewer
                images={screenshots}
                currentIndex={selectedSecreenshot}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onIndexChange={(newIndex) => setSelectedSecreenshot(newIndex)}
              />
            )}
          </div>
          <div className="my-5 flex flex-col justify-between md:flex-row">
            {features && (
              <div className="flex-2">
                <div className="py-5 text-xl font-bold tracking-wide">
                  Features
                </div>
                <ul>
                  {features.map((feature, i) => (
                    <li key={i} className="py-1">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="md:border-off-white/20 mt-auto flex-1 pt-5 sm:p-5 md:border-l">
              <div className="hidden text-xl font-bold">Tech Used</div>
              {tech?.map((t, index) => (
                <div key={index} className="flex gap-5 py-1 pl-2 md:pl-2">
                  <span className="text-xl">{t.icon}</span>
                  <span
                    className={`${index === 0 || index === 1 ? "font-semibold" : ""}`}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {links && (
            <div className="justify-around">
              <div className="py-5 text-xl font-bold tracking-wide">Links</div>
              <div className="flex justify-around gap-5 sm:justify-start">
                {links?.map((l, index) => (
                  <div key={index} className="flex gap-3">
                    <a
                      href={l.url}
                      className="text-off-white flex items-center gap-2"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()} // to not close the card when clickning on the anchor
                    >
                      <span className="text-xl">{l.icon}</span>
                      <ShinyText text={l.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
          <br />
        </div>
      </div>
    </div>
  );
}
