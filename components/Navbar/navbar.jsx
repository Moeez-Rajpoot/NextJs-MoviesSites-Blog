"use client";

import { useState } from "react";
import logo from "../../public/muo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCross,
  faMagnifyingGlass,
  faMessage,
  faPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faMicroblog,
  faPinterest,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isoption, setIsOption] = useState("");
  const [issearch, setIsSearch] = useState(false);
  const [isli, setIsLi] = useState(false);

  const handleOption = (option) => {
    if (isoption === option) {
      setIsOption("");
      return;
    } else {
      setIsOption(option);
    }
  };

  return (
    <>
      <div className="bg-[#101010] w-full h-14 flex border-b-[1px] border-white border-opacity-20 ">
        {issearch && (
          <div className="fixed top-0 right-0 overflow-y-hidden w-screen h-screen bg-[#333232] z-10 opacity-90">
            <div
              onClick={() => setIsSearch(false)}
              className="flex w-full justify-end pt-20 pr-16"
            >
              <FontAwesomeIcon
                icon={faXmark}
                className="w-10 h-10 text-white hover:text-red-500 hover:cursor-pointer"
              ></FontAwesomeIcon>
            </div>

            <div className="flex justify-center  w-full h-full ">
              <div className="w-[60%] flex mt-40 pb-2 lg:pb-8 gap-5 lg:gap-20 justify-start h-fit border-b-2 border-red-500  ">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="w-5 h-5 lg:w-10 lg:h-10 mt-12 lg:mt-10 text-red-500 hover:cursor-pointer"
                ></FontAwesomeIcon>

                <input
                  type="text"
                  placeholder="Search MUO"
                  className="w-[95%] lg:w-1/2 h-28 text-lg lg:text-5xl xl:text-7xl placeholder:text-white outline-none border-none bg-transparent text-white "
                ></input>
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" w-auto min-w-[33.33%] flex items-center"
        >
          {" "}
          {/* Menu */}
          <FontAwesomeIcon icon={faBars} className="w-1/2 h-1/2 " />
        </div>

        <div className=" w-auto min-w-[33.33%] flex justify-center items-center">
          {" "}
          {/* Logo */}
          <Image src={logo} alt="logo" className="w-1/2 h-1/2"></Image>
        </div>

        <div className=" w-auto min-w-[33.33%] flex justify-end items-center pr-5 pl-5 sm:pl-0 sm:pr-16  md:pr-16 lg:pr-28 ">
          {" "}
          {/* Signup */}
          <div className="flex justify-center items-center  rounded-full w-min-[20%] w-fit gap-1 px-1 py-1 lg:px-2 lg:py-[5px]  bg-white sm:bg-transparent lg:bg-white ">
            <p className="text-black sm:text-white lg:text-black hidden sm:block text-xs text-nowrap font-semibold">
              Sign In Now
            </p>{" "}
            <FontAwesomeIcon
              icon={faUser}
              className="rounded-full bg-white lg:bg-black text-black lg:text-white  w-5 h-5 sm:px-1 sm:py-1"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className="w-full h-12  hidden bg-[#101010]  text-white text-sm gap-2 px-10 lg:flex justify-center items-center">
        <div className="w-[80%] flex justify-center items-center">
          <p className="text-nowrap font-bold">Trending</p>
          <li className="text-nowrap hover:underline hover:cursor-pointer list-none ml-3">
            Window 11
          </li>
          <li className=" ml-2 text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">ChatGPT</span>
          </li>

          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">IPhone Help</span>
          </li>
          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">Gaming Tips</span>
          </li>
          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">Facebook Help</span>
          </li>
          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">Avoiding Scam</span>
          </li>
          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">
              Emojis Explained
            </span>
          </li>
          <li className="text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
            <span className="relative -left-3 bottom-[1px]">
              Free Movies Streaming{" "}
            </span>
          </li>
        </div>
      </div>

      <motion.div
        animate={{
          x: isOpen ? 0 : -1000,
          transition: {
            type: "tween",
          },
        }}
        className="fixed top-0 left-0 w-full md:w-[26rem] h-screen bg-[#242424] hide-scrollbar scroll-smooth overflow-y-scroll"
      >
        <div className="w-full h-[145vh]  flex flex-col px-6 py-6  md:px-10 md:py-10">
          <div className="flex justify-center items-center ">
            <div
              onClick={() => setIsSearch(true)}
              className="w-1/2  h-full flex items-start pt-2"
            >
              <FontAwesomeIcon
                className="w-[25px] h-[25px] ml-2 hover:cursor-pointer"
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>
            </div>
            <div className="w-1/2  h-full flex justify-end pl-2 pt-2">
              <FontAwesomeIcon
                onClick={() => setIsOpen(false)}
                icon={faXmark}
                className="w-12 h-1/2 hover:cursor-pointer"
              ></FontAwesomeIcon>
            </div>
          </div>

          <div id="li" className="flex pl-2  h-16 w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 text-nowrap border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit">
                PC & MOBILE
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "first" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("first");
                }}
                className="flex items-center justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[45%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "first" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Windows
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Mac
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                Linux
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                Android
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                iOS
              </p>
            </div>
          )}

          <div id="li" className="flex pl-2  min-h-16 h-auto w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 text-nowrap border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit ">
                INTERNET
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "second" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("second");
                }}
                className="flex items-center h-16  justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[45%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "second" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Social media
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Security
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                Programming
              </p>
            </div>
          )}

          <div id="li" className="flex pl-2  min-h-16 h-auto w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 text-nowrap border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit ">
                PRODUCTIVITY
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "third" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("third");
                }}
                className="flex items-center justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[45%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "third" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Creative
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                DIY
              </p>
            </div>
          )}

          <div id="li" className="flex pl-2  h-16 w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 text-nowrap border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit ">
                LIFTSTYLE
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "four" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("four");
                }}
                className="flex items-center justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[45%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "four" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Smart Home
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Gaming
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                Entertainment
              </p>
            </div>
          )}

          <div id="li" className="flex pl-2  h-16 w-full">
            <div className="w-1/2">
              <p className="text-2xl text-nowrap mt-7 border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit ">
                TECH EXPLAINED
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "five" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("five");
                }}
                className="flex items-center justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[45%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "five" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Artifical intelligence
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Tech Jordan
              </p>
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer">
                Networking
              </p>
            </div>
          )}

          <div id="li" className="flex pl-2  h-16 w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 text-nowrap  border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit ">
                REVIEWS
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-7"></div>
          </div>

          <div id="li" className="flex pl-2  h-16 w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-7 border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer w-fit  text-nowrap">
                BUYING GUIDES
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-7"></div>
          </div>

          <div id="li" className="flex pl-2  h-20 w-full">
            <div className="w-1/2">
              <p className="text-2xl mt-12  text-nowrap hover:cursor-pointer">
                MORE
              </p>
            </div>
            <div className="w-1/2 flex justify-end h-full pr-2 mt-3">
              <motion.div
                animate={{
                  rotate: isoption === "six" ? -45 : 0,
                  type: "tween",
                }}
                onClick={() => {
                  handleOption("six");
                }}
                className="flex items-center justify-center"
                style={{ transformOrigin: "center" }}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-[38%] text-[#d01d1e] hover:cursor-pointer"
                />
              </motion.div>
            </div>
          </div>
          {isoption === "six" && (
            <div className="w-full pl-2 text-sm gap-3 mt-2 font-bold  text-red-600 flex flex-col">
              <p className="border-b-[1px] border-transparent hover:border-red-500 w-fit hover:cursor-pointer ">
                Free Cheat sheets
              </p>
            </div>
          )}

          <div className=" flex flex-col gap-1 justify-end h-52 w-full">
            <div className="flex w-full h-[20%] pt-2  ">
              <div className="w-[17%] pl-3">
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-7"
                ></FontAwesomeIcon>
              </div>
              <h2 className="text-xl text-center font-bold border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer">
                Sign In
              </h2>
            </div>
            <div className="flex w-full mb-6 h-[20%] pt-2  ">
              <div className="w-[17%] pl-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-7"
                ></FontAwesomeIcon>
              </div>
              <h2 className="text-xl text-center font-bold border-b-2 border-transparent hover:border-red-600 hover:cursor-pointer">
                Newsletter
              </h2>
            </div>
          </div>
          <div>
            {" "}
            {/* ICONS BAR*/}
            <div className="flex justify-center items-center gap-2 mt-5 h-16 w-full ">
              <div className="flex justify-center items-center gap-2 mt-5 h-16 w-full flex-wrap">
                <div className="flex items-center h-full gap-4 w-[90%] flex-wrap">
                  <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                    <FontAwesomeIcon icon={faYoutube} className="h-5" />
                  </div>

                  <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                    <FontAwesomeIcon icon={faFacebook} className="h-5" />
                  </div>

                  <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} className="h-5" />
                  </div>

                  <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                    <FontAwesomeIcon icon={faXTwitter} className="h-5" />
                  </div>

                  <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                    <FontAwesomeIcon icon={faLinkedin} className="h-5" />
                  </div>
                  {isli && (
                    <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                      <FontAwesomeIcon icon={faPinterest} className="h-5" />
                    </div>
                  )}

                  {isli && (
                    <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                      <FontAwesomeIcon icon={faMicroblog} className="h-5" />
                    </div>
                  )}

                  {isli && (
                    <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                      <FontAwesomeIcon icon={faWifi} className="h-5" />
                    </div>
                  )}

                  {isli && (
                    <div className="border-white border-[1px] w-10 h-10 flex items-center justify-center rounded-full hover:text-gray-400">
                      <FontAwesomeIcon icon={faMessage} className="h-5" />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-[10%] flex justify-end h-full pr-2 mt-12">
                <div
                  onClick={() => {
                    setIsLi(!isli);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className=" h-[37%] mt-2 text-red-600 hover:cursor-pointer"
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
