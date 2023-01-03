import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

interface BurgerMenuProps {}

// const options = ["home", "movies", "series", "cartoons", "favorites"];
const menuItems = [
    { title: "home", icon: <HomeIcon /> },
    { title: "movies", icon: <HomeIcon /> },
    { title: "series", icon: <HomeIcon /> },
    { title: "cartoons", icon: <HomeIcon /> },
    { title: "favorites", icon: <HomeIcon /> },
];

const BurgerMenu = ({}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = e => setAnchorEl(e.currentTarget);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                {menuItems.map(({ title, icon }, index) => {
                    return (
                        <MenuItem key={index} onClick={handleClose} selected={anchorEl === index} sx={{ width: 300 }}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{title}</ListItemText>
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

export default BurgerMenu;
