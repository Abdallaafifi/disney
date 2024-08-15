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
             md:min-w-[250px] min-w-[90px] md:min-h-[350px] h-[160px] overflow-hidden flex flex-col items-start
          my-0 md:my-5 md:hover:scale-[1.06] rounded-[8px]  md:shadow-3xl   relative  hover:border-gray-200 transition duration-[400ms] ease-in  border-[#2e2e2e] md:border-[3px] `}
        >
          <img
            className="flex-1 min-w-[100%]  object-cover shadow-3xl   "
            src={`https://image.tmdb.org/t/p/original/${item?.poster_path}
          `}
          />
          <p className="text-[#c2bebe] md:hidden block mt-1 text-[9px] capitalize ">
            {item?.title
              ? item?.title.slice(0, 14)
              : item?.original_name.slice(0, 14)}
          </p>
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
