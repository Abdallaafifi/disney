import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const { user, signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen relative">
      <img
        src="./images/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        alt="footer.pmg"
        className="w-full h-full hidden sm:block object-cover"
      />
      <div className="bg-black/60 absolute w-full top-0 left-0 bottom-0"></div>

      <div className="fixed w-full top-[10rem] h-full">
        <div className="max-w-[420px] h-[600px] bg-black/70 mx-auto p-12">
          <h1 className="text-[26px] text-white font-bold mb-8 ">Sign Up</h1>
          <form onSubmit={handelSubmit}>
            <input
              autoComplete=""
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="bg-[#272626f3] border-none text-sm px-3 py-4 md:py-4 w-full text-[15px]  mb-6 rounded  text-white/90"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="bg-[#272626f3] border-none text-sm px-3 py-4 md:py-4  w-full text-[15px] rounded  text-white/90"
            />
            <button
              type="submit "
              className="text-white bg-red-800 text-[18px] py-2 rounded mt-10 capitalize block w-full"
            >
              sing up
            </button>

            <div className="flex justify-between items-center mt-4 cursor-pointer capitalize text-white/70">
              <input type="checkbox" className="mr-3" />
              <p className="text-dimWhite/50 text-sm flex-1">remember me</p>
              <p className="text-dimWhite/50 text-sm">need help?</p>
            </div>
            <p className="text-dimWhite/50 text-[13px] capitalize mt-8 text-white/60">
              already subscribed in netflex?{" "}
              <Link to={"/logIn"}>
                <span className="text-white/70 font-bold cursor-pointer">
                  sign in
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
