import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "../compononet/movie";
import requests from "../DataApi";

const MoviesPG = () => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  let page = 4;
  const [sed, Set] = useState(0);
  const GetData = async () => {
    await axios.get(requests.PopularMovies).then((data) => {
      return setData(data?.data.results);
    });
  };
  const GetData_SE = async () => {
    await axios.get(requests.topRated).then((data) => {
      return setData2(data?.data.results);
    });
  };
  useEffect(() => {
    GetData();
    GetData_SE();
  }, []);

  return (
    <div
      id="movies"
      className="w-full h-full flex flex-col px-8 md:py-[8rem] py-16"
    >
      <h1 className="md:text-[48px] text-[30px] font-bold font-sans text-white capitalize mb-6">
        movies
      </h1>

      <div className=" grid  lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-3 place-items-center gap-8 pb-2 md:pb-[2rem] ">
        {Data && Data?.map((i, x) => <Movie item={i} />)}

        {sed && Data2 && Data2?.map((i, x) => <Movie item={i} />)}
      </div>

      {!sed && (
        <button
          onClick={() => Set(!sed)}
          className="w-[100px] text-[12px]  mx-auto  text-white bg-[#05235a]  py-2  rounded-2xl mt-6 hover:bg-transparent border-[#05235a] hover:border-white border-2 transition duration-700"
        >
          More
        </button>
      )}
    </div>
  );
};

export default MoviesPG;
