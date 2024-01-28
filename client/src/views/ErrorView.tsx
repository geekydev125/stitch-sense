import { Link as RouterLink } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import brokenLogo from '../assets/img/logos/stitchSense-black-broken-logo.png'
import SectionTitle from "../components/SectionTitle";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function ErrorView() {
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<>
			<Header />
			<Stack height='100%' py={{ xs: 4, md: 6 }}>
				<Container style={{ flexGrow: 1 }}>
					<Grid
						container
						height='100%'
						display='flex'
						direction='row'
						justifyContent='center'
						alignItems='center'
						width='100%'
						spacing={{ xs: 2, sm: 1, md: 0 }}
					>
						<Grid item xs={12} sm={3} md={3} textAlign='center'>
							<Box component="img" src={brokenLogo} alt="StitchSense Broken Logo" maxWidth="100%" />
						</Grid>
						<Grid item xs={12} sm={9} md={6}>
							<Stack
								direction={'column'}
								alignItems={{ xs: 'center', sm: 'flex-start' }}
							>
								{
									isXs
										? <SectionTitle variant="h4" component="p" title="Oops... 404 Error" justify="left"></SectionTitle>
										: <SectionTitle variant="h3" component="p" title="Oops... 404 Error" justify="left"></SectionTitle>
								}

								<Box p={2}>
									<Typography variant="body1" component="p">StitchSense does not recognize this page.</Typography>
									<Stack

										display='flex'
										direction={{ xs: 'column', lg: 'row' }}
										alignItems={{ xs: 'flex-start', lg: 'center' }}
									>
										<Typography variant="body1" component="p">Please check the URL and try again OR </Typography>
										<Button
											variant="text"
											sx={{ color: "custom.theme.darkGreen" }}
											LinkComponent={RouterLink}
											href='/'
										>Click here to go home</Button>
									</Stack>
								</Box>
							</Stack>
						</Grid>
					</Grid>
				</Container>
			</Stack>
			<Footer />
		</>
	)
}

export default ErrorView