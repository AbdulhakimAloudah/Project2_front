import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const goLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios
        .post("http://localhost:5000/signup", {
          email: e.target.email.value,
          password: e.target.password.value,
          userName: e.target.userName.value,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.email) {
            console.log("signup successfully");
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
      <h1 className="title">Create account</h1>
      <div className="boxHome">
        <form onSubmit={goLogin}>
          <label className="labelInput" htmlFor="">
            user name
          </label>
          <input type="text" name="userName" />

          <label className="labelInput" htmlFor="">
            email
          </label>
          <input type="email" name="email" />

          <label className="labelInput" htmlFor="">
            password
          </label>
          <input type="password" name="password" />

          <button className= "botHHome">regester</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
