"use client";
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
          <Box textAlign= {{ xs:"center", sm:"start" }} mb={4} mx={4}>
            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: {xs:"16px", md:"18px"} }} data-aos="fade-down">
              Proven Services to Guide Your
            </Typography>
            <Box display="flex" justifyContent= {{xs:"center", sm:"start" }} alignItems="center" gap={2} mt={1}>
              <Typography sx={{ fontFamily: "var(--font-family-birthstone)", fontWeight: 400, fontSize: { xs: "40px", md: "70px" } }}>
                Recovery Journey
              </Typography>
              <Box sx={{ border: "2px solid #938B55", width:{ xs:"80px", md:"120px" }, height: "1px", mt: { xs: 1, md: 4 } }} data-aos="fade-right" />
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
          <Grid container spacing={6} px={{ xs: 2, md:4 }}>
            <Grid size={{ xs:12 , md:4 }} data-aos="fade-up">
              <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight:1.7 }}>
                Eating Disorder Coaching
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb:1, lineHeight:1.7 }}>
                Structured coaching gives you real-time tools to stop ED behaviors, rebuild food freedom, and stay supported 24/7.
                No more guessing—just actionable steps that create lasting recovery.
              </Typography>  
            </Grid>
    
            <Grid size={{ xs:12 , md:4 }} data-aos="fade-up">
              <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight:1.7 }}>
                Conquering Bulimia: Self-Paced Online Course
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb:1 ,lineHeight:1.7}}>
                A step-by-step roadmap to overcome bulimia, with practical exercises and mindset shifts for lasting freedom.
              </Typography>
              <Box display={"flex"} justifyContent={"center"} gap={1}>
                 <Typography sx={{ fontWeight: 600, fontSize: "15px", fontFamily: "var(--font-family-quicksand)", cursor:"pointer"}}>
                    Start your Recovery Today 
                </Typography>
                <ArrowForwardIcon/>
                </Box>
            </Grid>
    
            <Grid size={{ xs:12 , md:4 }} data-aos="fade-up">
              <Typography sx={{ fontWeight: 500, fontSize: "20px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb: 2, lineHeight:1.7 }}>
                Coach Mentorship
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "15px", fontFamily: "var(--font-family-hand)", textAlign: "center", mb:1, lineHeight:1.7 }}>
                Guidance for new coaches looking to grow their practice ethically and effectively.
              </Typography>
              <Box display={"flex"} justifyContent={"center"} gap={1}>
                 <Typography sx={{ fontWeight: 600, fontSize: "15px", fontFamily: "var(--font-family-quicksand)", cursor:"pointer"}}>
                    Get Certified Coaching Support 
                </Typography>
                <ArrowForwardIcon/>
                </Box>
            </Grid>
          </Grid>
        </Box>
  )
}

export default Recovery