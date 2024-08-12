"use client";
import React, { useState, useEffect } from "react";
import {
  faBolt,
  faList,
  faPlug,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Left() {
  const [navLinks, setNavLinks] = useState([]);
  const [keyTakeaways, setkeyTakeaways] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNavLinks(data.navLinks);
        setkeyTakeaways(data.keyTakeaways);
        setContent(data.content);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col order-1 w-full items-center lg:items-start px-4 lg:px-0 lg:w-[70%] h-fit">
      {/* Quick Links */}
      <div className="flex gap-2 mt-5 justify-start items-center w-full">
        <FontAwesomeIcon className="text-red-700 h-5" icon={faBolt} />
        <p className="text-white font-bold text-[16px]">QUICK LINKS</p>
      </div>
      <div className="w-[97.5%] bg-[#333233] mt-5 h-[445px] rounded-sm">
        <ul className="list-disc marker:text-2xl marker:text-red-700 mt-2 ml-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-white w-fit pb-[6px] hover:cursor-pointer underline font-bold hover:bg-slate-300 hover:bg-opacity-50 hover:transition ease-in duration-100 "
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Takeaways */}
      <div className="flex gap-2 mt-5 justify-start items-center  w-full">
        <FontAwesomeIcon
          className="text-red-700 h-5 ml-1 sm:ml-2 md:ml-3 lg:ml-0"
          icon={faList}
        />
        <p className="text-white font-bold text-[16px]">KEY TAKEAWAYS</p>
      </div>
      <div className="w-[97.5%] bg-[#333233] mt-5 pb-3 h-fit rounded-sm">
        <ul className="list-disc marker:rounded-none marker:text-2xl marker:text-red-700 mt-2 ml-8">
          {keyTakeaways.map((takeaway, index) => (
            <li
              key={index}
              className="text-white text-[15px] w-fit pb-[6px] hover:cursor-pointer font-bold"
            >
              {takeaway}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      {content.map((item, index) => (
        <div key={index} id="content" className="h-fit w-[97.5%] mt-8">
          <a href={item.link} className="text-4xl text-red-700 font-bold">
            <span className="text-white mr-2">{item.number}</span>
            {item.heading}
          </a>
          <Image
            className="mt-8"
            width={800}
            height={400}
            src={item.image}
            alt={item.heading}
          />
          {item.subtexts.map((subtext, subIndex) => (
            <p key={subIndex} className="mt-6 text-lg w-[97.5%]">
              {subtext}
            </p>
          ))}
        </div>
      ))}

      {/* Icons and Links */}
      <div className="w-full  h-56  flex flex-col justify-center items-center">
        <div className="flex flex-col  lg:flex-row gap-2 mt-10 justify-center items-center">
          <p className="bg-[#262626] mb-2 lg:mb-0 hover:cursor-pointer text-[#afaeae] px-5 py-2 rounded-md text-xs font-bold">
            Entertainment
          </p>
          <p className="bg-[#262626] mb-2 lg:mb-0 hover:cursor-pointer text-[#afaeae] px-5 py-2 rounded-md text-xs font-bold">
            Media Streaming
          </p>
          <p className="bg-[#262626] mb-2 lg:mb-0 hover:cursor-pointer text-[#afaeae] px-5 py-2 rounded-md text-xs font-bold">
            Youtube
          </p>
        </div>

        <div className="flex gap-2 lg:gap-7 mt-5 justify-center items-center">
          <div className="flex items-center ml-1 text-white hover:cursor-pointer  hover:text-red-700 justify-center h-full">
            <FontAwesomeIcon
              className=" hover:text-red-700"
              icon={faUserPlus}
            ></FontAwesomeIcon>
            <p className="text-xs ml-2 ">Follow</p>
          </div>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 ml-1"></div>

          <p className="bg-[#262626] hover:cursor-pointer hover:opacity-85 text-[#afaeae] px-2 py-2 text-center rounded-md text-xs font-bold">
            <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />{" "}
          </p>
          <p className="bg-[#262626] hover:cursor-pointer hover:opacity-85 text-[#afaeae] px-2 py-2 text-center rounded-md text-xs font-bold">
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />{" "}
          </p>

          <p className="bg-[#262626] hover:cursor-pointer hover:opacity-85 text-[#afaeae] px-2 py-2 text-center rounded-md text-xs font-bold">
            <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />{" "}
          </p>

          <p className="bg-[#262626] hover:cursor-pointer hover:opacity-85 text-[#afaeae] px-2 py-2 text-center rounded-md text-xs font-bold">
            <FontAwesomeIcon icon={faPlus} className="h-5 w-5" />{" "}
          </p>
        </div>
      </div>

      <p className="cursor-pointer italic mt-3 lg:mt-0 text-[#aeaeae] tracking-tighter font-bold text-xs w-full">
        Readers like you help support MakeUseOf. When you make a purchase using
        links on our site, we may earn an affiliate commission.{" "}
        <span className="underline">Read More</span>.
      </p>
    </div>
  );
}
