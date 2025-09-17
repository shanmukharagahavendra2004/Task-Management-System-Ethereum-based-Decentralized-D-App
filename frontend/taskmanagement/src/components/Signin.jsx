import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [role, setRole] = useState("MANAGER"); // default role

  const handleSubmit = (e) => {
    e.preventDefault();

    const info = {
      name: userName,
      email: email,
      password: password,
      role: role,
    };

    axios
      .post("http://localhost:9090/register", info)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="flex justify-center mx-auto">
      <form className="flex flex-col gap-6 mt-40" onSubmit={handleSubmit}>
        <input
          className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400"
          type="text"
          placeholder="Enter your Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400"
          type="password"
          placeholder="Enter the Password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <select
          className="outline-none border-2 border-black w-72 h-10 hover:border-blue-400"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="MANAGER">Manager</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
        <button
          type="submit"
          className="outline-none border-2 border-black w-72 h-10 bg-blue-400 text-white hover:border-blue-400"
        >
          Signin
        </button>
      </form>
    </div>
  );
};

export default Signin;
