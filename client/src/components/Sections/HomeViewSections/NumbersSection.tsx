import Grid from '@mui/material/Grid'

import uniqid from 'uniqid'
import NumbersCard from '../../NumbersCard'

export interface InumbersContent {
    number: string | number,
    mainContent: string,
    subContent?: string,
    subSubContent?: string
}

const numbersContent: InumbersContent[] = [
    {
        number: '50',
        mainContent: 'SEAMSTRESSES',
        subContent: '+50 ADDITIONAL ONES',
        subSubContent: 'when volumes are higher'
    },
    {
        number: '~550',
        mainContent: 'ITEMS PER DAY PRODUCTION CAPACITY',
    },
    {
        number: '6',
        mainContent: 'HIGH-QUALITY JAPANESE PRINTERS',
    },
    {
        number: '2',
        mainContent: 'STATE-OF-THE-ART CUTTING LASERS',
    }
]

function NumbersSection() {
    return (
        <>
            <Grid container spacing={3}>
                {
                    numbersContent.map(number => (
                        <Grid item xs={12} sm={6} md={3} key={uniqid()}>
                            <NumbersCard number={number.number} mainContent={number.mainContent} subContent={number.subContent} subSubContent={number.subSubContent} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default NumbersSection