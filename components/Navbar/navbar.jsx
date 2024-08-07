import logo from "../../public/muo.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function navbar() {
  return (
    <>
      <div className="bg-[#101010] w-full h-14 flex border-b-[1px] border-white border-opacity-20 ">
        <div className=" w-auto min-w-[33.33%] flex items-center">
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

      <div className="absolute top-0 left-0 w-[27.5%] h-screen bg-white">
        <div className="w-full h-[120vh] bg-gray-500 scroll-auto flex flex-col px-10 py-10">
          <div className="flex justify-center items-center bg-teal-200">
            <div className="w-1/2 bg-green-300 h-full flex items-start pt-2">
              <FontAwesomeIcon
                className="w-[25px] h-[25px] ml-2"
                icon={faMagnifyingGlass}
              ></FontAwesomeIcon>
            </div>
            <div className="w-1/2 bg-gray-400 h-full flex justify-end pt-2">
              <FontAwesomeIcon
                icon={faXmark}
                className="w-12 h-1/2"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
