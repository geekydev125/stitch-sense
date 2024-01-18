import Stack from "@mui/material/Stack"
import SectionTitle from "../SectionTitle"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Arrow from "../Arrow"
import { IStepArticle } from "../../views/OurProcessView"

interface Props extends Omit<IStepArticle, 'contentOrder'> { }
function ProcessStepCard({
    title,
    content,
    step,
    imageSrc,
}: Props) {
    return (
        <Stack direction='column' justifyContent='center' alignItems='center' position='relative' >
            <Stack direction='row' justifyContent='space-between' alignItems='center' >
                <SectionTitle title={title} variant="h5" />

            </Stack>
            <Typography variant="h3" component='p' color='custom.theme.darkGray' pr={2} sx={{
                position: 'absolute',
                top: '-20px',
                right: '-20px'
            }}>{step}</Typography>

            <Box mt={2} component='img' src={`/src/assets/img/${imageSrc}`} alt={`${title} image`} sx={{ height: '80px' }} />

            <Typography mt={2} variant="body1" component='p' color='custom.theme.darkGray' textAlign='justify'>{content}</Typography>

            {step !== 6 && (
                <Box position='absolute' right='-15%' top='20%'>
                    <Arrow arrowType={2} scaleX={-0.5} scaleY={-0.5} rotation={45}  />
                </Box>
            )}

        </Stack>
    )
}

export default ProcessStepCard