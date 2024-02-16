import React, { useState } from "react";
import { login } from "../utils/api";
// import""ogin.module.css";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    const data = {
      username: email,
      password: password,
    };
    console.log(data);
    login(data, (res, error = false) => {
      if (error) {
        toast.error(res);
        return;
      }
      console.log(res);
      localStorage.setItem("token", res.token);
      toast.success("Successfully Logged In!");
      navigate("/");
    });
  };

  return (
    <>
      <div className="p-[50px] h-[100vh] w-full flex flex-col justify-center items-center bg-gray-100">
        <div className="h-min-[90%] p-[20px] md:w-1/4 lg:w-1/3 shadow-md rounded-xl flex flex-col bg-white ">
          <div className="pb-[20px]">
            <h1 className="font-semibold text-3xl text-orange-500">
              Hey missed you,
            </h1>
            <h1 className="font-semibold">Welcome back!</h1>
          </div>
          <div className="a">
            <h3 className="font-semibold py-2">Email</h3>
            <input
              onChange={(item) => setEmail(item.target.value)}
              value={email}
              className="bg-white w-full mb-[20px] px-4 py-2 rounded-xl"
              type="text"
            />
          </div>
          <div className="a">
            <h3 className="font-semibold  py-2">Password</h3>
            <input
              onChange={(item) => setPassword(item.target.value)}
              value={password}
              className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
              type="password"
            />
          </div>
          <button
            onClick={() => onSubmit()}
            className="bg-orange-500 rounded-xl text-white w-full px-4 py-2"
          >
            Login
          </button>
        </div>
        <h1 className=" text-sm text-gray-600 text-center py-4 grid grid-cols-3 items-center space-x-2">
          <hr className="w-full"></hr>
          <div>New to Gadgetgroove?</div>
          <hr className="w-full"></hr>
        </h1>
        <div className="bg-white h-min-[90%] p-[20px] md:w-1/4 lg:w-1/3 shadow-md rounded-xl flex flex-col font-semibold justify-center space-y-2 py-4">
          <div className="a">
            Create your GadgetGroove Account{" "}
            <Link className="text-orange-500" to={"/signup"}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
