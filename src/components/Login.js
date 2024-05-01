import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm,
      email?.current?.value,
      password?.current?.value,
      !isSignInForm ? name.current.value : null
    );
    setErrorMessage((currState) => message);
    if (message) return;
    const actionFunction = !isSignInForm
      ? createUserWithEmailAndPassword
      : signInWithEmailAndPassword;

    actionFunction(auth, email?.current?.value, password?.current?.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (!isSignInForm) {
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/25129668?s=400&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
              console.log(user);
            })
            .catch(() => {
              navigate("/error");
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage((currState) => errorCode + "-" + errorMessage);
      });
  };

  return (
    <div className="h-[100%] overflow-hidden">
      <Header />
      <div>
        <img
          className="w-full absolute -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_large.jpg"
          alt="background"
        />
      </div>
      <div className="grid h-[100%] place-items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 p-12 bg-black flex flex-col text-white bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-900 font-bold">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 cursor-pointer"
            onClick={() => {
              toggleSignUpForm();
            }}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
