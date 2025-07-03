"use client";
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutContact() {
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
        px:{xs:2, sm:10, md:22 } , 
        textAlign: "center",
        pt:6,
        pb:6,
        overflow:"hidden",
        position:"relative"
      }}
    >
  

      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs:"25px", md: "30px" }, 
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        If you're searching for an "eating disorder coach near me" or an "ED recovery coach online",
         I'd love to help. Reach out today—your recovery is possible. 💛
      </Typography>

     

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg-container)",
          width: { xs:"150px", md: "200px" },
          height: { xs:"40px", md: "50px" },
          gap: 1,
          cursor: "pointer",
          borderRadius: "60px",
          p: "10px 12px 10px 12px",
          mt: 2,
        }}
        data-aos="fade-up"
         suppressHydrationWarning
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize:{xs:"10px", md: "15px" },
            fontFamily: "var(--font-family-hand)",
          }}
        >
          Contact Me Today
        </Typography>
        <img
          src="/images/whatsapp.png"
          width= {{ xs:"25px", md:"30px" }}
          height="30px"
          alt="WhatsApp Icon"
        />
      </Box>
    </Box>
    </>
  )
}

export default AboutContact