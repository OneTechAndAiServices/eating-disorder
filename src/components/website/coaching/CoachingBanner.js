"use client";
import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function CoachingBanner() {

       useEffect(() => {
      AOS.init({
        duration: 500,
        once: true,
      });
    }, []);

  return (
   <>
     <Box
      sx={{
        backgroundColor: "#E2DEC8",
        width: '100%',
        height: { xs: "150px", sm: "180px", md: "200px" },
        display: 'flex',
        justifyContent: 'center',
        position: 'relative', 
      }}
    >
      <Typography
        sx={{
          fontFamily: "var(--font-family-hand)",
          fontSize: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
          fontWeight: 400,
          lineHeight: 1,
          position: 'absolute',
          top: { xs: '70px', sm: '80px', md: '90px' }, 
        }}
      >
        Coaching
      </Typography>
    </Box>
   </>
  )
}

export default CoachingBanner