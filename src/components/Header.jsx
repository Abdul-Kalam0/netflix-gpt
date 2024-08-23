import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute w-screen px-8 py-2 z-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-52 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12 m-2" alt="user-icon" src={user?.photoURL} />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
