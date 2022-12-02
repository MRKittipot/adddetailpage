import { useEffect, useState } from "react";
import { FetchRouter } from "../api/FetchRouter";

export const useFetch = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      var response = await FetchRouter(props);

      if (props === "news") {
        response = response.map((item) => {
          return {
            id: item.news_id,
            ...item,
          };
        });
      } else {
        response = response.map((item) => {
          return {
            id: item.medicine_id,
            ...item,
          };
        });
      }

      setData(response);
    };

    fetch();
  }, []);

  return { data };
};
