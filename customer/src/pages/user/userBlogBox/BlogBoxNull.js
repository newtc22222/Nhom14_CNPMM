import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const buttonStyle = {
    borderColor: '#FF8C00',
    marginTop: '20px',
    width: '100%',
    color: '#FF8C00',
    '&:hover': {
        color: 'white',
        backgroundColor: '#FF8C00',
        borderColor: '#FF8C00'
    }
};

const BlogBoxNull = () => {
  return (
    <Box sx={{ padding: '20px'}}>
        <Typography sx={{ textAlign: 'center' }}>
            <img style={{width: '200px', height: '200px', opacity: '0.6'}} src={require('./static/noresults.png')} />
        </Typography>
        <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>Bạn chưa đăng bất kỳ bài viết nào!</Typography>
        <Typography sx={{ textAlign: 'center', margin: '5px 20%' }}>
            <Link to="/blogs/create-blog" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" sx={buttonStyle}>Đăng bài ngay</Button>
            </Link>
        </Typography>
    </Box>
  )
}

export default BlogBoxNull;