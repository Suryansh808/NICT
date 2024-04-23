import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Courses from "./Components/Courses";
import OurServices from "./Components/OurServices";
import OurAchievers from "./Components/OurAchievers";
import Gallery from "./Components/Gallery";
import JobUpdate from "./Components/JobUpdate";
import Certification from "./Components/Certification";
import ContactUs from "./Components/ContactUs";
import VerifyCertificate from "./Components/VerifyCertificate";
import Footer from "./Components/Footer";
import SocialMedia from "./Components/SocialMedia";
import ReadMoreCourseDetails from "./Components/ReadMoreCourseDetails";



const App = () => {



  return (
    <div className=''>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/OurAchievers" element={<OurAchievers />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/JobUpdate" element={<JobUpdate />} />
          <Route path="/Certification" element={<Certification />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/VerifyCertificate" element={<VerifyCertificate />} />
          <Route path="/ReadMoreCourseDetails" element={<ReadMoreCourseDetails/>} />
        </Routes>
        <SocialMedia/>
        <Footer />
      </HashRouter>
    </div>
  );
};
export default App;
