import React ,{useEffect , useState} from "react";
import { BiWorld } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";
import {motion} from "framer-motion";

const YearExperience = () => {
  const [data , setData] = useState()

  useEffect(() => {
    fetch("http://localhost:3001/AboutUs").then((res)=>{
      return  res.json();
    }).then((resp) => {
      setData(resp);
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <>
       <div className='w-full flex flex-shrink font-[Montserrat] items-center justify-center gap-2 p-5 max-sm:flex-col max-sm:pb-2 bg-center bg-[url("http://www.nictcomputereducation.com/bg.409b212958387b4522ea.jpg")]'>
        <div className='w-80 h-[40vh] max-sm:h-[40vh] rounded-md text-white border backdrop-blur-sm flex flex-col justify-center items-center'>
          <span className='text-4xl'><BiWorld /></span>
          <h2 className='text-2xl py-2'>25</h2>
          <p className=' text-xl text-center'>YEAR'S EXPERIENCE</p>
        </div>
        <div className='w-80 h-[40vh] max-sm:h-[40vh] rounded-md text-white border backdrop-blur-sm flex flex-col justify-center items-center'>
          <span className='text-4xl'><RiTeamFill /></span>
          <h2 className='text-2xl py-2'>400,000</h2>
          <p className=' text-xl text-center'>STUDENTS TRAINED AND CERTIFIED</p>
        </div>
        <div className='w-80 h-[40vh] max-sm:h-[40vh] rounded-md text-white border backdrop-blur-sm flex flex-col justify-center items-center'>
          <span className='text-4xl'><GrProjects /></span>
          <h2 className='text-2xl py-2'>1,000+</h2>
          <p className=' text-xl text-center'>PROJECTS</p>
        </div>
        <div className='w-80 h-[40vh] max-sm:h-[40vh] rounded-md text-white border backdrop-blur-sm flex flex-col justify-center items-center'>
          <span className='text-4xl'><FaBuilding /></span>
          <h2 className='text-2xl py-2'>40+</h2>
          <p className=' text-xl text-center'>TRANING CENTERS</p>
        </div>
       </div>
       <div className='w-full font-[Montserrat] mt-2'>
          {
            !data ? ( <h1>Loading...</h1>):(
               data.map((item)=>{
                return(
                   <div className='text-center pb-20 '>
                     <h1 className="text-[2.2rem] font-semibold">{item.titlePartner}</h1>
              <div className="flex items-center justify-center mt-2"><div className="underline p-[2px] bg-yellow-700 w-[200px] rounded-md"></div></div>
              <div className="w-full flex items-center justify-center gap-8 flex-wrap mt-2 mb-4 p-2">
              {
                item.Images.map((image, i)=>{
                  return(<motion.img 
                     initial={{x:"-100vw"}}
                     animate={{x:"0"}}
                     transition={{
                      duration : 0.8,
                      ease: "linear",
                      delay:1
                     }}
                     src={image} key={i} alt="img" className='w-[28vh]'/>)
                })
              }
              </div>
                   </div>
                )})
            )
          }
          
       </div>
     
    </>
  )
}

export default YearExperience