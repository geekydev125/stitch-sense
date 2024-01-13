import challengesImage from '/assets/img/challenges.png'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import SectionTitle from '../../SectionTitle'

function WhyChooseUsSection() {
    return (
        <Box mt={10}>
            <SectionTitle title='WHY CHOOSE US?' mt={4} p={2} />

            <Box
                sx={{
                    borderLeft: '1px solid lightgray',
                    borderRight: '1px solid lightgray',
                    borderBottom: '1px solid lightgray',
                }}
                py={6}
                px={2}
            >
                <Typography variant="h5" component='p' mb={5} px={2} textAlign='justify'>
                    Our <b>mission is to help your business grow</b> by impeccably handling all the manufacturing processes, so that you can get extra time to focus on nurturing your company and promote your own brand. We deeply care about your success, our first priority is to satisfy your needs by providing you with the highest possible quality products on time.
                </Typography>

                <Box component='img' src={challengesImage} alt='Challenges' sx={{ width: '100%' }} />

                <Typography variant="h5" component='p' mt={3} textAlign='center'>
                    Our services are carefully designed to <b>take care of all of your production needs</b>.
                </Typography>

            </Box>


        </Box>
    )
}

export default WhyChooseUsSection