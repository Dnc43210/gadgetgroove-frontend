// import React, { useState } from "react";
// import { signup } from "../utils/api";
// import toast from "react-hot-toast";
// function Signup() {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [passwordConfirm, setPasswordConfirm] = useState();

//   const onLoad = (res) => {
//     console.log(res);
//     toast.success("Successfully Registered!");
//   };
//   const onSubmit = () => {
//     const data = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       passwordConfirm: passwordConfirm,
//     };
//     signup(data, onLoad);
//   };

//   return (
//     <div className="p-[50px] h-screen">
//       <div className="h-min-[90%] p-[20px] border border-gray-400 rounded-xl flex flex-col w-max-[33%] items-center">
//         <div className="p-[20px]">
//           <h1 className="text-3xl font-semibold text-blue-900">Hello,</h1>
//           <h1 className="font-semibold">Start a new Journey!</h1>
//         </div>
//         <div className="a">
//         <h3>First Name</h3>
//         <input
//           className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
//           type="text"
//           onChange={(item) => setFirstName(item.target.value)}
//           value={firstName}
//         />
//         </div>
//         <div className="a">
//         <h3>Last Name</h3>
//         <input
//           className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
//           type="text"
//           onChange={(item) => setLastName(item.target.value)}
//           value={lastName}
//         />
//         </div>
//         <div className="a">
//         <h3>Email</h3>
//         <input
//           className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
//           type="text"
//           onChange={(item) => setEmail(item.target.value)}
//           value={email}
//         />
//         </div>
//         <div className="a">
//         <h3>Password</h3>
//         <input
//           className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
//           type="password"
//           onChange={(item) => setPassword(item.target.value)}
//           value={password}
//         />
//         </div>
//         <div className="a">
//         <h3>Confirm Password</h3>
//         <input
//           className="bg-transparent w-full mb-[20px] px-4 py-2 rounded-xl"
//           type="password"
//           onChange={(item) => setPasswordConfirm(item.target.value)}
//           value={passwordConfirm}
//         />
//         </div>
//         <button onClick={() => onSubmit()}>Register</button>
//       </div>
//     </div>
//   );
// }

// export default Signup;
