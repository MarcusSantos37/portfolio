"use client";

import Image from "next/image";
import Link from "next/link";
import { useMediasQuery } from "../graphql/generated";
import graphqlRequestClient from "../lib/graphql.request";

const Header = () => {
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
    <div className="flex flex-row items-center p-8 justify-center gap-5">
      <div className="flex flex-row items-center w-full gap-10">
        {tabs.map((item) => (
          <Link
            className="text-gray font-medium cursor-pointer hover:opacity-80 transition-opacity"
            key={item.id}
            href={`#${item.section}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
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
  );
};

export default Header;
