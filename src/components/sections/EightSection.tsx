import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CustomSectionHeader from "../CustomSectionHeader";
import { OurPartners } from "@/types";

const MotionStack = motion(Stack);

const logosArr = [
    { name: "Amazon", logo: '/assets/logos/amazon.png', id: 1 },
    { name: "Booking", logo: '/assets/logos/booking.png', id: 2 },
    { name: "Deloitte", logo: '/assets/logos/deloitte.png', id: 3 },
    { name: "Merck", logo: '/assets/logos/merck.png', id: 4 }
]

interface EightSectionProps {
    ourPartners: OurPartners
}

export default function EigthSection({ourPartners}: EightSectionProps) {
    const duplicatedLogos= [...logosArr, ...logosArr, ...logosArr];
    const [direction, setDirection] = useState<string>('right')

    return(
        <Stack
            sx={{
                padding: '20px',
                borderTop: '1px solid rgb(0,0,0,0.5)',
                backgroundColor: '#F3F3F3',
            }}
        >
            <CustomSectionHeader 
                leftText="Collaborators"
                leftTextColor="#131313"
                middleText={ourPartners.ourPartnersHeader}
                middleTextColor="#131313"
                withRightEl={false}
            />
            <Stack
                gap="59px"
                sx={{
                    display: {xs: 'block', sm: 'flex'},
                    flexDirection: {xs: 'column', sm: 'row'},
                    justifyContent: 'space-between'
                }}
            >
                <Stack
                    sx={{
                        width: { xs: '100%', sm: '30%'}
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: '32px',
                            lineHeight: '110.00000000000001%',
                            letterSpacing: '-1%',
                        }}
                    >
                        {ourPartners.ourPartnersTitle}
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        width: { xs: '100%', sm: '60%'}
                    }}
                >
                    <Box 
                        sx={{ 
                            
                            overflow: "hidden", 
                            position: "relative",
                            // Optional: adds a fade effect so logos don't cut off sharply
                            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <MotionStack
                            direction="row"
                            spacing={2}
                            animate={{
                                x: direction === 'right' ? ["-33.33%", "0%"] : ["0%", "-33.33%"]
                            }}
                            transition={{
                                ease: "linear",
                                duration: 15,
                                repeat: Infinity,
                            }}
                            sx={{ width: "max-content" }}
                        >
                            {duplicatedLogos.map((item, index) => (
                                <Paper
                                    key={index}
                                    elevation={0}
                                    sx={{
                                    width: 280,
                                    height: 280,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    borderRadius: 0,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.logo}
                                        sx={{ width: "60%", filter: "grayscale(100%)", opacity: 0.7 }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 15,
                                            left: 15,
                                            bgcolor: "#f05032",
                                            color: "#fff",
                                            width: 24,
                                            height: 24,
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.75rem",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {item.id}
                                    </Box>
                                </Paper>
                            ))}
                        </MotionStack>
                    </Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: '64px'}}>
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
                </Stack>
            </Stack>
        </Stack>
    )
}