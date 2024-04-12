import React from 'react';
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
import Footer from './Footer';
import GoogleCertification from './GoogleCertification';
import YearExperience from './YearExperience';

const Home = () => {
  return (
    <div className='font-[Gilroy]  pt-[15vh]'>
      <div data-scroll data-scroll-section data-scroll-speed=".2" className="swiper">
         <Swiper
             modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
             autoplay={{autoplay:true}}
             loop>
      <SwiperSlide className="image1">
          <img src={Img1} alt="" />
      </SwiperSlide>
      <SwiperSlide className="image1">
        <img src={Img2} alt="" id="image2"/>
      </SwiperSlide>
      <SwiperSlide className="image1">
        <img src={Img3} alt="" id="image3"/>
        </SwiperSlide>
      <SwiperSlide className="image1">
        <img src={Img4} alt="" id="image4"/>
        </SwiperSlide>
        <SwiperSlide className="image1">
        <img src={Img5} alt="" id="image4"/>
        </SwiperSlide>
        <SwiperSlide className="image1">
        <img src={Img6} alt="" id="image4"/>
        </SwiperSlide>
    </Swiper>
      </div>
      <GoogleCertification/>
      <YearExperience/>
      <Footer/>
  </div>
  )
}

export default Home;
