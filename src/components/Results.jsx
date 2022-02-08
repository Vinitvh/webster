import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player";
import ResultsContext from "../context/ResultsContext";
import Loading from "./Loading";

function Results() {
  const { getResults, results, loading, searchText } =
    useContext(ResultsContext);
  const location = useLocation();

  useEffect(() => {
    getResults("?hl=en&q=Javascript&gl=in");
  }, []);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return "Search";
    case "/images":
      return "Search";
    case "/news":
      return "Search";
    case "/videos":
      return "Search";
    default:
      return "Error!";
  }
}

export default Results;
