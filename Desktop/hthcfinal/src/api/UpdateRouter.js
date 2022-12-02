import axios from "axios";

export const UpdateRouter = (data, role, id) => {
  const response = axios.put(`http://localhost:8000/api/${role}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
