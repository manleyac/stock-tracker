import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import {register} from "../../actions/auth";
import PropTypes from "prop-types";

// const axios = require("axios"); used without redux actions

const Login = ({ setAlert, register }) => {
  const [newUser, setUser] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginUser = async (e) => {
    try {
      console.log("login user");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newUser) {
      if (password !== password2) {
        setAlert("passwords do not match", "danger");
      } else {
        await register({name, email, password});
      }
    } else {
      loginUser(e);
    }
  };

  const button = <input type="submit" value="Submit" />;

  const loginForm = (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      {button}
    </form>
  );

  const signupForm = (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          minLength="6"
          value={password2}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      {button}
    </form>
  );

  return (
    <div>
      <button onClick={() => setUser(true)}>Sign Up</button>
      <button onClick={() => setUser(false)}>Sign In</button>
      {newUser ? signupForm : loginForm}
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert,register })(Login);
