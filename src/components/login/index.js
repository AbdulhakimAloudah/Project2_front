import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const goLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios
        .post("http://localhost:5000/login", {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.email) {
            console.log("login successfully");
            localStorage.setItem("User", response.data);
            navigate("/");
          }
        });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>hi king login</h1>
      <form onSubmit={goLogin}>
        <label htmlFor="">email</label>
        <input type="email" name="email" />

        <label htmlFor="">password</label>
        <input type="password" name="password" />

        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;