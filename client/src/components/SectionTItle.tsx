import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@mui/material/styles/styled"

const StyledBox = styled(Box)`
    background: rgba(255,255,255,0);
    background: linear-gradient(135deg, rgba(211,211,211,1) 0%, rgba(255,255,255,0) 75%);
`

interface Props {
    title: string,
    mt?: number,
    mb?: number,
    my?: number,
    ml?: number,
    mr?: number,
    mx?: number,
    m?: number,
    pt?: number,
    pb?: number,
    py?: number,
    pl?: number,
    pr?: number,
    px?: number,
    p?: number
}

function SectionTitle({
    title,
    mt,
    mb,
    my,
    ml,
    mr,
    mx,
    m,
    pt,
    pb,
    py,
    pl,
    pr,
    px,
    p
}: Props) {
    return (
        <StyledBox>
            <Typography variant="h3" component='h4' textAlign='center' mt={mt} mb={mb} my={my} ml={ml} mr={mr} mx={mx} m={m} pt={pt} pb={pb} py={py} pl={pl} pr={pr} px={px} p={p} >
                {title}
            </Typography>
        </StyledBox >
    )
}

export default SectionTitle