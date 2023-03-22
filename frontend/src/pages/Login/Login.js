import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { login } from "../../http/UserAPI";
import { ROUTE } from "../../router";
import { setUser, setPhoto, setIsAuth } from "../../store/User";
import { Layout } from "../../components/Layout/Layout";
import { checkEmail } from "../../helpers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [validationMessages, setValidationMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const loginHandle = async () => {
    validate();

    if (!validationMessages.length) {
      try {
        const { email, password } = form;
        const { firstName, lastName, role, photo } = await login(
          email,
          password
        );

        dispatch(setUser({ firstName, lastName, email, role }));
        dispatch(setPhoto({ photo }));
        dispatch(setIsAuth(true));

        navigate(ROUTE.PROFILE);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const validate = () => {
    const { email, password } = form;

    let messages = [];

    setValidationMessages(messages);

    if (!email) {
      messages.push("Email is required");
    } else {
      if (!checkEmail(email)) {
        messages.push("Email is wrong");
      }
    }

    if (!password) {
      messages.push("Password is required");
    } else {
      if (password.length < 4) {
        messages.push("Password is less than 4 characters");
      }

      if (password.length > 20) {
        messages.push("Password is more than 20 characters");
      }
    }

    setValidationMessages(messages);
  };

  return (
    <Layout isLoaded={isLoaded}>
      <h1>Login</h1>

      <form className="form--auth d-flex flex-column">
        <div className="input-wrapper--text w-100 mb-3">
          <input
            type="email"
            name="email"
            value={form.email || ""}
            onChange={handleChange}
            placeholder="Enter your email..."
          />
        </div>

        <div className="input-wrapper--text w-100 mb-3">
          <input
            type="password"
            name="password"
            value={form.password || ""}
            onChange={handleChange}
            placeholder="Enter your password..."
            autoComplete="off"
          />
        </div>

        {validationMessages.length > 0 ? (
          <div>
            {validationMessages.length > 0}
            <ul className="validation-messages">
              {validationMessages.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="d-flex justify-content-between mb-3 pl-3 pr-3">
          <div>
            <Link to={ROUTE.SIGN_IN}>I don`t have an account</Link>
          </div>

          <Button onClick={loginHandle}>Login</Button>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
