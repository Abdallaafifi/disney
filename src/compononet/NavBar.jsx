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
        } md:h-[90px] h-[60px] fixed w-screen top-0 left-0  mb-2 z-[1000] transition `}
      >
        <div className="w-full md:px-8 md:py-2 py-1 px-2  h-full flex items-center gap-12 ">
          <div className="w-[130px] h-full">
            <img
              src="/src/public/assets/images/disney.png"
              alt="image"
              className="md:w-full w-[90px] h-full   object-cover "
            />
          </div>
          <ul className="flex  md:gap-6  items-center font-sans down ">
            {links.map((li, i) => (
              <NavLink
                to={li.link}
                className={({ isActive }) =>
                  isActive ? "text-[#7760f7] " : "text-white"
                }
              >
                <li
                  className={` 
                
                flex  md:flex-row flex-col items-center md:gap-2 capitalize md:font-[600] `}
                >
                  <p className="md:text-[25px] text-[18px] ">{li.icon}</p>
                  <p className="md:text-[20px] text-[13px] tracking-[1.1px] ">
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
                      size={28}
                      className="  transition text-white "
                    />
                  </button>
                </Link>

                <button
                  onClick={() => handelLogOut()}
                  className="text-[16px] text-black hover:text-white overflow-hidden transition font-semibold hover:bg-transparent border-red-600 border-2 capitalize py-2 px-4 bg-red-600 rounded hover:border-white/60   "
                >
                  log out
                </button>
              </div>
            ) : (
              <div className="">
                <Link to={"/logIn"}>
                  <button className="md:text-[16px] text-sm text-white font-semibold capitalize mx-4">
                    sing in{" "}
                  </button>
                </Link>

                <Link to={"/signUp"}>
                  <button className="md:text-[16px] text-sm text-white font-semibold  capitalize py-2 md:px-5 px-4 hover:bg-transparent border-[#8670FF]/40 border-2 bg-[#8670FF]/80 rounded-lg lg:mr-5 ">
                    sing up
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

//  <div
//    className={` w-full px-8  fixed top-0 left-0 py-2 z-[100] transition-[.6s ease ] ${bg_scroll}`}
//  >
//    <div className="flex  items-center">
//      <Link to={"/"}>
//        <h1 className="text-red-600 text-2xl md:text-4xl flex-shrink capitalize w-[150px]">
//          movies
//        </h1>
//      </Link>
//      <form className="flex overflow-hidden rounded-md items-start   bg-[#dad2d228] w-[350px] md:w-[430px] h-10  ">
//        <button className="w-12  bg-red-600 text-white h-full capitalize flex items-center">
//          <IoIosSearch className="w-full" size={18} />
//        </button>
//        <input
//          type="text"
//          placeholder="search about movies from here"
//          className="w-full border-none outline-none h-full px-2  bg-transparent placeholder:text-sm truncate text-white/60 "
//        />
//      </form>
//      <div className="flex items-center w-full justify-end flex-1  ">
//        <div className="md:grid hidden grid-cols-3  gap-2">
//          <NavLink className={Hover} to={"/movies"}>
//            Movies
//          </NavLink>
//          <NavLink to={"/aboutus"} className={Hover}>
//            About us
//          </NavLink>
//          <NavLink className={Hover} to={"/contact"}>
//            Contact us
//          </NavLink>
//        </div>
//        {user?.email ? (
//          <div className="flex items-center">
//            <Link to={"/Account"}>
//              <button className="  rounded-lg hover:bg-white/30  p-1 transition   capitalize mx-4">
//                <MdAccountCircle
//                  size={28}
//                  className="  transition text-white "
//                />
//              </button>
//            </Link>

//            <button
//              onClick={() => handelLogOut()}
//              className="text-[16px] text-black hover:text-white overflow-hidden transition font-semibold hover:bg-transparent border-red-600 border-2 capitalize py-2 px-4 bg-red-600 rounded hover:border-white/60   "
//            >
//              log out
//            </button>
//          </div>
//        ) : (
//          <div className="">
//            <Link to={"/logIn"}>
//              <button className="text-[16px] text-white font-semibold capitalize mx-4">
//                sing in{" "}
//              </button>
//            </Link>

//            <Link to={"/signUp"}>
//              <button className="text-[16px] text-white font-semibold  capitalize py-2 px-4 bg-red-600 rounded  ">
//                sing up
//              </button>
//            </Link>
//          </div>
//        )}
//      </div>
//    </div>
//  </div>;
