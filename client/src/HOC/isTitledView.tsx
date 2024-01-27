import React from 'react';
import ViewTopTitleSection from '../components/ViewTopTitleSection';

import wavyLinesTop from '/assets/img/wavy-lines-top.svg'
import wavyLinesBottom from '/assets/img/wavy-lines-bottom.svg'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface Props {
    viewTitle: string,
    imageSrcSmallScreen: string,
    imageSrcLargeScreen: string
}

function isTitledView<T>(WrappedComponent: React.ComponentType<T>, { viewTitle, imageSrcSmallScreen, imageSrcLargeScreen }: Props) {
    return (props: T) => (
        <>
            <ViewTopTitleSection viewTitle={viewTitle} imageSrcSmallScreen={imageSrcSmallScreen} imageSrcLargeScreen={imageSrcLargeScreen} />
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
