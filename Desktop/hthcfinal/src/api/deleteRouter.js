import axios from "axios";

export const DeleteRouter = async (role, id) => {
  const response = await axios.delete(
    `http://localhost:8000/api/${role}/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: {},
    }
  );
  return response.data;
};
