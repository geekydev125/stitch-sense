import uniqid from 'uniqid'
import { NavLink } from "react-router-dom";

import { IRoute } from './Header'

import Button from '@mui/material/Button'

interface Props {
    route: IRoute['route'],
    path: IRoute['path']
}
function DesktopNavItem({
    route,
    path
}: Props) {
    return (
        <Button
            key={uniqid()}
            component={NavLink}
            to={`${path}`}
            sx={{
                color: 'white',
                margin: '0 15px',
                borderBottom: '3px solid transparent',
                borderRadius: 0,
                '&.active': {
                    borderBottom: '3px solid white',
                    fontWeight: 'bold'
                }
            }}
        >
            {route}
        </Button>
    )
}

export default DesktopNavItem