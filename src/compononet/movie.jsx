import React from "react";
import { MdClose, MdFavorite } from "react-icons/md";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { dp } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/createSlice";
import { remove } from "../redux/addToList";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const MovieId = doc(dp, "users", `${user?.email}`);
  const location = useLocation();
  const UpdateData = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(MovieId, {
        saveShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("please log in to save data base");
      return;
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      {location.pathname !== "/watchlist" ? (
        <Link
          to={
            location.pathname === "/series" ||
            location.pathname === "/series/:id"
              ? "/series/" + item?.original_name
              : item?.title
              ? "/film/" + item?.title
              : "/series/" + item?.original_name
          }
          onClick={() => dispatch(addMovie(item))}
          className={` 
          ${
            location.pathname === "/movies" || location.pathname === "/series"
              ? "min-w-[100px] md:min-w-[220px] md:min-h-[320px]"
              : "min-w-[105px]  "
          }
             md:min-w-[220px]  md:min-h-[320px]  overflow-hidden flex flex-col gap-1 items-start
          my-0 md:my-5 md:hover:scale-[1.06] hover:scale-[1.01] md:rounded-[10px]   md:shadow-3xl   relative  hover:border-gray-200 transition duration-500  border-[#2e2e2e] md:border-[3px] `}
        >
          <img
            className=" min-w-full md:h-[320px] flex-1  min-h-[150px]  rounded-[6px] object-cover shadow-3xl   "
            src={`https://image.tmdb.org/t/p/original/${item?.poster_path}
          `}
          />
          <div className="bg-black/75 md:rounded-lg rounded-[4px]  text-white absolute top-1 right-1 z-[5]">
            <p
              className={`  md:text-[16px]  text-[11px] text-center leading-none font-[600] ${
                item.vote_count < 1000
                  ? ""
                  : "md:px-4 md:py-[6.8px] px-[5.5px] py-[3px] "
              }`}
            >
              {
                (item?.vote_count > 1200 ? "HD" : "CAM",
                item.vote_count > 10000
                  ? "HDRip"
                  : item.vote_count < 1000
                  ? " "
                  : "TS")
              }
            </p>
          </div>
          {location.pathname === "/" && (
            <p className="text-[#c2bebe] md:hidden block leading-none text-[9px] capitalize ">
              {item?.title
                ? item?.title.slice(0, 18)
                : item?.original_name.length > 18
                ? item?.original_name.slice(0, 10)
                : item?.original_name}
            </p>
          )}
        </Link>
      ) : (
        <div
          className="  md:min-w-[280px] min-w-[120px] md:h-[170px] h-[140px]
         my-5 hover:scale-[1.06] rounded-[6px] shadow-3xl  overflow-hidden relative  hover:border-gray-200 transition duration-[200ms] ease-in  border-[#2e2e2e] border-[3px] `}"
        >
          <Link
            to={
              location.pathname === "/series" ||
              location.pathname === "/series/:id"
                ? "/series/" + item?.original_name
                : item?.title
                ? "/film/" + item?.title
                : "/series/" + item?.original_name
            }
            onClick={() => dispatch(addMovie(item))}
          >
            <img
              className="h-[100%] min-w-[100%]  object-cover  rounded-[6px]  "
              src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}
          `}
            />{" "}
          </Link>
          <p>{item?.title}</p>
          <div className="absolute cursor-pointer top-0 left-0 w-full h-full flex justify-end p-1 ">
            <MdClose
              className="text-[20px] text-white/80"
              onClick={() => dispatch(remove(item?.id))}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
