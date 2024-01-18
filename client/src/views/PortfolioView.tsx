import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'

import isTitledView from '../HOC/isTitledView'
import portfolioBacgkroundImg from '/assets/img/portfolio-background.jpg'
import portfolio from '../data/portfolio.json'

import CustomDivider from '../components/CustomDivider'
import StandardImageList from '../components/Sections/PortfolioView/StandardImageList'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import uniqid from 'uniqid'
import CustomTabPanel from '../components/Sections/ServicesViewSections/ServiceTabs/CustomTabPanel'

const tabsStyles = {
    '.MuiTabs-flexContainer': {
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    '& button': {
        borderRadius: '20px 20px 0 0',
        xs: {
            fontSize: '18px'
        },
        md: {
            fontSize: '30px',
        },
    },
    '& button.Mui-selected': {
        border: '3px solid custom.theme.darkGreen',
        borderRadius: '20px 20px 0 0',
        backgroundColor: 'custom.theme.darkGreen',
        color: '#ffffff',
    },
    '& button.Mui-selected:hover': {
        backgroundColor: 'custom.theme.darkGreen',
    },
    '& button:hover': {
        borderRadius: '20px 20px 0 0',
        backgroundColor: 'custom.theme.lightGreen',
        color: '#ffffff',
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
        setValue(newValue);
    };

	return (
		<Box my={10}>
			<Container>
				<Typography variant="body1" component="p" textAlign='center' color='custom.theme.darkGray'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
				</Typography>

				<CustomDivider my={5}/>

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
                        <StandardImageList {...brand} cols={4} gap={8} />
                    </CustomTabPanel>
                ))
            }


			</Container>
		</Box>
	)
}

export default isTitledView(PortfolioView,
	{
		viewTitle: "Portfolio",
		imageSrc: portfolioBacgkroundImg,
	}
)