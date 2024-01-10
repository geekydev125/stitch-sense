import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useState } from "react";

const CardMainContainer = styled('div')`
    position: relative;
    width: 100%;
    height: 320px;

    .card-overlay {
        background-color: rgba(0,0,0,0.8);
        height: 100%;
        width: 100%;
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
    imageSrc: string
}

function FlipCard({
    title,
    content,
    imageSrc
}: Props) {
    const [hovered, setHovered] = useState<boolean>(false);
    console.log('hovered:', hovered)

    const handleFlip = () => {
        setHovered(!hovered)
    }


    return (
        <>
            <CardMainContainer onMouseEnter={handleFlip} onMouseLeave={handleFlip} className='card-main-container' style={{
                backgroundImage: `url('${imageSrc}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="card-overlay">
                    <div className='card'  style={ hovered ? { transform: "rotateY(180deg)" } : undefined}>
                        <div className='card-front'>
                            <Typography variant="h4" component="h4">{title}</Typography>
                        </div>
                        <div className='card-back'>
                            <Typography variant="h4" component="h4" mb={4}>{title}</Typography>
                            <Typography variant="body1" component="p">{content}</Typography>
                        </div>
                    </div>
                </div>
            </CardMainContainer>

        </>
    )
}

export default FlipCard