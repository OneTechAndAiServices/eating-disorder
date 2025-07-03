"use client";
import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function VirtualEating() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);

    return (
        <>
            <Box height={{ xs: "auto", md: "80vh" }} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Grid container sx={{ height: "100%" }} justifyContent={"center"} alignItems={"center"} spacing={4} py={{ xs: 4, md: 0 }} >
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
                            {[
                                {
                                    title: "Flexible & Accessible",
                                    desc: "Get support from anywhere in the world."
                                },
                                {
                                    title: "Personalized Strategies",
                                    desc: "Tailored plans for your unique recovery needs."
                                },
                                {
                                    title: "Science-Backed Methods",
                                    desc: "Combining neuroscience, CBT, and mindfulness for lasting change."
                                }
                            ].map((item, i) => (
                                <Box key={i} textAlign={{ xs: "center", md: "left" }}>
                                    <Typography sx={{ fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-family-hand)" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px", fontWeight: 400, fontFamily: "var(--font-family-hand)" }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            ))}
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
                                    top: { xs: 10, md: 18 },      // adjust offset vertically
                                    left: { xs: 10, md: 18 },     // adjust offset horizontally
                                    width: { xs: "260px", sm: "360px", md: "380px" },
                                    height: { xs: "280px", sm: "360px", md: "380px" },
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
                                    height: { xs: "280px", sm: "360px", md: "380px" },
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