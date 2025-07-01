'use client';
import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BannerCompt() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <Box sx={{ bgcolor: 'var(--bg-color)',  minHeight: { xs: "auto", md: "50vh" }, width: "100%", pt: { xs: 4, md: 0 } }} >

      <Grid
        container
        spacing={ 4}
        alignItems="stretch"
        justifyContent="space-between"
      >
        {/* Left Text */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box mx={{ xs: 3, md: 6 }} mt={{ xs: 4, md: 10 }}  >
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: '28px', sm: '34px', md: '35px' },
                  fontWeight: 400,
                  fontFamily: 'var(--font-family-hand)',
                  lineHeight: '1.2',
                }}
              >
                Transform Your Eating Disorder with{' '}
                {/* Word container with image behind */}
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    zIndex: 1,
                  }}
                >
                  {/* Background image under text */}
                  <Box
                    component="img"
                    src="/images/vector.png"
                    alt="Highlight"
                    sx={{
                      position: 'absolute',
                      bottom: { xs: '-2px', sm: '-4px', md: '-6px' },
                      left: '55%',
                      top: "75%",
                      transform: 'translateX(-50%)',
                      width: { xs: '115%', sm: '110%', md: '100%' }, // adjust width as needed
                      zIndex: 0,
                      pointerEvents: 'none',
                      objectFit:"contain"
                    }}
                  />

                  {/* Text over image */}
                  <Typography
                    component="span"
                    sx={{
                      position: 'relative',
                      fontFamily: 'var(--font-family-birthstone)',
                      fontWeight: 400,
                      fontSize: { xs: '40px', sm: '50px', md: '55px' },
                      zIndex: 1,
                    }}
                  >
                    Safia Coaching
                  </Typography>
                </Box>
              </Typography>
            </Box>




            <Typography
              sx={{
                fontSize: { xs: '16px', md: '18px' },
                fontFamily: 'var(--font-family-hand)',
                mt: 2,
              }}
              data-aos="fade-right"
            >
              Supporting women around the world to recover from their eating disorders
            </Typography>

            <Button variant="contained"
              sx={{
                mt: 2,
                bgcolor: "black",
                color: "var(--white-bg)",
                fontFamily: "var(--font-family-hand)",
                fontSize: "15px", fontWeight: 400,
                textTransform: "capitalize", borderRadius: "60px",
                p: "5px 28px 5px 28px",
                mb: { xs: 4, md: 0 }
              }}
                data-aos="fade-down"
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'center', textAlign:"center" }} data-aos="fade-left" >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              // height: {
              //   xs: '300px',
              //   sm: '350px',   // better for tablets
              //   md: '400px',   // better for laptops
              //   lg: '600px'    // for large screens
              // },
              // height: { xs: 'auto', md: 'auto' },
              height:"100%"
            }}
          >
            <Box
              component="img"
              src="/images/banner.png"
              alt="Banner"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // display: 'block',
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: { xs: '50%', md: '60%' },
                left: { xs: '18%',sm:"16%", md: '16%',  },
                transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)' },
                textAlign: { xs: 'center', md: 'start' },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-birthstone)',
                  fontSize: { xs: '50px', sm: '60px', md: '80px' },
                  fontWeight: 600,
                }}
                data-aos="fade-up-right"
              >
                Safia
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-family-quicksand)',
                  fontSize: { xs: '12px', sm: '14px', md: '12px' },
                  fontWeight: 500,
                  letterSpacing: "2px"
                }}
                data-aos="fade-up-right"
              >
                RECOVERY COACH
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ bgcolor: "black", width: "100%", height: "10px", position: 'absolute' }} />
    </Box>
  );
}

export default BannerCompt;