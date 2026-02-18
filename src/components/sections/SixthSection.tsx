import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Box, Typography, Button, Container } from "@mui/material"
import { useRef } from "react";
import CustomButton from "../CustomButton";
import { FollowLinkedIn } from "@/types";

const MotionBox = motion(Box);
const images = [
  { src: "/assets/cover-photos/coverphoto4.png", x: 0,  y: -400, width: 216, height: 230, alt: "overphoto4" }, // Top Center
  { src: "/assets/cover-photos/coverphoto5.png", x: -900,   y: -50, width: 380, height: 450.31, alt: "overphoto5" }, // Top Left
  { src: "/assets/cover-photos/coverphoto6.png", x: 900,  y: -50,  width: 454, height: 496, alt: "overphoto6" }, // Far Right
  { src: "/assets/cover-photos/coverphoto7.png", x: -400, y: 350,  width: 335, height: 220, alt: "overphoto7" }, // Bottom Left
  { src: "/assets/cover-photos/coverphoto8.png", x: 300,  y: 400,  width: 217, height: 153, alt: "overphoto8" }, // Bottom Right
];

interface SixthSectionProps {
    followLinkedin: FollowLinkedIn
}

export default function SixthSection({ followLinkedin }:SixthSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px", amount: 1 });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end start"],
    });

    return (
        <Box
            ref={ref}
            component="section"
            sx={{
                position: "relative",
                // py: 20, // Give it some padding so there is "scroll room"
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.paper",
                overflow: "hidden",
            }}
            >
            {/* Central Content */}
            <Container maxWidth="sm" sx={{ textAlign: "center", zIndex: 10 }}>
                <Typography 
                    variant="h2" 
                    fontWeight={800} 
                    sx={{ mb: 2, lineHeight: 1.1, fontSize: { xs: '2.5rem', md: '4rem' } }}
                >
                    {followLinkedin.followLinkedinHeader}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    {followLinkedin.followLinkedinBody}
                </Typography>
                <CustomButton btnColor="#f05032" btnText="Follow us on LinkedIn" btnTextColor="white" btnWidth="454px"/>
            </Container>

            {/* Animated Images */}
            {images.map((img, index) => {
                const x = useTransform(scrollYProgress, [0.1, 0.5], [0, img.x]);
                const y = useTransform(scrollYProgress, [0.1, 0.5], [0, img.y]);
                const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.5], [0, 1, 1]);
                const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.5, 1]);

                return(
                    <MotionBox
                        key={index}
                        style={{ x, y, opacity, scale }}
                        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                        animate={isInView ? { 
                            x: img.x, 
                            y: img.y, 
                            opacity: 1, 
                            scale: 1 
                        } : {}}
                        transition={{ 
                            type: "spring", 
                            stiffness: 40, 
                            damping: 15, 
                            delay: index * 0.1 
                        }}
                        
                        sx={{
                            position: "absolute",
                            width: { xs: img.width * 0.6, md: img.width }, // Scale down for mobile
                            height: { xs: img.height * 0.6, md: img.height },
                            zIndex: 0,
                            boxShadow: 10,
                            borderRadius: 1,
                            overflow: "hidden",
                        }}
                    >
                    <Box
                        component="img"
                        src={img.src}
                        alt={img.alt}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    </MotionBox>
                )
            })}
        </Box>
    )
}