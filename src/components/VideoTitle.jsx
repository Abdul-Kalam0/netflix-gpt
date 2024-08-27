import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[35%] md:pt-[15%] pl-12 text-white absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block font-bold w-1/4 py-6">{overview}</p>
      <div className="my-4 m-0">
        <button className="text-black bg-white p-2 md:p-4 px-4 md:px-8 text-sm md:text-xl font-bold rounded-lg hover:bg-opacity-85">
          ▶️ Play{" "}
        </button>
        <button className="hidden lg:inline-block text-white bg-gray-400 p-4 px-6 text-2xl font-bold rounded-lg mx-2 hover:bg-opacity-85">
          💁 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
