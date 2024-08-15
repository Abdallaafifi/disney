import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdStar, MdStarBorder } from "react-icons/md";

const Star = ({ value }) => {
  return (
    <>
      <span>
        <FaStar />
      </span>
      <span>
        <FaStar />
      </span>
      <span>
        {value > 109.483 ? (
          <span>
            <FaStar />
          </span>
        ) : (
          <span>
            {" "}
            <FaStarHalf />
          </span>
        )}
      </span>
      <span>
        {value > 109.483 ? (
          <span>
            <FaStar />
          </span>
        ) : (
          <span>
            <MdStarBorder />
          </span>
        )}
      </span>
      <span>
        {value > 1090.483 ? (
          <span>
            <FaStar />
          </span>
        ) : (
          <span>
            {" "}
            <MdStarBorder />
          </span>
        )}
      </span>
    </>
  );
};

export default Star;
