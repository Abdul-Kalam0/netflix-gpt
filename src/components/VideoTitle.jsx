import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[28%] pl-12 text-white absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="font-bold w-1/4 py-6">{overview}</p>
      <div>
        <button className="text-black bg-white p-4 px-8 text-2xl font-bold rounded-lg hover:bg-opacity-85">
          ▶️ Play{" "}
        </button>
        <button className="text-white bg-gray-400 p-4 px-6 text-2xl font-bold rounded-lg mx-2 hover:bg-opacity-85">
          💁 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
