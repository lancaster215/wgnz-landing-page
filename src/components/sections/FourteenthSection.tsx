import { navTexts } from "@/constants/navTexts";
import { HeaderForm, LetsGetInTouch } from "@/types";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const socials = ['Instagram', 'LinkedIn']

interface FourteenthSectionProps {
    letsGetInTouch: LetsGetInTouch;
    headerForm: HeaderForm;
}

export default function FourteenthSection({letsGetInTouch, headerForm}: FourteenthSectionProps) {
    const [form, setForm] = useState({ email: '' });
        
    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
        }
    
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            email: e.target.value,
        });
    }

    return (
        <Stack 
            p="20px" 
            sx={{
                borderTop: '1px solid rgb(0,0,0,0.5)',
                display: {xs: 'block', sm: 'flex'},
                flexDirection: {xs: 'column', sm: 'row'},
            }}
        >
            <Stack
                gap="5px"
                sx={{
                    width: {xs: '100%', sm: '30%'},
                }}
            >
                <Stack mb="159px">
                    {navTexts.map((text) => 
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontStyle: 'bold',
                                fontSize: '32px',
                                lineHeight: '110.00000000000001%',
                                letterSpacing: '-1%',
                            }}
                        >
                            {text.title}
                        </Typography>
                    )}
                </Stack>
                {socials.map((social) => 
                    <Typography
                         sx={{
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: '32px',
                            lineHeight: '110.00000000000001%',
                            letterSpacing: '-1%',
                        }}
                    >
                        {social}
                    </Typography>
                )}
            </Stack>
            <Stack
                sx={{
                    width: {xs: '100%', sm: '70%'},
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: 'space-between',
                        height: '172px',
                        mb: '52px'
                    }}
                >
                    <Stack>
                        <Stack
                            sx={{
                                maxWidth: '60%'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontStyle: 'medium',
                                    fontSize: '101px',
                                    lineHeight: '85%',
                                    letterSpacing: '-2%',
                                }}
                            >
                                {letsGetInTouch.letsGetInTouchHeader}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        sx={{
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontStyle: 'medium',
                                fontSize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                            }}
                        >
                            ADH Newsletter
                        </Typography>
                        <Stack
                            sx={{
                                bgcolor: '#FF4228',
                                borderRadius: '50%',
                                height: '10px',
                                width: '10px',
                            }}
                        />
                    </Stack>
                </Stack>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: {
                            xs: "block",
                            sm: "flex",
                        },
                        alignItems: "center",
                        width: "100%",
                        justifyContent: 'space-between',
                        mb: '165px',
                    }}
                >
                    <TextField 
                        name="email"
                        id="email" 
                        label="Enter your email" 
                        variant="outlined" 
                        value={form.email}
                        onChange={handleChange}
                        sx={{
                            bordRadius: '5px',
                            width: {
                                xs: "auto",
                                sm: "70%",
                            },
                            display: "flex",
                            mb: { xs: 2, sm: 0 },
                            mr: { sm: 2 },
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            "& .MuiOutlinedInput-input": {
                                color: "#131313", 
                            },
                        }}
                    />

                    <Button 
                        type="submit"
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "30%",
                            },
                            padding: "16px 23px",
                            backgroundColor: '#FF4228',
                            justifyContent: 'space-between',
                            display: "flex",
                            gap: 1,
                        }}
                    >
                        <Typography
                            color="#ffffff"
                            sx={{
                                textTransform: 'capitalize'
                            }}
                        >
                            Subscribe
                        </Typography>
                        <Image src={'/assets/directions/arrowright.png'} alt="arrow-right" height={7.12} width={7.1}/>
                    </Button>
                </Box>
                <Stack gap="9px">
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontStyle: 'medium',
                            fontSize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            color: "rgb(0,0,0,0.5)"
                        }}
                    >
                        {headerForm.headerFormOffice}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontStyle: 'medium',
                            fontSize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            color: "rgb(0,0,0,1)"
                        }}
                    >
                        {headerForm.headerFormNumber}
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontStyle: 'medium',
                            fontSize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            color: "rgb(0,0,0,1)"
                        }}
                    >
                        {headerForm.headerFormAddress}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}