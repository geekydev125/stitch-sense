import { useState } from "react";
import styled from "@emotion/styled";
import { HashLink } from "react-router-hash-link";

import getImageUrl from "../../utils/image-util";
import { useServiceTabsContext } from "../../contexts/ServiceTabsContext";

import ReactCardFlip from "react-card-flip";

import RotateLeftIcon from '@mui/icons-material/RotateLeft';

import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const CardMainContainer = styled(Paper)`
    height: 100%;
    border-radius: 25px;

    .react-card-flip {
        height: 100%;
    }

    .card-overlay {
        background-color: rgba(0,0,0,0.5);
        height: 100%;
        width: 100%;
        border-radius: 25px;
        transition: all 0.5s ease;
    }
`;

interface Props {
    title: string,
    contentFlipCard: string,
    content: string[],
    imageSrc: string,
    linkTo: string,
    tabValue: number
}

function FlipCard({
    title,
    contentFlipCard,
    imageSrc,
    linkTo,
    tabValue
}: Props) {
    const [isFlipped, setFlipped] = useState(false);
    const { changeActiveTab } = useServiceTabsContext();

    const handleFlip = () => {
        setFlipped(!isFlipped)
    }

    return (
        <>
            <CardMainContainer
                onMouseEnter={handleFlip}
                onMouseLeave={handleFlip}
                className='card-main-container'
                elevation={6}
                sx={{
                    backgroundImage: `url(${getImageUrl('card-backgrounds', imageSrc)})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: {
                        xs: '250px',
                        sm: '280px'
                    }
                }}
            >
                <Box className="card-overlay" style={isFlipped ? { backgroundColor: 'rgba(0,0,0,0.8)' } : undefined}>
                    <ReactCardFlip isFlipped={isFlipped}>
                        {/* Front of card */}
                        <Stack
                            height='100%'
                            color='custom.theme.almostWhite'
                            direction='row'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Typography variant="h3" component="h4" color='custom.theme.almostWhite'>{title}</Typography>
                            <Icon
                                component={RotateLeftIcon}
                                sx={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px'
                                }}
                            />
                        </Stack>

                        {/* Back of card */}
                        <Stack
                            py={{ xs: 1.5, sm: 1, md: 3 }}
                            px={{ xs: 1.5, sm: 2, md: 3 }}
                            height='100%'
                            direction='column'
                            justifyContent='space-between'
                            alignItems='center'
                        >

                            <Typography variant="body1" component="p" color='custom.theme.almostWhite' textAlign='justify'>
                                {contentFlipCard}
                            </Typography>

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
                        </Stack>
                    </ReactCardFlip>
                </Box>
            </CardMainContainer>
        </>
    )
}

export default FlipCard