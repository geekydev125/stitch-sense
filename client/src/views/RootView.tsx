import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			{!isHomeView && <Header />}

			<Outlet />

			<Footer />
		</>
	);
}

export default RootView;
