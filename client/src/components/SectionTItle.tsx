import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

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
        <Stack display='flex' direction='row' justifyContent='center'>
            <Typography
                sx={{
                    display: 'inline-block',
                    width: 'auto',
                    backgroundColor: '#f1f1f1',
                    borderRadius: 5,
                    padding: '5px 40px'
                }}
                variant="h3"
                component='h4'
                textAlign='center'
                mt={mt} mb={mb} my={my} ml={ml} mr={mr} mx={mx} m={m} pt={pt} pb={pb} py={py} pl={pl} pr={pr} px={px} p={p}
            >
                {title}
            </Typography>
        </Stack>
    )
}

export default SectionTitle