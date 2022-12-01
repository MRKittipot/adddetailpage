import React, { useEffect, useState } from "react";
import axios from "axios";
import {} from "react-router-dom";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {}, []);

  return { auth };
};
