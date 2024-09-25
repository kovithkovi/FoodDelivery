import React, { useRef } from "react";

const LoginPopUp = () => {
  return (
    <>
      <button
        className="btn border-1 rounded-3xl px-5 md:text-lg bg-white text-md md:py-1 py-1 hover:cursor-pointer border-black hover:bg-[tomato] hover:text-white"
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
            <h3 className="font-bold text-lg">Login</h3>
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
                Login
              </button>
              <p className="text-l my-auto">
                Not registered?{" "}
                <a
                  href="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default LoginPopUp;
