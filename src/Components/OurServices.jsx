import React , {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from "@mui/joy/Button";
import PopUp from './PopUp';
import PlacementPopup from './PlacementPopup';
import {motion} from "framer-motion";



export default function FixedContainer() { 
  const [openPopup , setOpenPopup]  = useState(false);
  const [Popup , setPopup]  = useState(false);

   const handleOpenInternship = () =>{
    setOpenPopup(true);
   }
   const handleOpenPlacement = () =>{
    setPopup(true);
   }
 
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed className="pt-[15vh]">
        <motion.div
        initial={{y:"-20vh"}}
        animate={{y:"0"}}
        transition={{
          duration:0.3,
          delay:0.2,
          ease:"linear"
        }}
         className='w-full h-[40vh] rounded-md overflow-hidden relative bg-center bg-[url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
          <div className='w-full  h-full relative bg-transparent bg-gradient-to-r from-[#264653E8]  to-[#26465373] duration-100'>
             <div className='absolute top-[50%] left-[2vw] rounded-md px-3 py-2'><h1 className='text-5xl text-white font-semibold '>Our Services</h1></div>
          </div>
        </motion.div> 
        <div className='w-full pt-2 pb-20 mb-20'>
          <h1 className='text-semibold text-2xl text-center mb-2'>Our Services</h1>
          <div className='flex gap-2'>
            <div className="card relative flex items-center justify-center w-[22vw] h-[40vh] bg-cover  bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVybnxlbnwwfHwwfHx8MA%3D%3D')]  ">
                  <div className=' w-full h-full flex items-center justify-center hover:bg-[#0000006F] ease-linear duration-300'>
                  <Button  onClick={handleOpenInternship}>Internship</Button>
                  </div>
            </div>
            <div className=" relative card flex items-center justify-center w-[22vw] h-[40vh] bg-cover bg-[url('https://images.unsplash.com/photo-1531497082986-2422f7b87330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxtbmMlMjBjb21wYW55fGVufDB8fDB8fHww')] ">
            <div className=' w-full h-full flex items-center justify-center hover:bg-[#0000006f] ease-linear duration-300'>
            <Button   onClick={handleOpenPlacement}>Placement</Button>
              </div>
            </div>
          </div>
        </div>

      <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}/>
      <PlacementPopup Popup={Popup} setPopup={setPopup}/>
      </Container>
    </React.Fragment>
  );
}