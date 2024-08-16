import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  FaArrowLeft,
  FaBackward,
  FaPlay,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { MdArrowBack, MdArrowBackIos, MdBoy } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import requests from "../DataApi";
import Movies from "./movies";
import { FaCheck } from "react-icons/fa6";
import { addToList, Filter } from "../redux/addToList";

const Piece = () => {
  const [active, setActive] = useState();
  const [videos, setVideos] = useState([]);
  const [show, setShow] = useState();
  const [icon, setIcon] = useState(false);
  const { id } = useParams();
  useEffect(() => window.scrollTo(0, 0), []);
  const data = useSelector((state) => state.Movie);
  const item = data.find((i) => i.title === id);
  const key = videos.find((i) => i.name === "Official Trailer");

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const dispatch = useDispatch();
  const select = useSelector((state) => state.List);
  const exist = select.find((i) => i.id === item.id);
  console.log(exist);

  setTimeout(() => {
    document.querySelector(".note").classList.add("hide");
  }, 4000);

  const GetVideo = async () => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${item?.id}/videos?api_key=632263edb588b456786ff279e4e12517&language=en-US`
        )

        .then((res) => {
          return setVideos(res?.data.results);
        });
    } catch (err) {
      console.log(err);
    }
  };
  console.log(videos);
  useEffect(() => {
    GetVideo();
  }, []);
  return (
    <>
      <div key={id} className="  relative w-full h-full   md:px-[3rem] px-4 ">
        <div className="  flex flex-col  items-start  justify-start w-full h-full ">
          <img
            src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
            alt="backdrop"
            className="fixed top-0 left-0 w-full -z-20 min-h-full  object-cover blur-sm"
          />
          <Link
            to={"/"}
            className="absolute top-[5%] left-[5%] text-[25px] text-white/70 font-bold cursor-pointer"
          >
            <MdArrowBackIos />
          </Link>

          <div className="absolute top-[120px] md:top-[230px] md:left-[73%] left-[25%] ">
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt=""
              className="md:w-[390px] md:h-[600px] md:rounded-[15px] w-[180px] h-[270px] object-cover rounded-[6px] shadow-3xl"
            />
          </div>

          <div className=" bg-black/65 absolute top-0 left-0 min-h-screen w-full bottom-0 -z-[1]"></div>
          <div className="flex items-start  flex-col  z-[100] w-full  mt-[27rem] md:mt-[30rem]     ">
            <div className="flex flex-wrap items-center  gap-4 ">
              <h1 className="text-white/90 text-[22px] md:text-[40px] font-bold text-serif capitalize mr-2 leading-[18px]">
                {item?.title}
              </h1>
              <button className="  text-[12px] md:text-[16px]   text-white/60 bg-transparent">
                ( {item.vote_count} voted )
              </button>
              <div className="w-1 h-1 rounded-full bg-white/40 "></div>
              <button className="  bg-transparent text-gray-100/80 text-[10px] md:text-[16px] uppercase">
                {item?.release_date.split("-")[0]}
              </button>
              <button className="  bg-transparent text-gray-100/80 text-[12px] md:text-[16px] uppercase items-center flex gap-1">
                <p>9.2</p>
                <FaStar className="text-yellow-500  mb-1  " />
              </button>
            </div>
            <div>
              <p className="md:text-base text-[12px] my-2 sm:my-4 text-gray-300/90">
                Mystery, Comedy, Animation
              </p>
            </div>
            <div className="flex items-center flex-wrap md-my-0 my-2">
              <button className="flex items-center gap-2 px-4 py-[10px] md:px-9 md:py-3 bg-gray-100 uppercase rounded md:rounded-[4px] font-500">
                <FaPlay className="text-[#1b1b1b] md:text-[20px] text-[15px]" />
                <p className="text-[12px]  md:text-[18px]">play</p>
              </button>
              <button className="flex items-center px-4 py-[9px] md:px-9 md:py-3 hover:bg-gray-100 transition hover:text-[#1b1b1b] text-white  ml-2 md:ml-6 border-[1.5px] border-[#fff]/90 uppercase rounded md:rounded-[8px] font-500">
                <p
                  onClick={() => setShow(!show)}
                  className=" text-[12px] md:text-[18px]"
                >
                  trailer
                </p>
              </button>
              <button
                onClick={() => {
                  dispatch(addToList(item));

                  setIcon(!icon);
                }}
                className={`flex items-center md:text-[20px] text-[12px]  transition rounded-full  text-white/80 md:p-4 p-[12px]  ml-2   font-bold ${
                  icon && "bg-gray-100 text-[#1b1b1b]"
                }`}
              >
                {!icon ? <FaPlus size={15} /> : <FaCheck size={15} />}{" "}
                <p className="ml-1"> Add to list</p>
              </button>
            </div>
            <div className="md:w-[50%] w-[100%] sm:my-6 my-4">
              <p className="text-gray-300 text-[12px]  md:text-[18px] capitalize leading-relaxed tracking-[1.2px] w-full ">
                {item?.overview}
              </p>
            </div>
            <div className="flex items-start md:w-full w-[90%] mb-[-2rem] z-[200] gap-8 mt-4 md:mt-[4rem]">
              <button
                onClick={() => {
                  setActive(!active);
                }}
                className={`${
                  !active && "border-b-[2px] border-white/80 text-white"
                } pb-2 text-gray-300 font-sans text-[12px] sm:text-[20px] uppercase`}
              >
                suggested
              </button>

              <button
                onClick={() => setActive(!active)}
                className={`${
                  active && "border-b-[2px] border-white/80 text-white"
                } pb-2 text-gray-300  font-sans text-[12px] sm:text-[20px] uppercase`}
              >
                details
              </button>
            </div>
            <div className="w-full   min-h-[300px]">
              {!active ? (
                <Movies keyId={"5"} title="" url={requests.topRated} />
              ) : (
                <div className="flex md:flex-row flex-col items-center md:gap-[8rem]  px-0 md:px-1 text-white/95 text-[20px] my-[3rem] md:my-[3rem] ">
                  <div className="flex flex-col items-start ">
                    <h1 className="text-white/90 font-bold text-[22px] sm:text-[32px] mb-4">
                      {item?.title}
                    </h1>
                    <p className="text-[.8rem] sm:text-[1.2rem] leading-relaxed tracking-[1.6px]">
                      {item.overview}
                    </p>
                    <p className="text-white/80  mt-4 sm:mt-6 text-[.8rem] sm:text-[1.2rem] capitalize tracking-[1.4px]">
                      Some flashing lights sequences or patterns may affect
                      photosensitive viewers.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-start md:mt-0 my-8 text-white/70 capitalize text-[12px]  sm:text-[16px] w-full md:min-w-[500px]">
                    <p>release_date: {item?.release_date}</p>
                    <p>Genre: Mystery, Comedy, Animation</p>
                    <p>rating: +13</p>
                    <p>popularity: {item?.popularity}</p>
                    <p>language: {item?.original_language}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {show && (
            <div
              onClick={() => setShow(false)}
              className="fixed top-0 left-0 flex justify-center items-center h-full  w-full  transition opacity-[1]  z-[150]"
            >
              <div className="relative ">
                <YouTube
                  className="border-[8px] class border-[#1c1d1d] w-[360px] h-[270px] sm:w-[680px] sm:h-[480px] lg:w-[1000px] lg:h-[650px]"
                  videoId={key?.key}
                  opts={opts}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Piece;
