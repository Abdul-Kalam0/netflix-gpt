import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // make an API call to GPT and get movie results

    const gptQuery =
      "Act as a Movie Recommendation System and Suggest some movies for the query: " +
      searchText.current.value +
      " only give me names of Top 5 movies based on Higest Earning, comma seperated ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) console.log(gptResults.choices);
  };
  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-3 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="px-3 py-3 m-2 bg-red-600 rounded-lg col-span-3 text-white font-bold"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
