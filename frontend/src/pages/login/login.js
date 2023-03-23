import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth, setLogin, setSignup } from "../../redux/actions/index.action";
import { loginAPI } from "../../utils/api";
import { showAlert } from "../../utils/commonFun";
import "./login.css";

const initalForm = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initalForm);

  const dispatch = useDispatch();

  const closeModal = () => {
    setLogin(false, dispatch);
  };

  const goToSignUp = (e) => {
    e.preventDefault();
    setLogin(false, dispatch);
    setSignup(true, dispatch);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginAPI(form).then((res) => {
      if (res.data) {
        showAlert("Login Sucessfully");
        setLogin(false, dispatch);
        setAuth({ isLogin: true, details: res.data }, dispatch);
      } else {
        showAlert(res.err);
      }
    });
  };

  return (
    <div id="loginMainContainer">
      <div id="loginContainer">
        <h2>LogIn</h2>
        <form onSubmit={loginHandler}>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            value={form.email}
            placeholder="Enter Your Mail"
          />
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            value={form.password}
            placeholder="Enter Password"
          />
          <div>
            <button type="submit">LogIn</button>
            <button onClick={goToSignUp}>Create Account</button>
          </div>
        </form>
        <i
          onClick={closeModal}
          id="closeModal"
          className="fa-solid fa-xmark"
        ></i>
      </div>
    </div>
  );
};

export default Login;
