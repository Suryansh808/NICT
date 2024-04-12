// import React,{useState , useEffect} from 'react';
import {Dialog, DialogContent, DialogTitle,} from "@mui/material";


export default function EnrollNow({openEnroll , setOpenEnroll , NewCourse}) {
    // const [data, setData] = useState([]);
    // const [course, setCourse] = useState();
    // console.log(setNewCourse);
    console.log(NewCourse.current.courseName);

  // useEffect(() => {
  //   fetch("http://localhost:3001/Course")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Dialog open={openEnroll}>
      <DialogTitle>
        <div>Enroll Now..</div>
      </DialogTitle>
      <DialogContent >
        <div>
          <form>
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="text" placeholder='Name'/><br />
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="email" placeholder='Email Address' required/><br />
            <input className="w-full border rounded-md mb-2 p-2 focus:border-teal-800" type="number" placeholder='Mobile Number'/><br />
            {/* <select
             className="w-full border rounded-md mb-2 p-2 focus:border-teal-800"
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
               <option value="Select course here">Select course here..</option>
              {
              data.map((item, index) => {
                return (
                  <>
                    <option value={`${item.title}`} key={index}>
                      {item.title}
                    </option>
                  </>
                );
              })
             
              }
              
            </select><br /> */}
            <div className="w-full flex items-center border rounded-md mb-2 p-2 focus:border-teal-800"><h2 className='font-semibold mr-1'>Course: </h2> {NewCourse.current.courseName}</div>
            <button  className="w-40 mr-2 border rounded-md mb-2 p-2 hover:border-teal-800" type="submit" >Submit</button>
            <button className="w-40  border rounded-md mb-2 p-2 hover:border-teal-800" onClick={() => setOpenEnroll(false)} color="primary">Close</button>
          </form>
        </div>
           
      </DialogContent>
    </Dialog>
  );
}