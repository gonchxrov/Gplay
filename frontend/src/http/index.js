import axios from "axios";
const baseURL = "http://localhost:4000/";

const $host = axios.create({ baseURL });

const $hostAuth = axios.create({ baseURL });

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$hostAuth.interceptors.request.use(authInterceptor);

export { $host, $hostAuth };
