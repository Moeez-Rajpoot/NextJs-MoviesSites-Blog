import { faFire, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardContents } from "../../../public/data/card";
import Image from "next/image.js";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col sm:w-[90%] lg:w-[92%] xl:w-[72%] bg-transparent h-auto mt-5">
      <h1 className="flex text-white items-center uppercase text-2xl font-bold">
        <FontAwesomeIcon className="text-white mr-2" icon={faFire} />
        Recommended
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-auto mt-3">
        {cardContents.map((card, index) => (
          <div key={index} className="flex relative flex-col hover:cursor-pointer bg-[#333333] rounded-md p-4">
            <div className="w-full hover:opacity-85 hover:cursor-pointer h-52 relative">
              <Image
                src={card.link}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <p className="absolute bottom-2 left-2 rounded-md backdrop-blur-md border-[1px] border-white px-3 py-1 text-white text-xs font-bold">{card.category}</p>
            </div>
            <h2 className="mt-2 hover:cursor-pointer hover:underline text-[#f3eeee] text-lg font-semibold">{card.title}</h2>
            <p className="text-sm mb-10 text-[#b1afab]">{card.description}</p>

            <div className="absolute bottom-3 right-0 w-full flex  items-center">
                <p className="w-1/2 text-[#b1a99f] text-xs flex justify-start pl-4 ">{card.date}</p>
                <p className="w-1/2 text-[#b1a99f] text-xs flex justify-end pr-4  ">
                <FontAwesomeIcon icon={faMessage} className="mr-1" />
                {card.views}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}