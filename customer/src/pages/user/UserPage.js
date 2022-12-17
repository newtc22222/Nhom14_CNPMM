import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import UserProfileBox from './userbox/UserProfileBox';
import UserBlogBox from './userBlogBox/UserBlogBox';

const UserPage = () => {
    const user = "Fi";
    return (
        <Box>
            <Breadcrumbs separator="-" aria-label="breadcrumb" >
                <Typography sx={{ fontSize: '0.7rem' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Trang chủ</Link></Typography>
                <Typography sx={{ fontSize: '0.7rem' }}>Trang cá nhân của { user }</Typography>
            </Breadcrumbs>
            <UserProfileBox />
            <UserBlogBox />
        </Box>
    )
}

export default UserPage;