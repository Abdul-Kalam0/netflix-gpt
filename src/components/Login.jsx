// rafce => react arrow function component export
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; // form firebase doc
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // state var for error
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    // console.log(name.current.value,email.current.value,password.current.value);
    const message = checkValidData(
      //name.current.value,
      email.current.value,
      password.current.value
    );
    //console.log(message);

    setErrorMessage(message);
    if (message) return; // if their is error return from here itself.

    // Sign In/Up Logic form firebase Docs
    if (!isSignInForm) {
      // Sign Up Logic from firebase docs
      // we are exporting the auth from firebase
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // console.log("Sign Up Success");
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic from firebase docs
      // we are exporting the auth from firebase
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log("Sign In Success");
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          className="h-screen object-cover"
          src={BACKGROUND_IMAGE}
          alt="background-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
        <h1 className="text-white text-3xl m-2">
          {isSignInForm ? "Sign In " : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-4 w-full bg-gray-700"
        />
        {/* {!isSignInForm && (
          <input
            type="text"
            placeholder="Mobile No"
            className="p-2 m-4 w-full bg-gray-700"
          />
        )} */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-4 w-full bg-gray-700"
        />
        <p className="text-red-400 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-2 m-4 bg-red-700 w-full rounded-xl text-white"
          onClick={handleButtonClick}
        >
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
