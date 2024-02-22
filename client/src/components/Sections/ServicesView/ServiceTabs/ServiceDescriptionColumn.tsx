import uniqid from 'uniqid'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import GreenButtonWithLink from '../../../GreenButtonWithLink'

interface Props {
    description: string[]
}

function ServiceDescriptionColumn({
    description
}: Props) {
    return (
        <>
            <Stack height={'100%'}>
                <Stack pt={2} mb={2} >
                    {
                        description.length > 0
                            ? description.map((desc: string) => (
                                <Typography mb={1} variant='body1' component='p' textAlign='justify' key={uniqid()}>
                                    {desc}
                                </Typography>
                            ))
                            : <Typography variant='body1' component='p' textAlign='justify' key={uniqid()}>
                                {description}
                            </Typography>
                    }

                </Stack>

                <Box sx={{ margin: 'auto auto 20px auto' }}>
                    <GreenButtonWithLink
                        variant='contained'
                        size='large'
                        boxShadow
                        linkTo='contact-us'
                    >
                        GET A QUOTE
                    </GreenButtonWithLink>
                </Box>
            </Stack>
        </>
    )
    
}

export default ServiceDescriptionColumn