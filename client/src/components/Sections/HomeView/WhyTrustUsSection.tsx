import uniqid from 'uniqid'

import customerCareIcon from '../../../assets/img/customer-care-icon.png'
import arrowsIcon from '../../../assets/img/arrows-icon.png'
import puzzleIcon from '../../../assets/img/puzzle-icon.png'

import SimpleEmployeeCard from '../../Cards/SimpleEmployeeCard'
import SectionTitle from '../../SectionTitle'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SimpleBusinessCard from '../../Cards/SimpleBusinessCard'


export interface Icard {
    title: string,
    content: string,
    imageSrc?: string,
    variant: 'light' | 'dark',
}

const clientsImpactCardsContent: Icard[] = [
    {
        title: 'CUSTOMER CARE',
        content: 'We are here to provide you with exceptional customer service, help with designs, sourcing materials, and general consulting. We’ve got you covered.',
        imageSrc: customerCareIcon,
        variant: 'light'
    },
    {
        title: 'VOLUME FLEXIBILITY',
        content: 'We are dedicated to giving you as much flexibility as you need, so whether you need a large-scale or a small-scale order to befulfilled, we’ve got your back.',
        imageSrc: arrowsIcon,
        variant: 'dark'
    },
    {
        title: 'FINISHED PRODUCTS',
        content: 'We can help you solve the puzzle by takingcare of all your manufacturing needs and providing you with a completely finished product so that you can be ready to enjoy your business succes.',
        imageSrc: puzzleIcon,
        variant: 'light'
    }
]

export const employeesImpactCardsContent: Icard[] = [
    {
        title: 'FAIRLY PAID WORKERS',
        content: 'Our factory workers are paid well for their work. We stand firmly against employee exploitation.',
        variant: 'light'
    },
    {
        title: 'GOOD WORKING CONDITIONS',
        content: 'We provide good working conditions, because we care.',
        variant: 'dark'
    },
    {
        title: 'ETHICAL MINDSET',
        content: 'We constantly try to improve and strive for the well-being of our employees.',
        variant: 'light'
    },
]

function WhyTrustUsSection() {
    return (
        <Box>
            <SectionTitle title='WHY TRUST US?' p={2} />

            <Box mt={5}>

                <SectionTitle title='OUR IMPACT ON YOU' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0}>
                    {clientsImpactCardsContent.map(card => {
                        return (
                            <Grid key={uniqid()} item xs={12} md={4}>
                                <SimpleBusinessCard {...card} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

            <Box mt={5}>
                <SectionTitle title='OUR IMPACT ON EMPLOYEES' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0}>
                    {employeesImpactCardsContent.map(card => {
                        return (
                            <Grid key={uniqid()} item xs={12} md={4}>
                                <SimpleEmployeeCard {...card} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyTrustUsSection