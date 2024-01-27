import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import arrowLeft from '/assets/img/arrows-divider/arrow-wavy.png'
import arrowDown from '/assets/img/arrows-divider/arrow-curved.png'

interface Props {
    arrowType: 1 | 2,
    rotate?: number
    scaleX?: number,
    scaleY?: number,
    height: number,
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
function Arrow({
    arrowType,
    rotate,
    scaleX = 1,
    scaleY = 1,
    height,
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
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={mt} mb={mb} my={my} ml={ml} mr={mr} mx={mx} m={m} pt={pt} pb={pb} py={py} pl={pl} pr={pr} px={px} p={p}
        >
            <Box sx={{ transform: { xs: "scale(0.7)", md: "scale(1)"} }}>
                <Box sx={{
                    transform: `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)`
                }}
                    component="img"
                    src={arrowType === 1 ? arrowLeft : arrowDown}
                    alt='Arrow'
                    width={'auto'}
                    height={height}
                />
            </Box>
        </Stack>
    )
}

export default Arrow