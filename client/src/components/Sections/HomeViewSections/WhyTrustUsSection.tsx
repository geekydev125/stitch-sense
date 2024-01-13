import uniqid from 'uniqid'

import customerCareIcon from '/assets/img/customer-care-icon.png'
import arrowsIcon from '/assets/img/arrows-icon.png'
import puzzleIcon from '/assets/img/puzzle-icon.png'

import SimpleCard from '../../SimpleCard'
import SectionTitle from '../../SectionTitle'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const cardsContent = [
    {
        title: 'Customer Care',
        content: 'We are here to provide you with exceptional customer service, help with designs, sourcing materials, and general consulting. We’ve got you covered.',
        imageSrc: customerCareIcon
    },
    {
        title: 'Volume Flexibility',
        content: 'We are dedicated to giving you as much flexibility as you need, so whether you need a large-scale or a small-scale order to befulfilled, we’ve got your back.',
        imageSrc: arrowsIcon
    },
    {
        title: 'Finished Products',
        content: 'We can help you solve the puzzle by takingcare of all your manufacturing needs and providing you with a completely finished product so that you can be ready to enjoy your business succes.',
        imageSrc: puzzleIcon
    }
]

function WhyTrustUsSection() {
    return (
        <Box mt={10}

        >
            <SectionTitle title='WHY TRUST US?' p={2} />

            <Grid container
                sx={{
                    borderLeft: '1px solid lightgray',
                    borderRight: '1px solid lightgray',
                    borderBottom: '1px solid lightgray',
                }}
            >
                {cardsContent.map(card => {
                    return (
                        <Grid key={uniqid()} item xs={12} md={4}>
                            <SimpleCard title={card.title} content={card.content} imageSrc={card.imageSrc} />

                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default WhyTrustUsSection