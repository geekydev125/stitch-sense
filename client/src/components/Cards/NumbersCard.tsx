import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { InumbersContent } from "../Legacy/NumbersSectionLegacy"
import Paper from "@mui/material/Paper"


interface Props extends InumbersContent { }
function NumbersCard({
    number,
    mainContent,
    subContent,
    subSubContent
}: Props) {
    return (
        <Stack display='flex' direction='column' alignItems='center'>
            <Paper sx={{borderRadius: '50%'}} elevation={6}>
                <Stack
                    display='flex'
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        borderRadius: '50%',
                        width: {
                            xs: '140px',
                            md: '180px',
                            lg: '220px'
                        },
                        
                        height: {
                            xs: '140px',
                            md: '180px',
                            lg: '220px'
                        },
                        backgroundColor: 'custom.theme.darkGray',
                        border: '2px solid',
                        borderColor: 'custom.theme.almostWhite',
                    }}>
                    <Typography variant='h2' component='p' color='custom.theme.almostWhite' >{number}</Typography>
                </Stack>
            </Paper>

            <Box mt={{xs: 1, md: 3}} mb={{xs: 2, md: 0}}>
                <Typography fontWeight='bold'  variant='h5' component='p' color='custom.theme.darkGray' textAlign='center' >{mainContent}</Typography>

                {subContent && <Typography fontWeight='bold' variant='body1' component='p' color='custom.theme.darkGray' textAlign='center'>{subContent}</Typography>}

                {subSubContent && <Typography variant='body2' component='p' color='custom.theme.darkGray' textAlign='center'>{subSubContent}</Typography>}
            </Box>
        </Stack>
    )
}

export default NumbersCard