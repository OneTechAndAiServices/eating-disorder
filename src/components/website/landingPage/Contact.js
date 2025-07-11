"use client";
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        height: { xs: "auto", md: "280px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        px: 2,
        textAlign: "center",
        pt: 6,
        pb: 6
      }}
    >
      <Typography
        sx={{
          color: "var(--bg-container)",
          fontWeight: 700,
          fontSize: { xs: "10px", md: "12px" },
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        Your Trusted ED Recovery Coach
      </Typography>

      <Typography
        sx={{
          color: "var(--white-bg)",
          fontWeight: 400,
          fontSize: { xs: "25px", md: "30px" },
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
          fontSize: { xs: "13px", md: "15px" },
          fontFamily: "var(--font-family-hand)",
        }}
        data-aos="fade-down"
      >
        If you're ready to explore how coaching can support your recovery, get.
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
        in touch to book a  free 20 minute discovery call with Safia now
      </Typography>

      <Box sx={{ display:'flex' , flexDirection:"row", justifyContent:"center", gap:2}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--bg-container)",
            // width: { xs:"150px", md: "200px" },
            // height: { xs:"40px", md: "50px" },
            gap: 1,
            cursor: "pointer",
            borderRadius: "60px",
            p: "8px",
            mt: 2,
          }}
          data-aos="fade-up"
          suppressHydrationWarning
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "10px", md: "15px" },
              fontFamily: "var(--font-family-hand)",
            }}
          >
            Message
          </Typography>
          <IconButton sx={{ backgroundColor: "black" }} >
            <EmailIcon sx={{ color: "var(--white-bg)", fontSize: { xs: '12px', sm: "18px" } }} />
          </IconButton>
        </Box>

        {/* .............. */}


        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--bg-container)",
            // width: { xs:"150px", md: "200px" },
            // height: { xs:"40px", md: "50px" },
            gap: 1,
            cursor: "pointer",
            borderRadius: "60px",
            p: "8px",
            mt: 2,
          }}
          data-aos="fade-up"
          suppressHydrationWarning
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "10px", md: "15px" },
              fontFamily: "var(--font-family-hand)",
            }}
          >
            Instagram
          </Typography>
          <IconButton sx={{ backgroundColor: "black" }} >
            <InstagramIcon sx={{ color: "var(--white-bg)", fontSize: { xs: '12px', sm: "18px" } }} />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
}

export default Contact;
