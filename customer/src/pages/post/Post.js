import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import CategoryOption from './categoryOption/CategoryOption';

const buttonStyle = {
    borderColor: '#FF8C00',
    marginTop: '10px',
    width: '300px',
    color: '#FF8C00',
    '&:hover': {
        color: 'white',
        backgroundColor: '#FF8C00',
        borderColor: '#FF8C00'
    }
};

const DEFAULT_IMAGE = "https://via.placeholder.com/300";

const Post = () => {
    const [imageSrc, setImageSrc] = useState(DEFAULT_IMAGE);

    const handlePost = () => {
        const src = prompt('Chèn đường dẫn hình ảnh vào đây!\n' +
                        'Nên lưu hình ảnh trên Drive hoặc các tiện ích công khai.') || DEFAULT_IMAGE;
        setImageSrc(src);
    }

    return (
        <Grid container sx={{ padding: '15px', boxShadow: '0 0 5px #777' }}>
            <Grid item xs={4}>
                <Typography sx={{ fontWeight: 'bold' }}>Hình ảnh sản phẩm</Typography>
                <Box
                    component="img"
                    sx={{ 
                        height: '300px', 
                        width: '300px', 
                        borderRadius: '5px', 
                        borderColor: 'orangered',
                        borderStyle: 'dotted'
                    }}
                    alt={""}
                    src={imageSrc}
                />
                <Button 
                    variant="outlined"
                    sx={buttonStyle}
                    onClick={handlePost}>Tải đường dẫn hình ảnh</Button>
            </Grid>
            <Grid item xs={8}>
                <CategoryOption />
            </Grid>
        </Grid>
    )
}

export default Post;