import uniqid from 'uniqid'
import { NavLink } from "react-router-dom";

import { IRoute } from './Header'

import stitchSenseLogo from '../../assets/img/logos/stitchSense-logo.png'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import DesktopNavItem from './DesktopNavItem';

interface Props {
    routes: IRoute[]
}
function DesktopNavMenu({
    routes
}: Props) {

    
    return (
            <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} >
                <Container>
                    <Stack direction='row' alignItems='center' minHeight='10vh'>
                    {/* Logo */}
                    <Button component={NavLink} to='/' >
                        <Box component="img"
                            sx={{
                                width: 'auto',
                                maxHeight: 70,
                            }}
                            alt="Stitch Sense Logo"
                            src={stitchSenseLogo}
                        />
                    </Button>

                    <Box sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}>
                        {routes.map((route) => (
                            <DesktopNavItem route={route.route} path={route.path} key={uniqid()}/>
                        ))}
                    </Box>
                </Stack>
            </Container>
        </Toolbar >
    )
}

export default DesktopNavMenu