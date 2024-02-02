import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader";

import Box from "@mui/material/Box";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			<ScrollRestoration />
			{!isHomeView && <Header />}

			<Suspense fallback={<Loader />}>
				<Box component="main">
					<Outlet />
				</Box>
			</Suspense>
			<Footer />
		</>
	);
}

export default RootView;
