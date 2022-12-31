import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import Search from "@mui/icons-material/Search";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import { OutlinedInput, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAtom } from "jotai";
import { isDarkModeAtom, themeAtom } from "../state/atoms";
import { Flex, FlexBetween } from "../styles";

const Navbar = () => {
    const setMode = useAtom(themeAtom);
    const [darkMode, setDarkMode] = useAtom(isDarkModeAtom);
    const theme = useTheme();

    //   const [anchorEl, setAnchorEl] = useState(null);
    //   const isOpen = Boolean(anchorEl);
    //   const handleClick = (event) => setAnchorEl(event.currentTarget);
    //   const handleClose = () => setAnchorEl(null);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}

                <Flex gap={1}>
                    <OutlinedInput sx={{ width: 350 }} placeholder='Search...' />
                    {/* <InputBase sx={{ border: 1, width: 350 }} placeholder='Search...' /> */}
                    <IconButton>
                        <Search />
                    </IconButton>
                </Flex>

                {/* RIGHT SIDE */}
                <FlexBetween gap='1.5rem'>
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {theme.palette.mode === "dark" ? <DarkModeOutlined sx={{ fontSize: "25px" }} /> : <LightModeOutlined sx={{ fontSize: "25px" }} />}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>

                    <FlexBetween>
                        <Button
                            // onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem",
                            }}>
                            <Box textAlign='left'>
                                <Typography fontWeight='bold' fontSize='0.85rem' sx={{ color: theme.palette.secondary[100] }}>
                                    Mekan
                                </Typography>
                                <Typography fontSize='0.75rem' sx={{ color: theme.palette.secondary[200] }}>
                                    Allanov
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px" }} />
                        </Button>
                        {/* <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu> */}
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
