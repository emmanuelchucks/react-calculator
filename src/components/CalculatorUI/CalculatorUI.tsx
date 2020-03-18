import React from "react";
import "./CalculatorUI.css";

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

const CalculatorUI: React.FC<Props> = ({ children }: Props) => (
  <section className="CalculatorUI">{children}</section>
);

export default CalculatorUI;
