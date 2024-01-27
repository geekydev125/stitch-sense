import Stack from '@mui/material/Stack'
import divider from '/assets/img/divider.png'

interface Props {
    mt?: number | {},
    mb?: number | {},
    my?: number | {},
    ml?: number | {},
    mr?: number | {},
    mx?: number | {},
    m?: number | {},
    pt?: number | {},
    pb?: number | {},
    py?: number | {},
    pl?: number | {},
    pr?: number | {},
    px?: number | {},
    p?: number | {}
}
function CustomDivider({
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
        <Stack
            sx={{
                transform: {
                    xs: "scale(0.5)",
                    md: "scale(1)"
                }
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={mt} mb={mb} my={my} ml={ml} mr={mr} mx={mx} m={m} pt={pt} pb={pb} py={py} pl={pl} pr={pr} px={px} p={p}
        >
            <img src={divider} alt='Divider' width={'auto'} height={'auto'} />
        </Stack>
    )
}

export default CustomDivider