"use client";
import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CallIcon from '@mui/icons-material/Call';

function VirtualEating() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <>
            <Box  sx={{ 
                    py: { xs: 4, md: 8 },
                    // Remove fixed height and let content determine height
                    maxHeight: { xs:"auto" , md: "100vh" }
                }}  width={"100%"}  display={"flex"} alignItems={"center"} justifyContent={"center"}
               >
                <Grid container sx={{ height: "auto" , px:2 }} justifyContent={"center"} alignItems={"center"} spacing={4} maxWidth={"1000px"}  >
                    {/* Left Text */}
                    <Grid size={{ xs: 12, sm: 10, md: 6 }} display={"flex"} flexDirection={"column"} alignItems={{ xs: "center", md: "flex-start" }} gap={4}   >
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'inline-block', // so image size wraps only around text
                                mb: 2,
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            {/* Background Image */}
                            <Box
                                component="img"
                                src="/images/vector.png"
                                alt="Background vector"
                                sx={{
                                    position: 'absolute',
                                    top: '93%',
                                    left: { xs: "55%", md: '30%' },
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: -1,
                                    width: { xs: '70%', md: '60%' }, // adjust as needed
                                    maxWidth: '500px',
                                    pointerEvents: 'none',
                                }}
                            />

                            {/* Foreground Text */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "20px", sm: "25px", md: '30px' },
                                    fontWeight: 400,
                                    fontFamily: 'var(--font-family-hand)',
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: { xs: "center", md: "start" },
                                    lineHeight: 1.7

                                }}
                            >
                                Why Choose Virtual Eating <br /> Disorder Coaching?
                            </Typography>
                        </Box>
                        {/* List of Features */}
                        <Box display="flex" flexDirection="column" gap={2} alignItems={{ xs: "center", md: "flex-start" }}>
                          
                                <Box >
                                   
                                    <Typography sx={{ fontSize: "25px", fontWeight: 400, fontFamily: "var(--font-family-hand)" , textAlign:{ xs:"center", md:"left"}}}>
                                       If you're ready to explore how coaching can support your recovery, get in touch to book a  free discovery call.
                                    </Typography>
                                </Box>
                          
                        </Box>
                         <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backgroundColor: "black",
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
                                    color:"var(--white-bg)",
                                    fontWeight: 400,
                                    fontSize:{xs:"10px", md: "15px" },
                                    fontFamily: "var(--font-family-hand)",
                                  }}
                                >
                                  Contact Me Today
                                </Typography>
                                <IconButton sx={{ backgroundColor:"var(--white-bg)"}}>
                                    <CallIcon  sx={{ color:"black", fontSize:{xs:"10px", md:"15px"}}} />
                                </IconButton>
                              </Box>
                    </Grid>
                    {/* Right Image */}
                    <Grid
                        size={{
                        xs:12,
                        sm:10,
                        md:6
                        }}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                            {/* Background Border Frame */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: 12, md: 18 },      // adjust offset vertically
                                    left: { xs: 12, md: 18 },     // adjust offset horizontally
                                    width: { xs: "260px", sm: "360px", md: "380px" },
                                    height: { xs: "300px", sm: "380px", md: "420px" },
                                    // backgroundColor: "#EFEBD2", // light beige/yellow frame color
                                    border:"6px solid #EFEBD2",
                                    zIndex: 0,
                                }}
                            />

                            {/* Actual Image */}
                            <Box
                                component="img"
                                src="/images/virtual_eating.jpg"
                                alt="Virtual Eating"
                                sx={{
                                    width: { xs: "260px", sm: "360px", md: "380px" },
                                    height: { xs: "300px", sm: "380px", md: "420px" },
                                    objectFit: "cover",
                                    position: "relative",
                                    zIndex: 1,
                                    }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </>

    )
}

export default VirtualEating