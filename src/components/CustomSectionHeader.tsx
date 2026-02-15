import { Box, Stack, Typography } from "@mui/material";

interface CustomSectionHeaderProps {
    leftText: string,
    leftTextColor: string,
    middleText: string,
    middleTextColor: string,
    withRightEl: boolean
}

export default function CustomSectionHeader({
    leftText,
    leftTextColor,
    middleText,
    middleTextColor,
    withRightEl,
}: CustomSectionHeaderProps) {
    return(
        <Stack direction="row" justifyContent="space-between">
            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '30%',
                    alignItems: 'flex-start'
                }}
            >
                <Box
                    sx={{
                        height: '10px',
                        width: '10px',
                        backgroundColor: '#FF4228',
                        borderRadius: '50%',
                        marginTop: '5px',
                        marginRight: '9px',
                    }}
                />
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: leftTextColor
                    }}
                >
                    {leftText}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '60%',
                    textAlign: 'left',
                    marginBottom: '140px',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: '101px',
                        lineHeight: '85%',
                        letterSpacing: '-2%',
                        color: `${middleTextColor} !important`,
                    }}
                >
                    {middleText}
                </Typography>
            </Stack>
            <Stack
                sx={{
                    width: '10%',
                    alignItems: 'flex-end'
                }}
            >
                {withRightEl && <Box
                    sx={{
                        height: '10px',
                        width: '10px',
                        backgroundColor: '#131313',
                        borderRadius: '50%',
                    }}
                />}
            </Stack>
        </Stack>
    )
}