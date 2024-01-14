import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function ErrorView() {

	return (
		<Stack minHeight={'100vh'}>
			<Header />

			<Container style={{ flexGrow: 1 }}>
				<h2>ErrorView</h2>
				<h1>Under Construction</h1>
				<h2>ErrorView</h2>
			</Container>

			<Footer />
		</Stack>
	)
}

export default ErrorView