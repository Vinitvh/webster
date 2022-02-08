import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/Results";
import { ResultContextProvider } from "./context/ResultsContext";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ResultContextProvider>
      <Router>
        <div className={darkTheme ? "dark" : ""}>
          <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes>
              <Route path="/" element={<Navigate replace to="/search" />} />
              <Route path="/search" element={<Results />} />
              <Route path="/images" element={<Results />} />
              <Route path="/news" element={<Results />} />
              <Route path="/videos" element={<Results />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </ResultContextProvider>
  );
};

export default App;
