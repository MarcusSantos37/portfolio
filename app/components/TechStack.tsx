"use client";

import Image from "next/image";
import { useTechnologiesQuery } from "../graphql/generated";
import graphqlRequestClient from "../lib/graphql.request";

const TechStack = () => {
  const { data } = useTechnologiesQuery(graphqlRequestClient);

  return (
    <div
      id="tech-stack"
      className="flex flex-col items-center px-8 pt-20 pb-40 justify-center gap-20"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-matte-blue font-bold text-3xl">My Tech Stack</h1>
        <p className="text-gray">
          {" "}
          Technologies I’ve been working with recently
        </p>
      </div>
      <div className="grid grid-cols-6 gap-x-20 gap-y-20 items-center">
        {data?.technologiesCollection?.items.map((item) => (
          <div key={item?.id}>
            <Image
              src={item?.logo?.url ?? ""}
              alt={item?.name ?? ""}
              width={80}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
