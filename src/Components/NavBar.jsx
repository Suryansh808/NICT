import React from "react";
import './Navbar.css';
import {Link, useLocation , NavLink} from 'react-router-dom';
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NavBar = () => {

  const location = useLocation();
  const isOnLogin = location.pathname === '/Login';
  const isOnSignUp = location.pathname === '/SignUp';
  const isOnAdminPanel = location.pathname === '/AdminPanel';
  const isOnCourseCreate = location.pathname === '/CourseCreate';
  const isOnCourseEdit = location.pathname === '/CourseEdit';
  const isOnAdminCourse = location.pathname === '/AdminPanel/Course';
  const isOnAdminCertificated = location.pathname === '/AdminPanel/Certificated';

  return (
    <>
       {isOnAdminPanel || isOnCourseCreate || isOnCourseEdit || isOnAdminCertificated || isOnAdminCourse || isOnLogin || isOnSignUp ? (null) :
      <header className='fixed z-[999]'>
       <div className="logo">
          <Link to="/">
            <img src="/src/assets/logo.webp" alt="Logo" />
          </Link>
        </div>
        <div className="contectDets">
          <a href="tel:+91 8618958330">
            <IoMdCall className="text-[blue] hover:scale-125" />
            +91 8618958330
          </a>
          <a href="tel:+91-8618958330">
            <FaWhatsapp className="text-[green]  hover:scale-125"  />
            +91-8618958330
          </a>
          <a href="mailto:kirankumar@nictcomputereducation.com">
            <MdEmail className="text-[red]  hover:scale-125" />
            kirankumar@nictcomputereducation.com
          </a>
        </div>
          <nav className="active">
          <ul className=''>
            <li><NavLink exact to="/">Home</NavLink></li>
             <li><NavLink exact to="/AboutUs">About us</NavLink></li>
             <li><NavLink exact to="/Courses">Courses</NavLink></li>
             <li><NavLink to="/OurServices">Our services</NavLink></li>
             <li><NavLink to="/OurAchievers">Our achievers</NavLink></li>
             <li><NavLink to="/Gallery">Gallery</NavLink></li>
             <li><NavLink to="/JobUpdate">Job updates</NavLink></li>
             <li><NavLink to="/Certification">Certifications</NavLink></li>
             <li><NavLink to="/ContactUs">Contact us</NavLink></li><span className="text-white text-lg">|</span>
             <li><NavLink to="/VerifyCertificate">Verify certificate</NavLink></li>
          </ul>
        </nav>
      </header>}
    </>
  );
};
export default NavBar;
