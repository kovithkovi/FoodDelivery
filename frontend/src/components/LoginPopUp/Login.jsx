import React, { useRef, useState } from "react";

const LoginPopUp = () => {
  const [currState, setCurrentState] = useState("login");
  console.log(currState);

  return (
    <>
      <button
        className="btn border-1 rounded-3xl px-5 md:text-lg bg-white text-md md:py-1 py-1 hover:cursor-pointer border-black hover:bg-[tomato] hover:text-white relative"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Sign In
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">
              {currState === "login" ? "Login" : "Sign Up"}
            </h3>
            {currState === "signup" && (
              <div className="text-left mt-4 space-y-3 ml-4">
                <label htmlFor="name-input" className="hover:cursor-pointer">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  id="name-input"
                  placeholder="Enter your name..."
                  className="w-full px-3 border rounded-md outline-none border-2 py-2"
                  // {...register("email", { required: true })}
                />
                {/* {errors.email && (
                <span className="text-red-500">This field is required</span>
              )} */}
              </div>
            )}
            {/* Email */}
            <div className="text-left mt-4 space-y-3 ml-4">
              <label htmlFor="email-input" className="hover:cursor-pointer">
                Email
              </label>
              <br />
              <input
                type="email"
                id="email-input"
                placeholder="Enter your email..."
                className="w-full px-3 border rounded-md outline-none border-2 py-2"
                // {...register("email", { required: true })}
              />
              {/* {errors.email && (
                <span className="text-red-500">This field is required</span>
              )} */}
            </div>
            {/* Password */}
            <div className="text-left mt-4 space-y-3 ml-4">
              <label htmlFor="pass-input" className="hover:cursor-pointer">
                Password
              </label>
              <br />
              <input
                type="password"
                id="pass-input"
                placeholder="Enter your password..."
                className="w-full px-3 border rounded-md outline-none py-2 border-2"
                // {...register("password", { required: true })}
              />
              {/* {errors.password && (
                <span className="text-red-500">This field is required</span>
              )} */}
            </div>
            <div className="flex justify-around mt-5">
              <button className="btn border-1 border-black rounded-full py-1 px-7 hover:bg-[tomato] hover:text-white">
                {currState === "login" ? "Login" : "Create Account"}
              </button>
              {currState === "login" ? (
                <p className="text-l my-auto">
                  Not registered?{" "}
                  <a
                    className="underline cursor-pointer text-[tomato] cursor-pointer"
                    onClick={() => setCurrentState("signup")}
                  >
                    Signup
                  </a>
                </p>
              ) : (
                <p className="text-l my-auto">
                  Already Have Accound?{" "}
                  <a
                    className="underline cursor-pointer text-[tomato] cursor-pointer"
                    onClick={() => setCurrentState("login")}
                  >
                    Login
                  </a>
                </p>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default LoginPopUp;
