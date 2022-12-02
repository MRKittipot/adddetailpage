import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthorizationRouter } from "../api/AuthorizationRouter";

const AuthProvider = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      navigate("/");
    } else {
      async function auth() {
        const response = await AuthorizationRouter();
        if (!response) {
          navigate("/");
        }
      }
      auth();
    }
  }, [navigate]);

  return <div>{props.children}</div>;
};

export default AuthProvider;
