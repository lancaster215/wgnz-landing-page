import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const tekaTrial = localFont({
  src: "../../public/fonts/KHTekaTRIAL-Regular.woff2", // Verify this path matches your folder structure
  variable: "--font-teka",
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-teka), serif",
    h1: {
      fontFamily: "var(--font-teka), serif",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={tekaTrial.variable}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
