import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BsBriefcaseFill } from "react-icons/bs";



export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[15vh] font-[Montserrat]">
        <div className="topImg w-full h-[50vh] bg-fill bg-center  bg-[url('https://i.pinimg.com/564x/7f/5c/8d/7f5c8d371d0f91fc57c636b1f568df4e.jpg')]">
           <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#000000a1] to-[#000000a1]">
               <h1 className='font-[Montserrat] text-bold text-[2.2rem] text-white capitalize'>where do you belong?</h1>
           </div>
        </div>
          <div className="job_search w-full mt-6">
            <div className='form w-full flex items-center justify-center h-[15vh] gap-3 bg-[#dadada51]  rounded-l-full rounded-r-full'>
                <div className="jon_role w-1/4 h-10 rounded-l-full  rounded-r-full overflow-hidden">
                  <input className='w-full h-full font-bold px-5 ' type="text" placeholder='Enter Job Role' />
                  </div>
                <div className="jab_category w-1/4 h-10   rounded-l-full rounded-r-full overflow-hidden">
                  <select className='w-full h-full outline-none  cursor-pointe1 font-bold px-5' name="option" id="option">
                  <option  value="Choose Job Category">Choose Job Category</option>
                  </select>
                  </div>
                <div className="job_location w-1/4 h-10 rounded-l-full rounded-r-full overflow-hidden">
                  <select className='w-full h-full outline-none cursor-pointe1 font-bold px-5' name="option" id="option">
                  <option className='w-full h-full rounded-l-full rounded-r-full border-none ' value="Choose Job Location">Choose Job Location</option>
                  </select>
                  </div>
                <div className="search_btn w-1/6 h-10 rounded-l-full rounded-r-full bg-[#08025F] text-white hover:bg-[#08028f] overflow-hidden">
                  <input className='w-full h-full font-bold px-5 cursor-pointer' type="button" value="Search"/>
                </div>
            </div>
          </div>

       <div className='jobs w-full mt-10 p-10 bg-[#f1eeee] rounded-md shadow-xl'>
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