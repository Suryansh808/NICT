import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
// import { IoSearch } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AOS  from "aos";
import  "aos/dist/aos.css";



export default function SimpleContainer() {
  const [data, setData] = useState();
  const [courseData, setCourseData] = useState(null);
  const [searchInput, setSearchInput] = useState();
  const [progress, setProgress] = React.useState(0);

 

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

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

  const handleClick = (item) => {
    setCourseData(item);
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCourseData(filteredData.length > 0 ? filteredData[0] : null);
  };

  const navigate = useNavigate();
  let handleReadMore = (contentItem, el) => {
    navigate("/ReadMoreCourseDetails", { state: { contentItem, el } });
  };
   
  useEffect(()=>{
    AOS.init({duration :1000});
    AOS.refresh();  
  },[])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="font-[Montserrat] pt-[15vh] ">
        <div className="grid grid-cols-12 h-[78vh] overflow-hidden">
          {!data ? (
            <Box sx={{ width: "100vw" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          ) : (
            <>
              <div className="col-span-12">
                 <div className=''>
                  <div data-aos="fade-down" className="flex items-center justify-center p-3">
                   <div className=' relative inline-block shadow-lg w-[25vw] rounded-xl overflow-hidden'>
                   <input
                      type="search"
                      value={searchInput}
                      onChange={handleSearch}
                      placeholder="Search course here....."
                      className="w-full rounded-xl px-3  border border-slate-950"
                    />
                    {/* <IoSearch className="absolute z-10" /> */}
                   </div>
                  </div>
                </div>
              </div>
              <div className="px-2 py-3  overflow-y-scroll no-scrollbar col-span-3">
                <div data-aos="zoom-in">
                  <ul>
                    {data.map((group, index) => (
                      <li key={index} className="pb-1">
                        <button
                          className="border-2 hover:scale-105 ease-linear duration-300 shadow-sm flex items-center gap-2 bg-zinc-100 w-full px-1 text-left rounded-md"
                          onClick={() => handleClick(group)}>
                          <span className='hover:scale-125 ease-linear duration-300'><BsFillArrowRightCircleFill/></span>
                          {group.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div data-aos="zoom-in" className="overflow-y-scroll no-scrollbar col-span-9">
                {courseData ? (
                  <div className="w-full p-2 flex items-center justify-start gap-2 flex-wrap">
                    {courseData.content.map((contentItem, contentIndex) => (
                      <div                       
                        key={contentIndex}
                        className="w-[20vw]  hover:scale-105 ease-linear duration-500 border-2 bg-white shadow-xl rounded-md overflow-hidden"
                      >
                        <img
                          src={contentItem.image}
                          alt="image"
                          className="w-[100%]"
                        />
                        <div className="p-2 text-black">
                          <h4 className="text-md font-bold tracking-tighter ">
                            {contentItem.courseName}
                          </h4>
                          <p className="text-sm py-2">{contentItem.category}</p>
                          <p className="line-clamp-2 tracking-tighter">
                            {contentItem.description}
                          </p>
                          <p>
                            <span>&#8377;</span> {contentItem.price}
                          </p>
                          <p>{contentItem.duration}</p>
                        </div>
                        <button
                          onClick={() => handleReadMore(contentItem)}
                          className="relative group cursor-pointer text-sky-50  overflow-hidden  w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                        >
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                          <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                          <p className="z-10 text-bold text-xl">Read more</p>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-start px-2 py-3 flex-wrap overflow-y-scroll no-scrollbar col-span-9">
                    {data.map((elem, index) => {
                      return elem.content.map((el, idx) => {
                        return (
                          <div>
                            {(el.category.includes("Programming") ||
                              // el.category.includes("SAP") ||
                              el.category.includes("Web Designing")) && (
                              <div key={`elem_${index}_${idx}`}  className="w-[20vw]  hover:scale-105 ml-1 ease-linear duration-500 border-2 bg-white shadow-xl rounded-md overflow-hidden">
                                <img
                                  src={el.image}
                                  alt="image"
                                  className="w-[100%]"
                                />
                                <div className="p-2 text-black">
                                  <h4 className="text-md font-bold tracking-tighter ">
                                    {el.courseName}
                                  </h4>
                                  <p className="text-sm py-2">{el.category}</p>
                                  <p className="line-clamp-2 tracking-tighter">
                                    {el.description}
                                  </p>
                                  <p>
                                    <span>&#8377;</span> {el.price}
                                  </p>
                                  <p>{el.duration}</p>
                                </div>
                                <button
                                  onClick={() => handleReadMore(el)}
                                  className="relative group cursor-pointer text-sky-50  overflow-hidden  w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
                                >
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
                                  <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
                                  <p className="z-10 text-bold text-xl">
                                    Read more
                                  </p>
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      });
                    })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}
