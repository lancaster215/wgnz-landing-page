import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import AddIcon from '@mui/icons-material/Add';
import { SpaceNewsNode } from "@/types";
import CustomButton from "../CustomButton";
import { useState } from "react";
import CustomSectionHeader from "../CustomSectionHeader";

const MotionStack = motion(Stack);

interface SeventSectionProps {
  newsPosts: SpaceNewsNode[];
}

export default function SeventSection({newsPosts}: SeventSectionProps) {
    const [direction, setDirection] = useState<string>('right')
  // We double the array to create the infinite loop effect
    const newsPostsWithImage = newsPosts.map((news, index) => ({
        ...news,
        image: `/assets/slider-photos/sliderphoto${index + 1}.png`
    }))

    return (
        <Stack
            sx={{
                padding: '20px',
                borderTop: '1px solid rgb(0,0,0,0.5)'
            }}
        >
            <CustomSectionHeader
                leftText="Portfolio"
                leftTextColor="#131313"
                middleText="Featured Cases"
                middleTextColor="#131313"
                withRightEl={false}
            />
            <Box sx={{ bgcolor: "#fff", py: 8, overflow: "hidden" }}>
                {/* Header Section */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 4, mb: 4 }}>
                    <Stack/>
                    <Stack direction="row" spacing={1}>
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
                </Stack>

                {/* Marquee Container */}
                <Box sx={{ position: "relative", width: "100%" }}>
                    <MotionStack
                        direction="row"
                        spacing={3}
                        animate={{
                            x: direction === 'right' ? ["-50%", "0%"] : ["0%", "-50%"],
                        }}
                        transition={{
                            ease: "linear",
                            duration: 20,
                            repeat: Infinity,
                        }}
                        sx={{ width: "max-content", px: 1.5 }}
                    >
                    {newsPostsWithImage.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{
                                width: 400,
                                borderRadius: 2,
                                overflow: "hidden",
                                border: "1px solid #f0f0f0",
                            }}
                            >
                            {/* Image Area */}
                            <Box
                                sx={{
                                height: 250,
                                bgcolor: "#f5f5f5",
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                }}
                            />
                            
                            {/* Content Area */}
                            <Box sx={{ p: 3 }}>
                                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                <Box sx={{ bgcolor: "#eee", borderRadius: "50%", p: 0.5, display: "flex" }}>
                                    <AddIcon sx={{ fontSize: 16 }} />
                                </Box>
                                    <Typography variant="h5" fontWeight={700}>{item.title}</Typography>
                                </Stack>
                                
                                <Typography 
                                    variant="h5" 
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 500,
                                        fontStyle: 'medium',
                                        fontSize: '14px',
                                        lineHeight: '120%',
                                        letterSpacing: '-2%',
                                    }}
                                >
                                    Title: {item.title}
                                </Typography>
                                <Typography
                                    mt={2}
                                    dangerouslySetInnerHTML={{
                                        __html: item.content,
                                    }}
                                    sx={{
                                        fontWeight: 500,
                                        fontStyle: 'medium',
                                        fontSize: '14px',
                                        lineHeight: '120%',
                                        letterSpacing: '-2%',
                                        marginBottom: '50px'
                                    }}
                                />
                                {/* <Typography variant="body2" color="text.secondary">Location: {item?.articleDetails?.articleUrl}</Typography> */}
                            </Box>
                        </Paper>
                    ))}
                    </MotionStack>
                </Box>

                {/* Footer Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: '61px' }}>
                    <CustomButton btnText="View All Case Studies" btnColor="#131313" btnTextColor="white"/>
                </Box>
            </Box>
        </Stack>
    );
}