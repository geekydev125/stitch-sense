import { Outlet, useLocation } from "react-router-dom";

import wavyLinesTop from '../assets/img/wavy-lines-top.png'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.png'

import Header from "../components/Header/Header";
import Stack from "@mui/material/Stack";
import Footer from "../components/Footer/Footer";
import Box from "@mui/material/Box";

function RootView() {
	const location = useLocation();

	const isHomeView = location.pathname === '/';

	return (
		<>
			{!isHomeView && <Header />}

			<Stack component='main' flexGrow={1}
				sx={!isHomeView ? {
					background: `url(${wavyLinesTop})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top right'
				} : {}}
			>
				<Box
					sx={{
						background: `url(${wavyLinesBottom})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'bottom left'
					}}
				>
					<Outlet/>
				</Box>
			</Stack>

			<Footer />
		</>
	);
}

export default RootView;
