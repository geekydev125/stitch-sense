import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        custom: {
            header: {
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

export default theme;