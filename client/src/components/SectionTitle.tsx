import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Props {
    title: string,
    justify?: string,
    variant?: "h6" | "h5" | "h4" | "h3" | "h2" | "h1" | "body1" | "body2",
    component?: "h6" | "h5" | "h4" | "h3" | "h2" | "h1" | "p",
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

function SectionTitle({
    title,
    justify = 'center',
    variant = 'h3',
    component='h3',
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
    px = {xs: 2, sm: 5},
    p
}: Props) {
    return (
        <Stack display='flex' direction='row' justifyContent={justify}>
            <Typography
                sx={{
                    display: 'inline-block',
                    width: 'auto',
                    backgroundColor: '#f1f1f1',
                    borderRadius: 5,
                    padding: '5px 40px',
                    color: 'custom.theme.darkGray',
                }}
                textAlign='center'
                variant={variant}
                component={component}
                mt={mt} mb={mb} my={my} ml={ml} mr={mr} mx={mx} m={m} pt={pt} pb={pb} py={py} pl={pl} pr={pr} px={px} p={p}
            >
                {title}
            </Typography>
        </Stack>
    )
}

export default SectionTitle