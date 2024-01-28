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
// import MasonryImageList from './MasonryImageList';
import { useServiceTabsContext } from '../../../../contexts/ServiceTabsContext';
import getImageUrl from '../../../../utils/image-util';

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
        md: {
            fontSize: '20px',
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
            fontSize: '25px',
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

function ServicesTabs() {
    const { activeTabIndex, changeActiveTab } = useServiceTabsContext();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
        console.log('event:', event)

        changeActiveTab(newIndex);
    };

    return (
        <>
            <Box id="service-tabs" sx={{ borderBottom: 1, borderColor: 'custom.theme.lightGreen' }}>
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
                        <Grid container spacing={{xs: 0, sm: 2}} mt={{xs: 1, md: 0}}>
                            <Grid item xs={12} sm={6} md={5} >
                                {/* <Grid item xs={12} lg={3} > With Masonry*/}
                                <ServiceDescriptionColumn description={service.content} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={7} display='flex' direction='row' justifyContent='center'>
                                {/* <Grid item xs={12} lg={9}> With Masonry*/}
                                <Box sx={{
                                    height: {
                                        xs: '90%',
                                        md: 'auto',
                                    },
                                    width: 'auto',
                                }}
                                    component='img'
                                    src={getImageUrl('card-backgrounds', service.imageSrc)}
                                    alt={`${service.title} image `}
                                />
                                {/* <MasonryImageList images={service.images} cols={3} gap={8} /> */}
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                ))
            }
        </>
    )
}

export default ServicesTabs