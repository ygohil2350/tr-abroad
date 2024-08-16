import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <DarkModeToggle toggleTheme={toggleTheme} />
      <Navbar />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
