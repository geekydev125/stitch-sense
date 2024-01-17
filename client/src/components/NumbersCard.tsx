import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { InumbersContent } from "./Sections/HomeViewSections/NumbersSection"
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
                        width: '220px',
                        height: '220px',
                        backgroundColor: 'custom.theme.darkGray',
                        border: '2px solid',
                        borderColor: 'custom.theme.almostWhite',
                    }}>
                    <Typography variant='h2' component='p' color='custom.theme.almostWhite' >{number}</Typography>
                </Stack>
            </Paper>

            <Box mt={3}>
                <Typography variant='h4' component='p' color='custom.theme.darkGray' textAlign='center'>{mainContent}</Typography>

                {subContent && <Typography fontWeight='bold' variant='h6' component='p' color='custom.theme.darkGray' textAlign='center'>{subContent}</Typography>}

                {subSubContent && <Typography variant='body1' component='p' color='custom.theme.darkGray' textAlign='center'>{subSubContent}</Typography>}
            </Box>
        </Stack>
    )
}

export default NumbersCard