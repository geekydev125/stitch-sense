import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Icard } from "./Sections/HomeViewSections/WhyTrustUsSection"
import Paper from "@mui/material/Paper"

interface Props extends Icard {
}

function SimpleCard({
    title,
    content,
    imageSrc,
    variant
}: Props) {
    return (
        <Paper sx={{ borderRadius: '20px' }} elevation={6}>
            <Card
                sx={{
                    minHeight: {
                        xs: 'auto',
                        sm: '530px',
                        lg: '430px'
                    },
                    backgroundColor: variant === 'light' ? 'custom.theme.almostWhite' : 'custom.theme.darkGray',
                    borderRadius: '20px',
                    border: '2px solid',
                    borderColor: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
                }}
                elevation={0}
            >
                <Box p={2}>
                    <Typography
                        variant='h4'
                        component='h4'
                        textAlign='center'
                        textTransform='uppercase'
                        sx={{
                            color: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
                        }}
                    >
                        {title}
                    </Typography>

                    <Stack sx={{ width: '100%', height: '120px' }} p={1} mt={2} justifyContent='center' alignItems='center'>
                        <Box component={'img'} src={imageSrc} alt='Customer Care Icon' height="100%" />
                    </Stack>

                    <Typography
                        variant='body1'
                        component='p'
                        textAlign='justify'
                        mt={3}
                        sx={{
                            color: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
                        }}
                    >
                        {content}
                    </Typography>
                </Box>
            </Card>
        </Paper>
    )
}

export default SimpleCard