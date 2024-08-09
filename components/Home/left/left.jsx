"use client";
import React, { useState, useEffect } from "react";
import { faBolt, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
    <div className="flex flex-col order-1 w-[70%] h-fit">
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
      <div className="flex gap-2 mt-5 justify-start items-center w-full">
        <FontAwesomeIcon className="text-red-700 h-5" icon={faList} />
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
    </div>
  );
}
