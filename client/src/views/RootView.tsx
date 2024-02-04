import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Box from "@mui/material/Box";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			<ScrollRestoration />
			{!isHomeView && <Header />}

			<Box component="main">
				<Outlet />
			</Box>
			<Footer />
		</>
	);
}

export default RootView;
