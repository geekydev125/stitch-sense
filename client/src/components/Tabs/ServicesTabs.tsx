import { useState } from 'react';
import uniqid from 'uniqid';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import styled from '@mui/material/styles/styled'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import services from '../../data/services.json'
import CustomTabPanel from './CustomTabPanel';


const tabsStyles = {
    color: 'green',
    '& button': {
        xs: {
            fontSize: '18px'
        },
        md: {
            fontSize: '30px',
        },
    },
    '& button.Mui-selected': {
        border: '3px solid gray',
        borderRadius: '20px',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    '& button:hover': {
        backgroundColor: 'custom.theme.lightGreen'
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    TabIndicatorProps={{hidden: true}}
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
                Item 1
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item 2
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