import React, { useEffect, useState } from "react";

const Certification = () => {
  const [certifications, setCertifications] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/certificates")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCertifications(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="main w-full p-2 flex flex-wrap">
        {certifications
          ? certifications.map((item, index) => (
              <div
                key={index}
                className="cardContainer p-2 w-[30%] border-2 rounded-lg   shadow-xl shadow-xl m-2"
              >
                <p>
                  <strong>Certificate No:</strong>
                  {item.certificatenumber}
                </p>
                <p>
                  <strong>Student Name:</strong>
                  {item.name}
                </p>
                <p>
                  {" "}
                  <strong>Course: </strong>
                  {item.course}
                </p>
                <p>
                  {" "}
                  <strong>Grade: </strong>
                  {item.grade}
                </p>
                <p>
                  {" "}
                  <strong>Course Duration: </strong>
                  {item.duration}
                </p>
                <p>
                  {" "}
                  <strong>Branch: </strong>
                  {item.branch}
                </p>
                <p>
                  {" "}
                  <strong>Date of Issued: </strong>
                  {item.dateissued}
                </p>
                <p>
                  {" "}
                  <strong>Remark: </strong>
                  {item.remark}
                </p>
                <p>
                  {" "}
                  <strong>Subject: </strong>
                  {item.subject}
                </p>
                <p>
                  {" "}
                  <strong>Mobile No: </strong>
                  {item.mobilenumber}
                </p>
                <p>
                  {" "}
                  <strong>Email Id: </strong>
                  {item.email}
                </p>
              </div>
            ))
          : "Loading..."}
      </div>
      {/* <div className="w-full h-[100px] bg-zinc-900"></div> */}
    </>
  );
};

export default Certification;
