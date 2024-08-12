import Image from "next/image";
import bgpic from "../public/pic.png";
import Bar from "../components/bar";
import Right from "../components/Home/right/right";
import Left from "../components/Home/left/left";

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
      <div className="w-full h-fit pb-96 flex sm:w-[90%] lg:w-[92%] xl:w-[72%]" >
        <Right className/>
        <Left/>



      </div>
    </main>
  );
}
