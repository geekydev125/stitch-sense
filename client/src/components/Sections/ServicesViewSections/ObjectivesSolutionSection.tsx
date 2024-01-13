import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'

const StyledTitleBox = styled(Box)`
	background-color: #f1f1f1;
	max-width: fit-content;
	border-radius: 20px;
`

function ObjectivesSolutionSection() {
    return (
        <>
            <Grid container my={6}>
                <Grid item xs={12} md={6}>
                    <StyledTitleBox mb={1} px={3} >
                        <Typography variant='h4' component='h4' py={1} px={2} width='auto'>OBJECTIVES</Typography>
                    </StyledTitleBox>

                    <Typography variant='body1' component='p'>We help you with all the manufacturing process steps, so that you do not have to worry about a thing when it comes to your production. We provide you with a <b>100% completed product</b>, so that you can build up your brand and create a successful business.
                    </Typography>

                    <br />
                    <Typography variant='body1' component='p'>
                        Along with all the manufacturing services, we also offer you designing and advising services that can help you create a successful product and good profit. You get to just sit back and relax without worrying about hiring an experienced team and maintaining costly machinery, because we’ve got you covered.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledTitleBox mb={1} px={3} >
                        <Typography variant='h4' component='h4' py={1} px={2} width='auto'>SOLUTION</Typography>
                    </StyledTitleBox>

                    <Typography variant='body1' component='p'>
                        By providing you with a completed product, the need for qualified personnel and expensive equipment is eliminated, so you get to enjoy some significant savings that you can invest back into your business and watch it grow.
                    </Typography>

                    <br />
                    <Typography variant='body1' component='p'>
                        We have years of experience in the industry, we have already gone through the whole process with our own successful brands and we are ready to help you in any way we can. <b>Transparency, years or experience, testimonials from satisfied customers and drive</b> is what we offer you so that you can increase your business growth and enjoy success.
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ObjectivesSolutionSection