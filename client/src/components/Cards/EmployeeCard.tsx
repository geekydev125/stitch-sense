import Box from "@mui/material/Box"
import { IEmployee } from "../../views/AboutView"

import missingPhoto from '../../assets/img/employees/missing-photo.png'
import Typography from "@mui/material/Typography"

interface Props extends IEmployee { }

function EmployeeCard({
    firstName,
    lastName,
    position,
    imageSrc
}: Props) {
    return (
        <Box>
            <Box
                component="img"
                src={imageSrc ? `/assets/img/employees/${imageSrc}` : missingPhoto}
                alt={`${firstName} ${lastName} Photo`}
                sx={{
                    width: '100%',
                    height: {
                        xs: "300px",
                        sm: "400px",
                        lg: "500px"
                    },
                    objectFit: 'cover'
                }}
            >
            </Box>

            <Box textAlign='center' color='custom.theme.darkGray' mt={2} mb={4}>
                <Typography textTransform='uppercase' variant="h5" component='p' >{firstName} {lastName}</Typography>
                <Typography variant="body1" component='p' >{position}</Typography>
            </Box>
        </Box>
    )
}

export default EmployeeCard