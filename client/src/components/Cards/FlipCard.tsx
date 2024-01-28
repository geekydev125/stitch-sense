import { useState } from "react";
import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";

import Typography from "@mui/material/Typography";

import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useServiceTabsContext } from "../../contexts/ServiceTabsContext";
import getImageUrl from "../../utils/image-util";


const CardMainContainer = styled(Paper)`
    position: relative;
    width: 100%;
    border-radius: 25px;

    .card-overlay {
        background-color: rgba(0,0,0,0.50);
        height: 100%;
        width: 100%;
        border-radius: 25px;
        transition: all 0.5s ease;
    }

    .card {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: all 0.5s ease;
        &:hover {
            transform: rotateY(180deg);
        }
    }

    .card-front {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;

        display: flex;
        justify-content: center;
        align-items: center;

        .rotate-icon {
            position: absolute;
            top: 10px;
            right: 10px;
        }

    }

    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        transform: rotateY(180deg);

        text-align: justify;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

interface Props {
    title: string,
    content: string,
    imageSrc: string,
    linkTo: string,
    tabValue: number
}

function FlipCard({
    title,
    content,
    imageSrc,
    linkTo,
    tabValue
}: Props) {
    const [hovered, setHovered] = useState<boolean>(false);
    const { changeActiveTab } = useServiceTabsContext();

    const handleFlip = () => {
        setHovered(!hovered)
    }

    return (
        <>
            <CardMainContainer
                onMouseEnter={handleFlip}
                onMouseLeave={handleFlip}
                className='card-main-container'
                elevation={6}
                sx={{
                    backgroundImage: `url(${getImageUrl('card-backgrounds',imageSrc)})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: {
                        xs: '250px',
                        sm: '340px'
                    }
                }}
            >
                <Box className="card-overlay" style={hovered ? { backgroundColor: 'rgba(0,0,0,0.8)' } : undefined}>
                    <Box className='card' style={hovered ? { transform: "rotateY(180deg)" } : undefined}>
                        <Box className='card-front' color='custom.theme.almostWhite'>
                            <Typography variant="h3" component="h4" color='custom.theme.almostWhite'>{title}</Typography>
                            <Icon className="rotate-icon" component={RotateLeftIcon} />
                        </Box>
                        <Box className='card-back' py={{xs: 1.5, sm: 1, md: 3}} px={{xs: 1.5, sm: 2, md: 3}}>
                            <Typography variant="body2" component="p" color='custom.theme.almostWhite'>{content}</Typography>

                            <Button
                                onClick={() => changeActiveTab(tabValue)}
                                variant="contained"
                                component={HashLink}
                                to={`/${linkTo}#service-tabs`}
                                size="small"
                                sx={{
                                    backgroundColor: 'custom.theme.lightGreen',
                                    color: 'custom.theme.lightGray',
                                    textTransform: 'uppercase',
                                    '&:hover': {
                                        backgroundColor: 'custom.theme.darkGreen',
                                    },
                                }}
                            >Learn More</Button>
                        </Box>
                    </Box>
                </Box>
            </CardMainContainer>
        </>
    )
}

export default FlipCard