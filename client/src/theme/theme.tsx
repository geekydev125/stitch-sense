import { createTheme, responsiveFontSizes } from "@mui/material"

let theme = createTheme({
    palette: {
        custom: {
            theme: {
                lightGreen: '#45b6b2'
            }
            
        }
    },
    typography: {
        h1: {
            fontSize: '7rem'
        }
    }
})

theme = responsiveFontSizes(theme);

export default theme;