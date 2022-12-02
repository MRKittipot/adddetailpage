import axios from "axios";
import { option } from "./axios.config";

const LoginRouter = async (email, password) => {
  const response = await axios
    .post(" http://localhost:8000/api/login", { email, password }, option)
    .then((res) => {
      return res.data;
    });

  if (response) {
    localStorage.setItem("access_token", response.token);
    return response;
  }

  return null;
};

export default LoginRouter;
