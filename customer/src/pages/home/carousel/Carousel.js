import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import BoxImage from '../../../components/local/BoxImage';
import { imgPath } from './sampleImages';

const Carousel = ({props}) => {
    const [img, setImg] = useState(0);
    const handleChangeImg = (index) => {
        setImg(index);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImg(prev => (prev >= imgPath.length - 1) ? 0 : (prev + 1));
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            <BoxImage height='100%' width='100%' alt={'Nothing'} src={imgPath[img]}/>
            {imgPath.map((value, index) => {
                const color = (index === img) ? '#333' : '#ccc';
                return (
                    <Box key={index}
                        sx={{
                            display: 'block',
                            position: 'absolute', 
                            // top: '260px',
                            top: 'calc(128px + 7vw)',
                            left: `calc(50% - (40px * ${imgPath.length/2}) + 40px * ${index})`,
                            width:'8px',
                            height: '8px',
                            borderRadius: '10px',
                            backgroundColor: color,
                            "&:hover": {
                                backgroundColor: '#333'
                            }
                        }}
                        onClick={() => handleChangeImg(index)}>
                    </Box>
                );
            })}
        </Box>
    );
}

export default Carousel;