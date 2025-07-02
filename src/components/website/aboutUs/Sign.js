"use client";
import { Box, Typography } from '@mui/material'
import React from 'react'

function Sign() {
  return (
    <>
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        py: {xs:"30px", md:"50px"},
        px:{ xs:"10px" , sm:"50px"},
        gap:6
    }}>
        {/* First */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
        <Box 
        component="img"
        src="/images/vectorSign.png"
        alt='Sign'
        width={{ xs:"5%" ,sm:"3%"  }}
        height={{ xs:"%" ,sm:"4%" }}
        />
        <Typography sx={{ color:"var(--sign-color)", fontSize:{xs:"15px", md: "25px" }, fontFamily:"var(--font-family-hand)", fontWeight:600, textAlign:"center"}}>
            Working with Safia was life-changing. Her 24/7 support
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}><br /></Box>
             got me through my toughest moments—I've never felt so understood.
        </Typography>
        </Box>
        {/* Second */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={2}>
          <Typography  sx={{ color:"var(--sign-color)", fontSize:{ xs:"15px", md:"25px" }, fontFamily:"var(--font-family-hand)", fontWeight:600, textAlign:"center"}}>
           As a dietitian, I confidently refer clients to Safia. Her approach is innovative,
            <Box component="span" sx={{ display: { xs: 'none', lg: 'inline' } }}><br /></Box>
            compassionate, and truly transformative."
        </Typography>
        <Box 
        component="img"
        src="/images/mask.png"
        alt='Mask Group'
        />
        <Typography sx={{ fontSize:{xs:"20px", md: "30px" }, fontFamily:"var(--font-family-hand)", fontWeight:500, textAlign:"center"}}>
            Smith Doe
        </Typography>
        </Box>

    </Box>
    </>
  )
}

export default Sign