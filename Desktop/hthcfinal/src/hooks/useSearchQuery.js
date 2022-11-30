import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const useSearchQuery = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState("");

  useEffect(() => {
    const query = searchParams.get("q");
    if (!query) {
      navigate("/");
    } else {
      setSearchQuery(query);
    }
  }, [searchParams, navigate]);

  return { searchQuery };
};
