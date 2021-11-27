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
    <>
      <h1 className="title">Log in</h1>
      <div className="boxHome">
        <form onSubmit={goLogin}>
          <label className="labelInput" htmlFor="">
            email
          </label>
          <input type="email" name="email" />

          <label className="labelInput" htmlFor="">
            password
          </label>
          <input type="password" name="password" />

          <button className="botHHome" type="submit">
            login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
