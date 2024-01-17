import Stack from '@mui/material/Stack'
import divider from '../assets/img/divider.jpg'

function CustomDivider() {
    return (
        <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={divider} alt='Divider' width={'auto'} height={'auto'}/>
        </Stack>
    )
}

export default CustomDivider