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
    if (searchText) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchText} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchText}&num=40`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.map(({ link, title }, idx) => (
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
      return (
        <div className="flex flex-wrap justify-between items-center">
          {results?.map(({ image, link: { href, title } }, idx) => (
            <a
              className="sm:p-3 p-5"
              href={href}
              key={idx}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
          {results?.map(({ links, id, source, title }) => (
            <div key={id} className="md:w-2/5 w-full">
              <a href={links?.[0].href} target="_blank" rel="noreferrer">
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
                <div className="flex gap-4">
                  <a
                    href={source?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return "Search";
    default:
      return "Error!";
  }
}

export default Results;
