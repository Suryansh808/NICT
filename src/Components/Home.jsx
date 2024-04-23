import React,{useEffect} from 'react';
import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Img1 from '../assets/acc.webp';
import Img2 from '../assets/dm.webp';
import Img3 from '../assets/fm.webp';
import Img4 from '../assets/h&n.webp';
import Img5 from '../assets/m&a.webp';
import Img6 from '../assets/pl.webp';
import GoogleCertification from './GoogleCertification';
import YearExperience from './YearExperience';
import AOS  from "aos";
import  "aos/dist/aos.css";

const Home = () => {
  useEffect(()=>{
    AOS.init({duration :1000});
    AOS.refresh();  
  },[])
  
  return (
    <>
    <div  className='pt-[15vh]'>
          <div data-aos="zoom-in" className="">
         <Swiper
             modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
             autoplay={{autoplay:true}}
             loop
             className='w-full h-full object-cover'
             >
      <SwiperSlide>
        <img src={Img1} alt="slider_image"/> 
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt="slider_image"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt="slider_image"/>
        </SwiperSlide>
      <SwiperSlide>
        <img src={Img4} alt="slider_image"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img5} alt="slider_image"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img6} alt="slider_image"/>
        </SwiperSlide>
    </Swiper>
          </div>
          <GoogleCertification/>
          <YearExperience/>
    </div>
  </>
  )
}

export default Home;
