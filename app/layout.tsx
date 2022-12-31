"use client";
import MUIThemeProvider from "../src/theme/MuiThemeProvider";
import Head from "./head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <Head />
            <MUIThemeProvider>
                <body>{children}</body>
            </MUIThemeProvider>
        </html>
    );
}
