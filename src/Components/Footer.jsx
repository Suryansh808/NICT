import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="footer font-[Montserrat] w-full flex items-center bg-[#08025F] justify-center bottom-0 gap-2 text-white fixed z-[999] p-2">
        <div className="copyrights">
          Copyright &#169; {new Date().getFullYear()}
        </div>
        <div className="admin">
          <Link className="text-white decoration-none" to="/AdminPanel" target="_blank" rel="noopener noreferrer">
            NICT.
          </Link>
        </div>
        <div className="allRights">All Rights Reserved by NICT</div>
      </footer>
  );
};

export default Footer;
