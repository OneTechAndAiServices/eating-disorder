"use client";
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function RecoveryCoach() {
      useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

    return (
        <Box
            sx={{
                minHeight: { xs: 'auto', md: '50vh', lg:"40vh" },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: 2,
                textAlign: 'center',
                gap: 4,
                py:1
            }}
        >
            {/* Title with underline */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'inline-block',
                }}
                data-aos="fade-down"
            >
                <Typography
                    component="span"
                    sx={{
                        fontFamily: 'var(--font-family-hand)',
                        fontSize: { xs: '18px', sm: '25px', md: '30px' },
                        fontWeight: 400,
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    Meet Your ED Recovery Coach
                </Typography>

                <Box
                    component="img"
                    src="/images/vector.png"
                    alt="underline"
                    sx={{
                        position: 'absolute',
                        top: '80%',
                        left: '40%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        zIndex: 1,
                        objectFit: 'cover',
                        pointerEvents: 'none',
                    }}
                />
            </Box>

            {/* Paragraph */}
            <Typography
                sx={{
                    fontSize: '15px',
                    fontFamily: 'var(--font-family-hand)',
                    fontWeight: 400,
                    textAlign: { xs: 'justify', md: 'center' },
                    lineHeight: 1.7,
                }}
                data-aos="fade-down"
            >
                Hi, I’m <span style={{ fontWeight: 700 }}>Safia</span>, your dedicated symbol for eating disorder recovery coach. With a background in psychology, nutrition
                <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}><br /></Box>
                counseling, and behavioral therapy, I combine science-backed strategies with personalized care to help you heal—mind, body,
                <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}><br /></Box>
                and soul. Based in UAE, I work with clients globally through virtual sessions, offering flexible, judgment-free support.
            </Typography>

            {/* Button */}
            <Button
                variant='contained'
                sx={{
                    bgcolor: 'black',
                    borderRadius: '60px',
                    px: 4,
                    py: 1.5,
                    fontFamily: 'var(--font-family-hand)',
                    fontSize: '15px',
                    color: 'var(--white-bg)',
                    textTransform: 'capitalize',
                }}
                data-aos="fade-up"
            >
                Read Story
            </Button>
        </Box>
    );
}

export default RecoveryCoach;
