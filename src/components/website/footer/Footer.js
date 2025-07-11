'use client';

import NextLink from 'next/link';
import {
  Box,
  Grid,
  Typography,
  Link as MUILink,
  Stack,
  IconButton,
} from '@mui/material';
import PodcastIcon    from '@mui/icons-material/Podcasts';
import EmailIcon      from '@mui/icons-material/Email';
import InstagramIcon  from '@mui/icons-material/Instagram';

export default function Footer() {
  const footerLinks = [
    { name: 'Home',        path: '/' },
    { name: 'About Us',    path: '/about' },
    { name: 'Consulting',  path: '/consulting' },
    { name: 'Course',      path: '/course' },
    { name: 'Contact Us',    path: '/contactus' },
  ];

  const socialLinks = [
    { icon: PodcastIcon,   label: 'View Our Podcast',   href: '#' },
    { icon: EmailIcon,     label: 'Message Us Now',     href: '#' },
    { icon: InstagramIcon, label: 'View Our Instagram', href: '#' },
  ];

  return (
    <Box sx={{ bgcolor: '#1A1A1A', color: '#fff', py: 6  }}>
      <Grid container
      spacing={4}
      px={{ xs: 2, md: 10 }}
      sx={{
        // maxWidth:"1200px",
        margin:"o auto",
      }}>
        {/* Column 1 */}
        <Grid size={{xs:12, sm:4 }} >
          <Box>
            <Typography sx={{ fontFamily: 'var(--font-family-hand)', fontSize: "30px", fontWeight: 400, mb: 1 }}>
              Safia Recovery
            </Typography>
            <Typography sx={{ fontFamily: 'var(--font-family-hand)', fontSize: '15px', lineHeight: 1.8 , fontWeight:400}}>
              <strong>Safia</strong> provides compassionate, evidence‑based eating‑disorder coaching to help women
              worldwide break free from disordered eating and reclaim their lives.
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid size={{xs:12, sm:4 }}>
          <Box>
            <Typography sx={{ fontFamily: 'var(--font-family-hand)', fontSize: 20, fontWeight: 500, mb: 2 }}>
              Quick Links
            </Typography>

            <Stack gap={1}>
              {footerLinks.map((link) => (
                <MUILink
                  key={link.name}
                  component={NextLink}
                  href={link.path}
                  underline="none"
                  sx={{
                    fontWeight: 400,
                    fontSize: 'var(--font-sm)',
                    fontFamily: 'var(--font-family-hand)',
                    color: 'var(--white-bg)',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      textDecoration: 'underline',
                      color: 'white',
                    },
                  }}
                >
                  {link.name}
                </MUILink>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Column 3 */}
        <Grid size={{xs:12, sm:4 }}>
          <Stack gap={1}>
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Stack direction="row" gap={1} alignItems="center" key={label}>
                <IconButton sx={{  backgroundColor:"var(--white-bg)"}} >
                <Icon sx={{ color: 'black' , fontSize:{ xs:"16px", sm:'24px'} }} />
                </IconButton>
                <MUILink
                  component={NextLink}
                  href={href}
                  underline="hover"
                  sx={{
                    fontSize: 14,
                    fontFamily: 'var(--font-family-hand)',
                    color: 'inherit',
                    '&:hover': { color: 'white' },
                  }}
                >
                  {label}
                </MUILink>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
