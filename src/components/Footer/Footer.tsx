import React from "react";
import "./Footer.css";

type Props = {
  text: string;
};

const Footer: React.FC<Props> = ({ text }: Props) => (
  <footer className="Footer">
    <p className="Footer__text">{text}</p>
  </footer>
);

export default Footer;
