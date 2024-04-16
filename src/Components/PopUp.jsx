import React, { useState, useEffect } from "react";
import {Dialog,DialogContent,DialogTitle,} from "@mui/material";
import axios from "axios";

const PopUp = ({ openPopup, setOpenPopup }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [details, setDetails] = useState("");
  const [course, setCourse] = useState("");
  

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

   const handleSubmitForm = (e) =>{
       e.preventDefault();

       const newStudent = { name, email, mobile, details, course};

      axios.post("http://152.70.77.243:3000/internship/addInternship", newStudent)
      .then((res) => {
        alert(`Data saved`);
         setName("");
         setEmail("");
         setDetails("");
         setMobile("");
         setCourse("");
         setOpenPopup(false);
        throw new Error("Network response was not ok.");
      }).catch((error) => {
        console.error("Error submitting form:", error);
      });
   }
  return (
    <Dialog open={openPopup}>
      <div  className="bg-gradient-to-t from-teal-600 to-teal-900 rounded shadow-lg overflow-hidden font-[Montserrat]">
      <DialogTitle>
        <div className='text-white text-xl font-bold text-center uppercase'>InternShip</div>
      </DialogTitle>
      <DialogContent>
        <div className="border-t-2 pt-2  ">
          <form className="flex flex-col gap-2">
            <input
              placeholder="Enter your name.."
              className="border outline-none rounded-md w-80 p-2"
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Enter your email id.."
              className="border outline-none rounded-md w-80 p-2"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Enter your mobile no.."
              className="border outline-none rounded-md w-80 p-2"
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
              placeholder="Degree details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              name="details"
              id="details"
            ></input>
            {/* <input
              className="border outline-none rounded-md w-80 p-2"
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              name="branch"
              id="branch"
            ></input> */}
            <select
              className="border outline-none rounded-md w-80 p-2"
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
               <option value="">Select course here..</option>
              {data.map((item, index) => {
                return (
                  <>
                    {
                      (item.title.includes("Programming") || item.title.includes("Office Essentials & Accounts") || item.title.includes("Web Designing") )&&
                     (<option value={`${item.title}`} key={index}>
                      {item.title}
                       </option>) 
                    }
                  </>
                );
              })}
            </select>
            <div className="flex items-center justify-center gap-2 pt-3">
              <button className='bg-teal-900 px-4 py-1 text-white rounded-md font-bold text-xl' color="primary" onClick={handleSubmitForm} >
                Submit
              </button>
              <button className='bg-teal-900 px-4 py-1 text-white rounded-md font-bold text-xl' onClick={() => setOpenPopup(false)} color="primary">
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
