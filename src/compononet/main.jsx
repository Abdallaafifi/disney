import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import requests from "../DataApi";
import { addMovie } from "../redux/createSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "/src/compononet/act/active.css";

import { count } from "firebase/firestore";
import { Link } from "react-router-dom";
const Main = () => {
  const [movies, setMovies] = useState([]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const GetData = () => {
    axios.get(requests.PopularMovies).then((response) => {
      return setMovies(response.data.results);
    });
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="my-10 sm:my-[4rem]  px-3  w-full flex h-[320px] md:h-[480px] items-center gap-1 relative ">
      <Swiper
        spaceBetween={20}
        autoplay={true}
        speed={1000}
        loop={true}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
      >
        {movies?.slice(0, 5).map((i, x) => (
          <SwiperSlide key={x}>
            <Link to={"/film/" + i?.title}>
              <img
                src={`https://image.tmdb.org/t/p/original/${i?.backdrop_path}`}
                alt={i?.title}
                className=" md:w-[98%] w-[100%]   h-[260px]  sm:h-[320px] md:h-[420px] my-8  mx-auto    shadow-[0_2px_8px_3px_#000] rounded-[14px] object-cover    "
              />
              <div className="absolute sm:top-20 top-[80%] md:left-12 left-4 md:text-[40px] text-[15px] antialiased animation">
                <p className="text-white/75 font-bold tracking-[2px]">
                  {i?.title}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Main;

//
