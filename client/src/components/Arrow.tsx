import Stack from '@mui/material/Stack'
import arrow from '/src/assets/img/arrow-left.png'
import Box from '@mui/material/Box'

interface Props {
    direction: 'left' | 'right',
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
    direction = 'left',
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

            <Box sx={
                direction === "right" ? {
                    transform: "scaleX(-1)"
                } : {}
            }
                component="img"
                src={arrow}
                alt='Arrow'
                width={'auto'}
                height={'auto'}
            />
        </Stack>
    )
}

export default Arrow