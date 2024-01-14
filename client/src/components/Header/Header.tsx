import { useState } from "react";
import uniqid from "uniqid";

import { NavLink } from "react-router-dom";

import stitchSenseLogo from '../../assets/img/stitchSense-logo.png'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const pages = [
    {
        title: "HOME",
        path: "/",
    },
    {
        title: "SERVICES",
        path: "/services",
    },
    {
        title: "OUR PROCESS",
        path: "/our-process",
    },
    {
        title: "PORTFOLIO",
        path: "/portfolio",
    },
    {
        title: "ABOUT US",
        path: "/about-us",
    },
    {
        title: "CONTACT US",
        path: "/contact-us",
    },
];

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
            <AppBar position="sticky" sx={{ backgroundColor: "custom.theme.lightGreen", zIndex: 9}} component='header' elevation={10}>
                {/* Desktop Menu */}
                <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} >
                    <Container>
                        <Stack direction='row' alignItems='center'>
                            {/* Logo */}
                            <Button component={NavLink} to='/'>
                                <Box component="img"
                                    sx={{
                                        width: 'auto',
                                        maxHeight: 70,
                                    }}
                                    alt="Stitch Sense Logo"
                                    src={stitchSenseLogo}
                                />
                            </Button>

                            {/* Nav items desktop */}
                            <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={uniqid()}
                                        component={NavLink}
                                        to={`${page.path}`}
                                        sx={{
                                            color: 'white',
                                            margin: '0 15px',
                                            borderBottom: '3px solid transparent',
                                            borderRadius: 0,
                                            '&.active': {
                                                borderBottom: '3px solid white',
                                                fontWeight: 'bold'
                                            }
                                        }}
                                    >
                                        {page.title}
                                    </Button>
                                ))}
                            </Box>
                        </Stack>
                    </Container>
                </Toolbar>

                {/* Mobile menu */}
                <Toolbar sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Stack width='100%' direction='row' justifyContent='space-between' alignContent='center'>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        width: drawerWidth,
                                        backgroundColor: 'custom.theme.lightGreen'
                                    },

                                }}
                            >
                                <Box sx={{ textAlign: 'center' }}>
                                    {/* Logo with text in Drawer */}
                                    <Button
                                        sx={{ display: { xs: 'block', md: 'none' } }}
                                        component={NavLink}
                                        to='/'
                                    >
                                        <Box component="img"
                                            sx={{
                                                width: '100%',
                                                maxHeight: { xs: 'auto' },
                                            }}
                                            alt="Stitch Sense Logo"
                                            src="/assets/img/logo-with-title.png"
                                        />
                                    </Button>
                                    <Divider />

                                    {/* Nav items mobile */}
                                    <List>
                                        {pages.map((page) => (
                                            <ListItem key={uniqid()} disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        textAlign: 'center',
                                                        color: 'white',
                                                        margin: '0 15px',
                                                        '&.active': {
                                                            borderBottom: '3px solid white',
                                                            paddingBottom: 0,
                                                        }
                                                    }}

                                                    onClick={handleDrawerToggle}
                                                    component={NavLink}
                                                    to={page.path}
                                                >
                                                    <ListItemText primary={page.title} />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>


                        {/* Logo on mobile */}
                        <Button sx={{ display: { xs: 'block', md: 'none', padding: 0, paddingTop: '5px' } }} component={NavLink} to='/'>
                            <Box component="img"
                                sx={{
                                    width: 'auto',
                                    maxHeight: { xs: 50 },
                                }}
                                alt="Stitch Sense Logo"
                                src={stitchSenseLogo}
                            />
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
    );
}

export default Header;
