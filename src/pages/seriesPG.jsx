import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Movie from "../compononet/movie";
import requests from "../DataApi";

const SeriesPG = () => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);
  const [name, setName] = useState("");

  let page = 4;
  const [sed, Set] = useState(false);
  const GetData = async () => {
    await axios.get(requests.Top_tv).then((data) => {
      return setData(data?.data.results);
    });
  };
  const filter = Data.filter((i) => {
    if (name === "") {
      return Data;
    } else {
      return i.original_name.toLowerCase().includes(name.toLowerCase());
    }
  });
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
      className="w-full   flex flex-col sm:px-6 px-3  md:py-[8rem] py-16 "
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="md:text-[48px] text-[24px] font-bold font-sans text-white capitalize">
          tv series
        </h1>

        <div className="relative px-1">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="search.."
            className="text-white/80 hover:bg-[#1f1f1f] placeholder:text-white/40  text-[9px] bg-[#1f1f1f]/90 hover:bg-w outline-none text-sm rounded-lg md:w-[400px] md:px-8 md:py-4 md:placeholder:text-[17px] md:text-[16px] md:pl-12  w-[180px] py-[6px] pl-8 border-none "
          />
          <FaSearch className="absolute text-gray-300  md:top-[35%] top-[26%] md:text-[20px] text-[13px] md:left-[18px] left-[14px] " />
        </div>
      </div>
      <div className=" grid   md:grid-cols-6 grid-cols-3 place-items-center  md:gap-8 gap-[6px]  pb-2 md:pb-[2rem] ">
        {Data && filter?.map((i, x) => <Movie item={i} />)}

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
