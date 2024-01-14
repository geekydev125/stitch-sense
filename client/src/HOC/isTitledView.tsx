import React from 'react';
import ViewTopTitleSection from '../components/ViewTopTitleSection';

import wavyLinesTop from '../assets/img/wavy-lines-top.png'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.png'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface Props {
    viewTitle: string,
    imageSrc: string,
    backgroundPosition: string,
    backgroundSize?: string
}

function isTitledView<T>(WrappedComponent: React.ComponentType<T>, { viewTitle, imageSrc, backgroundPosition, backgroundSize }: Props) {
    return (props: T) => (
        <>
        
            <ViewTopTitleSection viewTitle={viewTitle} imageSrc={imageSrc} backgroundPosition={backgroundPosition} backgroundSize={backgroundSize} />
            <Stack component='main' flexGrow={1}
                sx={{
                    background: `url(${wavyLinesTop})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'top right'
                }}
            >
                <Box
                    sx={{
                        background: `url(${wavyLinesBottom})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'bottom left'
                    }}
                >
                    <WrappedComponent {...props as any} />
                </Box>
            </Stack>
        </>
    );
}

export default isTitledView;
