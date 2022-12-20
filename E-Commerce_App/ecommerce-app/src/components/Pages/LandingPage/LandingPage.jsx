import React, { useEffect, createContext, useState } from "react";
import TopBar from "./../../Utilities/TopBar/TopBar";
import Greeting from "./../../Utilities/Greeting/Greeting";
import Routers from "./../../Utilities/Routers/Routers";
import About from "./../../Utilities/About/About";
import Footer from "./../../Utilities/Footer/Footer";
import "./LandingPage.css";

export const CurrencyContext = createContext();
export const LanguageContext = createContext();
export const CartCountContext = createContext();

const LandingPage = () => {
  const languages = ["IN", "EN"];
  const currencies = ["₹", "$"];

  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("₹");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let c = localStorage.getItem("Currency");
    if (c) {
      setCurrency(JSON.parse(c));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Currency", JSON.stringify(currency));
  }, [currency]);

  // localStorage.getItem(currency);

  return (
    <div>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <CartCountContext.Provider value={[cartCount, setCartCount]}>
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
          </CartCountContext.Provider>
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default LandingPage;
