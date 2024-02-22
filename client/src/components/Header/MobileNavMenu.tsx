import uniqid from "uniqid";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { IRoute } from "./Header";

import stitchSenseLogo from '../../assets/img/logos/stitchSense-logo.png'
import stitchSenseLogoWithTitle from '../../assets/img/logos/stitchSense-logo-with-title.png'

import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
interface Props {
	routes: IRoute[]
}
function MobileNavMenu({
	routes
}: Props) {
	const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
	const { pathname } = useLocation();
	const navigate = useNavigate()

	const handleDrawerToggle = () => {
		setIsDrawerOpen((prevState) => !prevState);
	};

	useEffect(() => {
		setIsDrawerOpen(false)
	}, [pathname])

	// This functionality is to close the drawer when a link is clicked. The Drawer component has a bug that the backdrop does not disappear every now and then, when lazy views are being loaded
	const onSelectItem = (path: string) => {
		if (path === pathname) {
			setIsDrawerOpen(false);
			return;
		}
		navigate(path);
	};

	return (
		<Toolbar component='nav'>
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
						variant="temporary"
						open={isDrawerOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', md: 'none' },
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
									src={stitchSenseLogoWithTitle}
								/>
							</Button>
							<Divider />

							{/* Nav items mobile */}
							<List>
								{routes.map((route) => (
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

											onClick={() => onSelectItem(route.path)}
											component={NavLink}
											to={route.path}
										>
											<ListItemText primary={route.route} />
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
	)
}

export default MobileNavMenu