import React, { useEffect, useState, useContext } from "react";
import { useDebounce } from "use-debounce";
import Links from "./Links";
import ResultsContext from "../context/ResultsContext";

function Search() {
  const [text, setText] = useState("Ratan Tata");
  const { setSearchText } = useContext(ResultsContext);
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) setSearchText(debounceValue);
  }, [debounceValue, setSearchText]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 dark:text-gray-900 border rounded-full shadow-sm outline-none p-6 text-bold"
        placeholder="Search Webster or Enter URL"
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          className="absolute top-1.5 right-4 text-2xl text-grat-500"
          onClick={() => setText("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
}

export default Search;
