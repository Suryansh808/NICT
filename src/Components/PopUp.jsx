import {Dialog,DialogContent,DialogTitle,} from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "@mui/joy/Button";

const PopUp = ({ openPopup, setOpenPopup }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [detail, setDetail] = useState();
  const [course, setCourse] = useState();
  const [branch, setBranch] = useState();
  
  const handleForm = () => {
    console.log(
      `name : ${name} , email : ${email} , phone : ${phone},  detail:${detail} , course : ${course}`
    );
    setOpenPopup(false);
    setName("");
    setEmail("");
    setPhone("");
    setDetail("");
    setCourse("");
    setBranch("")
  };

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

  return (
    <Dialog open={openPopup}>
      <div  className="bg-gradient-to-t from-teal-600 to-teal-900 rounded shadow-lg overflow-hidden">
      <DialogTitle>
        <div className='text-white text-xl font-bold text-center uppercase'>InternShip</div>
      </DialogTitle>
      <DialogContent>
        <div className="border-t-2 pt-2  ">
          <form  className="flex flex-col gap-2">
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
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="border rounded-md w-80 p-2"
              type="text"
              placeholder="Degree"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              name="details"
              id="details"
            ></input>
            <input
              className="border outline-none rounded-md w-80 p-2"
              type="text"
              placeholder="Branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              name="details"
              id="details"
            ></input>
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
              <button className='bg-teal-900 px-4 py-1 text-white rounded-md font-bold text-xl' color="primary" onClick={handleForm}>
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
