import { Stack, Typography } from "@mui/material";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NinthSection(){
    const ref = useRef(null);
    // 'once: true' ensures it doesn't restart every time you scroll up and down
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        console.log('isInView', isInView)
        if(isInView) {
            const controls = animate(count, 40, { 
                duration: 5, // Seconds
                // ease: "easeOut"
                ease: [0.33, 1, 0.68, 1]
            });
            return () => controls.stop();
        }
    }, [isInView, count]);

    return(
        <Stack
            ref={ref}
            sx={{
                backgroundImage: 'url(/assets/cover-photos/coverphoto9.png)',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                backgroundBlendMode: 'multiply',
                backgroundColor: '#FF4228',
                p: '20px',
            }}
        >
            <Stack
                sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack
                    direction="row"
                >
                    <motion.h1 
                        style={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '310px',
                            lineHeight: '85%',
                            letterSpacing: '-3%',
                            color: 'white',
                        }}
                    >
                        {rounded}
                    </motion.h1>
                    <Typography
                        sx={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '310px',
                            lineHeight: '85%',
                            letterSpacing: '-3%',
                            color: 'white',
                        }}
                    >+</Typography>
                </Stack>
                <Typography
                    sx={{ 
                        fontWeight: 500,
                        fontStyle: 'bold',
                        fontSize: '14px',
                        lineHeight: '120%',
                        letterSpacing: '-2%',
                        color: 'white',
                    }}
                >
                    Millions square meters of office space was built
                </Typography>
            </Stack>
            <Stack
                sx={{
                    display: {xs: 'block', sm: 'flex'},
                    flexDirection: {xs: 'column', sm: 'row'},
                    mt: '100px'
                }}
            >
                <Stack
                    sx={{
                       width: {xs: '100%', sm: '30%'}, 
                       mr: {xs: '0', sm: '103px'}
                    }}
                >
                    <Typography
                        sx={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '310px',
                            lineHeight: '85%',
                            letterSpacing: '-3%',
                            color: 'white',
                        }}
                    >
                        36
                    </Typography>
                    <Typography
                        sx={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '14px',
                            lineHeight: '120%',
                            letterSpacing: '-2%',
                            color: 'white',
                        }}
                    >
                        Partners & Collaborators
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                       width: {xs: '100%', sm: '70%'}, 
                    }}
                >
                    <Typography
                        sx={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '310px',
                            lineHeight: '85%',
                            letterSpacing: '-3%',
                            color: 'white',
                        }}
                    >
                        1986
                    </Typography>
                    <Typography
                        sx={{ 
                            fontWeight: 500,
                            fontStyle: 'bold',
                            fontSize: '14px',
                            lineHeight: '120%',
                            letterSpacing: '-2%',
                            color: 'white',
                        }}
                    >
                        Established in 1986
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}