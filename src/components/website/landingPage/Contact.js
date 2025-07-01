"use client";
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);


  return (
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
          color: "var(--bg-container)",
          fontWeight: 700,
          fontSize: { xs:"10px", md: "12px" },
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        Safia Recovery – Your Trusted ED Recovery Coach
      </Typography>

      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs:"25px", md: "30px" }, 
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        Ready to Start Your Journey?
      </Typography>

      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs:"13px", md: "15px" },
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        Your recovery begins with one brave click. Let’s build your freedom plan
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
        today – no more waiting, no more struggling.
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
  );
}

export default Contact;
