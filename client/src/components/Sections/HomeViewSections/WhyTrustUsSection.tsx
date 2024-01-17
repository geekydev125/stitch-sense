import uniqid from 'uniqid'

import customerCareIcon from '../../../assets/img/customer-care-icon.png'
import arrowsIcon from '../../../assets/img/arrows-icon.png'
import puzzleIcon from '../../../assets/img/puzzle-icon.png'

import SimpleCard from '../../Cards/SimpleCard'
import SectionTitle from '../../SectionTitle'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


export interface Icard {
    title: string,
    content: string,
    imageSrc?: string,
    variant: 'light' | 'dark',
    type: 'employee' | 'business'
}

const clientCardsContent: Icard[] = [
    {
        title: 'CUSTOMER CARE',
        content: 'We are here to provide you with exceptional customer service, help with designs, sourcing materials, and general consulting. We’ve got you covered.',
        imageSrc: customerCareIcon,
        variant: 'light',
        type: 'business'
    },
    {
        title: 'VOLUME FLEXIBILITY',
        content: 'We are dedicated to giving you as much flexibility as you need, so whether you need a large-scale or a small-scale order to befulfilled, we’ve got your back.',
        imageSrc: arrowsIcon,
        variant: 'dark',
        type: 'business'
    },
    {
        title: 'FINISHED PRODUCTS',
        content: 'We can help you solve the puzzle by takingcare of all your manufacturing needs and providing you with a completely finished product so that you can be ready to enjoy your business succes.',
        imageSrc: puzzleIcon,
        variant: 'light',
        type: 'business'
    }
]

const employeesCardsContent: Icard[] = [
    {
        title: 'FAIRLY PAID WORKERS',
        content: 'Our factory workers are paid well for their work. We stand firmly against employee exploitation.',
        variant: 'light',
        type: 'employee'
    },
    {
        title: 'GOOD WORKING CONDITIONS',
        content: 'We provide good working conditions, because we care.',
        variant: 'dark',
        type: 'employee'
    },
    {
        title: 'ETHICAL MINDSET',
        content: 'We constantly try to improve and strive for the well-being of our employees.',
        variant: 'light',
        type: 'employee'
    },
]

function WhyTrustUsSection() {
    return (
        <Box>
            <SectionTitle title='WHY TRUST US?' p={2} />

            <Box mt={5}>

                <SectionTitle title='OUR IMPACT ON YOU' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0}>
                    {clientCardsContent.map(card => {
                        return (
                            <Grid key={uniqid()} item xs={12} md={4}>
                                <SimpleCard
                                    title={card.title}
                                    content={card.content}
                                    imageSrc={card.imageSrc}
                                    variant={card.variant}
                                    type={card.type} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>

            <Box mt={5}>

                <SectionTitle title='OUR IMPACT ON EMPLOYEES' variant='h5' justify='left' p={2} />

                <Grid container spacing={2} mt={0}>
                    {employeesCardsContent.map(card => {
                        return (
                            <Grid key={uniqid()} item xs={12} md={4}>
                                <SimpleCard
                                    title={card.title}
                                    content={card.content}
                                    imageSrc={card.imageSrc}
                                    variant={card.variant}
                                    type={card.type} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default WhyTrustUsSection