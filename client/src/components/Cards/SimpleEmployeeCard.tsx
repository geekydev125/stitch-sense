import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import { Icard } from "../Sections/HomeView/WhyTrustUsSection"
import Paper from "@mui/material/Paper"

interface Props extends Icard {
}

function SimpleEmployeeCard({
    title,
    content,
    variant,
}: Props) {
    return (
        <Paper sx={{ borderRadius: '50px' }} elevation={6}>

            <Card
                sx={{
                    minHeight: {
                        xs: 'auto',
                        md: '300px',
                        lg: '260px'
                    },
                    backgroundColor: variant === 'light' ? 'custom.theme.almostWhite' : 'custom.theme.darkGray',
                    borderRadius: '50px',
                    border: '2px solid',
                    borderColor: variant === 'light' ? 'custom.theme.darkGray' : 'custom.theme.almostWhite',
                }}
                elevation={0}
            >
                <Box p={2}>
                    <Typography
                        minHeight={ {
                            xs: '0',
                            md: '104px'
                        }}
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

                    <Typography
                        variant='body1'
                        component='p'
                        textAlign={{
                            xs: 'center',
                            md: 'justify'
                        }}
                        mt={{
                            xs: 1,
                            md: 3
                        }}
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

export default SimpleEmployeeCard