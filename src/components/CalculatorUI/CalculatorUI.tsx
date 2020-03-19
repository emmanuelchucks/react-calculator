import React from "react";

import "./CalculatorUI.css";
import InputPad from "../InputPad/InputPad";
import OutputDisplay from "../OutputDisplay/OutputDisplay";

type Props = {};

const CalculatorUI: React.FC<Props> = () => (
  <main className="CalculatorUI">
    <OutputDisplay operation="[OPERATION]" result="[RESULT]" />
    <InputPad />
  </main>
);

export default CalculatorUI;
