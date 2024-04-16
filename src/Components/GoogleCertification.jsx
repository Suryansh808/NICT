import React from 'react';
import { PiCheckSquareFill } from "react-icons/pi";

const GoogleCertification = () => {
  return (
       <>
        <div className='w-full bg-zinc-900 grid grid-cols-12 gap-2 p-2 font-[Montserrat]'>
            <div className=' w-full bg-white border-2 col-span-12 rounded-md max-sm:col-span-12'>
              <div className="heading flex items-center justify-center">
              <span><img className='w-[17vh] hover:scale-110 ease-linear duration-300' src="http://www.nictcomputereducation.com/assets/home/google.png" alt="Google" /></span> 
              <h1 className="flex items-center text-sky-600 text-3xl font-bold gap-2 p-2 ">Certification</h1>
              </div>
             <div className="flex items-center gap-2 overflow-hidden justify-center w-full p-2 ">
                <div className='w-1/2 rounded-md overflow-hidden'>
                <div className='w-full h-[50vh] rounded-md overflow-hidden flex items-center justify-center bg-cover hover:scale-105 ease-linear duration-300 bg-[url(http://www.nictcomputereducation.com/assets/home/digital-marketing-institute-1.jpg)]'>
                    <div className='w-[40vw] h-[20vh]  max-md:w-[75vw] max-md:h-[18vh] gap-2 flex flex-wrap items-center justify-center text-white text-xl border backdrop-blur-md'><h1>Digital Marketing with </h1><span><img className='w-20' src="http://www.nictcomputereducation.com/assets/home/google.png" alt="Google" /></span><h1>Certification.</h1></div>
                </div>
                </div>
                <div className='w-1/2 h-[50vh] p-2 flex items-center justify-center flex-col '>
                <table className='w-full'>
                    <tr className='flex items-center justify-between text-sm  w-full'>
                        <td className='flex items-center px-5 gap-1 w-1/2 '><span><PiCheckSquareFill /></span>Search engine optimization(SEO)</td>
                        <td className='flex items-center px-5 gap-1 w-1/2'><span><PiCheckSquareFill /></span>Email marketing</td>
                    </tr>
                    <tr className='flex items-center justify-between text-sm  w-full'>
                        <td className='flex items-center px-5 gap-1 w-1/2 '><span><PiCheckSquareFill /></span>Social media marketing</td>
                        <td className='flex items-center px-5 gap-1 w-1/2 '><span><PiCheckSquareFill /></span>Blogging</td>
                    </tr>
                    <tr className='flex items-center justify-between  text-sm w-full'>
                        <td className='flex items-center px-5 gap-1 w-1/2  '><span><PiCheckSquareFill /></span>Video marketing</td>
                        <td className='flex items-center px-5 gap-1 w-1/2 '><span><PiCheckSquareFill /></span>Website marketing</td>
                    </tr>
                </table>
                 <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-44 m-4 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                    <p className="z-10 text-bold text-xl">Read more</p>
                </button>
                </div>
             </div>     
            </div>
            <div className=' w-full bg-white border col-span-8  rounded-md max-sm:col-span-12'>
                    <h1 className='flex items-center text-black text-2xl font-bold p-2 '><span><img className="w-[24vh]" src="http://www.nictcomputereducation.com/assets/home/microsoft.png" alt="MicroSoft" /></span>Certification</h1>   
                    <div className='w-full h-[50vh] flex justify-center bg-no-repeat bg-center bg-cover	 bg-[url("https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8")]'>
                       <div className='w-[40vw] h-[20vh] max-md:w-[70vw] max-md:h-[18vh] max-md:text-center gap-2 mt-10 flex items-center justify-center text-white text-2xl border backdrop-blur-md'>
                             <h1 className='text-1xl font-bold text-white'>Microsoft Excel (Basic & Advance)</h1>
                    </div>
                    </div>
                    <h1 className='text-2xl font-bold p-2 text-center'>Microsoft Office Specialist</h1>
                    <div className='flex items-center justify-center flex-wrap '>
                    <table className='border-2 max-md:flex max-md:flex-col max-md:text-center max-sm:w-[100vw] '>
                         <tr className="bg-red-950 whitespace-nowrap text-white max-sm:p-2 max-sm:whitespace-pre-wrap ">
                          <th colSpan={12}>Microsoft Office Certification gives you the tools to build a bright future.</th>
                         </tr>                   
                          <tr className='max-md:flex flex-col'>
                            <td className='p-2 '>Gain valuable Microsoft Office computing skills</td>
                            <td className='p-2'>Boost your workforce resume</td>
                          </tr>
                           <tr  className='max-md:flex flex-col'>
                            <td className='p-2'>Achieve industry-recognized certiication</td>
                            <td className='p-2'>Differentiate yourself from other applicants</td>
                           </tr>
                           <tr  className='max-md:flex flex-col' >
                            <td className='p-2'>Assure employers of your qualiications</td>
                            <td className='p-2'>Advance your career</td>
                           </tr>
                    </table>
                    </div>
                    <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-44 m-4 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                    <p className="z-10 text-bold text-xl">Read more</p>
                </button>
            </div>
            <div className=' w-full bg-white col-span-4 p-2 rounded-md max-sm:col-span-12'>
               <h1>Why Students Love NICT?</h1>
               <div className='w-full p-2'>
                     <div className='border h-max mb-2  w-full'>
                         <div className='content relative w-full  p-2 '>
                             <img scr=""/>
                             <div className="">Time Flexibilities</div>
                             <div className='para w-full bg-zinc-700 text-white p-3 text-center hidden duration-75 ease-linear'>
                                 As per the College Time Table / College Schedule
                           </div>
                         </div>
                     </div>
                      <div className='border h-max  w-full'>
                         <div className='content relative w-full  p-2 '>
                             <img scr=""/>
                             <div className="">Time Flexibilities</div>
                             <div className='para w-full bg-zinc-700 text-white p-3 text-center hidden duration-75 ease-linear'>
                                 As per the College Time Table / College Schedule
                           </div>
                         </div>
                     </div>
               </div>
            </div>
            <div className=' w-full bg-white  pb-10 border col-span-12 p-5 rounded-md max-sm:col-span-12'>
               <h1 className='text-2xl font-bold leading-tight tracking-tighter'>TALLY ERP9 with GST</h1>
               <div className='w-full h-[60vh] bg-cover bg-no-repeat  bg-[url("https://www.antraweb.com/img/blog/tally-in-a-virtual-environment.png")] max-sm:w-[100%] max-sm:bg-contain max-sm:h-[25vh]'></div>
               <p className='px-2 py-4 font-semibold'>To Meet the industry demand for Tally. <br /> 
                  ERP 9 trained professionals are here to bridge the gap between training and placements, TEPL has established authorized institute NICT <br />
                   Computer Education Pvt Ltd – Tally Institute of Learning (TIL).
               </p>
               <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-44 m-4 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                    <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                    <p className="z-10 text-bold text-xl">Read more</p>
                </button>
            </div>
        </div>
      </>
  )
}

export default GoogleCertification