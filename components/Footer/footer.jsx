import Image from "next/image";
import logo1 from "../../public/logo.svg";
import logo2 from "../../public/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function footer() {
  return (
    <div className="w-full h-fit flex flex-col lg:flex-row mb-10 sm:w-[90%] lg:w-[92%] xl:w-[72%] mt-5">
      <div className="w-full justify-center items-center lg:justify-start lg:items-start lg:w-1/2 h-full flex flex-col">
        <div className="h-6 mt-5">
          <Image alt="logo1" src={logo1}></Image>
        </div>

        <div className="flex gap-1 mt-8 text-xs justify-start items-center">
          <p className="hover:cursor-pointer hover:text-red-700">
            Join our Team
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">
            Our Audience
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">About Us</p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">
            Press & Events
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">Contact Us</p>
        </div>

        <div className="flex gap-2 mt-8 justify-start items-center">
          <p className="font-semibold mr-2">Follow Us </p>

          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faPinterest} />
        </div>
      </div>
      <div className="w-full justify-center items-center lg:justify-end lg:items-end lg:w-1/2 h-full ">
      <div className=" w-full flex justify-center lg:justify-end mt-5">
          <Image className="h-10 w-10" alt="logo1" src={logo2}></Image>
        </div>

        <div className="flex gap-1 mr-2 mt-8 text-xs justify-center lg:justify-end items-center">
          <p className="hover:cursor-pointer hover:text-red-700">
            Advertising
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">
            Careers
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">Terms</p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">
            Privacy
          </p>
          <div className="border-r-2 h-7 w-1 flex justify-evenly items-center border-red-50 border-opacity-25 "></div>
          <p className="hover:cursor-pointer hover:text-red-700">Polices</p>
        </div>

        <div className="flex gap-2 mt-8 justify-center lg:justify-end items-center">
          <p className="font-semibold text-xs mr-2"><span className="font-bold">MUO</span> is part of the <span className="font-bold">Valnet Publishing Group</span></p>

        
        </div>
      
      </div>
    </div>
  );
}
