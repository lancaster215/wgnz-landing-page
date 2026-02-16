import { Stack, Typography, Box, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import { useState } from "react";
import { navTexts } from "@/constants/navTexts";

interface NavbarContentTypes {
    setNavbarExpanded: () => void,
}

const NavbarContent = ({setNavbarExpanded}: NavbarContentTypes) => {
    const [form, setForm] = useState({ email: '' });
    
    const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
        }
    
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            email: e.target.value,
        });
    }

    return(
        <Stack
            sx={{
                display: {sx: 'block', md: 'flex'},
                flexDirection: {sx: 'column', md: 'row'},
                height: '100%'
            }}
        >
            {/* Black left side */}
            <Stack
                sx={{
                    backgroundColor: "#131313",
                    backgroundImage: "url(/assets/blacknoise.png)",
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    width: {sx: '100%', md: '50%'},
                }}
            >
                <Stack
                    sx={{
                        padding: '10px 20px',
                    }}
                >
                    <Image src={'/assets/logos/logo.png'} alt="arrow-right" height={45.48} width={82}/>
                </Stack>
                <hr/>
                <Stack
                    sx={{
                        padding: '20px',
                        gap: 5,
                        height: '100%',
                    }}
                >
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '170px',
                            alignItems: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                height: '10px',
                                width: '10px',
                                backgroundColor: '#FF4228',
                                borderRadius: '50%',
                                marginRight: '9px',
                            }}
                        />
                        <Typography
                            color="#ffffff"
                            sx={{
                                fontSize: '14px'
                            }}
                        >
                            Space flight News Feed
                        </Typography>
                    </Stack>

                    <Stack
                        sx={{
                            width: {sx: '100%', md: '70%'},
                        }}
                    >
                        <Typography
                            variant='h1'
                            component='h1'
                            color="#ffffff"
                            sx={{ 
                                textTransform: 'none',
                                letterSpacing: '-2%',
                                fontSize: '101px',
                            }}
                        >
                            Let's get in touch 
                        </Typography>
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
                            maxWidth: 600,
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
                                    sm: "335px",
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
                                    sm: "auto",
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

                    <Stack
                        gap='9px'
                        sx={{
                            width: '25%',
                            marginTop: '100px',
                        }}
                    >
                        <Typography
                            variant='h5'
                            component='h5'
                            sx={{
                                color: "rgb(255, 255, 255, 0.5)",
                                fontSize: '14px',
                                letterSpacing: '-2%'
                            }}
                        >
                            ADH Head Office
                        </Typography>
                        <Typography
                            variant='h5'
                            component='h5'
                            sx={{
                                color: "rgb(255, 255, 255, 1)",
                                fontSize: '14px',
                                letterSpacing: '-2%'
                            }}
                        >
                            00962795568202
                        </Typography>
                        <Typography
                            variant='h5'
                            component='h5'
                            sx={{
                                color: "rgb(255, 255, 255, 1)",
                                fontSize: '14px',
                                letterSpacing: '-2%'
                            }}
                        >
                            King Al Hussein Street , Complex No.159, Amman, 11190, JO
                        </Typography>
                    </Stack>
                </Stack>
                <hr/>
                <Stack
                    sx={{
                        padding: '12px 20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            color: 'rgb(255,255,255,0.5)',
                            paddingY: '17px'
                        }}
                    >
                        Copyright © 2024 ADH Amman Decoration House
                    </Typography>
                </Stack>
            </Stack>

            
            {/* White right side */}
            <Stack
                sx={{
                    width: {sx: '100%', md: '50%'},
                }}
            >
                <Stack
                    sx={{
                        flexDirection: 'row-reverse'
                    }}
                >
                    <Stack
                        sx={{
                            width: '189px',
                            backgroundColor: '#131313',
                            padding: '21px 27px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                        onClick={setNavbarExpanded}
                    >
                        <Typography
                            sx={{
                                color: 'rgb(255,255,255,1)'
                            }}
                        >
                            Close
                        </Typography>
                        <Image src={'/assets/directions/collapsewhite.png'} alt="arrow-right" height={10} width={10}/>
                    </Stack>
                </Stack>
                <hr />
                <Stack
                    sx={{
                        height: '100%',
                    }}
                >
                    {navTexts.map((navs, index) => {
                        if(!navs.withChild) {
                            return (
                                <Stack 
                                    sx={{
                                        padding: '12px 20px',
                                        border: '1px solid rgb(0,0,0,0.25)'
                                    }}
                                >
                                    <Typography
                                        variant='h4'
                                        component='h4'
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '32px',
                                            lineHeight: '110.00000000000001%',
                                            letterSpacing: '-1%',
                                        }}
                                    >
                                        {navs.title}
                                    </Typography>
                                </Stack>
                            )
                        }
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id={`panel-${index}-header`}
                                    aria-controls={`panel-${index}-content`}
                                >
                                    <Typography
                                        variant='h4'
                                        component='h4'
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '32px',
                                            lineHeight: '110.00000000000001%',
                                            letterSpacing: '-1%',
                                        }}
                                    >
                                        {navs.title}
                                    </Typography>
                                </AccordionSummary>
                                
                                <AccordionDetails>
                                    {navs.texts?.map((text) => 
                                        <Typography
                                            variant="h5"
                                            component='h5'
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '14px',
                                                lineHeight: '114.99999999999999%',
                                                letterSpacing: '-2%',
                                                '&:hover': {
                                                    textDecoration: 'underline',
                                                }
                                            }}
                                        >
                                            {text.title}
                                        </Typography>
                                    )}
                                    {/* <Box>
                                        <Typography
                                            component="div"
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                        />
                                    </Box> */}
                                    {/* {post.articleDetails?.articleUrl && (
                                        <a href={post.articleDetails.articleUrl} target="_blank" rel="noopener noreferrer" style={{color: '#FF4228'}}>
                                            Read Original Source →
                                        </a>
                                    )} */}
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </Stack>
                <hr/>
                <Stack
                    sx={{
                        flexDirection: 'row-reverse',
                        padding: '12px 20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            color: 'rgb(0,0,0,0.5)',
                            paddingY: '17px',
                        }}
                    >
                        All rights reserved
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NavbarContent