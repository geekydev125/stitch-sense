import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			<ScrollRestoration />
			{!isHomeView && <Header />}

			<Outlet />

			<Footer />
		</>
	);
}

export default RootView;
