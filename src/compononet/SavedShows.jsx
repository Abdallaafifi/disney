import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { dp } from "../firebase";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const slide = document.getElementById("slider");
  const scroll = (d) => {
    if (d === "r") {
      slide.scrollLeft += 500;
    } else {
      slide.scrollLeft -= 500;
      if (slide.scrollLeft == 0) {
        slide.scrollLeft += slide.scrollWidth;
      }
    }
  };
  const docRef = doc(dp, "users", `${user?.email}`);

  const filter = async (id) => {
    try {
      const FilterMovie = movies.filter((i) => i.id !== id);
      await updateDoc(docRef, {
        saveShows: FilterMovie,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setMovies(doc.data()?.saveShows);
    });
  }, [user.email]);

  return (
    <>
      <div className="md:px-8 px-4 my-8 select-none ">
        <h1 className="text-white md:text-[20px] tracking-[2px] text-[16px] capitalize mb-6 "></h1>
        <div className="flex items-center relative group">
          <IoIosArrowBack
            onClick={() => scroll("l")}
            className="hidden group-hover:block bg-white/30 hover:bg-white/100 transition cursor-pointer text-black  absolute left-0 z-[50] rounded-full p-1 w-[30px] h-[30px]"
          />
          <div
            id={`slider`}
            className=" slide flex items-start    cursor-pointer hover:opacity-100 relative gap-5 w-full h-full overflow-x-scroll scroll-smooth   scrollbar-hide "
          >
            {movies.map((item, id) => (
              <div key={id} className="relative ">
                <img
                  className="max-w-[240px] h-[120px] object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/70  opacity-0 hover:opacity-100 transition cursor-pointer">
                  <p className="w-full flex items-center justify-center h-full text-white/90  font-poppins capitalize text-[15px]">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => filter(item?.id)}
                    className="absolute top-2 right-2"
                  >
                    <MdClose size={20} color="white" />
                  </p>
                </div>
              </div>
            ))}
          </div>
          <IoIosArrowForward
            onClick={() => scroll("r")}
            className="hidden group-hover:block bg-white/30  transition cursor-pointer  hover:bg-white/100  text-black  absolute right-0 z-[50] rounded-full p-1 w-[30px] h-[30px]"
          />
        </div>
      </div>
    </>
  );
};

export default SavedShows;
