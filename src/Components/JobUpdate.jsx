import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BsBriefcaseFill } from "react-icons/bs";



export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[15vh]">
        <div className="topImg w-full h-[50vh] bg-fill bg-center  bg-[url('https://i.pinimg.com/564x/7f/5c/8d/7f5c8d371d0f91fc57c636b1f568df4e.jpg')]">
           <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#000000a1] to-[#000000a1]">
               <h1 className='font-[Montserrat] text-bold text-[2.2rem] text-white capitalize'>where do you belong?</h1>
           </div>
        </div>
       <div className='w-full mt-10 p-10 bg-[#f1eeee] rounded-md shadow-xl'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <span><BsBriefcaseFill /></span>
             <h2>Accountant</h2>
            </div>
            <p>20k - 25k</p>
         </div>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 capitalize'>
                <h2>Full Time</h2>
              <h2>Accountant </h2>
              <h2>jayanagar</h2>
            </div>
          <button className='px-4 py-2 bg-blue-900 text-white rounded-xl'>Apply Now</button>
         </div>
       </div>
       
         
      </Container>
    </React.Fragment>
  );
}