import challengesImage from '../../../assets/img/challenges.png'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import SectionTitle from '../../SectionTitle'

function WhyChooseUsSection() {
    return (
        <Box >
            <SectionTitle title='WHY CHOOSE US?' p={2} />

            <Box mt={3} px={2}>
                <Typography variant="body1" component='p' mb={5} px={2} textAlign='center'>
                    Our <b>mission</b> is to help your business grow by impeccably handling all the manufacturing processes, so that you can get extra time to focus on nurturing your company and promote your own brand. We deeply care about your success, our first priority is to satisfy your needs by providing you with the highest possible quality products on time.
                </Typography>

                <Box component='img' src={challengesImage} alt='Challenges' sx={{ width: '100%' }} />
            </Box>
        </Box>
    )
}

export default WhyChooseUsSection