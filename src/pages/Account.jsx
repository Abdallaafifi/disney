import React from "react";
import SavedShows from "../compononet/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full h-full">
        <img
          src={
            "/src/public/assets/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          }
          alt="img"
          className="w-full h-[400px] object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full"></div>
        <h1 className="absolute top-[20%] left-0 md:px-8 px-4 font-bold text-white md:text-3xl text-[30px]">
          My shows
        </h1>
        <SavedShows />
      </div>
    </>
  );
};

export default Account;
