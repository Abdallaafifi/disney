import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      key={12}
      className="w-full   h-[290px]   py-[3rem] md:px-[5rem] px-10 flex items-center justify-center "
    >
      <div className="flex flex-col items-center  ">
        <Link to={"/"}>
          <h1 className="text-red-800 font-bold tracking-[4px] text-2xl md:text-[45px] font-sans capitalize mb-6">
            movies
          </h1>
        </Link>
        <p className="text-gray-400 text-[12px] leading-[24px]">
          Lorem 196 Andrew Road, Suite 200, New York, NY 10007
        </p>
        <p className="text-gray-400  leading-[24px] text-[12px]">
          Tell: +255 754 661 423 <br /> Email: info@zpunet.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
