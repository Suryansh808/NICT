import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="copyrights">
          Copyright &#169; {new Date().getFullYear()}
        </div>
        <div className="admin">
          <Link to="/AdminPanel" target="_blank" rel="noopener noreferrer">
            NICT.
          </Link>
        </div>
        <div className="allRights">All Rights Reserved by NICT</div>
      </footer>
      <section className="social-media ">
        
      </section>
    </div>
  );
};

export default Footer;
