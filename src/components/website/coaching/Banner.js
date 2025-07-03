import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Banner() {
  return (
    <>
    <Box>
        <Grid container display={"flex"} flexDirection={"row"} >
            {/* left text */}
            <Grid size={{ xs:12, sm:6}} >
                <Typography sx={{ fontFamily:"var(--font-family-hand)", fontSize:{ xs:"25px ", md:"40px", lg:"60px" }, fontWeight:450, lineHeight:1.7}}>
                    Your Eating Disorder Recovery Coach
                </Typography>
                <Typography x={{ fontFamily:"var(--font-family-quicksand)", fontSize:"60px", fontWeight:400, lineHeight:"40px"}}>
                    Today For Women in Eating Disorder Recovery Who Are Done with Half-Measures—This is How Breakthroughs Happen.
                </Typography>
        <Box    
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg-container)",
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
            fontWeight: 400,
            fontSize:{xs:"10px", md: "15px" },
            fontFamily: "var(--font-family-hand)",
          }}
        >
          Schedule a Call
        </Typography>
        <img
          src="/images/whatsapp.png"
          width= {{ xs:"25px", md:"30px" }}
          height="30px"
          alt="WhatsApp Icon"
        />
      </Box>
            </Grid>
            {/* Right Image */}
            <Grid size={{ xs:12, sm:6}} pl={{ xs:2, sm:0}}>
                <Box 
                component="img"
                src="/images/coachingbanner.jpg"
                alt='Coaching Banner'
                sx={{
                    width:"100%",
                    height:{ xs:"300px", md:"390px", lg:"490px"},
                    objectFit:"cover",
                    borderTopLeftRadius:"100px",
                    borderBottomLeftRadius:"100px"
                }}
                />
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default Banner