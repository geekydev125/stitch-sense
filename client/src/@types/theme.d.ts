import { PaletteColor, PaletteColorOptions } from "@mui/material"

declare module '@mui/material/styles' {
    interface Palette {
        main: {
            lightGreen: PaletteColor
        }
    }

    interface PaletteOptions {
        main: {
            lightGreen: string | PaletteColorOptions
        }
    }
}