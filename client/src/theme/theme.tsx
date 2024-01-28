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
        fontFamily: "roc-grotesk, sans-serif",
        fontSize: 15,
    }
})

theme = responsiveFontSizes(theme);

export default theme;