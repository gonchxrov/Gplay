import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { signIn } from "../../http/UserAPI";
import { ROUTE } from "../../router";
import { setUser, setIsAuth } from "../../store/User";
import { Layout } from "../../components/Layout/Layout";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("user");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const signInHandle = async () => {
    try {
      await signIn(firstName, lastName, email, password);

      dispatch(setUser({ firstName, lastName, email, role }));
      dispatch(setIsAuth(true));

      navigate(ROUTE.PROFILE);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Sign-In</h1>

      <form className="form--auth d-flex flex-column">
        <div className="input-wrapper--text w-100 mb-3">
          <input
            placeholder="Enter your first name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-wrapper--text w-100 mb-3">
          <input
            placeholder="Enter your last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input-wrapper--text w-100 mb-3">
          <input
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper--text w-100 mb-3">
          <input
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            autoComplete="off"
          />
        </div>

        <div className="d-flex justify-content-between pl-3 pr-3">
          <div>
            <Link to={ROUTE.LOGIN}>I have an account</Link>
          </div>
          <Button onClick={signInHandle}>Sign-In</Button>
        </div>
      </form>
    </Layout>
  );
};

export default SignIn;
