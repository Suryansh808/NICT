import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="bg-zinc-700 text-center pt-[18vh]">
         <h1>Verify Certification</h1>
      </Container>
    </React.Fragment>
  );
}