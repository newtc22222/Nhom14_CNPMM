import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import BlogItem from './BlogItem';
import BlogBoxNull from './BlogBoxNull';

const UserBlogBox = () => {
    const blogs = [];

    return (
        <Box sx={{ marginTop: '10px', marginBottom: '10px', boxShadow: '0 0 8px #999' }}>
            <Box sx={{ padding: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Tin đang đăng - <Typography variant="span" sx={{ color: '#999' }}>{0} tin</Typography></Typography>
                <hr style={{ opacity: '0.4' }} />
                <Box sx={{ height: '400px' }}>
                    {blogs.map(blog => <BlogItem />) && <BlogBoxNull />}
                </Box>
            </Box>
        </Box>
    )
}

export default UserBlogBox;