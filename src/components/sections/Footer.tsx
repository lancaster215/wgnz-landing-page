import { Stack, Typography } from "@mui/material";

export default function Footer() {
    return(
        <Stack
            sx={{
                display: {xs: 'block', sm: 'flex'},
                flexDirection: {xs: 'column', sm: 'row'},
                p: '20px',
                borderTop: '1px solid rgb(0,0,0,0.5)'
            }}
        >
            <Stack
                sx={{
                    width: {xs: '100%', sm: '30%'}
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '14px',
                        lineHeight: '114.99999999999999%',
                        letterSpacing: '-2%',
                        color: 'rgb(0,0,0,0.5)'
                    }}
                >
                    Copyright © 2024 ADH Amman Decoration House
                </Typography>
            </Stack>
            <Stack 
                sx={{
                    display: {xs: 'block', sm: 'flex'},
                    flexDirection: {xs: 'column', sm: 'row'},
                    width: {xs: '100%', sm: '70%'},
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '14px',
                        lineHeight: '114.99999999999999%',
                        letterSpacing: '-2%',
                        color: 'rgb(0,0,0,0.5)'
                    }}
                >
                    Privacy Policy
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontStyle: 'bold',
                        fontSize: '14px',
                        lineHeight: '114.99999999999999%',
                        letterSpacing: '-2%',
                        color: 'rgb(0,0,0,0.5)'
                    }}
                >
                    All rights reserved
                </Typography>
            </Stack>
        </Stack>
    )
}