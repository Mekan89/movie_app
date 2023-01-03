"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { Roboto } from "@next/font/google";

import { teal } from "@mui/material/colors";

export const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const components = {
    MuiMenuItem: {
        styleOverrides: {
            root: {},
        },
    },
    MuiStack: {
        defaultProps: {
            direction: "row",
            spacing: 2,
        },
    },
    MuiButton: {
        defaultProps: {
            variant: "contained",
            disableElevation: true,
        },
    },
    MuiInputBase: {
        defaultProps: {
            size: "small",
        },
    },
} as const;

export const lightTheme: ThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: { main: teal[800] },
    },
    components,
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export const darkTheme: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#222" },
    },
    components,
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});
