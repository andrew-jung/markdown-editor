import React from "react";

// TODO: Export these from /components?
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const { theme, toggleTheme } = useDarkMode();
  const themeStyles =
    theme === "light"
      ? {
          backgroundColor: "#eee",
          color: "#000",
        }
      : {
          backgroundColor: "#171616",
          color: "#fff",
        };

  return (
    <div className="App" style={themeStyles}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
