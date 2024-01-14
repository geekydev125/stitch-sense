import { useState } from 'react';
import uniqid from 'uniqid';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomTabPanel from './CustomTabPanel';
import MasonryImageList from '../MasonryImageList';

import services from '../../data/services.json'

const tabsStyles = {
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
    const [value, setValue] = useState<number>(0);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'custom.theme.lightGreen' }}>
                <Tabs
                    TabIndicatorProps={{ hidden: true }}
                    scrollButtons={true}
                    allowScrollButtonsMobile
                    value={value}
                    onChange={handleChange}
                    aria-label="services tabs"
                    variant={isXs ? 'scrollable' : isMd ? 'fullWidth' : 'standard'}
                    sx={tabsStyles}
                >
                    {services.map((service, index) => (
                        <Tab disableRipple key={uniqid()} label={service.title} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Grid container>
                    <Grid item xs={12} md={4} >
                        <Typography variant='body1' component='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
                        </Typography>
                        <br />
                        <Typography variant='body1' component='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
                        </Typography>
                        <br />
                        <Typography variant='body1' component='p'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero.
                        </Typography>

                        <Button
                            variant='contained'
                            sx={{
                                margin: '20px auto 0px auto',
                                display: 'block',
                                backgroundColor: 'custom.theme.lightGreen',
                                "&:hover": {
                                    backgroundColor: 'custom.theme.darkGreen',
                                }
                            }}
                        >
                            GET A QUOTE
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <MasonryImageList images={services[0].images} />
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        Item 2
                    </Grid>
                    <Grid item xs={12} md={8}>
                        {/* <MasonryImageList /> */}
                    </Grid>
                </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item 3
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item 4
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Item 5
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Item 6
            </CustomTabPanel>
        </>
    )
}

export default ServicesTabs