import React from "react";
import "./OutputDisplay.css";

type Props = {
  operation: string;
  result: string;
};

const OutputDisplay: React.FC<Props> = ({ operation, result }: Props) => (
  <section className="OutputDisplay">
    <span className="OutputDisplay__value OutputDisplay__value--operation">
      {operation}
    </span>
    <span className="OutputDisplay__value OutputDisplay__value--result">
      {result}
    </span>
  </section>
);

export default OutputDisplay;
