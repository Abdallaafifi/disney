import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../DataApi";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useRef } from "react";
import { Link } from "react-router-dom";

const EnterTainment = () => {
  const [data, setData] = useState([]);
  let next = document.getElementById("next");

  const slider = useRef(null);
  const slide = (dir) => {
    const { current } = slider;
    dir === "next" ? (current.scrollLeft += 300) : (current.scrollLeft -= 300);
  };
  const GetData = async () => {
    axios.get(requests.topRated).then((res) => {
      return setData(res.data.results);
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="w-full  my-6 md:my-[6rem] overflow-hidden ">
      <h1 className="md:text-[30px] text-[18px] md:mb-6 mb-3 font-sans font-bold capitalize text-white/90">
        {" "}
        What to Watch Tonight
      </h1>
      <div className="relative w-full h-full ">
        <img
          src="/src/public/assets/images/dark-and-light-abstract-wallpapers-46219-405270-9645566.png"
          className="absolute inset-0 w-full h-full z-[-1] object-cover"
          alt="img"
        />

        <div className="flex w-full md:flex-row flex-col md:gap-5 gap-8 items-center h-full md:px-8 px-2 md:py-6 py-4 md:shadow-none shadow-3xl  ">
          <div className="flex flex-col items-center min-w-[400px] md:mr-8 m-0 ">
            <img
              src="./images/62d022d6862c6f30f92a9cd0_more.png"
              className="md:w-[320px] w-[230px] "
              alt="img"
            />
            <button className="md:text-[20px] text-[14px] font-bold text-[#fff]/90  md:px-12 px-5  md:py-4 py-3 rounded-lg   bg-slate-800 capitalize">
              view more
            </button>
          </div>
          <button
            onClick={() => {
              slide("prev");
            }}
          >
            <MdArrowBackIos className="text-[40px] mr-[-10px] cursor-pointe text-white md:block hidden" />
          </button>
          <div
            ref={slider}
            className=" h-full w-full  flex gap-6 items-center overflow-x-scroll md-py-0  md:px-4 px-2 scrollbar-hide scroll-smooth "
          >
            {data.map((i, x) => (
              <Link
                to={"/film/" + i?.title}
                key={x}
                className="md:min-w-[240px] min-w-[150px] md:h-[330px] h-[220px]  rounded-lg hover:scale-[1.08] duration-[600ms] hover:border-white/90 ease transition overflow-hidden border-[4px] border-[#272727ec] shadow-3xl "
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${i?.poster_path}`}
                  alt=""
                  className="min-w-full min-h-full object-cover"
                />
              </Link>
            ))}
          </div>
          <button
            id="next"
            onClick={() => {
              slide("next");
            }}
          >
            <MdArrowForwardIos className="text-[40px] text-white cursor-pointer md:block hidden" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterTainment;
