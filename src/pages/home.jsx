// import { data } from "autoprefixer";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Banner from "../compononet/Banner";
import EnterTainment from "../compononet/enterTainment";
import Main from "../compononet/main";
import Movies from "../compononet/movies";
import Sliders from "../compononet/Sliders";
import requests from "../DataApi";

const Home = () => {
  return (
    <>
      <Main />
      <Banner />
      <div className="md:px-8 px-[8px]  md:my-[6rem] my-[3rem] min-h-full">
        <Movies
          keyId={"2"}
          title="Action and Adventure"
          url={requests.Top_tv}
        />
        <Movies keyId={"4"} title="trending" url={requests.trending} />
        <EnterTainment />
        <Movies
          keyId={"1"}
          title="New to Disney+"
          url={requests.PopularMovies}
        />
        <Movies keyId={"3"} title="Trending" url={requests.tvSeries} />
        <Movies keyId={"5"} title="on the air" url={requests.Upcoming} />
      </div>
      <Sliders />
    </>
  );
};

export default Home;
