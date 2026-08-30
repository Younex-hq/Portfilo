import type { StackType } from "../../data/TechStackData";
import { frontendStack } from "../../data/TechStackData";
import { frontendMoreStack } from "../../data/TechStackData";
import { frontendExtraStack } from "../../data/TechStackData";

import { backendStack } from "../../data/TechStackData";
import { backMoreStack } from "../../data/TechStackData";

import { databaseStack } from "../../data/TechStackData";
import { databaseMoreStack } from "../../data/TechStackData";
import { databaseExtraStack } from "../../data/TechStackData";

import { FaReact as IconReact } from "react-icons/fa";
import { SiNestjs as IconNestJs } from "react-icons/si";
import { FaDatabase as IconDatabase } from "react-icons/fa";
import ShinyWrapper from "../common/ShinyWrapper";

export default function TechStack() {
  return (
    <>
      <div>
        <div className="text-4xl">
          <span className="font-italianno text-6xl">Tech</span> Stack
        </div>
        <br />

        <div className="flex items-center justify-center gap-5 text-7xl">
          <IconReact />
          <hr className="w-[5vw]" />
          <IconNestJs />
          <hr className="w-[5vw]" />
          <IconDatabase />
        </div>
        <br />
        <br />

        <div className="items- flex h-full max-w-[1300px]">
          <TechCard
            title="Frontend"
            basic={frontendStack}
            more={frontendMoreStack}
            extra={frontendExtraStack}
            gradient="right"
          />
          <hr className="m-auto w-[5vw]" />
          <div className="m-auto text-center">
            Rest API <div className="text-off-white/60 text-sm">GraphQL</div>
          </div>
          <hr className="m-auto w-[5vw]" />
          <TechCard
            title="Backend"
            basic={backendStack}
            more={backMoreStack}
            gradient="center"
          />
          <hr className="m-auto w-[5vw]" />
          <div className="m-auto text-center">
            ORM / <div className="text-sm">Queries</div>
          </div>
          <hr className="m-auto w-[5vw]" />
          <TechCard
            title="Database"
            basic={databaseStack}
            more={databaseMoreStack}
            extra={databaseExtraStack}
            gradient="left"
          />
        </div>
      </div>
      <br />
      <div className="mt-10 font-light tracking-wide opacity-80">
        <div>
          <span>Languages that I used before: </span>
          <span className="font-zodiak font-medium">
            C++, Java, Kotlin, Dart, Flutter,
          </span>
        </div>
        <div>
          <span>Languages that I am intrested in: </span>
          <span className="font-zodiak font-medium">Go</span>
        </div>
      </div>
    </>
  );
}

type TechStackProps = {
  title: string;
  basic?: StackType[];
  more?: StackType[];
  extra?: StackType[];
  gradient?: "left" | "right" | "center";
};

function TechCard({ title, basic, more, extra, gradient }: TechStackProps) {
  const toLeft = "bg-linear-to-r from-bg-dark";
  const toCenter = "bg-linear-to-l from-bg-dark to-bg-dark via-bg-darker";
  const toRight = "bg-linear-to-l from-bg-dark";

  const gradientDirection =
    gradient === "left" ? toLeft : gradient === "right" ? toRight : toCenter;

  return (
    <ShinyWrapper
      className={`rounded-2xl p-5 md:w-1/4 ${gradientDirection}`}
      speed={6}
      direction={gradient !== "center" ? gradient : undefined}
      pauseOnHover={false}
      yoyo={gradient === "center" ? true : false}
      angle={90}
    >
      <div className={``}>
        <div className="font-zodiak mb-5 text-2xl">{title}</div>
        <br />
        <div className="">
          {basic ? (
            <ul className="list-none">
              {basic.map((item, index) => (
                <TechList key={index} {...item} />
              ))}
            </ul>
          ) : (
            false
          )}
          {more ? (
            <>
              <br />
              <ul className="list-none">
                {more.map((item, index) => (
                  <TechList key={index} {...item} />
                ))}
              </ul>
            </>
          ) : (
            false
          )}
          {extra ? (
            <>
              <br />
              <ul className="list-none">
                {extra.map((item, index) => (
                  <TechList key={index} {...item} />
                ))}
              </ul>
            </>
          ) : (
            false
          )}
        </div>
      </div>
    </ShinyWrapper>
  );
}

function TechList({ icon, name }: StackType) {
  return (
    <ul className="list-none">
      <li className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span> <span>{name}</span>
      </li>
    </ul>
  );
}
