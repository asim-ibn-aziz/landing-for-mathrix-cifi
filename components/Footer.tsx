import { FaLocationArrow, FaUserPlus } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready To Take Your <span className="text-purple">Child</span> To Next Level Learning?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
           On average students pay £1000 for extra tuition per year {/* Updated this line */}
        </p>
        <a href="#" className="p-2">
            <MagicButton
              title="Sign Up Now"
              icon={<FaUserPlus />}
              position="right"
            />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        {/* Developed by Mathrix text */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Developed by <a className="font-semibold text-purple" href="fabicode.com">Fabicode</a>
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="md:text-base text-sm md:font-normal font-light mt-5 md:mt-0">
          Copyright © 2024 Mathrix
        </p>
      </div>
    </footer>
  );
};

export default Footer;
