// responsiveFontSizes

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtomValue } from "jotai";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from ".";
import { isDarkModeAtom } from "../state/atoms";

// const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
//     const darkMode = useAtomValue(isDarkModeAtom);

//     return (
//         <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//             <CssBaseline />
//             {children}
//         </ThemeProvider>
//     );
// };

// responsiveFontSizes

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useAtomValue(isDarkModeAtom);
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
