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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          left: 0,
          right: 0,
          zIndex: 1300,
          width: '100%',
          bgcolor: isScrolled ? 'white' : 'transparent',
          boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease',
          py: 2,
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Grid size={{ xs:6 , sm:3 }}>
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

          {/* Desktop Links */}
          <Grid
            size={{ sm:6 }}
            sx={{ 
              display: { xs: 'none', sm: 'flex' }, 
              justifyContent: 'center',
              gap: 4
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                style={{
                  fontWeight: 400,
                  fontSize: 'var(--font-sm)',
                  fontFamily: 'var(--font-family-quicksand)',
                  color: 'black',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                }}
                onMouseOver={(e) => (e.target.style.color = '#6d28d9')}
                onMouseOut={(e) => (e.target.style.color = 'black')}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          {/* Mobile Menu Icon */}
          <Grid size={{ xs:6 , sm:3 }} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {isMobile && (
              <IconButton 
                onClick={() => setDrawerOpen(true)}
                sx={{ 
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'rgba(109, 40, 217, 0.1)',
                    
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{
          keepMounted: true, 
        }}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '250px',
            boxSizing: 'border-box',
          },
        }}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0,0,0,0.3)',
          },
          zIndex: 1400, 
        }}
      >
        <Box 
          sx={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <List sx={{ flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItemButton
                key={link.name}
                onClick={() => setDrawerOpen(false)}
                component={Link}
                href={link.path}
                sx={{
                  // px: 3,
                  // py: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(109, 40, 217, 0.1)',
                  }
                }}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    fontFamily: 'var(--font-family-quicksand)',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'black',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;