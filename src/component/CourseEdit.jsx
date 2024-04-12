import React, { useState, useEffect } from "react";
import { Link, useParams , useNavigate  } from "react-router-dom";

const CourseEdit = () => {
  const  {Cid } = useParams();
  const navigate = useNavigate();
  console.log(Cid);

  useEffect(() => {
    fetch("http://localhost:7000/CourseDetails/" + Cid)
      .then((res) => {
        return res.json();
      }).then((resp) => {
        setId(resp.id);
        // setImage(resp.image);
        setName(resp.name);
        setPrice(resp.price);
        setDuration(parseInt(resp.duration));
        setDescription(resp.description);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  // const [image , setImage] = useState(null);

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
    const CourseData = { id, name, price, duration, description };
    fetch("http://localhost:7000/CourseDetails/"+ Cid , {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(CourseData),
    }).then((res) => {
        alert("Data Successfully");
        console.log(res);
        navigate('/AdminPanel/Course');
      })
      .catch((error) => {
        console.log(error, "Error!");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div class="w-full max-w-[300px] bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            Course Edit
          </h2>
          <form class="flex flex-col">
          {/* <input
              type="file"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Image"
              value={image}
              onChange={handleInputChangeImage}
            /> */}
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Id"
              value={id}
              // disabled="disabled"
              onChange={handleInputChangeId}
            />
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course Name"
              value={name}
              onChange={handleInputChangeName}
            />
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course fee"
              value={price}
              onChange={handleInputChangePrice}
            />
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Course Duration"
              value={duration}
              onChange={handleInputChangeDuration}
            />
            <input
              type="text"
              class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Company Description"
              value={description}
              onChange={handleInputChangeDescription}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Save
            </button>
            <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4  hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
              <Link to="/AdminPanel/Course">Back</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseEdit;
