import React ,{useEffect , useState} from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import GetInTouch from './GetInTouch';
import AOS  from "aos";
import  "aos/dist/aos.css";

function SocialMedia() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(()=>{
    AOS.init({duration :1500 , delay :100});
    AOS.refresh();  
  },[])
  
  return (
    <div  className="social-media font-[Montserrat]">
       <div className="rotate-90 fixed top-[25vh] z-50 -right-[5vw]  p-4"><button data-aos='fade-left'  onClick={handleClickOpen} class="bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-4 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:animate-pulse active:animate-bounce">Quick Enquiry</button>
       <GetInTouch openIt={open} setOpenIt={setOpen}/>
       </div>
       <div className="fixed top-[45vh] z-50 -right-[0.7vw]">
    
      <div class="flex flex-col items-center justify-center">
  <button data-aos='fade-left'
    class="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded text-xl px-4 py-3 text-center mr-2 mb-1"
    type="button"
  >
   <FaFacebook className='hover:scale-125' />
  </button>
  <button data-aos='fade-left'
    class="text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded text-xl px-4 py-3  text-center mr-2 mb-1"
    type="button"
  >
     <FaYoutube className='hover:scale-125 '/>
  </button>
  <button data-aos='fade-left'
    class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded text-xl px-4 py-3 text-center mr-2 mb-1"
    type="button"
  >
    <FaLinkedin className='hover:scale-125' />
  </button>
  <button data-aos='fade-left'
    class="text-white bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded text-xl px-4 py-3 text-center mr-2 mb-1"
    type="button"
  >
    <FaInstagram className='hover:scale-125' />
  </button>
  <button data-aos='fade-left'
    class="text-white bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded text-xl px-4 py-3 text-center mr-2 mb-1"
    type="button"
  >
    <IoLogoWhatsapp className='hover:scale-125' />
  </button>
</div>

       </div>
    </div>
  )
}

export default SocialMedia;
