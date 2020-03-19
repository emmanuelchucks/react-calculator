import React from "react";
import "./Main.css";

type Props = {
  children: React.ReactChild | React.ReactChildren;
};

const Main: React.FC<Props> = ({ children }: Props) => (
  <main className="Main">{children}</main>
);

export default Main;
