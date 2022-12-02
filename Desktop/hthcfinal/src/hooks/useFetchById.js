import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FetchByIdRouter } from "../api/FetchByIdRouter";

export const useFetchById = (props, id) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await FetchByIdRouter(props, searchParams.get("q"));
      if (response) {
        setData(response);
      } else {
        navigate("/home");
      }
    };

    fetch();
  }, []);

  return { data };
};
