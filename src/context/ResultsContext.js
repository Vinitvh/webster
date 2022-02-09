import { createContext, useState } from "react";

const baseURL = process.env.REACT_APP_BASE_URL;
const ResultsContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchText, setSearchText] = useState("Ratan Tata");

  const getResults = async (text) => {
    setloading(true);
    try {
      const response = await fetch(`${baseURL}${text}`, {
        method: "GET",
        headers: {
          "x-user-agent": "desktop",
          "x-proxy-location": "IN",
          "x-rapidapi-host": "google-search3.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      });

      const data = await response.json();
      setResults(data);
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
