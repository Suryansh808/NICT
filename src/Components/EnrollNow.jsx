
import {Dialog, DialogContent, DialogTitle,} from "@mui/material";


export default function EnrollNow({openEnroll , setOpenEnroll , NewCourse}) {
  return (
    <Dialog open={openEnroll}>
    <div className="enroll font-[Montserrat] bg-gradient-to-b from-yellow-600 to-yellow-300">
    <DialogTitle>
        <h1 className="font-semibold text-center text-white">Enroll Now</h1>
      </DialogTitle>
      <DialogContent >
        <div>
          <form>
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="text" placeholder='Name'/><br />
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="email" placeholder='Email Address' required/><br />
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="number" placeholder='Mobile Number'/><br />
            <div className="w-full flex items-center justify-center hover:border-teal-800 bg-[#ffffff] text-black rounded-md mb-2 p-2"><h2 className='font-semibold mr-1'>Course: </h2> {NewCourse.current.courseName}</div>
             <div className="flex items-center justify-center text-white">
             <button  className="w-40 mr-2 border rounded-md mb-2 p-2 hover:border-teal-800" type="submit" >Submit</button>
            <button className="w-40  border rounded-md mb-2 p-2 hover:border-teal-800" onClick={() => setOpenEnroll(false)} color="primary">Close</button>
             </div>
          </form>
        </div> 
      </DialogContent>
    </div>
    </Dialog>
  );
}