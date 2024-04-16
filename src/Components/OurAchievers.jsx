import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';

export default function FixedContainer() {
  
     const student = [
           {name:"John Doe", rating:4, image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D", feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, explicabo!"},
           {name:"Riya Smith", rating:3 ,image:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D", feedback:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, explicabo!"}
     ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="w-full pt-[15vh] font-[Montserrat]">
       <div className="w-full relative flex items-center justify-start gap-2 pt-6">
        {
          student.map((item , index) =>{
            return  <div key={index}>
                      <div className="group border-2 before:hover:scale-95 before:hover:h-72  before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                      <div className="w-28 h-28  mt-8 rounded-full overflow-hidden border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-[8vw]  group-hover:-translate-y-[8vh] transition-all duration-500">
                      <img src={item.image} alt="student_image" />
                      </div>
                      <div className="z-10 flex flex-col items-center justify-center  group-hover:-translate-y-5 transition-all duration-500">
                      <span className="text-2xl font-semibold">{item.name}</span>
                      <span className='text-[1rem]'><Rating name="half-rating" defaultValue={item.rating} /></span>
                      <p className='leading-tight'>{item.feedback}</p>
                      </div>       
                    </div>
               </div>
          })
        }
      
       </div>
      </Container>
    </React.Fragment>
  );
}