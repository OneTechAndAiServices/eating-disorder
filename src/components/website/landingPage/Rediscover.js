'use client';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Rediscover() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <Box sx={{
      width: '100%',
      height: { xs: 'auto', md: '520px' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 4, md: 8 },
      overflow: "hidden",
      position: "relative"

    }}>
      <Grid
        container
        spacing={{ xs: 4, md: 2 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          px: { xs: 2, sm: 2 },
          // pt: 12

        }}
        data-aos="fade-right"
      >
        {/* Left Image Section */}
        <Grid
          size={{ sm: 12, md: 6 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // mb: { xs: 4, md: 0 }

          }}
        >
          <Box sx={{ position: "relative", display: "inline-block" }}>
            {/* Background Border Frame */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: 10, md: 15 },      // adjust offset vertically
                right: { xs: 15, md: 28 },     // adjust offset horizontally
                width: { xs: "200px", sm: "280px", md: "300px" },
                height: { xs: "280px", sm: "360px", md: "400px" },
                // backgroundColor: "#EFEBD2", // light beige/yellow frame color
                border: "6px solid #EFEBD2",
                zIndex: 0,
              }}
            />
            {/* Base Image */}
            <Box
              component="img"
              src="/images/rediscoverrbg.png"
              alt="Main Image"
              sx={{
                width: { xs: "200px", sm: "280px", md: "320px" },
                height: { xs: "280px", sm: "360px", md: "400px" },
                objectFit: 'cover',
                position:"relative"
              }}
            />
            </Box>



        </Grid>

        {/* Right Text Section */}
        <Grid
          size={{ sm: 12, md: 6 }}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            px: { xs: 2, sm: 4, md: 2 },
          }}
          data-aos="fade-left"
        >
          <Typography
            component="div"
            sx={{
              fontSize: { xs: '22px', sm: '26px', md: '30px' },
              fontWeight: 400,
              fontFamily: 'var(--font-family-hand)',
              mb: 3,
              lineHeight: 1.4,
            }}
          >
            Rediscover Freedom with Eating{' '}
            <Box
              component="span"
              sx={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                Disorder Recovery
              </Box>
              <Box
                component="img"
                src="/images/vector.png"
                alt="Underline"
                sx={{
                  position: 'absolute',
                  top: '82%',
                  left: { xs: '58%', sm: '60%', md: '65%' },
                  transform: 'translate(-50%, -50%)',
                  width: { xs: '115%', sm: '120%', md: '130%' },
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            </Box>{' '}
            Coaching
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: "20px" },
              fontFamily: 'var(--font-family-hand)',
              lineHeight: 1.6,
              textAlign: "justify"
            }}
          >
            At <span style={{ fontWeight: 700 }} >Safia Recovery</span>, Rebuild a kinder, more balanced relationship with food and your body
            by growing  awareness, gently shifting unhelpful thoughts and habits, and learning healthier ways to care  for yourself.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Rediscover;