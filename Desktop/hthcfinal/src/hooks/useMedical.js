import { useEffect } from "react";
import axios from "axios";

export const useMedical = () => {
  const [medical, setMedical] = useState([]);

  useEffect(() => {
    // axios
    //     .get("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //     setMedical(response.data);
    //     })
    //     .catch((error) => {
    //     console.log(error);
    //     });
    // }
  }, []);

  return { medical };
};
