import uniqid from 'uniqid'

import clientsImpactCardsContent from '../../../data/clientImpact.json'
import employeesImpactCardsContent from '../../../data/employeesImpact.json'

import SimpleEmployeeCard from '../../Cards/SimpleEmployeeCard'
import SectionTitle from '../../SectionTitle'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SimpleBusinessCard from '../../Cards/SimpleBusinessCard'


export interface Icard {
    title: string,
    content: string,
    imageSrc: string,
    alt: string,
    variant: 'light' | 'dark',
}

function WhyTrustUsSection() {
    return (
        <Box>
            <SectionTitle title='WHY TRUST US?'/>

            <Box mt={5}>

                <SectionTitle title='OUR IMPACT ON YOU' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0} alignItems="stretch" justifyContent="stretch">
                    {clientsImpactCardsContent.map((card) => {
                        return (
                            <Grid item key={uniqid()} xs={12} sm={4}>
                                <SimpleBusinessCard {...card as Icard} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

            <Box mt={{xs: 5, md: 10}}>
                <SectionTitle title='OUR IMPACT ON EMPLOYEES' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0}>
                    {employeesImpactCardsContent.map(card => {
                        return (
                            <Grid key={uniqid()} item xs={12} sm={4}>
                                <SimpleEmployeeCard {...card as Omit<Icard, "imageSrc" | "alt">} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyTrustUsSection