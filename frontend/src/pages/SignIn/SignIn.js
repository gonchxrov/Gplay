import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { signIn } from "../../http/UserAPI";
import { ROUTE } from "../../router";
import { checkEmail } from "../../helpers";
import { setUser, setIsAuth } from "../../store/User";
import { Layout } from "../../components/Layout/Layout";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [validationMessages, setValidationMessages] = useState([]);
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
    validate();

    if (!validationMessages.length) {
      try {
        const { firstName, lastName, email, password } = form;
        await signIn(firstName, lastName, email, password);

        dispatch(setUser({ firstName, lastName, email, role }));
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
    const { firstName, lastName, email, password } = form;

    let messages = [];

    setValidationMessages(messages);

    if (!firstName) {
      messages.push("First name is required");
    } else {
      if (firstName.length < 2) {
        messages.push("First name is less than 2 characters");
      }

      if (firstName.length > 20) {
        messages.push("First name is more than 20 characters");
      }
    }

    if (!lastName) {
      messages.push("Last name is required");
    } else {
      if (lastName.length < 2) {
        messages.push("Last name is less than 2 characters");
      }

      if (lastName.length > 20) {
        messages.push("Last name is more than 20 characters");
      }
    }

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
      <h1>Sign-In</h1>

      <form className="form--auth d-flex flex-column">
        <div className="input-wrapper--text w-100 mb-3">
          <input
            name="firstName"
            value={form.firstName || ""}
            onChange={handleChange}
            placeholder="Enter your first name..."
          />
        </div>

        <div className="input-wrapper--text w-100 mb-3">
          <input
            name="lastName"
            value={form.lastName || ""}
            onChange={handleChange}
            placeholder="Enter your last name..."
          />
        </div>

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
