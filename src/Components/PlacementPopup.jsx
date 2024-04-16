import React, { useState, useEffect } from "react";
import {Dialog,DialogContent,DialogTitle,} from "@mui/material";
import axios from 'axios';


const PopUp = ({Popup, setPopup }) => {
  const [regNo , setRegNo] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [degree, setDegree] = useState();
  const [course, setCourse] = useState();

 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Course")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);
   
  const handleForm = (e) => {
    e.preventDefault();
     
    const StudentData ={regNo, name, email, mobile, degree, course}

   axios.post("http://152.70.77.243:3000/placement/addPlacement" , StudentData)
   .then((res)=>{
     alert("data saved");
     setRegNo("")
     setName("");
     setEmail("");
     setMobile("");
     setDegree("");
     setCourse("");
     setPopup(false);
   })
   .catch((err)=>{
     console.log(err);
   })
 };




  return (
    <Dialog open={Popup}>
     <div className='bg-gradient-to-t from-blue-300 to-blue-400 font-[Montserrat]'>
     <DialogTitle>
        <div className='text-center text-xl font-semibold capitalize text-white'>Placement Details</div>
      </DialogTitle>
      <DialogContent>
        <div className="border-t-2 pt-2">
          <form className="flex flex-col gap-2">
          <input
              placeholder="NICT Reg.No"
              className="border rounded-md w-80 p-2"
              type="text"
              id="regNo"
              name="regNo"
              required
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
            <input
              placeholder="Enter your name.."
              className="border rounded-md w-80 p-2"
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter your email id.."
              className="border rounded-md w-80 p-2"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Enter your mobile no.."
              className="border rounded-md w-80 p-2"
              type="number"
              id="mobile"
              name="mobile"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              className="border rounded-md w-80 p-2"
              type="text"
              placeholder="Degree.."
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              name="degree"
              id="degree"
            ></input>
            <select
              className="border rounded-md w-80 p-2"
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
               <option className='border rounded-md w-80 p-2' value="">Course done at NICT</option>
              {data.map((item, index) => {
                return (
                  <>
                    <option value={`${item.title}`} key={index}>
                      {item.title}
                    </option>
                  </>
                );
              })}
            </select>
            <div className="flex items-center justify-center  gap-2 pt-3">
              <button className='bg-[#68a7fa] px-4 py-1 rounded-md text-white text-lg font-semibold' color="primary" onClick={handleForm}>
                Submit
              </button>
              <button className='bg-[#68a7fa] px-4 py-1 rounded-md text-white text-lg font-semibold' onClick={() => setPopup(false)} color="primary">
                Close
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
     </div>
    </Dialog>
  );
};

export default PopUp;
