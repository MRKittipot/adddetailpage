import axios from "axios";

export const AuthorizationRouter = async () => {
  const token = localStorage.getItem("access_token");

  const response = await axios
    .get("http://localhost:8000/api/authorization", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {},
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return null;
    });

  return response;
};
