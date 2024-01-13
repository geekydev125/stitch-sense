import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@mui/material/styles/styled"

const StyledBox = styled(Box)`
    background: rgba(255,255,255,0);
    background: linear-gradient(135deg, rgba(211,211,211,1) 0%, rgba(255,255,255,0) 75%);
`

interface Props {
    title: string
}

function SectionTItle({
    title
}: Props) {
    return (
        <StyledBox>
            <Typography variant="h3" component='h4' textAlign='center' mt={4} mb={0} p={2}>
                {title}
            </Typography>
        </StyledBox>
    )
}

export default SectionTItle