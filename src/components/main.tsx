import { HomeProps } from "@/pages";
import { Box, Stack, Typography, Button, Menu, MenuItem } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import NavbarContent from "./navbarContent";
import { motion, AnimatePresence } from "framer-motion";
import { navTexts } from "@/constants/navTexts";
import CustomButton from "./CustomButton";
import SixthSection from "./sections/SixthSection";
import SeventhSection from "./sections/SeventhSection";
import EigthSection from "./sections/EightSection";
import NinthSection from "./sections/NinthSection";
import TenthSection from "./sections/TenthSection";
import EleventhSection from "./sections/EleventhSection";
import CustomSectionHeader from "./CustomSectionHeader";
import TwelvethSection from "./sections/TwelvethSection";
import ThirteenthSection from "./sections/ThirteenthSection";
import FourteenthSection from "./sections/FourteenthSection";
import Footer from "./sections/Footer";

const Main = ({ ssrDuration, newsPosts }: HomeProps) => {
    const [progress, setProgress] = useState<number>(0);
    const [navBarExpanded, setNavbarExpanded] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleNavbarDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('event.currentTarget', event.currentTarget.id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log(newsPosts)
    useEffect(() => {
        const intervalTime = Math.max(ssrDuration / 100, 10);
        const timer = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                clearInterval(timer);
                return 100;
            }
                return prev + 1;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    },[ssrDuration])

    if(progress < 100) {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    bgcolor: '#121212',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 4,
                    zIndex: 9999,
                    overflow: 'hidden',
                    // This transition handles fading out the whole loader when done
                    transition: 'opacity 0.5s ease',
                    opacity: progress === 100 ? 0 : 1,
                    pointerEvents: progress === 100 ? 'none' : 'all',
                }}
                >
                <Box
                    sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    bgcolor: '#FFFFFF',
                    width: `${progress}%`, // Slides based on percentage
                    transition: 'width 0.1s linear',
                    }}
                />

                <Typography
                    variant="h1"
                    sx={{
                    fontSize: 'clamp(5rem, 20vw, 15rem)',
                    fontWeight: 900,
                    lineHeight: 0.8,
                    zIndex: 2,
                    // makes the text color invert based on the background behind it
                    mixBlendMode: 'difference', 
                    color: '#FFFFFF', 
                    fontFamily: 'monospace',
                    }}
                >
                    {progress.toString().padStart(3, '0')}
                    <span style={{ fontSize: '0.3em' }}>%</span>
                </Typography>
            </Box>
        )
    }

    if(navBarExpanded) {
        return(
            <AnimatePresence>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    style={{
                        top: 0,
                        right: 0,
                    }}
                >
                    <NavbarContent setNavbarExpanded={() => setNavbarExpanded(false)}/>
                </motion.div>
            </AnimatePresence>
        )
    }


    return (
        <Stack>
            {/* Navbar */}
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Stack
                    sx={{
                        width: '40%',
                        paddingY: '20px',
                        paddingLeft: '20px',
                    }}
                >
                    <Image src="/assets/logos/mainLogo.png" alt="main-logo" width={139} height={23} />
                </Stack>


                <Stack
                    sx={{
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: {xs: 'flex-end', sm: 'space-between'}
                    }}
                >
                    <Stack 
                        direction="row" 
                        gap="40px" 
                        sx={{
                            display: {xs: 'none', sm: 'flex'},
                        }}
                    >
                        {navTexts.map((nav) => {
                            if (nav.hidden) return null;

                            const isMenuOpen = Boolean(anchorEl) && anchorEl?.id === nav.title;
                            return !nav.hidden && nav.withChild ? (
                                <>
                                    <Button
                                        id={nav.title}
                                        aria-controls={isMenuOpen ? `menu-${nav.id}` : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={isMenuOpen ? 'true' : undefined}
                                        onClick={handleNavbarDropdownClick}
                                        sx={{
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '14px',
                                                lineHeight: '114.99999999999999%',
                                                letterSpacing: '-2%',
                                                textTransform: 'none',
                                                color: '#131313',
                                                marginRight: '5px'
                                            }}
                                        >
                                            {nav.title}
                                        </Typography>
                                        <Image src="/assets/directions/arrowdownblack.png" alt="arrow-down" width={5.53} height={5.53} />
                                    </Button>
                                    <Menu
                                        id={`menu-${nav.id}`}
                                        anchorEl={anchorEl}
                                        open={isMenuOpen}
                                        onClose={handleClose}
                                        slotProps={{
                                            list: {
                                                'aria-labelledby': nav.title,
                                            },
                                        }}
                                    >
                                        {nav.texts?.map((text) => {
                                            return (
                                                <MenuItem onClick={handleClose}>
                                                    <Typography sx={{ fontSize: '14px' }}>
                                                        {text.title}
                                                    </Typography>
                                                </MenuItem>
                                            )
                                        })}
                                    </Menu>
                                </>
                            ) : !nav.hidden && !nav.withChild && (
                                <Stack
                                    direction="row"
                                    gap={1}
                                    sx={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: '114.99999999999999%',
                                            letterSpacing: '-2%',
                                        }}
                                    >
                                        {nav.title}
                                    </Typography>
                                </Stack>
                            )
                        })}
                    </Stack>

                    
                    <Stack direction="row" gap="40px" sx={{ alignItems: 'center'}}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                                display: {xs: 'none', sm: 'block'}
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Stack
                            component="button"
                            direction="row"
                            gap={1}
                            sx={{
                                alignItems: 'center',
                                backgroundColor: '#131313',
                                padding: '25px',
                                width: '189px',
                                justifyContent: 'space-between',
                                cursor: 'pointer'
                            }}
                            onClick={() => setNavbarExpanded(true)}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '114.99999999999999%',
                                    letterSpacing: '-2%',
                                    color: 'rgb(255,255,255,1)'
                                }}
                            >
                                Menu
                            </Typography>
                            <Image src="/assets/directions/expandwhite.png" alt="expand" width={8.39} height={8.4} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            {/* First section */}
            <Stack
                sx={{
                    display: {xs: 'block', sm: 'flex'},
                    flexDirection: {xs: 'column', sm: 'row'},
                }}
            >
                <Stack
                    sx={{
                        width: {xs: '100%', sm: '30%'},
                        borderRight: '1px solid #131313',
                        borderBottom: '1px solid #131313',
                        padding: '17.5px 30px',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontsize: '14px',
                            lineHeight: '114.99999999999999%',
                            letterSpacing: '-2%',
                            marginBottom: '242px',
                        }}
                    >
                        Since 1986
                    </Typography>
                    <Stack 
                        direction="row"
                        sx={{
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontsize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                                marginRight: '6px'
                            }}
                        >
                            Scroll Down
                        </Typography>
                        <Image src="/assets/directions/arrowdownblack.png" alt="arrow-down" width={5.53} height={5.53} />
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        width: {sx: '100%', sm: '70%'},
                        borderBottom: '1px solid #131313',
                        padding: '17.5px 30px',
                    }}
                >
                    <Typography
                        component='h1'
                        variant="h1"
                        sx={{
                            fontWeight: 500,
                            fontSize: '42px',
                            lineHeight: '110.00000000000001%',
                            letterSpacing: '-1%',
                            marginBottom: '176px',
                            textTransform: 'none'
                        }}
                    >
                        Re-imagined Your Workplace
                    </Typography>

                    <CustomButton btnColor="#FF4228" btnText="Inquire Now" btnTextColor="#ffffff"/>
                </Stack>
            </Stack>

            {/* Second section */}
            <Stack>
                <Typography
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '500px',
                        lineHeight: '85%',
                        letterSpacing: '-6%',
                        verticalAlign: 'middle',
                        textTransform: 'uppercase',
                        display: 'flex',
                        textWrapMode: 'nowrap',
                        alignItems: 'baseline'
                    }}
                >
                    FDI
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: '100px',
                            lineHeight: '85%',
                            letterSpacing: '-6%',
                            verticalAlign: 'middle',
                            textTransform: 'uppercase',
                            display: 'flex',
                            textWrapMode: 'nowrap'
                        }}
                    >
                    ®
                    </Typography> &nbsp;
                    Re-imagined Your Workplace
                </Typography>
            </Stack>

            {/* Third section */}
            <Stack 
                sx={{
                    backgroundImage: 'url(/assets/cover-photos/coverphoto1.png)',
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100vw'
                }}
            />

            {/* Fourth section */}
            <Stack
                sx={{
                    padding: '20px'
                }}
            >
                <CustomSectionHeader 
                    leftText="Meet the FDI" 
                    leftTextColor="#131313" 
                    middleText="About Us" 
                    middleTextColor="#131313" 
                    withRightEl={true}
                />

                <Stack
                    gap="28px"
                    sx={{
                        marginTop: "140px",
                        display: {xs: 'block', sm: 'block', md: 'block', lg: 'flex'},
                        flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'row'},
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
                                color: 'rgb(0,0,0,1)',
                                marginBottom: '32px',
                            }}
                        >
                            (FDI) stands as one of the largest Workplace Fit-out contractors across New Zealand, delivering inspiring offices since 1997. 
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '120%',
                                letterSpacing: '-2%',
                                color: 'rgb(0,0,0,0.5)',
                                marginBottom: '64px',
                                maxWidth: '334px',
                            }}
                        >
                            Through our customer obsession, we've cultivated enduring client relationships by meeting project deadlines, pioneering cutting-edge construction solutions, delivering optimal value, and unwaveringly upholding our exceptional workmanship standards.
                        </Typography>
                        <CustomButton
                            btnColor="rgb(0,0,0,1)"
                            btnText="About FDI Build"
                            btnTextColor="#ffffff"
                        />
                            
                    </Stack>
                    <Stack
                        sx={{
                            width: {xs: '100%', sm: '100%', md: '100%', lg: '70%'},
                            alignItems: 'flex-end'
                        }}
                    >
                        <Image src="/assets/cover-photos/coverphoto2.png" alt='cover-photo-2' height={648} width={995} />
                    </Stack>
                </Stack>
            </Stack>

            {/* Fifth section */}
            <Stack
                sx={{
                    padding: '20px',
                    backgroundColor: '#1B1B1B'
                }}
            >
                <CustomSectionHeader 
                    leftText="Expertise" 
                    leftTextColor="#FFFFFF" 
                    middleText="What Do We Do" 
                    middleTextColor="#FFFFFF" 
                    withRightEl={false}
                />

                <Stack
                    gap="28px"
                    sx={{
                        marginTop: "140px",
                        display: {xs: 'block', sm: 'block', md: 'flex'},
                        flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                    }}
                >
                    <Stack
                        sx={{
                            width: {xs: '100%', sm: '100%', md: '65%'},
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: '32px',
                                lineHeight: '110%',
                                letterSpacing: '-2%',
                                marginBottom: '32px',
                                color: '#ffffff',
                            }}
                        >
                            At the heart of our business is the ability to provide comprehensive, end-to-end solutions tailored to meet the unique needs of every client. 
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
                            Our diverse range of services ensures that we can manage all aspects of a project, from initial design concepts to final execution and ongoing support.
                        </Typography>
                        <CustomButton
                            btnColor="#FF4228"
                            btnText="Learn More"
                            btnTextColor="#ffffff"
                        />
                            
                    </Stack>
                    <Stack
                        sx={{
                            width: {xs: '100%', sm: '100%', md: '65%'},
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'rgb(255,255,255,0.5)',
                            }}
                        >
                            News:
                        </Typography>
                        <Stack
                            sx={{
                                borderLeft: '1px solid rgb(255,255,255,0.5)'
                            }}
                        >
                            <Stack direction="row" width="100%">
                                {/* LEFT MENU */}
                                <Stack
                                    sx={{
                                        width: "335px",
                                        borderLeft: "1px solid rgba(255,255,255,0.5)",
                                        borderTop: "1px solid rgba(255,255,255,0.5)"
                                    }}
                                >
                                    {newsPosts.map((news, index) => {
                                        const isActive = activeIndex === index;

                                        return (
                                            <Stack
                                                key={index}
                                                component="button"
                                                onClick={() => setActiveIndex(index)}
                                                sx={{
                                                    all: "unset",
                                                    cursor: "pointer",
                                                    padding: "16px",
                                                    backgroundColor: isActive ? "#ffffff" : "#1B1B1B",
                                                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                                                }}
                                                >
                                                <Typography
                                                    sx={{
                                                    color: isActive ? "#131313" : "white",
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    }}
                                                >
                                                    {news.title}
                                                </Typography>
                                            </Stack>
                                        );
                                    })}
                                </Stack>

                                {/* RIGHT PANEL */}
                                <Stack
                                    sx={{
                                        flex: 1,
                                        backgroundColor: "#ffffff",
                                        padding: "40px",
                                    }}
                                >
                                    <Image src="/assets/cover-photos/coverphoto3.png" alt="cover-photo-3" width={577} height={385} />
                                    <Stack direction="row" gap="20px" sx={{marginTop: '24px'}}>
                                        <Stack
                                            sx={{
                                                width: '60%'
                                            }}
                                        >
                                            <Typography>
                                                <Typography 
                                                    variant="h4" 
                                                    sx={{
                                                        ontWeight: 700,
                                                        fontStyle: 'bold',
                                                        fontSize: '32px',
                                                        lineHeight: '110.00000000000001%%',
                                                        letterSpacing: '-1%',
                                                    }}
                                                >
                                                    {newsPosts[activeIndex].title}
                                                </Typography>
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            sx={{
                                                width: '40%'
                                            }}
                                        >
                                            <Typography
                                                mt={2}
                                                dangerouslySetInnerHTML={{
                                                    __html: newsPosts[activeIndex].content,
                                                }}
                                                sx={{
                                                    marginBottom: '50px'
                                                }}
                                            />
                                            {newsPosts[activeIndex].articleDetails?.articleUrl && (
                                                <a href={newsPosts[activeIndex].articleDetails.articleUrl} target="_blank" rel="noopener noreferrer" style={{color: '#FF4228'}}>
                                                    Read Original Source →
                                                </a>
                                            )}
                                        </Stack>
                                    </Stack>
                                    
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            {/* Sixth section */}
            <SixthSection />

            {/* Seventh section */}
            <SeventhSection newsPosts={newsPosts} />

            {/* Eight section */}
            <EigthSection />

            {/* Ninth section */}
            <NinthSection />

            {/* Tenth section */}
            <TenthSection />

            {/* Eleventh section */}
            <EleventhSection />

            {/* Twelveth section */}
            <TwelvethSection newsPosts={newsPosts}/>

            {/* Thirteenth section */}
            <ThirteenthSection />

            {/* Fourteenth section */}
            <FourteenthSection />

            {/* Footer */}
            <Footer/>
        </Stack>
    )
}

export default Main