import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setLogin,
  setsignup,
  setSignup,
} from "../../redux/actions/index.action";
import { signUpAPI } from "../../utils/api";
import { showAlert } from "../../utils/commonFun";
import "./signup.css";

const initialForm = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [form, setForm] = useState(initialForm);

  const dispatch = useDispatch();

  const closeModal = () => {
    setSignup(false, dispatch);
  };

  const goToLogin = () => {
    setSignup(false, dispatch);
    setLogin(true, dispatch);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    signUpAPI(form).then((res) => {
      if (res.data) {
        showAlert("Registred Sucessfully");
        setSignup(false, dispatch);
        setLogin(true, dispatch);
      } else {
        showAlert(res.err);
      }
    });
  };

  return (
    <div id="signupMainContainer">
      <div id="signupContainer">
        <h2>Signup</h2>
        <form onSubmit={signupHandler}>
          <input
            type="text"
            onChange={changeHandler}
            value={form.name}
            name="name"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            onChange={changeHandler}
            value={form.email}
            name="email"
            placeholder="Enter Your Mail"
          />
          <input
            type="password"
            onChange={changeHandler}
            value={form.password}
            name="password"
            placeholder="Enter Password"
          />
          <div>
            <button type="submit">SignUp</button>
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

export default Signup;
