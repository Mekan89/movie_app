"use client";
import { ThemeProvider } from "next-themes";
import MUIThemeProvider from "../src/theme/MuiThemeProvider";
import Head from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head />
            <ThemeProvider>
                {/* <SessionProvider  ></SessionProvider> */}
                <MUIThemeProvider>
                    <body>{children}</body>
                </MUIThemeProvider>
            </ThemeProvider>
        </html>
    );
}
