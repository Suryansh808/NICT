import React , {useState , useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import AOS  from "aos";
import  "aos/dist/aos.css";

export default function FixedContainer() {

  const [data , setData] = useState();

     useEffect(() =>{
         fetch("http://localhost:3001/Gallery")
         .then(response => response.json())
         .then((resp)=>{
           setData(resp);
          }).catch((error)=>{
            console.log(error);
         })
     },[])
       
     useEffect(()=>{
      AOS.init({duration :1500 , delay :100});
      AOS.refresh();  
    },[])
    
   
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[15vh]">
        <div data-aos='fade-down' className='w-full rounded-md overflow-hidden shadow-2xl'>
          <img className='w-full hover:scale-105 ease-linear duration-300' src="https://media.licdn.com/dms/image/D4D3DAQHGN71finBS9A/image-scale_191_1128/0/1697710235886/nict_computer_education_pvt_ltd_cover?e=2147483647&v=beta&t=42r_odZ1cDMP6SbxlzdL_N8EhUr2ksfhcEV4aCfzzxI" alt="" />
        </div>
        <div className="w-full mt-10 p-5">
         {
          !data ? ( <Box sx={{ display: 'flex'}} className="flex items-center justify-center top-1/2"><CircularProgress /></Box>) :
          data.map((item , index) =>{
            return (
              <div key={index} className="w-full mb-2 p-3 flex  items-center gap-3">
              {
                item.Images.map((img , i) =>{
                  return (<div data-aos='flip-left' key={i} className=' w-[25vw] h-[30vh] bg-cover overflow-hidden'><img className='w-full h-full hover:scale-110 ease-linear duration-300' src={img} alt="image" /></div>)
                })
              }
              </div>
            )
          })
         }
          
        </div>
      </Container>
    </React.Fragment>
  );
}