"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Right() {
  const [techData, setTechData] = useState([]);
  const [pcData, setPcData] = useState([]);
  const [lilNav, setLilNav] = useState("tech");
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTechData(data.techExplained);
        setPcData(data.pcAndMobile);
        setTrending(data.trending);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleLilNav(option) {
    setLilNav(option);
  }

  return (
    <div className="w-[30%] text-white hidden lg:block order-2 bg-transparent h-[8400px]">
      <div className="bg-[#242524] flex rounded-md flex-col w-[94%] ml-5 mt-5 h-[380px]">
        <div className="flex">
          <div className="h-[11px] w-1/2 bg-red-700"></div>
          <div className="h-[11px] w-1/2 bg-[#777677]"></div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleLilNav("tech")}
            className={`h-10 w-1/2 text-center ${
              lilNav === "tech" ? "bg-[#252424]" : "bg-[#333333]"
            }`}
          >
            <p className="text-center text-gray-300 text-sm font-semibold hover:cursor-pointer mt-2 h-full">
              TECH EXPLAINED
            </p>
          </div>
          <div
            onClick={() => handleLilNav("pc")}
            className={`h-10 w-1/2 text-center ${
              lilNav === "pc" ? "bg-[#252424]" : "bg-[#333333]"
            }`}
          >
            <p className="text-center text-gray-300 text-sm font-semibold hover:cursor-pointer mt-2 h-full">
              PC & MOBILE
            </p>
          </div>
        </div>

        <div className="flex flex-col px-3 w-full h-fit">
          {lilNav === "tech" &&
            techData.map((data, index) => (
              <div key={index} className="flex w-full h-fit mt-3">
                <div className="w-1/3">
                  <Image
                    src={data.link}
                    alt="icon"
                    width={150}
                    height={150}
                    className="object-cover rounded-md w-[105px] h-[70px] max-w-60 hover:opacity-90 hover:cursor-pointer"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center pl-5 lg:pl-7">
                  <p className="text-gray-200 text-sm font-semibold truncate-3-lines hover:underline hover:cursor-pointer">
                    {data.title}
                  </p>
                  <p className="text-gray-400 font-bold text-xs">{data.date}</p>
                </div>
              </div>
            ))}
          {lilNav === "pc" &&
            pcData.map((data, index) => (
              <div key={index} className="flex w-full h-fit mt-3">
                <div className="w-1/3">
                  <Image
                    src={data.link}
                    alt="NewsImages"
                    width={150}
                    height={150}
                    className="object-cover rounded-md w-[105px] h-[70px] max-w-60 hover:opacity-90 hover:cursor-pointer"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center pl-5 lg:pl-7">
                  <p className="text-gray-200 text-sm font-semibold truncate-3-lines hover:underline hover:cursor-pointer">
                    {data.title}
                  </p>
                  <p className="text-gray-400 font-bold text-xs">{data.date}</p>
                </div>
              </div>
            ))}
          <button className="w-full h-9 mt-3 rounded-md bg-red-700 text-sm text-white font-bold">
            SEE MORE
          </button>
        </div>
      </div>

      {/* Trending now */}
      <div className="bg-transparent sticky top-24  flex rounded-md flex-col w-[94%] ml-5 mt-5 h-full">
       <div className=" sticky top-20">
       <div className="flex flex-col border-b-[3px] border-gray-400">
          <h1 className="text-xl font-bold text-[#b7b4b5]">TRENDING NOW</h1>
        </div>

        <div className="flex flex-col mt-4 px-3 w-full h-fit">
          {trending.map((data, index) => (
            <div key={index} className="flex w-full h-fit mt-3">
              <div className="w-1/3">
                <Image
                  src={data.link}
                  alt="icon"
                  width={150}
                  height={150}
                  className="object-cover rounded-md w-[105px] h-[70px] max-w-60 hover:opacity-90 hover:cursor-pointer"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center pl-5 lg:pl-7">
                <p className="text-gray-200 text-sm font-semibold truncate-3-lines hover:underline hover:cursor-pointer">
                  {data.title}
                </p>
                <p className="text-gray-400 font-bold text-xs">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
}