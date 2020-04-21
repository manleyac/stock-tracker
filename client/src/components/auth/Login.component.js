import React, { useState } from "react";
const axios = require("axios");

const Login = () => {
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

  const submitUser = async (e) => {
    const newUser = {
      name,
      email,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const loginUser = async (e) => {
    console.log("login");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newUser) {
      if (password !== password2) {
        console.log("passwords do not match");
      } else {
        submitUser(e);
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

export default Login;
