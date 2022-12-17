import React, { createContext, useState } from "react";
import TopBar from "./../../Utilities/TopBar/TopBar";
import Greeting from "./../../Utilities/Greeting/Greeting";
import Routers from "./../../Utilities/Routers/Routers";
import About from "./../../Utilities/About/About";
import Footer from "./../../Utilities/Footer/Footer";
import "./LandingPage.css";

export const CurrencyContext = createContext();
export const LanguageContext = createContext();

const LandingPage = () => {
  const languages = ["IN", "EN"];
  const currencies = ["₹", "$"];

  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("$");

  return (
    <div>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <TopBar
            languages={languages}
            currencies={currencies}
            // handleDropdownSelection={handleDropdownSelection}
          />
          <Greeting />
          <Routers />
          <section className="app-footer">
            <About />
            <Footer />
          </section>
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default LandingPage;
