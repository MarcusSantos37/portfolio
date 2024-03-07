"use client";

import { GithubFill, LinkChain } from "akar-icons";
import Image from "next/image";
import Link from "next/link";
import { useProjectsQuery } from "../graphql/generated";
import graphqlRequestClient from "../lib/graphql.request";

const Projects = () => {
  const { data } = useProjectsQuery(graphqlRequestClient);

  return (
    <div
      id="projects"
      className="flex flex-col items-center px-8 pt-20 pb-40 justify-center gap-20"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-matte-blue font-bold text-3xl">Projects</h1>
        <p className="text-gray">Things I’ve built so far</p>
      </div>
      <div className="grid grid-cols-3 w-full gap-20">
        {data?.projectsCollection?.items.map((item) => (
          <div
            key={item?.id}
            className="bg-white rounded-[20px] w-[330px]"
            style={{ filter: "drop-shadow(2px 2px 100px rgba(0, 0, 0, 0.2))" }}
          >
            <Image
              className="object-cover rounded-t-[20px]"
              src={item?.projectImage?.url ?? "/background.avif"}
              alt="project background"
              width={1000}
              height={500}
            />
            <div className="flex flex-col gap-3 p-5">
              <h1 className="font-medium text-xl text-black">
                {item?.projectName}
              </h1>
              <span className="font-light text-gray">{item?.description}</span>
              <p className="font-light text-matte-blue text-sm">
                <span className="font-normal">Tech stack:</span>{" "}
                {item?.stacks?.map((item) => item).join(", ")}
              </p>
              <div className="flex flex-row justify-between text-sm w-full">
                {item?.projectLiveLink && (
                  <Link
                    target="_blank"
                    href={item?.projectLiveLink}
                    className="flex flex-row items-center gap-2 underline cursor-pointer hover:opacity-80 transition-opacity text-black font-medium"
                  >
                    <LinkChain size={20} />
                    Live Preview
                  </Link>
                )}
                {item?.projectCodeLink && (
                  <Link
                    target="_blank"
                    href={item?.projectCodeLink ?? ""}
                    className="flex flex-row items-center gap-3 underline cursor-pointer hover:opacity-80 transition-opacity text-black font-medium"
                  >
                    <GithubFill size={20} />
                    View Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
