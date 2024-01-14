import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            theme: {
                lightGreen: PaletteColor,
                darkGreen: PaletteColor
            }   
            
        }
    }

    interface PaletteOptions {
        custom: {
            theme: {
                lightGreen: string | PaletteColorOptions,
                darkGreen: string | PaletteColorOptions
            }
            
        }
    }
}