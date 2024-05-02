import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "./../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e)=> {
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-48" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex text-center p-2">
          {showGptSearch && (
            <select
              className="px-4 mx-4 py-3 bg-gray-500 text-white rounded-lg cursor-pointer h-min"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((option) => (
                <option key={option.identfier} value={option?.identfier}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 mx-4 py-3 bg-purple-800 text-white rounded-lg cursor-pointer h-min"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
