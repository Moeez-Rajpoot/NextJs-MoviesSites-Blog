import Image from "next/image";
import bgpic from "../public/pic.png";
import Bar from "../components/bar";
import Right from "../components/Home/right/right";
import Left from "../components/Home/left/left";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-fit bg-[#1c1a1a] items-center">
      <div className="w-full h-12 hidden bg-[#101010] text-white text-sm gap-2 px-10 lg:flex justify-center items-center">
        <div className="w-[80%] flex justify-center items-center">
          <p className="text-nowrap font-bold">Trending</p>
          <li className="text-nowrap hover:underline hover:cursor-pointer list-none ml-3">
            Window 11
          </li>
          <li className="ml-2 text-nowrap hover:underline hover:cursor-pointer marker:text-gray-600 marker:text-xl">
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
              Free Movies Streaming
            </span>
          </li>
        </div>
      </div>

      <h1 className=" flex md:hidden text-2xl mt-3 px-5 sm:px-9  font-bold p text-white">
        10 Free Movie Streaming Sites With No Sign Up Requirements
      </h1>
      <div className="w-full px-5 sm:px-9  mt-2 md:hidden h-full flex items-center">
        <Image
          alt="icon"
          src="https://static1.makeuseofimages.com/wordpress%2Fwp-content%2Fauthors%2F5fc785706f3fb-IMG_20200916_155509.jpg?fit=crop&w=90&h=90"
          width={20}
          height={10}
          className="rounded-full h-6 w-6"
        ></Image>

        <p className="text-xs font-semibold cursor-pointer ml-1">
          By{" "}
          <span className="hover:text-red-500 text-xs">Simona Tolcheva </span>{" "}
          &mdash; <span className="text-xs text-[#848a91"> May 14, 2024 </span>{" "}
        </p>
      </div>
      {/* Image Section */}
      <div className="w-full sm:w-[90%] lg:w-[92%] xl:w-[72%] h-[200px] sm:h-[320px] lg:h-[610px] relative mt-5 bg-white flex flex-col justify-center overflow-hidden items-center">
        <Image
          src={bgpic}
          alt="A person holding a remote and choosing between different screens"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0b0b0bef] to-transparent"></div>
        <h1 className=" hidden md:flex md:absolute md:bottom-5 md:left-0 text-[2.8rem] px-5  font-bold p text-white">
          10 Free Movie Streaming Sites With No Sign Up Requirements
        </h1>
      </div>

      {/* bar */}
      <Bar />
      <div className="w-full h-fit flex sm:w-[90%] lg:w-[92%] xl:w-[72%]">
        <Right className />
        <Left />
      </div>

      {/* Reply and Comment Section*/}

      <div className="w-full h-fit pb-96 flex flex-col sm:w-[90%] lg:w-[92%] xl:w-[72%] bg-transparent mt-5">
        <div className="flex justify-between w-full">
          <div className="flex items-center ml-3 sm:ml-0 text-white hover:cursor-pointer  hover:text-red-700 justify-center h-full">
            <FontAwesomeIcon
              className=" hover:text-red-700 h-8"
              icon={faComments}
            ></FontAwesomeIcon>
            <p className="text-2xl ml-1 ">Threads</p>
            <div className="px-2 py-[2px] font-bold text-sm ml-1 rounded-full bg-gray-600">
              1
            </div>
          </div>

          <div className="w-[33.33%] hidden lg:block  h-full">
            <div className="flex gap-1 justify-end mr-1 items-center h-full">
              <p className="font-bold text-sm hover:cursor-pointer hover:underline ">
                Sign In Into Your <span className="text-red-700">MUO</span>{" "}
                Account
              </p>
              <div className="rounded-full bg-black ml-1 px-[5px] py-[5px] flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-white h-3 w-3"
                  icon={faUser}
                ></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 w-full">
          <div className="w-[15%] border-b-2 border-red-700"></div>
          <div className="w-[85%] border-b-2 border-white"></div>
        </div>
        <p className="text-white text-sm mt-3">
          We want to hear from you! Share your opinions in the thread below and
          remember to keep it respectful.
        </p>
        <div className="bg-[#0e0e0e] w-[68%] h-24 flex justify-center items-center mt-5">
          <input placeholder="hellow" className="font-bold text-sm hover:cursor-pointer hover:underline"></input>
          <div className="rounded-full bg-black ml-1 px-[5px] py-[5px] flex justify-center items-center">
            <FontAwesomeIcon
              className="text-white h-3 w-3"
              icon={faUser}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </main>
  );
}
