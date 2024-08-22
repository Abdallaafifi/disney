import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { IoIosSearch, IoMdClipboard } from "react-icons/io";
import {
  Md1kPlus,
  MdAccountCircle,
  MdHome,
  MdMovie,
  MdSearch,
  MdStar,
  MdTv,
} from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);
  const scrollY = () => {
    if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
      return true;
    } else {
      return false;
    }
  };

  const links = [
    {
      name: "Home",
      link: "/",
      icon: <MdHome />,
    },
    {
      name: "search",
      link: "/search",
      icon: <MdSearch />,
    },
    {
      name: "watchlist",
      link: "/watchlist",
      icon: <Md1kPlus />,
    },

    {
      name: "movies",
      link: "/movies",
      icon: <MdMovie />,
    },
    {
      name: "series",
      link: "/series",
      icon: <MdTv />,
    },
  ];
  window.addEventListener("scroll", () => {
    setScroll(scrollY());
  });

  const handelLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // const Hover = ({ isActive }) => (isActive ? "text-red" : "text-yellow");
  return (
    <>
      <div
        className={` ${
          scroll ? "bg-main/10" : "bg-transparent"
        } sm:h-[60px] md:-h-[90px] h-[60px] fixed w-screen top-0 left-0  mb-2 z-[1000] transition `}
      >
        <div className="w-full sm:px-8 sm:py-2 py-1 px-1  h-full flex items-center justify-between gap-0 md:gap-8 ">
          <div className="md:w-[170px] w-[130px] h-full">
            <Link to={"/"}>
              <img
                src="./images/viewers-pixar.png"
                alt="img"
                className="sm:w-full w-[110px] h-full  sm:ml-[-20px] ml-[-12px]  object-cover "
              />
            </Link>
          </div>
          <ul className="flex  sm:gap-4 md:gap-6 items-center font-sans down ">
            {links.map((li, i) => (
              <NavLink
                id={li.name + i}
                to={li.link}
                className={({ isActive }) =>
                  isActive ? "text-[#7760f7] " : "text-white"
                }
              >
                <li
                  className={` 
                
                flex  sm:flex-row flex-col items-center sm:gap-2 capitalize sm:font-[600] `}
                >
                  <p className="sm:text-[14px] md:text-[24px] text-[14px] ">
                    {li.icon}
                  </p>
                  <p className="sm:text-[14px] md:text-[20px] text-[13px] tracking-[1.1px] ">
                    {li.name}
                  </p>
                </li>
              </NavLink>
            ))}
          </ul>

          <div className="flex items-end justify-end  flex-1">
            {user?.email ? (
              <div className="flex items-center ">
                <Link to={"/Account"}>
                  <button className="  rounded-lg hover:bg-white/30  p-1 transition   capitalize mx-4">
                    <MdAccountCircle
                      size={26}
                      className="  transition text-white "
                    />
                  </button>
                </Link>

                <button
                  onClick={() => handelLogOut()}
                  className="sm:text-[16px] text-sm text-black hover:text-white overflow-hidden transition font-semibold hover:bg-transparent border-red-600 border-2 capitalize py-1 sm:py-2 px-4 bg-red-600 rounded hover:border-white/60   "
                >
                  log out
                </button>
              </div>
            ) : (
              <div className="sm:mr-8 mr-2 flex items-center">
                <Link to={"/logIn"}>
                  <button className="sm:text-[12px] md:text-[16px] text-sm text-white font-semibold capitalize mx-4">
                    sing in{" "}
                  </button>
                </Link>

                <Link to={"/signUp"}>
                  <button class="bg-[#0082c4e5] hover:bg-[#08c]/80  sm:px-[12px] md:px-[18px] px-[8px] md:py-[8px] py-[5px]    md:text-[15px] text-sm  text-white font-[500] sm:font-bold  rounded capitalize">
                    sign up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

//
