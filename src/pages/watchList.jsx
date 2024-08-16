import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  MdClose,
  MdLeakRemove,
  MdRemove,
  MdRemoveCircle,
  MdRemoveCircleOutline,
  MdRemoveDone,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../compononet/movie";
import NavBar from "../compononet/NavBar";
import { Filter } from "../redux/addToList";

const WatchListed = () => {
  const [list, setList] = useState([]);
  const data = useSelector((state) => state.List);
  console.log(list);
  useEffect(() => {
    setList(data);
  });
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <div className="w-full min-h-full">
        <img
          src={"./images/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"}
          alt="img"
          className="w-full h-[250px] md:h-[450px] object-cover"
        />
        <div className="bg-black/60 absolute top-0 left-0 h-[250px] md:h-[450px] w-full"></div>
        <h1 className="capitalize  my-6 md:px-8 px-4 font-bold text-white md:text-3xl text-[22px] md:text-[30px]">
          watch list
        </h1>
        <div className="flex gap-6 w-full flex-col min-h-screen md:px-8 px-4 md:justify-start justify-start items-start md:items-start">
          {list.length ? (
            list.map((i) => (
              <div className="flex items-start w-full justify-between md:h-[200px] h-[90px]">
                <div className="flex flex-col gap-1 items-start flex-1">
                  <h1 className="text-white/80 md:text-[24px] text-[16px]">
                    {i?.original_name ? i?.original_name : i?.title}
                  </h1>
                  <p className="text-[#7a7a7a] text-[12px]">
                    {i?.original_language} / {i?.release_date} /{" "}
                    {location.pathname === "/series" ? "TV series" : "Movies"}
                  </p>
                  <p className="text-[#7a7a7a] text-[12px]">
                    Sci-Fi & Fantasy, Drama, Action & Adventure
                  </p>
                </div>
                <div className="md:w-[140px] w-[80px] h-full flex items-end justify-end">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${i?.poster_path}`}
                    alt=""
                    className="md:w-full h-full oject-cover"
                  />
                </div>
                <MdRemoveCircle
                  onClick={() => dispatch(Filter(i?.id))}
                  className="self-center md:text-[32px] text-[20px] ml-3 md:ml-4 text-white/50 cursor-pointer"
                />
              </div>
            ))
          ) : (
            <h1 className="text-white/30  text-lg md:text-[30px] font-medium uppercase ">
              no movies added
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchListed;
