import React,{useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { MdMarkEmailRead } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import GetInTouch from './GetInTouch';


export default function SimpleContainer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
       
      // const ContentDetails = [
      //      {icons : ["<MdMarkEmailRead />" , "<FaMobileScreenButton />" , "<FaMapMarkerAlt />"]},
      //      {title: ["MAIL & WEBSITE" , "CONTACT" , "ADDRESS"]},
      //      {details : ["info@nictcomputereducation.com" , " +91 8618958330 / 41210488" , "NICT Computer Education Pvt Ltd #57, ”Bhagavathi Towers” , 4th Floor, 33rd cross, 4th Block, Jayanagar, Bangalore-560 011"]}
      // ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[15vh]">
          {/* get in touch container */}
        <div className="w-full h-[50vh] flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"> 
           <div className=" w-[80%] h-[80%] flex flex-col items-center justify-center text-md font-bold font-serif bg-[#ffffff7f]  backdrop-blur-sm text-[#0b0b0b] rounded-md border border-[#DFDDDC]">
            <h1 className="font-bold text-xl py-3">Contact Us</h1>
            <h2 className="font-bold pb-2">We'd love to hear from you</h2>
            <p className="font-bold p-2 text-center">Wheather you have questions about our courses , Seminar , Certificate or anything else, Our team is ready to answer your questions.</p>
            <div className='pb-3 font-bold'><Button  variant="contained" onClick={handleClickOpen}>Get in touch</Button></div>
            <GetInTouch openIt={open} setOpenIt={setOpen}/>
           </div>
        </div>

           {/* jayanagar office map */}
        <div className='font-sans  map mt-5 w-full rounded-md overflow-hidden shadow-xl'>
             <h1 className="text-[2rem] mb-2 font-bold text-center">Jayanagar Office</h1>
            <div className="map w-full h-[60vh] rounded-md overflow-hidden">
           <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.714799687112!2d77.58195597507569!3d12.926043087385123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1588fe282245%3A0x644462445ce6cecd!2sNICT%20Computer%20Education%20Jayanagar!5e0!3m2!1sen!2sin!4v1712510781376!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
          
          {/* jayanagar office details */}
        <div className='w-full flex items-center justify-between  px-5 py-[10vh]'>
          <div className="relative  overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
               <h2 className="text-md text-white" >  MAIL</h2> 
               <a  className="text-md text-white mt-2" href="mailto:info@nictcomputereducation.com">info@nictcomputereducation.com</a>
               </div>
             <div className="w-full h-full items-center justify-center flex flex-col uppercase">
             <MdMarkEmailRead className='text-[2.5rem] text-white' />
             <h2 className="text-sm text-white mt-2" >  MAIL</h2> 
             </div>
         </div>
          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
               <h2 className="text-md text-white">CONTACT</h2> 
               <a className="text-md text-white mt-2" href="tel:+91 8618958330">+91 8618958330 / 41210488</a>
               </div>
             <div className="w-full h-full items-center justify-center flex flex-col uppercase">
            <FaMobileScreenButton className='text-[2.5rem] text-white' />
            <h2 className="text-sm text-white mt-2">CONTACT</h2> 
             </div>
         </div>
          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col  text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
                   <h2 className="text-white text-sm"> ADDRESS</h2>
                   <p className="text-white tracking-tighter leading-tight text-sm mt-2">#7/A, 1st NICT Computer Education Pvt Ltd #57, ”Bhagavathi Towers” , 4th Floor, 33rd cross, 4th Block, Jayanagar, Bangalore-560 011</p>
              </div>
             <div className="w-full h-full items-center  justify-center flex flex-col uppercase">
                  <FaMapMarkerAlt className='text-[2.5rem] text-white' />
                  <h2 className="text-white  text-sm mt-2"> ADDRESS</h2>
             </div>
         </div>
        </div>
          
          {/* head office details */}
        <div className="w-full mt-2 border-2 rounded-xl bg-[#cfdfef]">
            <h1 className="text-2xl text-center font-semibold pt-3">Head Office</h1>
            <div className='w-full flex items-center justify-evenly gap-5 pt-4 pb-20'>
          <div className="relative  overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
               <h2 className="text-md text-white" >  MAIL</h2> 
               <a  className="text-md text-white mt-2" href="mailto:info@nictcomputereducation.com">info@nictcomputereducation.com</a>
               </div>
             <div className="w-full h-full items-center justify-center flex flex-col uppercase">
             <MdMarkEmailRead className='text-[2.5rem] text-white' />
             <h2 className="text-sm text-white mt-2" >  MAIL</h2> 
             </div>
         </div>
          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
               <h2 className="text-md text-white">CONTACT</h2> 
               <a className="text-md text-white mt-2" href="tel:+91 80 26672403 ">+91 80 26672403 / 8618958330</a>
               </div>
             <div className="w-full h-full items-center justify-center flex flex-col uppercase">
            <FaMobileScreenButton className='text-[2.5rem] text-white' />
            <h2 className="text-sm text-white mt-2">CONTACT</h2> 
             </div>
         </div>
          <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[#013446] shadow-2xl">
             <div className="z-10 absolute w-full h-full peer"></div>
             <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500"></div>
             <div className="absolute flex flex-col text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32  -right-14 w-36 h-44 rounded-full bg-[#3e8ba8] transition-all duration-500">
                   <h2 className="text-white text-md"> ADDRESS</h2>
                   <p className="text-white text-md mt-2">
                   NICT Computer Education Pvt Ltd. #10/30, 50 Feet Main Road Hanumanthanagar,Bangalore-560 050.
                   </p>
                   </div>
             <div className="w-full h-full items-center  justify-center flex flex-col uppercase">
                  <FaMapMarkerAlt className='text-[2.5rem] text-white' />
                  <h2 className="text-white text-sm mt-2"> ADDRESS</h2>
             </div>
         </div>
            </div>
        </div>
      </Container>
    </React.Fragment>
  );
}