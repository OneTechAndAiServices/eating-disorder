"use client";
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

function Container() {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "auto", md: "auto" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                // mt: {xs:2, md: 14 , lg:10},
            }}
        >
            <Grid
                container
                spacing={{ xs: 4, md: 6 , lg:8}}
                sx={{
                    maxWidth: '1200px',
                    px: { xs: 2, md: 6 , lg:2 },
                    py: { xs:2, sm:4, md:12 },
                    mx:"auto",
                    alignItems: "center",
                }}>
                {/* Left Text */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontWeight: 500, fontSize:{ xs:"12px", sm: "15px" }, fontFamily: "var(--font-family-hand)", lineHeight: 1.7 , textAlign:{ xs:"center", sm:"start" } }}>
                        About Safia Recovery – Your Trusted <br/> Eating Disorder Recovery Coach
                    </Typography>
                    <Typography sx={{ fontWeight: 450, fontSize:{ xs:"30px", sm: "30px", md:"40px" }, fontFamily: "var(--font-family-hand)", lineHeight: 1.7 , textAlign:{ xs:'center', sm:"start"}, mt:2}}>
                        Meet Safia Recovery
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontSize:{xs:"15px" , lg:"18px" } , fontFamily: "var(--font-family-quicksand)", lineHeight: "30px", textAlign: "justify" , mt:2}}>
                        <span style={{ fontSize:{ xs:"20px", sm:"25px" }, fontWeight: 500 }}> At Safia Recovery, </span> I provide eating disorder coaching to women worldwide, guiding them toward lasting eating disorder recovery. My approach blends neuroscience, positive psychology, and mindfulness to help you break free from guilt, shame, and self-doubt. With 24/7 text support, I’m here as your dedicated accountability partner—whenever you need me.
                    </Typography>
                    <Typography sx={{ fontWeight: 400, fontSize:{xs:"15px", lg:"18px"} , fontFamily: "var(--font-family-quicksand)", lineHeight: "30px", textAlign: "justify",mt:2 }}>
                        <span style={{ fontSize:{ xs:"20px", sm:"25px" }, fontWeight: 500 }}> My mission is simple: </span> to help you rediscover hope, rebuild self-trust, and reignite your passion for life. I don’t dwell on past struggles—instead, I focus on empowering your emerging healthy self through actionable strategies and unwavering support.
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
                    // data-aos="fade-up"
                    // suppressHydrationWarning
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
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

                {/* Right Section (Optional for image or design) */}
                <Grid size={{ xs: 12, md: 6 }} >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: "100%"
                        }}
                    >
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: 12 ,sm:14 , md: 18 },      // adjust offset vertically
                                    left: { xs: 12 ,sm:14 , md: 18 },     // adjust offset horizontally
                                  width: { xs: "300px", sm: "350px", md: "380px", lg: "480px" },
                                    height: { xs: "340px", sx: "390px", md: "410px", lg: "520px" },
                                    // backgroundColor: "#EFEBD2", // light beige/yellow frame color
                                    border: "6px solid #EFEBD2",
                                    zIndex: 0,
                                }}
                            />
                            <Box
                                component="img"
                                src="/images/meetsafia.jpg"
                                sx={{
                                    width: { xs: "300px", sm: "350px", md: "380px", lg: "480px" },
                                    height: { xs: "340px", sx: "390px", md: "410px", lg: "520px" },
                                    objectFit: "cover",
                                    position: "relative",
                                    zIndex: 1,

                                }}
                            />
                        </Box>
                    </Box>
                
                </Grid>
            </Grid>
        </Box>
        
    );
}

export default Container;
