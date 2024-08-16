// rafce => react arrow function component export
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"
          alt="background-img"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="text-white text-3xl m-2">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full bg-gray-700"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Mobile No"
            className="p-2 m-4 w-full bg-gray-700"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-4 w-full bg-gray-700"
        />

        <button className="p-2 m-4 bg-red-700 w-full rounded-xl text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white m-4 text-sm cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
