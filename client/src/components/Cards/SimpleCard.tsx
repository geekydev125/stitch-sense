import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { Icard } from "../Sections/HomeViewSections/WhyTrustUsSection"
import Paper from "@mui/material/Paper"

interface Props extends Icard {
}

function SimpleCard({
    title,
    content,
    imageSrc,
    variant,
    type
}: Props) {
    return (
        <Paper sx={{ borderRadius: type === 'business' ? '20px' : '50px', }} elevation={6}>
            <Card
                sx={{
                    minHeight: type === 'business' ? {
                        xs: 'auto',
                        sm: '530px',
                        lg: '430px'
                    } : {
                        xs: 'auto',
                        sm: 'auto',
                        lg: '280px'
                    },
                    backgroundColor: variant === 'light' ? 'custom.theme.almostWhite' : 'custom.theme.darkGray',
                    borderRadius: type === 'business' ? '20px' : '50px',
                    border: '2px solid',
                    borderColor: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
                }}
                elevation={0}
            >
                <Box p={2}>
                    <Typography
                        minHeight={type === 'employee' ? '104px' : ''}
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

                    {type === 'business' && (
                        <Stack sx={{ width: '100%', height: '120px' }} p={1} mt={2} justifyContent='center' alignItems='center'>
                            <Box component={'img'} src={imageSrc} alt='Customer Care Icon' height="100%" />
                        </Stack>

                    )}

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