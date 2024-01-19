import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"

interface Props {
    type?: 'submit',
    disabled?: boolean,
    variant: 'contained' | 'outlined' | 'text',
    children: React.ReactNode | string,
    boxShadow?: true,
    size?: "small" | "medium" | "large",
}

function GreenButton({
    type,
    disabled,
    variant = 'text',
    children,
    boxShadow,
    size = "medium"
}: Props) {

    return (
        <Paper elevation={boxShadow ? 10 : 0} sx={{width: 'fit-content'}}>
            <Button
                sx={{
                    backgroundColor: 'custom.theme.lightGreen',
                    color: 'custom.theme.lightGray',
                    textTransform: 'uppercase',
                    '&:hover': {
                        backgroundColor: 'custom.theme.darkGreen',
                    },
                }}
                size={size}
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