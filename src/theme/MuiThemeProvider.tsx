// responsiveFontSizes

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useAtomValue } from "jotai";
import { darkTheme, lightTheme } from ".";
import { isDarkModeAtom } from "../state/atoms";

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useAtomValue(isDarkModeAtom);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MUIThemeProvider;
