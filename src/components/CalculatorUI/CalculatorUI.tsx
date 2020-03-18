import React from "react";

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

const CalculatorUI: React.FC<Props> = ({ children }: Props) => (
  <section className="CalculatorUI">{children}</section>
);

export default CalculatorUI;
