import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Breadcrumbs, Typography} from '@mui/material';
import ProfileBox from './ProfileBox';

const ProfilePage = () => {
    return (
        <Box>
            <Breadcrumbs separator="-" aria-label="breadcrumb" >
                <Typography sx={{ fontSize: '0.7rem' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Trang chủ</Link></Typography>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 'bold' }}>Thông tin cá nhân</Typography>
            </Breadcrumbs>
            <ProfileBox />
        </Box>
    )
}

export default ProfilePage;