import React from "react";

const Banner = () => {
  const Data = [
    {
      img: "src/public/assets/images/viewers-disney.png",
      video: "/src/public/assets/videos/1564674844-disney.mp4",
    },
    {
      img: "src/public/assets/images/viewers-marvel.png",
      video: "/src/public/assets/videos/1564676115-marvel.mp4",
    },
    {
      img: "src/public/assets/images/viewers-national.png",
      video: "/src/public/assets/videos/1564676296-national-geographic.mp4",
    },
    {
      img: "src/public/assets/images/viewers-pixar.png",
      video: "/src/public/assets/videos/1564676714-pixar.mp4",
    },
    {
      img: "src/public/assets/images/viewers-starwars.png",
      video: "/src/public/assets/videos/1608229455-star-wars.mp4",
    },
  ];
  return (
    <div className="w-full mt-4  mb-4 flex items-center flex-wrap md:gap-0 gap-8 px-2 md:px-8 justify-center md:justify-between">
      {Data.map((item, i) => (
        <div
          key={i}
          className=" cursor-pointer shadow-3xl Box w-[245px] h-[140px] overflow-hidden rounded-[10px] relative bg-[#1f1f1f] border-4 border-[#2c2d31] hover:scale-[1.05]  hover:border-[3px]  duration-[600] transition-all hover:border-white"
        >
          <img
            src={item.img}
            alt="img"
            className="w-full h-full object-cover absolute inset-0 "
          />
          <video
            src={`${item?.video}`}
            className="absolute top-0 w-full "
            autoPlay={true}
            playsInline={true}
            loop={true}
          ></video>
        </div>
      ))}
    </div>
  );
};

export default Banner;
