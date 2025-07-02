"use client";
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Story() {
    return (
        <Grid container sx={{ width: '100%' }}>
            {/* Left Section */}
            <Grid size={{ xs: 12, sm: 6 }} >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#1E1E1E",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        px: { xs: 2, sm: 4, md: 6 },
                        py: { xs: 4, sm: 4, md:6, xl:2 }, // Padding top/bottom for small devices
                        gap: { xs:"20px", xl:"60px" },
                        boxSizing: 'border-box',
                    }}
                >
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                        <Typography
                            sx={{
                                color: "var(--white-bg)",
                                fontSize: { xs: "28px", sm: "32px", lg: "40px" },
                                fontFamily: "var(--font-family-hand)",
                                fontWeight: 400,
                                lineHeight: 2,
                                position: "relative",
                                display: "inline-block",
                                zIndex: 2,
                            }}
                        >
                            My Story -
                            <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}><br /></Box>
                            From Struggle to Strength
                        </Typography>
                        <Box
                            component="img"
                            src="/images/vector.png"
                            alt='vector'
                            sx={{
                                position: "absolute",
                                top: { xs:"47%",sm:"100%",  lg:"100%" },
                                left: { xs:"45%", sm:"0%", md:"0%" },
                                width: { xs: "50%",sm:"80%", md: "60%", xl:"40%" },
                                height: "auto",
                                zIndex: 1,
                                pointerEvents: "none",
                            }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            color: "var(--white-bg)",
                            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                            fontFamily: "var(--font-family-quicksand)",
                            fontWeight: 400,
                            lineHeight: 1.7,
                        }}
                    >
                        Like many of my clients, I battled an eating disorder for years. Despite professional treatment,
                        I felt something was missing—true mind-body healing. Through mindfulness, meditation, and neuroscience-based techniques,
                        I finally achieved full recovery.
                    </Typography>

                    <Typography
                        sx={{
                            color: "var(--white-bg)",
                            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                            fontFamily: "var(--font-family-quicksand)",
                            fontWeight: 400,
                            lineHeight: 1.7,
                        }}
                    >
                        This journey led me to become an ED recovery coach, dedicating my life to helping others break free.
                        Now, I combine evidence-based practices with deep compassion to guide women toward freedom from their eating disorders.
                    </Typography>
                </Box>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                    component="img"
                    src="/images/banner.png"
                    alt="Banner Image"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Story;
