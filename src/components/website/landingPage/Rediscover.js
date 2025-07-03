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
      py: { xs: 4, md: 2 },
      overflow: "hidden", 
      position: "relative"

    }}>
      <Grid
        container
        spacing={{ xs: 0, md: 2 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: '1200px',
          px: { xs: 2, sm: 2 },
          pt: 12
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
            mb: { xs: 4, md: 0 }
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: 280, sm: 320, md: 380 },
              height: { xs: 360, sm: 400, md: 450 },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Base Image */}
            <Box
              component="img"
              src="/images/rediscoverrbg.jpg"
              alt="Main Image"
              sx={{
                width: { xs: "200px", sm: "280px", md: "320px" },
                height: { xs: "280px", sm: "360px", md: "400px" },
                objectFit: 'cover',
              }}
            />

            {/* Overlay Image */}
            <Box
              component="img"
              src="/images/closeupdesert.jpg"
              alt="Overlay"
              sx={{
                position: 'absolute',
                top: { xs: '14%', sm: '16%', md: '13%' },
                left: { xs: "90%", sm: "95%", md: "90%" },
                transform: 'translateX(-50%)',
                width: { xs: "135px", sm: "180px", md: "220px" },
                height: "auto",
                zIndex: 2,
                pointerEvents: 'none',
                border: '6px solid var(--white-bg)',
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
            At <span style={{ fontWeight: 700 }} >Safia Recovery</span>, we provide
            compassionate, evidence-based eating disorder coaching to help women worldwide
            break free from disordered eating and reclaim their lives. <br /> <span style={{ fontWeight: 700 }} >Whether you're</span> struggling with
            anorexia, bulimia, binge eating, or body image issues,
            our personalized ED recovery helps you heal your relationship with food, mind, and body—guiding
            you toward lasting food freedom and self-trust.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Rediscover;