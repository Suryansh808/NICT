
import React, { useState } from 'react';
// import Certificated from './Certificated';

const AddCertificate = () => {
    const [certificatenumber , setCertificateNumber] = useState("");
const [name , setName] = useState("");
const [course , setCourse] = useState("");
const [grade, setGrade] = useState("");
const [duration , setDuration] = useState("");
const [branch, setBranch] = useState("");
const [dateissued ,setDateIssued] = useState("");
const [remark , setRemark] = useState("");
const [subject , setSubject] = useState("");
const [mobilenumber , setMobileNumber] = useState("");
const [email , setEmail] = useState("");

const handleSubmit = async (e) => {
    e.preventDefault();

    const newCertificate = {
      certificatenumber,
      name,
      course,
      grade,
      duration,
      branch,
      dateissued,
      remark,
      subject,
      mobilenumber,
      email
    };

    try {
     
      const response = await fetch('http://localhost:7000/certificates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCertificate),
      });

      if (response.ok) {
       alert('Certificate added successfully');
       setCertificateNumber("");
       setName("");
       setCourse("");
       setGrade("");
       setDuration("");
       setBranch("");
       setDateIssued("");
       setRemark("");
       setSubject("");
       setMobileNumber("");
       setEmail("");
      } else {
        alert('Failed to add certificate');
      }
    } catch (error) {
      console.error('Error adding certificate:', error);
    }
  };
  return (
    <>
     <div className="certificate-table w-[75%] mt-5 ml-2 text-center border-2 py-2 rounded-md shadow">
            <h1>Add Certificate</h1>
            {/* <table className="w-full text-left rounded shadow-md bg-white">
                <thead className="text-black tracking-wider uppercase shadow-lg bg-blue-200">
                    <tr className="font-bold">
                        <th className="p-3">
                            First name
                        </th>
                        <th className="p-3">
                            Last name
                        </th>
                        <th className="p-3">
                            Date of Birth
                        </th>
                        <th className="p-3">
                            Place
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className="bg-gray-50 border border-collapse hover:bg-red-700 hover:text-white">
                        <td className="p-3 md:p-6">Johnson</td>
                        <td className="p-3 md:p-6">Doe</td>
                        <td className="p-3 md:p-6">04/08/1985</td>
                        <td className="p-3 md:p-6">New York, USA</td>
                    </tr>
                </tbody>
            </table> */}
            <form className='' onSubmit={handleSubmit}>
               <input type="number" value={certificatenumber} onChange={(e)=>setCertificateNumber(e.target.value)} className='border-2 px-1 py-1 m-2 rounded-md outline-none w-[30vw]'  placeholder='Certificate Number (min 5 chars)*' />
               <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='border-2 px-1 py-1 m-2 rounded-md outline-none w-[30vw]' placeholder='Name*' />
               <input type="text" value={course} onChange={(e)=>setCourse(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Course*'/>
               <input type="text" value={grade} onChange={(e)=>setGrade(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Grade*' />
               <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Duration*' />
               <input type="text" value={branch} onChange={(e)=>setBranch(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Branch*' />
               <input type="date" value={dateissued} onChange={(e)=>setDateIssued(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Date Issued*' />
               <input type="text" value={remark} onChange={(e)=>setRemark(e.target.value)} className='border-2 px-1 py-1 m-2  rounded-md outline-none w-[30vw]' placeholder='Remark' />
               <input type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Subject Marks*' />
               <input type="number" value={mobilenumber} onChange={(e)=>setMobileNumber(e.target.value)} className='border-2 px-1 py-1  m-2 rounded-md outline-none w-[30vw]' placeholder='Mobile Number*'/>
               <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 px-1 py-1 m-2  rounded-md outline-none w-[30vw] mr-[43%]' placeholder='Email' /> <br />
               <button className="border-2 px-1 py-1 m-2 rounded-md outline-none w-[50vw] text-white text-lg bg-blue-400 hover:bg-blue-300">Submit</button>
            </form>
         </div>
    </>
  )
}

export default AddCertificate