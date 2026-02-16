import { Box, IconButton, Paper, Stack, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CustomSectionHeader from "../CustomSectionHeader";
import { useState } from "react";
import CustomButton from "../CustomButton";
import { SpaceNewsNode } from "@/types";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MotionStack = motion(Stack);

interface TwelvethSectionProps {
  newsPosts: SpaceNewsNode[];
}

export default function TwelvethSection({ newsPosts }: TwelvethSectionProps) {
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  // Map images and ensure we have enough items for a smooth loop if needed
  const newsPostsWithImage = newsPosts.map((news, index) => ({
    ...news,
    image: `/assets/slider-photos/sliderphoto${index + 1}.png`,
    category: index % 2 === 0 ? "Company Updates" : "Services"
  }));

  return (
    <Stack sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#131313' }}>
      <Stack sx={{ p: '20px' }}>
        <CustomSectionHeader
          leftText="Blog"
          leftTextColor="#FFFFFF"
          middleText="Latest News"
          middleTextColor="#FFFFFF"
          withRightEl={true}
        />
      </Stack>

      <Stack
        gap="40px"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          p: '20px',
          pt: 0,
        }}
      >
        <Stack
            sx={{
                width: {xs: '100%', sm: '100%', md: '100%', lg: '30%'},
            }}
        >
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '110%',
                    letterSpacing: '-2%',
                    marginBottom: '32px',
                    color: 'white',
                }}
            >
                Stay up-to-date with the latest developments and exciting announcements from our team. 
            </Typography>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '120%',
                    letterSpacing: '-2%',
                    color: 'rgb(255,255,255,0.5)',
                    marginBottom: '64px',
                    maxWidth: '334px',
                }}
            >
                From groundbreaking project launches to new partnerships and industry insights, our Latest News section brings you the most recent updates on everything happening within our company.
            </Typography>
            <CustomButton
                btnColor="#FF4228"
                btnText="View All News"
                btnTextColor="#ffffff"
            />
                
        </Stack>

        <Stack sx={{ width: { xs: '100%', md: '60%' }, position: 'relative' }}>
          <Stack 
            direction="row" 
            spacing={1} 
            justifyContent="flex-end" 
            sx={{ mb: 3 }}
          >
            <IconButton 
                onClick={() => setDirection('left')}
                sx={{ 
                    bgcolor: direction === 'left' ? "#111" : "#fff", 
                    color: direction === 'left' ? "#fff" : "#111", 
                    border: "1px solid #ddd",
                    height: '59.24px',
                    width: '59.24px',
                    alignItems: 'center',
                    "&:hover": { 
                        bgcolor: "#333",
                        color: 'white'
                    }
                }}>
                    ←
            </IconButton>
            <IconButton
                onClick={() => setDirection('right')}
                sx={{ 
                    bgcolor: direction === 'right' ? "#111" : "#fff", 
                    color: direction === 'right' ? "#fff" : "#111", 
                    border: "1px solid #ddd",
                    height: '59.24px',
                    width: '59.24px',
                    alignItems: 'center',
                    "&:hover": { 
                        bgcolor: "#333",
                        color: 'white'
                    } 
                }}>
                    →
            </IconButton>
          </Stack>

          <Box sx={{ overflow: 'hidden', width: '100%' }}>
            <MotionStack
              direction="row"
              spacing={4}
              animate={{ x: direction === 'right' ? [0, -400] : [-400, 0] }}
              transition={{ ease: "easeInOut", duration: 0.8 }}
              sx={{ width: "max-content" }}
            >
              {newsPostsWithImage.map((item, index) => (
                <Box key={index} sx={{ width: 350 }}>
                  <Box
                    sx={{
                      height: 240,
                      width: '100%',
                      borderRadius: '4px',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      mb: 2
                    }}
                  />
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#fff', 
                      fontWeight: 700, 
                      fontSize: '1.25rem',
                      lineHeight: 1.2,
                      mb: 1,
                      minHeight: '3em' 
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography 
                    sx={{ 
                        color: 'rgba(255,255,255,0.5)', 
                        fontSize: '0.8rem', 
                        fontWeight: 600,
                        mb: 2 
                    }}
                  >
                    Aug 30, 2024
                  </Typography>

                  <Chip 
                    label={item.category} 
                    sx={{ 
                        bgcolor: 'rgba(255,255,255,0.15)', 
                        color: '#fff',
                        borderRadius: '16px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        height: '28px'
                    }} 
                  />
                </Box>
              ))}
            </MotionStack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}