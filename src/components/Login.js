import React, { useState } from "react";
import { login } from "../utils/api";
// import""ogin.module.css";
import toast from "react-hot-toast";
import Layout from "../Layout";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLoad = (res) => {
    console.log(res);
    toast.success("Successfully logged in!");
  };

  const onSubmit = () => {
    const data = {
      email: email,
      password: password,
    };

    login(data, onLoad);
  };

  return (
    <>
        <div className="p-[50px] h-[100vh] row flex justify-center">
      <div className="h-min-[90%] p-[20px] shadow-md rounded-xl flex flex-col col-6">
        <div className="pb-[20px]">
          <h1 className="font-semibold text-3xl text-blue-900">Hey missed you,</h1>
          <h1 className="font-semibold">Welcome back!</h1> 
        </div>
        <h3 className="font-semibold  py-2">Email</h3>
        <input
          onChange={(item) => setEmail(item.target.value)}
          value={email}
          className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
          type="text"
        />
        <h3 className="font-semibold  py-2">Password</h3>
        <input
          onChange={(item) => setPassword(item.target.value)}
          value={password}
          className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
          type="password"
        />
        <button onClick={() => onSubmit()} className="bg-blue-900 rounded-xl text-white w-full px-4 py-2">
          Login
        </button>
      </div>
    </div>
    </>
  );
}

export default Login;
