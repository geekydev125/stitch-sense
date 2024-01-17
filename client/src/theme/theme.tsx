import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme({
    palette: {
        custom: {
            theme: {
                lightGreen: '#45b6b2',
                darkGreen: '#35908d',
                almostWhite: '#f1f1f1',
                darkGray: '#3e3d3d'
            }
            
        }
    },
    typography: {
        fontFamily: 'Oswald, sans-serif',
        fontSize: 18,
        h1: {
            fontSize: '7rem'
        },
        body2: {
            fontSize: '1.2rem'
        }
    }
})

theme = responsiveFontSizes(theme);

export default theme;