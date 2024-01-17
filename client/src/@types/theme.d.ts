import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
    interface Palette {
        custom: {
            theme: {
                lightGreen: PaletteColor,
                darkGreen: PaletteColor,
                almostWhite: PaletteColor,
                darkGray: PaletteColor
            }   
            
        }
    }

    interface PaletteOptions {
        custom: {
            theme: {
                lightGreen: string | PaletteColorOptions,
                darkGreen: string | PaletteColorOptions,
                almostWhite: string | PaletteColorOptions,
                darkGray: string | PaletteColorOptions
            }
            
        }
    }
}