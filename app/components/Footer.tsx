"use client";

import Image from "next/image";
import Link from "next/link";
import { useMediasQuery } from "../graphql/generated";
import graphqlRequestClient from "../lib/graphql.request";

const Footer = () => {
  const { data } = useMediasQuery(graphqlRequestClient);

  const tabs = [
    {
      id: 1,
      name: "Home",
      section: "home",
    },
    {
      id: 2,
      name: "About",
      section: "about",
    },
    {
      id: 3,
      name: "Tech Stack",
      section: "tech-stack",
    },
    {
      id: 4,
      name: "Projects",
      section: "projects",
    },
    {
      id: 5,
      name: "Contact",
      section: "contact",
    },
  ];

  return (
    <div id="contact" className="flex flex-col w-full gap-10 mb-5">
      <div className="flex flex-row w-full items-center">
        <span className="mr-auto"></span>
        <span className="mr-10 text-matte-blue">+55 (33) 99824-7905</span>
        <span className="mr-10 text-matte-blue">devmarcussfm@gmail.com</span>
        <div className="flex flex-row items-center gap-3">
          {data?.mediasCollection?.items.map((item) => (
            <Image
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open(item?.link ?? "")}
              key={item?.id}
              src={item?.logo?.url ?? ""}
              alt=""
              width={30}
              height={30}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] opacity-60 bg-[#666666]"></div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row items-center mr-auto gap-10">
          {tabs.map((item) => (
            <Link
              className="text-gray cursor-pointer hover:opacity-80 transition-opacity"
              key={item.id}
              href={`#${item.section}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <span className="text-[#666666]">
          Designed and built by{" "}
          <span className="gradient-text font-medium">Marcus Santos</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
