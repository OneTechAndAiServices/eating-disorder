"use client";
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Conatiner() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <>
            <Box sx={{ backgroundColor: "var(--bg-container)", width: "100%", height: { xs: "auto", md: "80vh", lg: "auto" }, pb: { xs: 2, md: 0, lg:10 }, pt:{ xs:0, lg:10 } , display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid container justifyContent={"center"} alignItems={"center"} maxWidth={"900px"} spacing={{ xs: 2, md: 0 }} >
                    {/* Right Text */}
                    <Grid size={{ xs: 12, md: 6 }} display={"flex"} flexDirection={"column"} justifyContent={"center"}
                        sx={{
                            maxWidth: '1200px',
                            px: { xs: 2, sm: 2 },
                            pt: { xs: 4, md: 0 },
                            textAlign: { xs: "center", sm: "center", md: "start" },
                            gap: { xs: 4, md: 0 },

                        }}
                        // data-aos="fade-up-right"
                    >
                        <Box display={"flex"} flexDirection={"column"}  >
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: { xs: "25px", md: "30px" } }}>
                                What to Expect from Eating  Disorder Recovery Coaching
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={1} mt={1}>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 700, fontSize: "15px" }}>
                                Recover is Possible
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: "15px", lineHeight: 2 }}>
                                Together, we’ll design a life beyond your eating
                                <Box component="span" sx={{ display: { xs: 'none', sm: "inline", md: 'inline' } }}>
                                    <br />
                                </Box>
                                disorder, filled with confidence and self-trust.
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={1} mt={1}>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 700, fontSize: "15px" }}>
                                Reset your Mindset
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: "15px", lineHeight: 2 }}>
                                Learn to challenge harmful thoughts and adopt
                                <Box component="span" sx={{ display: { xs: 'none', sm: "inline", md: 'inline' } }}>
                                    <br />
                                </Box>
                                sustainable, recovery-focused behaviors.
                            </Typography>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} gap={1} mt={1}>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 700, fontSize: "15px" }}>
                                24/7 Support
                            </Typography>
                            <Typography sx={{ fontFamily: "var(--font-family-hand)", fontWeight: 400, fontSize: "15px", lineHeight: 2 }}>
                                Get real-time guidance when facing urges, meal
                                <Box component="span" sx={{ display: { xs: 'none', sm: "inline", md: 'inline' } }}>
                                    <br />
                                </Box>
                                challenges, or emotional distress.
                            </Typography>
                        </Box>
                    </Grid>
                    {/* Left Image */}
                    <Grid size={{ xs: 12, md: 6 }} display={"flex"} justifyContent={"center"} 
                    // data-aos="fade-left"
                    >
                        <Box
                            component="img"
                            src="/images/container.jpg"
                            alt="Container Image"
                            sx={{
                                width: { xs: "260px", sm: "360px", md: "380px" },
                                height: { xs: "280px", sm: "360px", md: "380px" },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

export default Conatiner