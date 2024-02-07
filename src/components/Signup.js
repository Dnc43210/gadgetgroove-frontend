import React, { useState } from "react";
// import { signup } from "../utils/api";
import toast from "react-hot-toast";
import { signup } from "../utils/api";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const navigate = useNavigate();

  const onSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    console.log(data);
    signup(data, (res, error = false) => {
      if (error) {
        toast.error(res);
        return;
      }
      console.log(res);
      localStorage.setItem("token", res.token);
      toast.success("Successfully Registered!");
      navigate("/");
    });
    // signup(data, onLoad);
  };

  return (
    <div className="p-[50px] h-[100vh] flex flex-col justify-center items-center bg-gray-100">
      <div className=" h-min-[90%] p-[20px] shadow-md rounded-xl flex flex-col col-4 bg-white">
        <div className="pb-[20px]">
          <h1 className="font-semibold text-3xl text-orange-500">Hello,</h1>
          <h1 className="font-semibold">Start a new Journey!</h1>
        </div>

        <div className="font-semibold">
          <h3 className="pb-2">First Name</h3>
          <input
            className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
            type="text"
            onChange={(item) => setFirstName(item.target.value)}
            value={firstName}
          />
        </div>

        <div className="font-semibold">
          <h3 className="pb-2">Last Name</h3>
          <input
            className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
            type="text"
            onChange={(item) => setLastName(item.target.value)}
            value={lastName}
          />
        </div>

        <div className="font-semibold">
          <h3 className="pb-2">Email</h3>
          <input
            className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
            type="text"
            onChange={(item) => setEmail(item.target.value)}
            value={email}
          />
        </div>

        <div className="font-semibold">
          <h3 className="pb-2">Password</h3>
          <input
            className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
            type="password"
            onChange={(item) => setPassword(item.target.value)}
            value={password}
          />
        </div>
        <div className="font-semibold">
          <h3 className="pb-2">Confirm Password</h3>
          <input
            className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
            type="password"
            onChange={(item) => setPasswordConfirm(item.target.value)}
            value={passwordConfirm}
          />
        </div>
        <button
          className="px-4 py-2 rounded-xl bg-orange-500 text-white hover:bg-orange-400 transition"
          onClick={() => onSubmit()}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Signup;
