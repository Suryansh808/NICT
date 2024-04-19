import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function FixedContainer() {
     
  const courses = [
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/WQ/RW/NP/51318370/microsoft-office-365-software-500x500.jpg',
      title: 'MS Office Course',
      price: '$99',
      certificateBy: 'NICT'
    },
    {
      image: 'https://www.apponix.com/front/images/app-java.jpeg',
      title: 'Java Course',
      price: '$149',
      certificateBy: 'NICT'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAXNJpb5EZgWDQWcvKx12D70N_oYNJxNgpiQUSTuCww&s',
      title: 'Tally Course',
      price: '$79',
      certificateBy: 'NICT'
    },
    {
      image: 'https://media.istockphoto.com/id/1354397311/photo/top-view-of-laptop-with-text-python.webp?b=1&s=170667a&w=0&k=20&c=8Umw4ppPIo6F9hySZBBTrhff6MRRLsqCbYw9juYZHrQ=',
      title: 'Python Course',
      price: '$129',
      certificateBy: 'NICT'
    }
  ];
   
  const handleCertificate = () => {
         alert("u click on course certificate")
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className=" text-center pt-[15vh] font-[Montserrat]">
      <h1 className='font-semibold text-xl py-3'>Available Courses Certificate:</h1>
      <div className='w-full flex items-center justify-between max-sm:flex-wrap gap-2'>
      {courses.map(course => (
        <div onClick={handleCertificate} key={course.title} className='w-[30vw] h-[50vh] cursor-pointer shadow-xl overflow-hidden rounded-md hover:scale-110 ease-linear duration-500'>
          <img className='w-full h-[30vh] object-fill' src={course.image} alt={course.title} />
          <h2 className='pt-2'>{course.title}</h2>
          <p className='pt-2'>{course.price}</p>
          <p className='pt-2 font-semibold'>Certificate by: {course.certificateBy}</p>
        </div>
      ))}
    </div>
      </Container>
    </React.Fragment>
  );
}