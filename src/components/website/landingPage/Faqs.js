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

export default function Faqs() {
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
        overflow:"hidden",
        position:"relative",
      }}
    >
      <Grid container spacing={2} alignItems="flex-start">
        {/* Left Column */}
        <Grid size={{ xs:12, md:4 }} data-aos="fade-right" >
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
        <Grid size={{ xs:12, md:8 }} data-aos="fade-left">
          {[
            {
              question: 'What is recovery coaching, and how is it different from therapy?',
              answer:
                'Recovery coaching is a collaborative partnership focused on supporting you to set and achive your personal recovery goals. Unlike therapy, which often explores past experiences and mental health diagnoses, coaching is future-focused and practical. I provide tools, accountability, and encouragement to help you bild new habits, strengthen your mindset, and live the life you want beyond your eating disorder.'
            },
            {
              question: 'How often do we meet, and what do the sessions involve?',
              answer:
                'We typically meet once a week via online video calls, but the schedule can be tailored to fit your needs. Each session is personalized, focusing on your goals and challenges at that moment. We might discuss meal planning, coping strategies, mindset shifts, or anything else relevant to your recovery journey. '
            },
            {
              question: 'Can I reach out between sessions if I need extra support?',
              answer:
                'Yes! I offer ongoing support through WhatsApp seven days a week for questions, encouragement, and accountability. Whether you need a quick check-in, help managing a tough moment, or just some motivation, I’m here to support you beyond our scheduled sessions.'
            },
            {
              question: 'Is coaching suitable for all stages of recovery?',
              answer:
                'Absolutely. Whether you’re just beginning to consider recovery or have been working on it for some time, coaching can be adapted to meet you where you are. My approach respects your pace and readiness while helping you build skills and confidence for lasting change. '
            },
            {
              question: 'How do I know if coaching is the right fit for me',
              answer:
              'If you want to recover and make changes, open to learning new tools, and want structured support without judgment, coaching could be a great fit. The best way to find out is to schedule a free discovery call where we can discuss your goals and see how I can best support you.'
            }
          ].map((item, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: 'none',
                borderBottom: '3px solid #EFEBD2',
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
  );
}
