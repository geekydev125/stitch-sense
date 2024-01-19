import uniqid from 'uniqid';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import CustomTabPanel from './CustomTabPanel';

import services from '../../../../data/services.json'
import ServiceDescriptionColumn from './ServiceDescriptionColumn';
import MasonryImageList from './MasonryImageList';
import { useServiceTabsContext } from '../../../../contexts/ServiceTabsContext';

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

function ServicesTabs() {
    const { activeTabIndex, changeActiveTab } = useServiceTabsContext();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
        
        changeActiveTab(newIndex);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'custom.theme.lightGreen' }}>
                <Tabs
                    TabIndicatorProps={{ hidden: true }}
                    scrollButtons={true}
                    allowScrollButtonsMobile
                    value={activeTabIndex}
                    onChange={handleChange}
                    aria-label="services tabs"
                    visibleScrollbar
                    variant={isXs ? 'standard' : isMd ? 'fullWidth' : 'standard'}
                    sx={tabsStyles}
                >
                    {services.map((service, index) => (
                        <Tab disableRipple key={uniqid()} label={service.title} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>

            {
                services.map((service, index) => (
                    <CustomTabPanel key={uniqid()} value={activeTabIndex} index={index}>
                        <Grid container>
                            <Grid item xs={12} md={4} >
                                <ServiceDescriptionColumn />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <MasonryImageList images={service.images} cols={3} gap={8} />
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                ))
            }
        </>
    )
}

export default ServicesTabs