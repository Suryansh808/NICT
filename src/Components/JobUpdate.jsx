import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BsBriefcaseFill } from "react-icons/bs";



export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[15vh] h-[50vh]">
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