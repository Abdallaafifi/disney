import React from "react";
import SavedShows from "../compononet/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full h-full">
        <h1 className=" md:px-8 px-4 font-bold text-white md:text-3xl text-[30px]">
          My Account
        </h1>
        <SavedShows />
      </div>
    </>
  );
};

export default Account;
