import { useState } from "react";
import styled from "@emotion/styled";
import { Link as RouterLink } from 'react-router-dom';

import Typography from "@mui/material/Typography";

import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const CardMainContainer = styled(Paper)`
    position: relative;
    width: 100%;
    height: 320px;

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
/*         
        &:hover {
            transform: rotateY(180deg);
        } */

    }

    .card-front {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        color: white;

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
        color: white;
        transform: rotateY(180deg);

        text-align: justify;
        padding: 30px;

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
    linkTo: string
}

function FlipCard({
    title,
    content,
    imageSrc,
    linkTo
}: Props) {
    const [hovered, setHovered] = useState<boolean>(false);

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
                style={{
                    backgroundImage: `url('/assets/img/${imageSrc}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="card-overlay" style={hovered ? { backgroundColor: 'rgba(0,0,0,0.8)' } : undefined}>
                    <div className='card' style={hovered ? { transform: "rotateY(180deg)" } : undefined}>
                        <div className='card-front'>
                            <Typography variant="h3" component="h4">{title}</Typography>
                            <Icon className="rotate-icon" component={RotateLeftIcon} />
                        </div>
                        <div className='card-back'>
                            <Typography variant="body2" component="p">{content}</Typography>

                            <Button
                                component={RouterLink}
                                to={`/${linkTo}`}
                                size="large"
                                sx={{ color: "custom.theme.lightGreen" }}
                            >Learn More</Button>
                        </div>
                    </div>
                </div>
            </CardMainContainer>

        </>
    )
}

export default FlipCard