import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader";
import { Suspense } from "react";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			<ScrollRestoration />
			{!isHomeView && <Header />}
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
			<Footer />
		</>
	);
}

export default RootView;
