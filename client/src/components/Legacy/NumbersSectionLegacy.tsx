import Grid from '@mui/material/Grid'

import uniqid from 'uniqid'
import NumbersCard from '../Cards/NumbersCard'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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
        subSubContent: '(when volumes are higher)'
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

function NumbersSectionLegacy() {
    return (
        <>

            <Box
                sx={{
                    backgroundColor: '#f1f1f1',
                    borderRadius: 5,
                    padding: {
                        xs: '5px 20px',
                        md: '5px 40px'
                    },
                    color: 'custom.theme.darkGray',
                    width: 'auto',
                    display: 'inline-block'
                }}
            >
                <Typography variant='h1' component='h1'
                    sx={{
                        display: 'inline-block',
                        width: 'auto'
                    }}
                >
                    StitchSense
                </Typography>
                <Typography fontStyle={'italic'} component='p' variant='h3'
                    sx={{
                        display: 'inline-block',
                        width: 'auto',
                        marginLeft: {
                            sm: 3
                        }
                    }}
                >
                    in numbers
                </Typography>
            </Box >

            <Grid container spacing={0} mt={3}>
                {
                    numbersContent.map(number => (
                        <Grid item xs={6} sm={6} md={3} key={uniqid()}>
                            <NumbersCard number={number.number} mainContent={number.mainContent} subContent={number.subContent} subSubContent={number.subSubContent} />
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default NumbersSectionLegacy