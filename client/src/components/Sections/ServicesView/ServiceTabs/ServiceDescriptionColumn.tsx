import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import GreenButton from '../../../GreenButton'

function ServiceDescriptionColumn() {
    return (
        <>
            <Stack minHeight='620px'>
                <Box mb={2}>
                    <Typography variant='body1' component='p'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
                    </Typography>
                    <br />
                    <Typography variant='body1' component='p'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
                    </Typography>
                    <br />
                    <Typography variant='body1' component='p'>
                        Lorem ipsum Lorem vel ipsa minus dicta possimus, vero.
                    </Typography>
                </Box>

                <Box sx={{margin: 'auto auto 20px auto'}}>
                    <GreenButton
                        variant='contained'
                        size='large'
                        boxShadow
                    >
                        GET A QUOTE
                    </GreenButton>
                </Box>


                {/* 
                <Button
                    variant='contained'
                    size='large'
                    sx={{
                        margin: 'auto auto 20px auto',
                        backgroundColor: 'custom.theme.lightGreen',
                        "&:hover": {
                            backgroundColor: 'custom.theme.darkGreen',
                        }
                    }}
                >
                    GET A QUOTE
                </Button> */}
            </Stack>
        </>
    )
}

export default ServiceDescriptionColumn