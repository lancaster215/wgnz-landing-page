import { Accordion, Box, Container, Stack, Typography, AccordionSummary, AccordionDetails } from "@mui/material";
import CustomSectionHeader from "../CustomSectionHeader";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import CustomButton from "../CustomButton";
import { AwardsAndAccreditation } from "@/types";

const data = [
  { year: '2022', type: 'Award', name: 'Construction & Project Delivery Award', hasBadge: false },
  { year: '2021', type: 'Accreditation', name: 'Occupational Health and Safety (OHSAS: 45001:2018)',hasBage: true },
  { year: '2021', type: 'Award', name: 'Contractor Achievement Award', hasBadge: true },
  { year: '2020', type: 'Accreditation', name: 'Quality (ISO 9001:2015)', hasBadge: true },
  { year: '2019', type: 'Award', name: 'Innovation & Performance Excellence' },
  { year: '2018', type: 'Accreditation', name: 'Environmental (ISO: 14001:2004)', hasBadge: false},
];

interface EleventhSectionProps {
    awardsAndAccreditation: AwardsAndAccreditation
}

export default function EleventhSection({awardsAndAccreditation}: EleventhSectionProps) {
    return (
        <Stack>
            <Stack
                sx={{
                    padding: '20px',
                    backgroundColor: '#131313',
                }}
            >
                <CustomSectionHeader
                    leftText="Recognition"
                    leftTextColor="#FFFFFF"
                    middleText={awardsAndAccreditation.awardsAndAccreditationHeader}
                    middleTextColor="#FFFFFF"
                    withRightEl={false}
                />

                
            </Stack>
            <Stack
                sx={{
                    backgroundColor: '#131313',
                }}
            >
                <Box sx={{ bgcolor: '#131313', mb: '60px', color: 'white' }}>
                    {/* Header Row */}
                    <Box sx={{ display: 'flex', px: 2, mb: 1, opacity: 0.7 }}>
                        <Typography 
                            sx={{ 
                                fontWeight: 500,
                                fontStyle: 'medium',
                                fontSize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                                color: 'rgb(255,255,255,0.5)',
                                width: '15%',
                            }}
                        >Year:</Typography>
                        <Typography 
                            sx={{ 
                                fontWeight: 500,
                                fontStyle: 'medium',
                                fontSize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                                color: 'rgb(255,255,255,0.5)',
                                width: '15%',
                            }}
                        >Type:</Typography>
                        <Typography 
                            sx={{ 
                                fontWeight: 500,
                                fontStyle: 'medium',
                                fontSize: '14px',
                                lineHeight: '114.99999999999999%',
                                letterSpacing: '-2%',
                                color: 'rgb(255,255,255,0.5)',
                                width: '60%',
                            }}
                        >Name:</Typography>
                    </Box>

                    {data.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            px: 3,
                            py: 2.5,
                            borderTop: '1px solid #333',
                            position: 'relative',
                            transition: 'all 0.2s ease-in-out',
                            cursor: 'pointer',
                            // The Hover Logic
                            '&:hover': {
                                bgcolor: 'white',
                                color: 'black',
                                '& .badge-box': { opacity: 1, visibility: 'visible' }
                            }
                            }}
                        >
                            <Typography 
                                sx={{ 
                                    fontWeight: 500,
                                    fontStyle: 'medium',
                                    fontSize: '14px',
                                    lineHeight: '114.99999999999999%',
                                    letterSpacing: '-2%',
                                    width: '15%',
                                }}
                            >{item.year}</Typography>
                            <Typography 
                                sx={{ 
                                    fontWeight: 500,
                                    fontStyle: 'medium',
                                    fontSize: '14px',
                                    lineHeight: '114.99999999999999%',
                                    letterSpacing: '-2%',
                                    width: '15%',
                                }}
                            >{item.type}</Typography>
                            <Typography 
                                sx={{ 
                                    fontWeight: 700,
                                    fontStyle: 'bold',
                                    fontSize: '20px',
                                    lineHeight: '114.99999999999999%',
                                    letterSpacing: '-2%',
                                    width: '60%',
                                }}
                            >
                                {item.name}
                            </Typography>

                            {/* The pop-out badge on the right */}
                            {item?.hasBadge && (
                                <Box 
                                    className="badge-box"
                                    sx={{
                                        position: 'absolute',
                                        right: 100,
                                        top: -50,
                                        height: '186px',
                                        width: '134px',
                                        opacity: 0,
                                        visibility: 'hidden',
                                        transition: 'opacity 0.2s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        zIndex: 1
                                    }}
                                >
                                    {/* Simulated ISO Badge */}
                                    <Box 
                                        sx={{ 
                                            bgcolor: '#eee',
                                            flex: 1,
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            color: '#333',
                                            fontSize: '10px',
                                            p: '10px'
                                        }}
                                    >
                                        <Image src="/assets/logos/iso.png" alt="iso-logo" width={54} height={54} />
                                    </Box>
                                    <Box sx={{ bgcolor: '#ff4228', flex: 1, p: 0.5, color: 'white', alignContent: 'flex-end' }}>
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontStyle: 'bold',
                                                fontSize: '18px',
                                                lineHeight: '120%',
                                                letterSpacing: '-2%',
                                            }}
                                        >
                                            Quality <br/> 2015-2020
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
                <Stack direction="row" mb="164px">
                    <Stack sx={{width: '30%'}}/>
                    <Stack sx={{width: '60%'}}>
                        <CustomButton
                            btnColor="#ff4228"
                            btnText="View All Accreditations"
                            btnTextColor="white"
                            btnWidth="240px"
                        />
                    </Stack>
                    <Stack sx={{width: '10%'}}/>
                </Stack>
            </Stack>
        </Stack>
    )
}