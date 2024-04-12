import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  // const [image , setImage] = useState(null);

  const navigate = useNavigate();

  // const handleInputChangeImage =(e)=>{
  //   setImage(e.target.files[0]);
  // }

  const handleInputChangeId = (e) => {
    setId(e.target.value);
  };

  const handleInputChangeName = (e) => {
    setName(e.target.value);
  };
  const handleInputChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleInputChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleInputChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const CourseData = {  name, price, duration, description };
    fetch("http://localhost:7000/CourseDetails",{
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(CourseData),
    }).then((res) => {
        alert("Data Saved");
        // console.log(res);
        // setImage(null);
        setName("");
        setPrice("");
        setDuration("");
        setDescription("");
        navigate('/AdminPanel/Course');
      })
      .catch((error) => {
        console.log(error, "Error!");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="w-full max-w-[300px] bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
           Create Course
          </h2>
          <form className="flex flex-col">
          {/* <input
              type="file"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Image"
              // value={image}
              // disabled="disabled"
              onChange={handleInputChangeImage}
            /> */}
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Id"
              value={id}
              disabled="disabled"
              onChange={handleInputChangeId}
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course Name"
              value={name}
              onChange={handleInputChangeName}
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course fee"
              value={price}
              onChange={handleInputChangePrice}
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course Duration"
              value={duration}
              onChange={handleInputChangeDuration}
            />
            <input
              type="text"
              className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Company Description"
              value={description}
              onChange={handleInputChangeDescription}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Save
            </button>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
             <Link to="/AdminPanel/Course">Back</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseCreate;
