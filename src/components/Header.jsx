import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPP_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate(error);
      });
  };

  useEffect(() => {
    // onAuth Logic is called whenever my header component is loaded
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // after sign In goto browse(routing)
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        //after Sign Out go to Sign In page(routing)
        navigate("/");
      }
    });
    // Unsubscribe when my header Unmount(removed from the DOM)
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const hangleLanguageChange = (e) => {
    //  Hnadle Language Change
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          {/* language selector */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-800 m-2 text-white"
              onChange={hangleLanguageChange}
            >
              {SUPP_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-1 m-2.5 text-white bg-purple-800"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 m-2" alt="user-icon" src={user?.photoURL} />
          <button
            className="text-white font-bold p-1 m-2.5 w-28 rounded-full bg-green-700 hover:bg-red-800"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
