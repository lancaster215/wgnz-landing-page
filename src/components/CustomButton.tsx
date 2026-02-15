import { Button, Typography } from "@mui/material";
import Image from "next/image";

interface CustomButtonTypes {
    btnColor: string,
    btnText: string,
    btnTextColor: string,
    btnWidth?: string,
}

export default function CustomButton({btnColor, btnText, btnTextColor, btnWidth}: CustomButtonTypes){
    return (
        <Button 
            sx={{
                width: {
                    xs: "100%",
                    sm: btnWidth ?? "215px",
                },
                padding: "16px 23px",
                backgroundColor: btnColor,
                justifyContent: 'space-between',
                gap: 1,
            }}
        >
            <Typography
                color={btnTextColor}
                sx={{
                    textTransform: 'capitalize'
                }}
            >
                {btnText}
            </Typography>
            <Image src={'/assets/directions/arrowright.png'} alt="arrow-right" height={7.12} width={7.1}/>
        </Button>
    )
}