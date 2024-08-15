import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const { user, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState();
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="w-full h-screen relative">
      <img
        src="src\public\assets\108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        alt="footer.pmg"
        className="w-full h-full hidden sm:block object-cover"
      />
      <div className="bg-black/60 absolute w-full top-0 left-0 bottom-0"></div>

      <div className="fixed w-full top-[10rem] h-full text-gray-100">
        <div className="max-w-[400px] h-[600px] bg-black/70 mx-auto p-12">
          <h1 className="text-[26px] text-white font-bold mb-8 ">Sign In</h1>
          {err ? (
            <p className="w-full p-3 bg-red-400 text-[12px] transition rounded-lg mb-4">
              {err}
            </p>
          ) : null}
          <form onSubmit={handelSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="email"
              placeholder="email"
              className="bg-[#272626f3] border-none text-sm px-3 py-3 md:py-4 w-full text-[15px]  mb-8 rounded-xl  text-white/90"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="bg-[#272626f3] border-none text-sm px-3 py-4 md:py-4  w-full text-[15px] rounded-xl  text-white/90"
            />
            <button
              type="submit "
              className="text-white bg-red-800 text-[18px] py-2 rounded mt-10 capitalize block w-full"
            >
              sing In
            </button>

            <div className="flex justify-between items-center mt-4 cursor-pointer capitalize text-gray-300">
              <input type="checkbox" className="mr-3" />
              <p className="text-dimWhite/50 text-sm flex-1">remember me</p>
              <p className="text-dimWhite/50 text-sm">need help?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
