import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({openIt , setOpenIt}) {

  const handleClose = () => {
    setOpenIt(false);
  };

   const handleSubmit = (e) =>{
       e.preventDefault();
   }

   

  return (
    <React.Fragment>
      <Dialog
        open={openIt}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <div className="get_in_touch flex items-center justify-center gap-2 w-full   ">
          <div className="form w-1/2 ">
          <DialogTitle><h1 className='font-bold text-xl text-[#90caf6] text-center uppercase'>Get In Touch</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form  action="/sendmail" method="post" onSubmit={handleSubmit}>
                <input className='border border-[#90caf6] px-3 py-1  w-full mb-2 rounded-md' type="text" name="name" id="name" placeholder="Enter your Name..." /><br />
                <input className='border border-[#90caf6] px-3 py-1  w-full mb-2 rounded-md' type="email" name="email" id="email" placeholder="Enter your email-id..." /><br />
                <input className='border border-[#90caf6] px-3 py-1  w-full mb-2 rounded-md' type="number" name="number" id="number" placeholder="Enter your number" /> <br />
                <textarea className='border border-[#90caf6] px-3 py-1  w-full mb-2 rounded-md' name="msg" id="msg" cols="30" rows="8" placeholder="Message..."></textarea>
                 <div className="btn flex gap-2">
                  <button className='px-4 py-1 rounded-lg bg-[#90CAF6] shadow-lg text-white capitalize font-bold text-lg' onClick={handleClose}>Close</button>
                   <button className='px-4 py-1 rounded-lg bg-[#90CAF6] shadow-lg text-white capitalize font-bold text-lg' onClick={handleClose}>Submit</button>
                 </div>  
            </form>
          </DialogContentText>
        </DialogContent>
          </div>
          <div className="illustrated w-1/2 overflow-hidden ">
            <img className='w-full h-full bg-cover hover:scale-110 transition-all duration-500' src="https://i.pinimg.com/564x/e5/1e/91/e51e911ff1c317cf039080c55f3db09b.jpg" alt="ContactUs" />
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}