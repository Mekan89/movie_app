import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import { Menu, MenuItem, useTheme as useMuiTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useAtom } from "jotai";
import { useTheme } from "next-themes";
import { useState } from "react";
import { isDarkModeAtom, themeAtom } from "../../state/atoms";
import { FlexBetween } from "../../styles";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

const Navbar = () => {
    const setMode = useAtom(themeAtom);
    const [darkMode, setDarkMode] = useAtom(isDarkModeAtom);
    const theme = useMuiTheme();
    const [anchorUserEl, setAnchorUserEl] = useState(null);
    const isUserOpen = Boolean(anchorUserEl);
    const { resolvedTheme, setTheme } = useTheme();

    const handleUserClick = event => setAnchorUserEl(event.currentTarget);
    const handleUserClose = () => setAnchorUserEl(null);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <BurgerMenu />
                <SearchBar />
                <FlexBetween gap='1.5rem'>
                    {/* <IconButton onClick={() => setDarkMode(!darkMode)}> */}
                    <IconButton onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
                        {/* {theme.palette.mode === "dark" ? <DarkModeOutlined sx={{ fontSize: "25px" }} /> : <LightModeOutlined sx={{ fontSize: "25px" }} />} */}
                        {resolvedTheme === "dark" ? <DarkModeOutlined sx={{ fontSize: "25px" }} /> : <LightModeOutlined sx={{ fontSize: "25px" }} />}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>
                    <IconButton onClick={handleUserClick}>
                        <PersonIcon />
                    </IconButton>
                    <Menu anchorEl={anchorUserEl} open={isUserOpen} onClose={handleUserClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                        <MenuItem onClick={handleUserClose}>Sign up</MenuItem>
                        <MenuItem onClick={handleUserClose}>Log in</MenuItem>
                    </Menu>

                    {/* <FlexBetween>
                        <Button
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem",
                            }}>
                            <Box textAlign='left'>
                                <Typography fontWeight='bold' fontSize='0.85rem' sx={{ color: muiTheme.palette.secondary[100] }}>
                                    Mekan
                                </Typography>
                                <Typography fontSize='0.75rem' sx={{ color: muiTheme.palette.secondary[200] }}>
                                    Allanov
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined sx={{ color: muiTheme.palette.secondary[300], fontSize: "25px" }} />
                        </Button>
                        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </FlexBetween> */}
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
