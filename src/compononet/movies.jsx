import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Items from "../App";
import Movie from "./movie";

const Movies = ({ title, url, keyId }) => {
  const [movies, setMovies] = useState([]);
  // Items(data);
  const slide = document.getElementById("slider" + keyId);
  const scroll = (d) => {
    if (d === "r") {
      slide.scrollLeft += 1000;
    } else {
      slide.scrollLeft -= 1000;
    }
  };

  const GetData = () => {
    axios.get(url).then((res) => {
      return setMovies(res.data.results);
    });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="  md:my-6 my-6   select-none ">
      <div className="flex  justify-between items-center">
        <h1 className="text-white blur-[.5px] md:text-[27px] text-sans tracking-[2px] text-[14px] capitalize font-[400] md:font-[600] ">
          {title}
        </h1>
        <Link to={"/movies"} className="text-white">
          <p className="text-white font-sans md:text-[16px] text-[12px] border-[2px] div rounded-[20px] md:px-6 px-4 py-1 capitalize leading-relaxed border-[#302f2f]">
            more
          </p>
        </Link>
      </div>
      <div className="flex items-center relative group">
        <IoIosArrowBack
          onClick={() => scroll("l")}
          className="md:hidden md:group-hover:block   hidden bg-white/80 hover:bg-white/100 transition shadow-3xl cursor-pointer text-black  absolute left-[-17px] z-[50] rounded-full p-1 w-[35px] h-[35px]"
        />
        <div
          id={`slider` + keyId}
          className={` slide   md:mt-0 mt-2 flex items-center justify-between md:min-h-full    cursor-pointer hover:opacity-100 relative gap-4 md:gap-[1.5rem] w-full md:px-2 overflow-x-scroll scroll-smooth   scrollbar-hide `}
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
        <IoIosArrowForward
          onClick={() => scroll("r")}
          className="md:hidden  md:group-hover:block   hidden bg-white/80   transition cursor-pointer shadow-2xl  hover:bg-white/100  text-black  absolute right-[-17px] z-[50] rounded-full p-1 w-[35px] h-[35px]"
        />
      </div>
    </div>
  );
};

export default Movies;
