import {
  faComments,
  faShare,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
export default function bar() {
  return (
    <div className="bg-white relative h-14 flex w-full sm:w-[90%] lg:w-[72%] mb-96">
      <div className="hidden sm:w-1/2 lg:w-[33.33%] h-full sm:flex items-center bg-green-500">
        <Image
          alt="icon"
          src="https://static1.makeuseofimages.com/wordpress%2Fwp-content%2Fauthors%2F5fc785706f3fb-IMG_20200916_155509.jpg?fit=crop&w=90&h=90"
          width={20}
          height={10}
          className="rounded-full h-6 w-6"
        ></Image>

        <p className="text-xs font-semibold cursor-pointer ml-1">
          By <span className="hover:text-red-500">Simona Tolcheva </span>{" "}
          &mdash; <span className="text-[#848a91"> Updated May 14, 2024 </span>{" "}
        </p>
      </div>

      <div className="w-full sm:w-1/2  lg:w-[33.33%] h-full flex justify-between lg:justify-center items-center bg-blue-500">
        <div className="flex items-center ml-3 sm:ml-0 text-white hover:cursor-pointer  hover:text-red-700 justify-center h-full">
          <FontAwesomeIcon
            className=" hover:text-red-700"
            icon={faComments}
          ></FontAwesomeIcon>
          <p className="text-xs ml-1 ">Threads</p>
          <div className="px-2 py-1 font-bold text-xs ml-1 rounded-full bg-gray-600">
            1
          </div>
        </div>

        <div className="border-r-2 h-5 w-1 flex justify-center items-center border-red-50 border-opacity-25 ml-1"></div>

        <div className="flex items-center ml-1 text-white hover:cursor-pointer  hover:text-red-700 justify-center h-full">
          <FontAwesomeIcon
            className=" hover:text-red-700"
            icon={faUserPlus}
          ></FontAwesomeIcon>
          <p className="text-xs ml-1 ">Follow</p>
        </div>
        <div className="border-r-2 h-5 w-1 flex justify-center items-center border-red-50 border-opacity-25 ml-1"></div>
        <div className="flex items-center mr-5 lg:mr-0 ml-1 text-white hover:cursor-pointer  hover:text-red-700 justify-center h-full">
          <FontAwesomeIcon
            className=" hover:text-red-700"
            icon={faShare}
          ></FontAwesomeIcon>
          <p className="text-xs ml-1 ">Share</p>
        </div>
      </div>

      <div className="w-[33.33%] hidden lg:block  h-full bg-yellow-500">
        <div className="flex gap-1 justify-end mr-1 items-center h-full">
          <p className="font-bold text-sm ">Sign In Into Your <span className="text-red-700">MUO</span> Account</p>
          <div className="rounded-full bg-white ml-1 px-[5px] py-[5px] flex justify-center items-center">
            <FontAwesomeIcon className="text-black h-3 w-3" icon={faUser}></FontAwesomeIcon>


          </div>
        </div>
      </div>
    </div>
  );
}
