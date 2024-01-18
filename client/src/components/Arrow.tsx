import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import arrowLeft from '/src/assets/img/arrow-left.png'
import arrowDown from '/src/assets/img/arrow-down.png'

interface Props {
    arrowType: 1 | 2,
    rotation?: number
    scaleX?: number,
    scaleY?: number,
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
function Arrow({
    arrowType,
    rotation,
    scaleX = 1,
    scaleY = 1,
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

            <Box sx={{
                transform: `scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotation}deg)`
            }}
                component="img"
                src={arrowType === 1 ? arrowLeft : arrowDown}
                alt='Arrow'
                width={'auto'}
                height={'auto'}
            />
        </Stack>
    )
}

export default Arrow