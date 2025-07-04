"use client";
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
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
    <Box>
        <Grid container display={"flex"} flexDirection={"row"} spacing={{ xs:6, sm:0}}
          sx={{
            py: { xs: 4, md: 8 },
          }}>
          {/* left text */}
          <Grid size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: { xs: 2, md: 4, lg: 2 },
            }}
            >
            <Box sx={{ position: "relative", display: "inline-block" }}>
              {/* Title Line */}
              <Typography
                sx={{
                  fontFamily: "var(--font-family-hand)",
                  fontSize: { xs: "25px", sm: "30px", md:"35px" , lg: "40px" },
                  fontWeight: 450,
                  lineHeight: 1.5,
                  textAlign: { xs: 'center', sm: "start" },
                }}
              >
                Your Eating Disorder{' '}

                {/* Highlighted Text with Vector */}
                <Box component="span" sx={{ position: "relative", display: "inline-block" }}>
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "var(--font-family-hand)",
                      fontSize: { xs: "25px", sm: "30px", md:"35px" , lg: "40px" },
                      fontWeight: 450,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    Recovery Coach
                  </Typography>

                  {/* Vector Behind Text */}
                  <Box
                    component="img"
                    src="/images/vector.png"
                    alt="Vector Image"
                    sx={{
                      position: "absolute",
                      bottom: "-4px", // Tweak to get exact positioning
                      left: 0,
                      width: "100%",
                      height: "auto",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: "var(--font-family-quicksand)", fontSize: { xs: "13px", sm: "18px", md: "22px" }, fontWeight: 400, lineHeight: "40px", mt:2 }}>
              Today For Women in Eating Disorder Recovery Who Are Done with Half-Measures—This is How Breakthroughs Happen.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--bg-container)",
                width: { xs: "150px", md: "200px" },
                height: { xs: "40px", md: "50px" },
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
                  fontSize: { xs: "10px", md: "15px" },
                  fontFamily: "var(--font-family-hand)",
                }}
              >
                Schedule a Call
              </Typography>
              <img
                src="/images/whatsapp.png"
                width={{ xs: "25px", md: "30px" }}
                height="30px"
                alt="WhatsApp Icon"
              />
            </Box>
          </Grid>

          {/* ............................. */}
          {/* Right Image */}
          <Grid size={{ xs: 12, sm: 6 }} pl={{ xs: 2, sm: 0 }}>
            <Box
              component="img"
              src="/images/coachingbanner.jpg"
              alt='Coaching Banner'
              sx={{
                width: "100%",
                height: { xs: "300px", md: "390px", lg: "520px" },
                objectFit: "cover",
                borderTopLeftRadius: "100px",
                borderBottomLeftRadius: "100px",
                display: 'block',
              }}
            />
          </Grid>
        </Grid>
      </Box>
  )
}

export default Container