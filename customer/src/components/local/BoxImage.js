import React from 'react';
import { Box } from '@mui/material';

const BoxImage = ({height, width, alt, src, radius}) => {
    return (
        <Box
            component="img"
            sx={{height, width}}
            alt={alt}
            src={src}
            borderRadius={radius ?? '0px'}
        />
    )
}

export default BoxImage