import React from "react";
import "./Footer.css";

type Props = {
  text: string;
};

const Footer: React.FC<Props> = ({ text }: Props) => (
  <footer className="Footer">
    <span className="Footer__text">{text}</span>
  </footer>
);

export default Footer;
