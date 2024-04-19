import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [courseName, setCourseName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { fullName, email, completionDate, courseName, additionalInfo });
 
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="pt-[18vh] font-[Montserrat]">
      <div className='w-full'>
      <h2 className='font-semibold text-xl text-center'>Verify Your Certification</h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label htmlFor="fullName">Full Name: </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className='border px-3 py-1 rounded-md mb-2 mr-10'/><br />
        <label htmlFor="email">Email Address:  </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='border px-3 py-1 rounded-md mb-2'   
        /> <br />
        <label htmlFor="completionDate">Date of Completion: </label>
        <input
          type="date"
          id="completionDate"
          value={completionDate}
          onChange={(e) => setCompletionDate(e.target.value)}
          required
           className='border px-3 py-1 rounded-md mb-2 mr-3' /><br />
        <label htmlFor="courseName">Course Name: </label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required className='border px-3 py-1 rounded-md mb-2'/> <br />
        
        <label htmlFor="additionalInfo">Additional Information (optional): </label><br />
        <textarea
          cols={30}
          rows={6}
          id="additionalInfo"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className='border px-3 py-1 rounded-md mb-2'
        /> 
        <br />
        <button type="submit" className='border px-8 bg-blue-700 text-white font-bold text-lg hover:bg-blue-500 py-2 rounded-md mb-2'>Verify</button>
      </form>
    </div>
      </Container>
    </React.Fragment>
  );
}