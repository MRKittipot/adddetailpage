import axios from "axios";
import { option } from "./axios.config";

export const FetchRouter = async (role) => {
  const response = await axios
    .get(`http://localhost:8000/api/${role}`, { ...option, data: {} })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });

  return response;
};
