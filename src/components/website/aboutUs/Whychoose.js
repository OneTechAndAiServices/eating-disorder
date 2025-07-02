"use client";
import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';

function WhyChooseMe() {
    const features = [
        {
            icon: "/images/frame.png",
            title: "Personalized Coaching",
            description: "Tailored strategies to fit your unique recovery journey."
        },
        {
            icon: "/images/frame.png",
            title: "Science-Backed Methods",
            description: "Combining neuroscience, positive psychology, and mindfulness."
        },
        {
            icon: "/images/frame.png",
            title: "24/7 Support",
            description: "Immediate guidance when you need it most."
        },
        {
            icon: "/images/frame.png",
            title: "Holistic Healing",
            description: "Addressing mind, body, and soul for full recovery."
        }
    ];

    return (
        <Box sx={{
            width: '100%',
            // height:{xs:"auto", md:"570px"},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 8,
            px: 2
        }}>
            <Grid container spacing={4} sx={{
                // maxWidth: '1200px',
                justifyContent: 'center',
                // alignItems:"center"
            }}>
                {/*Right Image */}
                <Grid size={{ xs: 12, md: 6 }} sx={{  display: "flex", justifyContent: 'center', alignItems: "center" }}>
                    <Box sx={{
                        position: "relative",
                        width: { xs: "300px", sm: "350px", md: "380px", lg: "480px" },
                        height: { xs: "340px", sm: "390px", md: "410px", lg: "520px" },
                    }}>
                        {/* Frame  */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: { xs: 12, sm: 14, md: 18 }, 
                                left: { xs: 12, sm: 14, md: 18 }, 
                                width: { xs: "300px", sm: "350px", md: "380px", lg: "480px" },
                                height: { xs: "340px", sm: "390px", md: "410px", lg: "520px" },
                                border: "6px solid #EFEBD2",
                                zIndex: 0,
                                pointerEvents: "none"
                            }}
                        />

                        {/* Image - main content */}
                        <Box
                            component="img"
                            src="/images/feature.jpg"
                            alt="Feature Image"
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                zIndex: 1,
                            }}
                        />
                    </Box>
                </Grid>

                {/* Features */}
                <Grid size={{ xs: 12, md: 6 }} sx={{  display: "flex", flexDirection: "column", justifyContent: 'center', alignContent: "center" }}>
                    <Typography sx={{ fontFamily: "var(--font-family-hand)", fontSize: { md: "30px" }, fontWeight: 450, lineHeight: 1.7, textAlign: { xs: "center", md: 'start' } }}>
                        Why Choose Me as Your Eating Disorder Recovery Coach?
                    </Typography>

                    {features.map((feature, index) => (
                        <Box key={index} >
                            {/* feature */}
                            <Box >
                                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2} mt={2}>
                                    <Box
                                        component="img"
                                        src={feature.icon}
                                        alt=""
                                        sx={{
                                            width: { xs: '20px', sm: '25px', md: '30px' },
                                            height: { xs: '20px', sm: '25px', md: '30px' },
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <Typography sx={{ fontFamily: "var(--font-family-quicksand)", fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" }, fontWeight: 600, lineHeight: '30px' }}>
                                        {feature.title}
                                    </Typography>
                                </Box>
                                <Box>                                <Typography sx={{ fontFamily: "var(--font-family-quicksand)", fontSize: { xs: "12px", sm: "15px", md: "18px", lg: "20px" }, fontWeight: 400, lineHeight: '30px' }}>
                                    {feature.description}
                                </Typography>
                                </Box>

                            </Box>

                        </Box>
                    ))}
                </Grid>

            </Grid>
        </Box>
    );
}

export default WhyChooseMe;