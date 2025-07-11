"use client";
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Recovery() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);


  return (
    <Box sx={{ backgroundColor: "var(--bg-container)", width: "100%", py: 6 }}>

      {/* Title Section */}
      <Box textAlign={{ xs: "center", sm: "start" }} mb={4} mx={4}>
        <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: { xs: "14px", md: "18px" } }} data-aos="fade-down">
          Real stories from individuals who’ve found Recovery
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          gap={2}
          mt={1}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-family-birthstone)",
              fontWeight: 400,
              fontSize: { xs: "32px", md: "70px" },
              whiteSpace: "nowrap", 
            }}
          >
            Voices of Hope and Healing
          </Typography>

          <Box
            sx={{
              border: "2px solid #938B55",
              width: { xs: "80px", md: "120px" },
              height: "0px",
              mt:2
            }}
            data-aos="fade-right"
          />
        </Box>

      </Box>

      {/* Timeline with Stars */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 6
        }}
      >
        {/* Line */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            width: '100%',
            height: '3px',
            backgroundColor: 'var(--white-bg)',
          }}
        />
        {/* Star Icons */}
        {['18%', '50%', '82%'].map((left, index) => (
          <Box
            key={index}
            component="img"
            src="/images/Star 2.png"
            alt="Star Icon"
            sx={{
              position: 'absolute',
              top: '50%',
              left: left,
              transform: 'translate(-50%, -50%)',
              width: '24px',
              height: '24px',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        ))}
      </Box>

      {/* Services Section */}
      <Grid container spacing={6} px={{ xs: 2, md: 4 }}>
        <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
          <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight: 1.7 }}>
            Emily R
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 1, lineHeight: 1.7 }}>
            I felt completely lost before I found this support program. For the first time, I didn’t feel judged — I felt understood. The tools and guidance I received changed my life.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
          <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight: 1.7 }}>
            Sophie T
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 1, lineHeight: 1.7 }}>
            Recovery felt impossible at first, but the compassion and care I received here gave me hope again. I’ve learned to love my body and listen to what it really needs.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up">
          <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight: 1.7 }}>
            Daniel H.
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 1, lineHeight: 1.7 }}>
            This journey wasn’t easy, but I never had to walk it alone. The guidance and empathy I received helped me through my darkest days — and into the light.
          </Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={4}>
        <IconButton
          sx={{
            backgroundColor: "black",
            color: "var(--white-bg)",
            '&:hover': {
              backgroundColor: "var(--white-bg)",
              color: "black",
              boxShadow: "none",
              transition: "all 0.3s"
            }
          }}
        >
          <ArrowBackOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton
          sx={{
            backgroundColor: "black",
            color: "var(--white-bg)",
            '&:hover': {
              backgroundColor: "var(--white-bg)",
              color: "black",
              boxShadow: "none",
              transition: "all 0.3s"
            }
          }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>

    </Box>
  )
}

export default Recovery