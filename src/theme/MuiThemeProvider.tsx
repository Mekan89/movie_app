import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from ".";

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        resolvedTheme === "light" ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MUIThemeProvider;
