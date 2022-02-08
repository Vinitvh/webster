import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState } from "react";

const baseURL = "https://google-search3.p.rapidapi.com/api/v1";
const ResultsContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState("Javascript");

  const getResults = async (text) => {
    setloading(true);
    try {
      const response = await fetch(`${baseURL}${text}`, {
        method: "GET",
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "IN",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key":
            "697417e7edmshdd0523d0471951fp1c923ajsn93dbe43fcf84",
        },
      });

      const data = await response.json();

      if (type.includes("/news")) {
        setResults(data.entries);
      } else if (type.includes("/images")) {
        setResults(data.image_results);
      } else {
        setResults(data.results);
      }

      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ResultsContext.Provider
      value={{ getResults, results, loading, searchText, setSearchText }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContext;
