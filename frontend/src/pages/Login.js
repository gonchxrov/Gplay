import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { login } from "../http/UserAPI";
import { ROUTE } from "../router";
import { setUser, setIsAuth } from "../store/User";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("user2@gmail.com");
  const [password, setPassword] = useState("admin");

  const loginHandle = async () => {
    try {
      const { firstName, lastName, role } = await login(email, password);

      dispatch(setUser({ firstName, lastName, email, role }));
      dispatch(setIsAuth(true));

      navigate(ROUTE.PROFILE);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Login</h1>

      <form className="d-flex flex-column">
        <input
          className="mt-3"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-3"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="off"
        />

        <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
          <div>
            <Link to={ROUTE.SIGN_IN}>I don`t have an account</Link>
          </div>

          <Button onClick={loginHandle}>Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
