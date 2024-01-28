import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'

import isTitledView from '../HOC/isTitledView'
import portfolioBackgroundSmallScreen from '../assets/img/title-backgrounds/services-background-small-screen.jpg'
import portfolioBackgroundLargeScreen from '../assets/img/title-backgrounds/services-background-large-screen.jpg'

import portfolio from '../data/portfolio.json'

import CustomDivider from '../components/CustomDivider'
import StandardImageList from '../components/Sections/PortfolioView/StandardImageList'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import uniqid from 'uniqid'
import CustomTabPanel from '../components/Sections/ServicesView/ServiceTabs/CustomTabPanel'
import CallToActionSection from '../components/CallToActionSection'

const tabsStyles = {
	'.MuiTabs-flexContainer': {
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    '& button': {
        xs: {
            fontSize: '18px',
            backgroundColor: '#f1f1f1',
            margin: '5px 5px',
            borderRadius: '20px',
        },
		sm: {
			fontSize: '23px',
		},
        md: {
            fontSize: '27px',
            borderRadius: '20px 20px 0 0',
            margin: '0 5px',
            '&:first-of-type': {
                margin: '0 5px 0 0',
            },
            '&:last-of-type': {
                margin: '0 0 0 5px',
            }
        },
        lg: {
            fontSize: '30px',
        },
    },
    '& button.Mui-selected': {
        xs: {
            border: '3px solid #35908d',
            borderRadius: '20px',
            backgroundColor: '#35908d',
            color: '#ffffff',
        },
        md: {
            borderRadius: '20px 20px 0 0',
        }

    },
    '& button.Mui-selected:hover': {
        backgroundColor: '#35908d',
    },
    '& button:hover': {
        xs: {
            borderRadius: '20px',
            backgroundColor: '#45b6b2',
            color: '#ffffff',
        },
        md: {
            borderRadius: '20px 20px 0 0',
        }

    }
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function PortfolioView() {
	const [value, setValue] = useState<number>(0);
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.down('sm'));
	const isMd = useMediaQuery(theme.breakpoints.up('md'));

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
	console.log('event:', event)

		setValue(newValue);
	};

	return (
		<Box mt={{ xs: 5, md: 10 }} mb={{ xs: 7, md: 10 }}>
			<Container>
				<Box px={{ xs: 0, md: 10 }}>
					<Typography variant="body1" component="p" textAlign={{xs: 'justify', md: 'center'}} color='custom.theme.darkGray'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
					</Typography>
				</Box>

				<CustomDivider my={{xs: 3, md: 5}} />

				<Box sx={{ borderBottom: 1, borderColor: 'custom.theme.lightGreen' }}>
					<Tabs
						TabIndicatorProps={{ hidden: true }}
						scrollButtons={true}
						allowScrollButtonsMobile
						value={value}
						onChange={handleChange}
						aria-label="services tabs"
						visibleScrollbar
						variant={isXs ? 'standard' : isMd ? 'fullWidth' : 'standard'}
						sx={tabsStyles}
					>
						{portfolio.map((brand, index) => (
							<Tab disableRipple key={uniqid()} label={brand.title} {...a11yProps(index)} />
						))}
					</Tabs>
				</Box>

				{
					portfolio.map((brand, index) => (
						<CustomTabPanel key={uniqid()} value={value} index={index}>
							<StandardImageList {...brand} cols={isXs ? 3 : 4} gap={isXs ? 4 : 8} />
						</CustomTabPanel>
					))
				}

				<CustomDivider mt={{xs: 4, md: 5}} mb={{xs: 3, md: 5}} />

				<CallToActionSection />
			</Container>
		</Box>
	)
}

export default isTitledView(PortfolioView,
	{
		viewTitle: "Portfolio",
		imageSrcSmallScreen: portfolioBackgroundSmallScreen,
		imageSrcLargeScreen: portfolioBackgroundLargeScreen
	}
)