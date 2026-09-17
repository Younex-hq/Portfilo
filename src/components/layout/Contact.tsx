import { ContactData } from "@/data/ContactData";
import ShinyText from "../common/ShinyText";

export function Contact() {
  return (
    <>
      <div className="relative m-auto mt-[35%] w-screen max-w-325 sm:px-4 md:mt-[10%] md:w-full">
        <div className="mb-9 sm:mb-12">
          <div className="project degree-title text-center text-3xl sm:text-start sm:text-4xl">
            <span className="font-italianno text-6xl md:text-7xl">C</span>
            ontacts{" "}
            <span className="font-italianno text-6xl md:text-7xl">| S</span>
            ocials
          </div>
          <div className="grid grid-cols-1 rounded-2xl p-5 sm:grid-cols-2">
            {ContactData.map((j, index) => (
              <a
                key={index}
                href={j.link}
                title={j.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white"
              >
                <div className="hover:border-off-white/20 border-b-off-white/10 border-white/0 flex gap-3 rounded-xl border border-b-2 p-5 pl-[15%] sm:border-white/0 sm:pl-5">
                  <div className={`text-2xl`}>{j.icon}</div>
                  <div>
                    <ShinyText text={j.name} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
