import axios from "axios";

export const AddNewsRouter = async (data, role) => {
  const token = localStorage.getItem("access_token");

  const response = await axios
    .post(`http://localhost:8000/api/${role}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return { message: "success" };
    })
    .catch((err) => {
      return null;
    });

  return response;
};
