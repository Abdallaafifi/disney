import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "../compononet/movie";
import requests from "../DataApi";

const SeriesPG = () => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  let page = 4;
  const [sed, Set] = useState(false);
  const GetData = async () => {
    await axios.get(requests.Top_tv).then((data) => {
      return setData(data?.data.results);
    });
  };
  const GetData_SE = async () => {
    await axios.get(requests.tvSeries).then((data) => {
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
      className="w-full   flex flex-col sm:px-6 px-3  my-[6rem] "
    >
      <h1 className="md:text-[48px] text-[26px] font-bold font-sans text-white capitalize mb-6">
        tv series
      </h1>

      <div className=" grid   md:grid-cols-5 grid-cols-3 place-items-center  md:gap-14 gap-[6px]  pb-2 md:pb-[2rem] ">
        {Data && Data?.map((i, x) => <Movie item={i} />)}

        {sed && Data2 && Data2?.map((i, x) => <Movie item={i} />)}
      </div>

      {!sed && (
        <button
          onClick={() => Set(!sed)}
          className="w-[100px] mx-auto  text-white bg-[#05235a]  py-2  text-[12px] rounded-2xl mt-8 hover:bg-transparent border-[#05235a] hover:border-white border-2 transition duration-700"
        >
          More
        </button>
      )}
    </div>
  );
};

export default SeriesPG;
