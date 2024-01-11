import challengesImage from '/assets/img/challenges.png'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function WhyChooseUsSection() {
    return (
        <Box mt={10}>
            <Typography variant="h3" component="h4" textAlign="center" my={4} >
                WHY CHOOSE US?
            </Typography>

            <Typography variant="h5" component='p' mb={5} px={2} textAlign='justify'>
                Our <b>mission is to help your business grow</b> by impeccably handling all the manufacturing processes, so that you can get extra time to focus on nurturing your company and promote your own brand. We deeply care about your success, our first priority is to satisfy your needs by providing you with the highest possible quality products on time.
            </Typography>

            <Box component='img' src={challengesImage} alt='Challenges' sx={{ width: '100%' }} />

            <Typography variant="h5" component='p' mt={3} textAlign='center'>
                Our services are carefully designed to <b>take care of all of your production needs</b>.
            </Typography>

        </Box>
    )
}

export default WhyChooseUsSection