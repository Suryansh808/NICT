import React, {useEffect} from "react";
import {NavLink} from 'react-router-dom';
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from  'aos'; 
import 'aos/dist/aos.css';

const NavBar = () => {
   
  useEffect(()=>{
    AOS.init({duration :1000});
    AOS.refresh();  
  },[])

  return (
    <>
      <header data-aos="zoom-in" className='w-full fixed z-[999] font-[Montserrat]'>
      <div className="w-full relative bg-white ">
      <div className="logo w-[7.2vw] left-[0.5rem] absolute bg-white shadow-blue-950 shadow-lg rounded-b-2xl flex items-center justify-center overflow-hidden z-[999]">
          <NavLink to="/">
            <img className="w-[6vw] h-[17vh]" src="/src/assets/logo.webp" alt="Logo" />
          </NavLink>
        </div>
        <div className='phone_email flex items-center justify-end text-sm gap-3 px-6 py-1'>
          <a className='flex items-center gap-1' href="tel:+91 8618958330">
            <IoMdCall className="text-[blue] hover:scale-125 ease-linear duration-300" />
            +91 8618958330
          </a>
          <a className='flex items-center gap-1' href="tel:+91-8618958330">
            <FaWhatsapp className="text-[green]  hover:scale-125 ease-linear duration-300"  />
            +91-8618958330
          </a>
          <a className='flex items-center gap-1' href="mailto:kirankumar@nictcomputereducation.com">
            <MdEmail className="text-[red]  hover:scale-125 ease-linear duration-300" />
            kirankumar@nictcomputereducation.com
          </a>
        </div>
          <nav className="w-full bg-gradient-to-l from-[#08025ff1] to-[#08025fe4]">
          <ul className='flex items-center justify-center decoration-none px-10 ml-20  gap-[1rem]'>
             <li className='active:bg-[#090635] py-5 px-1'><NavLink className='text-white text-md' exact to="/">Home</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/AboutUs">About us</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/Courses">Courses</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/OurServices">Our services</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/OurAchievers">Our achievers</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/Gallery">Gallery</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/JobUpdate">Job updates</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/Certification">Certifications</NavLink></li>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/ContactUs">Contact us</NavLink></li><span className="text-white text-lg">|</span>
             <li className='active:bg-[#08025f] py-5 px-1' ><NavLink className='text-white text-md' exact to="/VerifyCertificate">Verify certificate</NavLink></li>
          </ul>
        </nav>
      </div>
      </header>
    </>
  );
};
export default NavBar;
