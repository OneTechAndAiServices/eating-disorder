'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Grid,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px only

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Consulting', path: '/consulting' },
    { name: 'Course', path: '/course' },
    { name: 'Coaching', path: '/coaching' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          zIndex: 1300,
          width: '100%',
          bgcolor: isScrolled ? 'white' : 'transparent',
          boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'background-color 0.3s ease',
          py: 2,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent= { {xs: "space-between", sm:"center" } }
          px={{ xs: 2, md: 4 }}
        >
          {/* Logo / Brand */}
         <Grid sx={{ display: { xs: 'block', sm: 'none' } }}>
  <Typography
    sx={{
      fontFamily: 'var(--font-family-birthstone)',
      fontSize: '24px',
      fontWeight: 600,
      color: 'black',
    }}
  >
    Safia
  </Typography>
</Grid>


          {/* Desktop Nav */}
          {!isMobile && (
            <Grid >
              <Box sx={{ display: 'flex', gap: 4 }}>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.path} style={{ textDecoration: 'none' }}>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: 'var(--font-sm)',
                        fontFamily: 'var(--font-family-quicksand)',
                        color: 'black',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#6d28d9',
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <Grid >
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon sx={{ color: 'black' }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} passHref>
                <ListItemButton onClick={() => setDrawerOpen(false)}>
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontFamily: 'var(--font-family-quicksand)',
                      fontSize: '16px',
                      color: 'black',
                    }}
                  />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
