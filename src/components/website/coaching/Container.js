"use client";
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Container() {
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
        backgroundColor: "#1E1E1E",
        width: "100%",
        height:  { xs:"auto", md:"280px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        px: 2,
        textAlign: "center",
        pt:6,
        pb:6
      }}
    >


      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs:"25px", md: "30px", lg:"35px" }, 
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
       Eating Disorder Recovery Coaching Look Like?
      </Typography>

      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs:"13px", md: "20px" },
          fontFamily: "var(--font-family-quicksand)",
          lineHeight:"30px",
          textAlign:{ xs:"justify" , md: "center" },
          px:{ xs:0 , md:10 }
        }}
        data-aos="fade-down"
      >
       <span style={{ fontWeight:700}}> At Safia Recovery, </span> I provide personalized eating disorder coaching tailored to your unique needs. After an in-depth assessment and collaboration with you (and your treatment team, if applicable),
        I'll create a holistic recovery plan that combines mindset shifts, behavioral strategies, and compassionate accountabilit to help you reclaim freedom with food and your body.
      </Typography>

      
    </Box>
    </>
  )
}

export default Container