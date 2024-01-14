import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function ServiceDescriptionColumn() {
    return (
        <>
            <Typography variant='body1' component='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
            </Typography>
            <br />
            <Typography variant='body1' component='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero iusto ducimus aut nisi ratione dignissimos, aperiam repellat ullam? Reiciendis, eveniet earum placeat, cumque laboriosam quo nihil incidunt minima nostrum in minus itaque esse.
            </Typography>
            <br />
            <Typography variant='body1' component='p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil facilis dolores deleniti iure at perferendis dolor nobis culpa natus vel ipsa minus dicta possimus, vero.
            </Typography>

            <Button
                variant='contained'
                size='large'
                sx={{
                    margin: '20px auto 0px auto',
                    display: 'block',
                    backgroundColor: 'custom.theme.lightGreen',
                    "&:hover": {
                        backgroundColor: 'custom.theme.darkGreen',
                    }
                }}
            >
                GET A QUOTE
            </Button>
        </>
    )
}

export default ServiceDescriptionColumn