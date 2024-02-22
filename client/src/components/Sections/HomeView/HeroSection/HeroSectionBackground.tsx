import Box from '@mui/material/Box'
import paperPatternLg from '../../../../assets/img/paper-pattern-lg.png'
import paperPatternMd from '../../../../assets/img/paper-pattern-md.png'
import { ICustomHeights } from './HeroSection'

interface Props {
    customHeights: ICustomHeights
    children: React.ReactNode
}
function HeroSectionBackground({ customHeights, children }: Props) {
    return (
        <Box
            sx={{
                width: '100%',
                height: { ...customHeights },
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundImage: {
                    // xs: `url('${paperPatternXsSm}')`,
                    md: `url('${paperPatternMd}')`,
                    lg: `url('${paperPatternLg}')`,
                },
                backgroundColor: {
                    xs: 'rgba(0,0,0,0.5)',
                    md: 'initial',
                },
                backgroundRepeat: 'no-repeat',
                backgroundSize: {
                    xs: "cover",
                    sm: 'cover',
                    md: "cover",
                },
                zIndex: 2
            }}
        >
            {children}
        </Box>
    )
}

export default HeroSectionBackground