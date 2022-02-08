import { createContext, useState } from "react";

const baseURL = "https://google-search1.p.rapidapi.com/google-search";
const ResultsContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getResults = async (text) => {
    setloading(true);

    const response = await fetch(`${baseURL}${text}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search1.p.rapidapi.com",
        "x-rapidapi-key": "697417e7edmshdd0523d0471951fp1c923ajsn93dbe43fcf84",
      },
    });

    const data = await response.json();
    setResults(data);
    setloading(false);
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
