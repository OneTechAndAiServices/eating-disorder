"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AboutFaqs() {

        useEffect(() => {
        AOS.init({
          duration: 500,
          once: true,
        });
      }, []);
          useEffect(() => {
          AOS.init({
            duration: 500,
            once: true,
          });
        }, []);
  return (
     <Box
      sx={{
        width: '100%',
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Grid container spacing={2} alignItems="flex-start">
        {/* Left Column */}
        <Grid size={{ xs:12, md:6 }} data-aos="fade-right" >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '20px', md: '28px' },
              fontFamily: 'var(--font-family-hand)',
              lineHeight: 1.5,
              mb: 2
            }}
          >
            FAQs About Eating Disorder Coaching
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: '12px', md: '14px' },
              fontFamily: 'var(--font-family-hand)',
              lineHeight: 1.7
            }}
          >
            Honest Answers to Common Questions About Eating Disorders
          </Typography>
        </Grid>

        {/* Right Column - Accordion */}
        <Grid size={{ xs:12, md:6 }} data-aos="fade-left">
          {[
            {
              question: 'What is eating disorder coaching?',
              answer:
                'Unlike traditional therapy, symbol of eating disorder coaching provides real-time support, mindset shifts, and accountability to help you implement recovery skills daily.'
            },
            {
              question: 'How is coaching different from therapy?',
              answer:
                'Coaching is future-focused and action-oriented, while therapy may deal with past trauma. Coaching supports behavior change through practical tools.'
            },
            {
              question: 'Do you offer support between sessions?',
              answer:
                'Yes, many coaches offer text or voice support between sessions to provide guidance and accountability when needed most.'
            },
            {
              question: 'Is recovery really possible?',
              answer:
                'Absolutely. With the right tools, mindset, and support, full recovery from eating disorders is not only possible—it’s achievable.'
            }
          ].map((item, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 'none',
                borderBottom: '3px solid #E0D8B0',
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  px: 0,
                  py: 1
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-hand)',
                    fontWeight: 600,
                    fontSize: { xs: '15px', md: '18px' }
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-family-hand)',
                    fontSize: { xs: '13px', md: '15px' },
                    color: '#666'
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutFaqs