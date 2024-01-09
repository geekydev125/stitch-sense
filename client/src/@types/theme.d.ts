import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            header: {
                lightGreen: PaletteColor
            }   
            
        }
    }

    interface PaletteOptions {
        custom: {
            header: {
                lightGreen: string | PaletteColorOptions
            }
            
        }
    }
}