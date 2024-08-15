import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";

import "swiper/css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import requests from "../DataApi";
import { useEffect } from "react";
import Star from "./Star";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/createSlice";

const Sliders = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [film, setFilm] = useState([]);
  const getData = async () => {
    axios.get(requests.Top_tv).then((res) => {
      console.log(res);
      return setFilm(res?.data.results);
    });
  };
  console.log(film);
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className=" md:block hidden relative my-6 md:my-[4rem] w-[70%] md:mx-0 mx-auto md:w-[100%] min-h-full  select-none px-6 ">
        <h1 className="flex  md:text-[28px] text-[18px] shadow-3xl mb-3 md:shadow-none py-3 rounded-[20px] justify-center font-sans font-bold tracking-[1.5px] items-center  text-white/90 capitalize ">
          <FaStar className="md:text-[30px] text-lg text-yellow-500 mr-2  " />
          <p>top rated</p>
        </h1>
        <Swiper
          navigation={{ nextEl, prevEl }}
          speed={500}
          loop={true}
          autoplay={true}
          slidesPerView={1}
          spaceBetween={60}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {film?.map((i, x) => (
            <SwiperSlide>
              <Link
                to={"/series/" + i?.original_name}
                onClick={() => dispatch(addMovie(item))}
                key={x}
                className=" relative rounded-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${i?.poster_path}`}
                  alt="img"
                  className=" my-5 hover:scale-[1.06] rounded-[20px] shadow-3xl md:min-w-[230px] min-w-full overflow-hidden h-[320px] md:h-[370px] hover:border-gray-200 transition duration-500  border-[#2e2e2e] border-[4px] "
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex w-full justify-center items-start  h-[7rem] my-6 md:my-[3rem] gap-3">
          <button
            ref={(node) => setPrevEl(node)}
            className="w-[45px] flex items-center justify-center  duration-[.4s]  rounded-lg h-[45px] bg-slate-800 hover:bg-transparent "
          >
            <MdArrowLeft className=" text-white text-[40px]" />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="w-[45px] flex items-center justify-center duration-[.4s] rounded-lg  h-[45px] bg-slate-800 hover:bg-transparent"
          >
            <MdArrowRight className=" text-white text-[40px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sliders;
