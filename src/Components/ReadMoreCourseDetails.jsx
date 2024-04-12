import React, {useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import EnrollNow from './EnrollNow';



export default function SimpleContainer() {

  const location = useLocation();
  const contentItem = location.state?.contentItem;
  // console.log(contentItem);


  const handleDownloadCourse = async (contentItem) => {
    if (contentItem.pdf) {
      try {
        const response = await fetch(contentItem.pdf);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${contentItem.pdf}` );
        document.body.appendChild(link);
        link.click();
        alert("Downloading course pdf..."); 
      } catch (error) {
        console.error('Error downloading PDF:', error);
        alert('Error downloading PDF. Please try again later.');
      }
    } else {
      alert('PDF not found for this course');
    }
  };
  
  const [openEnroll, setOpenEnroll] = useState(false);

  const NewCourse = useRef(contentItem);
 
   const handleEnrollForm = () =>{ 
      setOpenEnroll(true); 
       NewCourse.current(contentItem);
   }
 

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="w-full h-screen relative pt-[18vh]">
          <div className="w-full flex flex-wrap justify-between pt-4">
            <div className="content w-1/2 p-2 flex flex-col justify-center">
               <h1 className="text-2xl font-bold leading-tight tracking-tight">{contentItem.courseName}</h1>
                <h2 className="font-bold opacity-[0.8]">{contentItem.category}</h2>
               <h1 className="text-md mt-5 leading-tight tracking-tight capitalize ">{contentItem.description}</h1>
                <div className='flex items-center gap-2'>
                  <h1>
                     &#x20B9;
                    {contentItem.price}</h1>
                   <h1>{contentItem.duration}</h1>
                </div>
               <div className='flex items-center gap-4 mt-5'>               
               <button onClick={() => handleEnrollForm(contentItem)} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-blue-700 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                       Enroll Now
                      <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-700 bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                        Enroll
                      </div>
                </button>
               <button onClick={()=> handleDownloadCourse(contentItem)} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-blue-700 bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
                       Download Course
                      <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-blue-700 bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                        Download
                      </div>
                </button>
             </div>
            </div>
            <div className="img w-1/2 rounded-md overflow-hidden">
              <img className='w-full h-full bg-cover bg-center' src={contentItem.image} alt="CourseImage" />
            </div>
          </div>
          <div className='w-full mt-5'>
            <div className='w-full text-center mb-2'>
              <div className='w-full p-10 border-2'>
              <h1>Who this course is for?</h1>
                  content will come here ...
              </div>
            </div>
            <div className='w-full  text-center mb-2'>
               <div className='w-full p-10 border-2'>
              <h1>Why take this course?</h1>
                  content will come here ...
              </div>
            </div>
            <div className='w-full  text-center mb-2'>
               <div className='w-full p-10 border-2'>
              <h1>What you will learn?</h1>
                  content will come here ...
              </div>
            </div>
            <div className='w-full  text-center mb-2'>
               <div className='w-full p-10 border-2'>
              <h1>Course Content</h1>
                  content will come here ...
              </div>
            </div>
            <div className='w-full  text-center mb-2'>
               <div className='w-full p-10 border-2'>
                  <h1>Description</h1>
                  content will come here ...
              </div>
            </div>

          </div>
         <EnrollNow openEnroll={openEnroll} NewCourse={NewCourse} setOpenEnroll={setOpenEnroll}/>
      </Container>
    </React.Fragment>
  );
}
