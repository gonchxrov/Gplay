import { $host, $hostAuth } from "./index";
import jwt_decode from "jwt-decode";

export const signIn = async (firstName, lastName, email, password) => {
  const { data } = await $host.post("api/user/registration", {
    firstName,
    lastName,
    email,
    password,
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const check = () => {
  const { data } = $hostAuth.get("api/user/auth");
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};
