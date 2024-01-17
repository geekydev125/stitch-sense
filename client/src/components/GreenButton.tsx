import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"

interface Props {
    type?: 'submit',
    disabled?: boolean,
    variant?: 'contained' | 'outlined' | 'text',
    children?: React.ReactNode | string,
    boxShadow?: true
}

function GreenButton({
    type,
    disabled,
    variant = 'text',
    children,
    boxShadow
}: Props) {

    return (
        <Paper elevation={boxShadow ? 10 : 0}>
            <Button
                
                sx={{
                    backgroundColor: 'custom.theme.lightGreen',
                    color: 'custom.theme.almostWhite',
                    textTransform: 'uppercase',
                    '&:hover': {
                        backgroundColor: 'custom.theme.darkGreen',
                    },
                }}
                type={type}
                disabled={disabled}
                variant={variant}
            >
                {children}
            </Button>
        </Paper>
    )
}

export default GreenButton