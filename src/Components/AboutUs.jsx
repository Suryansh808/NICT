import React ,{useEffect , useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box} from '@mui/material';
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import GetInTouch from './GetInTouch';
import {motion} from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";




export default function SimpleContainer() {
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pb-4 font-[Gilroy] pt-[18vh]">
      {
        !data ? ( <Box sx={{ display: 'flex'}} className="flex items-center justify-center top-1/2"><CircularProgress /></Box>) : 
         data.map((item) => {
        return (<Box>
            <motion.h1 
                initial={{y:"-20vh"}} 
                animate={{y:"0"}} 
                transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "linear"}} 
            className="text-center mt-3 text-[2rem]">{item.title}</motion.h1>
            <div className="flex items-center justify-center mt-2"><div className="underline p-[2px] bg-yellow-700 w-[150px] rounded-md"></div></div>
            <div className="flex items-center gap-2 justify-center w-full">
              <div className="para w-[80%] p-2 overflow-hidden shadow-lg rounded-md">
                  {
                    item.content.map((content) =>{
                      return (<motion.p 
                        initial={{y: "-30vh"}} 
                        animate={{y:"0"}} 
                        transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "linear"}} 
                        className="mb-4 font-semibold text-md tracking-tight leading-1 capitalize ">{content} </motion.p>)
                    })
                  }
                <motion.button
                 initial={{x :"-20vw"}}
                 animate={{x :"0"}}
                 transition={{duration: 0.5, delay: 0.2, ease: "linear" }}
                 className='flex items-center gap-1 rounded-md uppercase px-3 py-2 text-bold bg-sky-900 text-white shadow-xl' onClick={handleClickOpen}>{item.button}<BsArrowRightShort /></motion.button>
                <GetInTouch openIt={open} setOpenIt={setOpen}/>
              </div>
              <div className="image w-[20%] mb-4 overflow-hidden">
                <motion.img 
                initial={{x: "10vw"}} 
                animate={{x:"0"}} 
                transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: "linear"}} 
                src={item.image} alt="Image"  className='w-full h-full hover:scale-105 ease-linear duration-300' />
              </div>
            </div>

            <Box  className="border-2 border-teal-700 mt-4 mb-3"> 
              <h1 className="mb-1 capitalize font-bold text-lg bg-teal-700 text-white p-2  gray-400 pb-1">{item.titleTwo}</h1>
              <p className="my-3  text-lg tracking-tight leading-tight p-2">{item.paraOne}</p>
              <p className="my-3  text-lg tracking-tight leading-tight p-2">{item.paraTwo}</p>
            </Box>

            <Box className="border-2  border-cyan-700 mt-4 mb-3">
              <h1 className="mb-1 capitalize font-bold text-lg bg-cyan-700 text-white pb-1 p-2">{item.titleThree}</h1>
              <p className="my-3  text-lg tracking-tight leading-tight p-2 ">{item.paraThree}</p>
            </Box>

            <Box className="border-2  border-cyan-700 mt-4 mb-3">
              <h1 className="mb-1 capitalize font-bold text-lg bg-cyan-700 text-white pb-1 p-2">{item.titleFour}</h1>
              <p className="my-3  text-lg tracking-tight leading-tight p-2">{item.paraFour}</p>
            </Box>

            <Box className='overflow-hidden rounded-md  mt-20'>
              <img src={item.imageBg} alt="BG-Image" className="rounded-md shadow-2xl hover:scale-105 ease-linear duration-300 "/>
            </Box>

            <Box className="mt-10">
              <h1 className="text-[2rem] font-bold">{item.UlTitle}</h1>
              <ul role="list" className="mt-3 ml-10 capitalize flex flex-col gap-2 text-lg  marker list-disc" >
                 {
                  item.List.map( (listItem, index) => {
                    return (<li className='hover:text-[#62d8e3]' key={index}>{listItem}</li>)
                 }        
                 )}
               </ul>
            </Box>  
            <Box className="bg-sky-300 mt-20 rounded-md">
              <Box className="p-8">
                <h1 className="text-[2rem] font-bold">{item.Heading}</h1>
                <ul  role="list" className="mt-3 ml-10 flex flex-col gap-2 text-lg capitalize  marker list-disc">
                   {
                    item.HeadingList.map((HeadingList , index)=>{
                      return ( <li className="hover:text-[#ffffff]" key={index}>{HeadingList}</li>)
                    })
                   }
                </ul>
              </Box>
            </Box>
            <Box className="mt-6 overflow-hidden rounded-md ">
              <img src={item.BgImage} alt="bg-image" className="rounded-md shadow-2xl hover:scale-105 ease-linear duration-300" />
            </Box>

            <Box className="text-center mt-10 pb-10">
              <h1 className="text-[2rem]">{item.titlePartner}</h1>
              <div className="flex items-center justify-center mt-2"><div className="underline p-[2px] bg-yellow-700 w-[200px] rounded-md"></div></div>
              <Box className="flex items-center justify-center gap-8 flex-wrap h-full">
              {
                item.Images.map((image, i)=>{
                  return( <Box>
                    <img src={image} alt="img" key={i} width={150}  />
                  </Box> )
                })
              }
              </Box>
            </Box>
          </Box>
         
        );
      })
      }
      </Container>
    </React.Fragment>
  );
}
