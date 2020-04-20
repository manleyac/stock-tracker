import React, { useState } from "react";

//components
import Login from "../auth/Login.component.js";

const Landing = () => {
  const [newUser, setUser] = useState(false);

  const loginForm = (<div>login form</div>);
  const signupForm = (<div>signup form</div>);

  return (
    <div>
      <p onClick={() => setUser(true)}>Sign Up</p>
      <p onClick={() => setUser(false)}>Login</p>
      {newUser ? signupForm : loginForm}
    </div>
  );
};

export default Landing;
