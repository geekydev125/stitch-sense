import missingPhoto from '../../assets/img/employees/missing-photo.jpg'

import getImageUrl from "../../utils/image-util"

import { IEmployee } from "../../views/AboutView"

import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

interface Props extends IEmployee { }

function EmployeeCard({
    firstName,
    lastName,
    position,
    imageSrc,
    imageSrcSmall
}: Props) {
    return (
        <Box>

            <Box
                component="img"
                src={imageSrc ? `${getImageUrl('employees', imageSrc)}` : missingPhoto}
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
                loading="lazy"
            />
            <Box textAlign='center' color='custom.theme.darkGray' mt={2} mb={4}>
                <Typography textTransform='uppercase' variant="h5" component='p' fontWeight='500'>{firstName} {lastName}</Typography>
                <Typography variant="body1" component='p' >{position}</Typography>
            </Box>
        </Box>
    )
}

export default EmployeeCard