import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomSectionHeader from "../CustomSectionHeader";

const clients = [
    {
        name: 'Elias Ma’ayeh ',
        title: 'Partner - Deloitte',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Niranjan Chitre',
        title: 'Program Manager-mena – Amazon',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Amal Al-Khreisat',
        title: 'Facility Lead – Merck',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Scott Abercrombie',
        title: 'Program Manager - Capital ',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Alex Roffey',
        title: 'Program Manager Mena - Capital ',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Dr. Mazin Al Saidi',
        title: 'Chief Medical Officer - Ruwais Hospital Division',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Eng. Mohammed Hassan Al Zaahi',
        title: 'Chief Operations Officer - Group',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Hamad Khoory',
        title: 'Architect / Partner',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
    {
        name: 'Saood Al Mehairi',
        title: 'Project Manager',
        body: `A huge thank you to ADH for their success, 
with each project completed we find that you continuously push the envelope. You have proved time and time again to be our trusted partner in the Middle East. Looking forward 
to our next project together`
    },
]
export default function TenthSection(){
    return(
        <Stack>
            <Stack
                sx={{
                    padding: '20px',
                    borderTop: '1px solid rgb(0,0,0,0.5)'
                }}
            >
                <CustomSectionHeader 
                    leftText="Testimonials"
                    leftTextColor="#131313"
                    middleText="Our client say it best"
                    middleTextColor="#131313"
                    withRightEl={false}
                />
            </Stack>
            <Stack
                sx={{
                    borderTop: '1px solid rgba(0,0,0,0.5)',
                    display: {xs: 'block', sm: 'flex'},
                    flexDirection: {xs: 'column', sm: 'row'},
                }}
            >
                <Stack sx={{width: '30%'}}/>
                <Stack
                    sx={{
                        width: {xs: '100%', sm: '70%'},
                    }}
                >
                    {clients.map((client, index) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    id={`panel-${index}-header`}
                                    aria-controls={`panel-${index}-content`}
                                >
                                    <Stack direction="row" width="100%">
                                        <Stack
                                            sx={{
                                                width: '40%',
                                            }}
                                        >
                                            <Typography
                                                variant='h4'
                                                component='h4'
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '20px',
                                                    lineHeight: '110.00000000000001%',
                                                    letterSpacing: '-1%',
                                                }}
                                            >
                                                {client.name}
                                            </Typography>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                width: '60%',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Stack 
                                                sx={{
                                                    height: '10px',
                                                    width: '10px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#FF4228',
                                                    mr: '10px',
                                                }}
                                            />
                                            <Typography
                                                variant='h4'
                                                component='h4'
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: '14px',
                                                    lineHeight: '120%',
                                                    letterSpacing: '-2%',
                                                }}
                                            >
                                                {client.title}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    
                                </AccordionSummary>
                                
                                <AccordionDetails>
                                    <Stack direction="row">
                                        <Stack
                                            sx={{
                                                width: '40%',
                                            }}
                                        />
                                        <Stack
                                            sx={{
                                                width: '60%',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component='h5'
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    lineHeight: '114.99999999999999%',
                                                    letterSpacing: '-2%',
                                                    color: 'rgb(0,0,0,0.6)',
                                                    '&:hover': {
                                                        textDecoration: 'underline',
                                                    },
                                                }}
                                            >
                                                {client.body}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </Stack>
            </Stack>
        </Stack>
    )
}