import "./index.css";

import React, { useState } from "react";
import Home from "./pages/home";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import NavBar from "./compononet/NavBar";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";
import Account from "./pages/Account";
import ProtectAuth from "./ProtectAuth";
import Piece from "./compononet/Piece";
import MoviesPG from "./pages/MoviesPG";
import Series from "./compononet/Series";
import SeriesPG from "./pages/seriesPG";
import WatchList from "./redux/addToList";
import WatchListed from "./pages/watchList";
export const Items = () => {
  const data = JSON.parse(localStorage.getItem("new"));
  const [color, setColor] = useState();
  const [col, setCol] = useState(false);
  return (
    <>
      <div className=" text-white w-full relative top-0 h-screen  p-[4rem] overflow-hidden">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
            alt="backdrop"
            className="absolute top-0 left-0 w-full -z-20 h-[60%] object-cover"
          />
          <div className="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-[60%] -z-[1]"></div>
          <div className="flex items-start  z-[100] w-full left-0 p-[4rem]  justify-center absolute top-[20%] ">
            <img
              src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
              alt={data.title}
              className={"w-1/3 h-[500px] rounded-lg object-cover z-[100] mr-8"}
            />
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold md:text-3xl lg:text-4xl text-[26px]  ">
                {data.title} ({+data.release_date.split("-")[0]})
              </h1>
              <p className="text-gray-200 text-sm mt-2 font-bold capitalize">
                popularity : {data.popularity}
              </p>
              <p className="text-gray-200 text-sm my-1 font-bold  capitalize">
                vote ( {data.vote_count} )
              </p>
              <p className="text-dimWhite capitalize">
                release_date:
                <span className="text-sm ">{data.release_date}</span>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Overview <br />
                {data.overview}
              </p>
              <p className="text-gray-400 text-sm mt-4 capitalize">
                {" "}
                language : {data.original_language}
              </p>
              <div className="flex items-start w-full gap-4 my-10">
                <button
                  title="add to favorite"
                  onClick={() => setColor(!color)}
                  className="w-14 h-10 rounded-lg flex items-center justify-center bg-blue-950  "
                >
                  <MdFavorite color={`${color ? "red" : "white"}`} size={20} />
                </button>
                <button className="w-14 h-10 rounded-lg flex items-center justify-center bg-blue-950  ">
                  <CiBoxList size={18} />
                </button>

                <button
                  onClick={() => {
                    setCol(!col);
                  }}
                  className="w-14 h-10 rounded-lg flex items-center justify-center bg-blue-950  "
                >
                  <FaBookmark color={`${col ? "red" : "white"}`} size={16} />
                </button>
              </div>
              <div className="flex gap-6">
                <button className="border-none bg-zinc-900 text-white capitalize px-7 py-2 rounded-sm flex gap-3 items-center  justify-center">
                  <FaPlay size={14} />
                  <p className="font-bold capitalize ">play</p>
                </button>
                <button className="border-gray-700 hover:border-gray-500  transition bg-transparent border text-white capitalize px-7 py-2 rounded-sm flex gap-3 items-center  justify-center">
                  <FaDownload size={14} />
                  <p className="font-bold capitalize ">download</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/logIn" Component={LogIn} />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/film/:id" Component={Piece} />
          <Route path="/movies" Component={MoviesPG} />
          <Route path="/series/" Component={SeriesPG} />
          <Route path="/watchlist" Component={WatchListed} />
          <Route path="/series/:id" Component={Series} />
          <Route
            path="/Account"
            element={
              <ProtectAuth>
                <Account />
              </ProtectAuth>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};
export default App;
