import React from "react";
import { ICGithub, ICLinkedin, LogoNycto } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="Github" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoNycto} alt="nycto" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICGithub} />
          <Icon img={ICLinkedin} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright | Ardillah Setiawan</p>
      </div>
    </div>
  );
};

export default Footer;
