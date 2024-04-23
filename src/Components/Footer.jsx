import React from "react";
import { Link } from "react-router-dom";
// import AOS from 'aos';
// import  'aos/dist/aos.css';


const Footer = () => {
  // useEffect(()=>{
  //    AOS.init({duration:1000 , delay: 200});
  // },[])


  return (
      <footer className="footer font-[Montserrat] w-[100vw] flex items-center bg-[#08025F] justify-center bottom-0 gap-2 text-white fixed z-[999] p-2">
        <div  className="copyrights">
          Copyright &#169; {new Date().getFullYear()}
        </div>
        <div  className="admin">
          <Link className="text-white decoration-none" to="/AdminPanel" target="_blank" rel="noopener noreferrer">
            NICT.
          </Link>
        </div>
        <div  className="allRights">All Rights Reserved by NICT</div>
      </footer>
  );
};

export default Footer;
