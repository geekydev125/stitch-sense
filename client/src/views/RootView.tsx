import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Stack from "@mui/material/Stack";
import Footer from "../components/Footer/Footer";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			{!isHomeView && <Header />}

			<Stack component='main' flexGrow={1} >
				<Outlet />
			</Stack>

			<Footer />
		</>
	);
}

export default RootView;
