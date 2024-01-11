import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
    title: string,
    content: string,
    imageSrc: string
}

function SimpleCard({
    title,
    content,
    imageSrc
}: Props) {
    return (
        <Card sx={{ minHeight: '400px' }} elevation={0}>
            <Stack sx={{ width: '100%', height: '150px' }} p={1} mt={2} justifyContent='center' alignItems='center'>
                <Box component={'img'} src={imageSrc} alt='Customer Care Icon' height="100%" />
            </Stack>
            <Stack p={3}>
                <Typography variant='h4' component='h4' textAlign='center'>{title}</Typography>
                <Typography variant='body1' component='p' textAlign='justify' mt={3}>{content}</Typography>
            </Stack>
        </Card>
    )
}

export default SimpleCard