import React from "react";

import "./AppContainer.css";
import Footer from "../Footer/Footer";
import CalculatorUI from "../CalculatorUI/CalculatorUI";

const AppContainer: React.FC = () => (
  <div className="AppContainer">
    <CalculatorUI />

    <Footer text="Made by Papi" />
  </div>
);

export default AppContainer;
