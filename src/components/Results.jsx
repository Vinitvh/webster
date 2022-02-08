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
    getResults("/search/q=javascript&num=40");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, idx) => (
            <div key={idx} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm mb-0">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg mb-0 hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
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
