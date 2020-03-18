import React from "react";
import "./AppContainer.css";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import CalculatorUI from "../CalculatorUI/CalculatorUI";

const AppContainer: React.FC = () => (
  <div className="AppContainer">
    <Main>
      <CalculatorUI>
        <p>[TODO]</p>
      </CalculatorUI>
    </Main>
    <Footer text="Made by Papi" />
  </div>
);

export default AppContainer;
