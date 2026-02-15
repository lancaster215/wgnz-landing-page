import { Box, Stack, Typography } from "@mui/material";
import CustomSectionHeader from "../CustomSectionHeader";

export default function EleventhSection() {
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
                    middleText="Awards & Recognition"
                    middleTextColor="#FFFFFF"
                    withRightEl={false}
                />
            </Stack>
        </Stack>
    )
}