import { useState } from "react";
import { type ProjectData, ProjectsData } from "../../data/ProjectsData";
import { ImageViewer } from "../common/ImageViewer";

export default function Projects() {
  return (
    <>
      <div className="relative m-auto mt-[35%] w-full max-w-325 px-4 sm:px-0 md:mt-[10%]">
        {/* Header */}
        <div className="mb-9 sm:mb-12">
          <div className="degree-title text-3xl sm:text-4xl">
            <span className="font-italianno text-6xl md:text-7xl">P</span>
            rojects
          </div>
        </div>
        <div className="md:mx-5">
          {ProjectsData.map((pd) => (
            <ProjectCard
              key={pd.title}
              title={pd.title}
              description={pd.description}
              target={pd.target}
              thumbnail={pd.thumbnail}
              screenshots={pd.screenshots}
              tech={pd.tech}
              links={pd.links}
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
  target,
  thumbnail,
  screenshots,
  tech,
  links,
}: ProjectData) {
  const [selectedSecreenshot, setSelectedSecreenshot] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const screenshothandler = (imgIndex: number) => {
    setSelectedSecreenshot(imgIndex);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-off-white/10 rounded-2xl border p-5">
      <div className="flex justify-between gap-5">
        <div className="flex flex-1 flex-col justify-between">
          <div className="font-zodiak text-2xl tracking-wide">{title}</div>
          <div>{description}</div>
          <div className="flex justify-between">
            <div className="opacity-70">
              for <span>{target}</span>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden rounded-tr-2xl">
          <img src={thumbnail} />
        </div>
      </div>

      {/* # expended content */}
      <div>
        <div className="relative">
          {/*<div>Screenshots</div>*/}
          <div className="mt-5 flex gap-2">
            {screenshots?.map((pic, index) => (
              <div
                key={index}
                className="border-off-white/10 hover:shadow-off-white/10 aspect-video flex-1 overflow-hidden rounded-2xl border hover:shadow-xl"
                onClick={() => screenshothandler(index)}
                style={{ cornerShape: "squircle" }}
              >
                <img
                  src={pic}
                  className="h-full w-full scale-105 cursor-pointer object-cover hover:scale-100"
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
        <div className="">
          <div>Tech Used</div>
          {tech?.map((t) => (
            <div className="flex gap-5">
              <span>{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-around">
          {links?.map((l) => (
            <div className="flex gap-3">
              <div>{l.icon}</div>
              <div>{l.name}</div>
              <div>{l.url}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
