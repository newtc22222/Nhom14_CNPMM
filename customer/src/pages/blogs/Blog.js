import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Avatar, Box, Breadcrumbs, Button, Typography } from '@mui/material';
import BlogTabs from './BlogTabs/BlogTabs';
import UserContext from '../../contexts/UserContext';

const buttonStyle = {
  borderColor: '#FF8C00',
  margin: '5px 0',
  fontSize: '0.7rem',
  color: '#FF8C00',
  '&:hover': {
    color: 'white',
    backgroundColor: '#FF8C00',
    borderColor: '#FF8C00'
  }
};

const Blog = () => {
  const auth = useContext(UserContext);
  const user = auth.user;
  
  if(!window.sessionStorage.getItem("userId")) {
    return <Navigate to="/login"/>;
  }

  return (
    <Box>
      <Breadcrumbs separator="-" aria-label="breadcrumb" >
        <Typography sx={{ fontSize: '0.7rem' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Trang chủ</Link></Typography>
        <Typography sx={{ fontSize: '0.7rem' }}>Quản lý tin</Typography>
      </Breadcrumbs>
      <Box sx={{ padding: '15px', marginTop: '15px' }}>
        <Typography sx={{ fontWeight: 'bold' }}>Quản lý tin đăng</Typography>
        <hr style={{ opacity: '0.4' }} />
        <Box sx={{ display: 'flex' }}>
          <Avatar sx={{ width: 80, height: 80 }} alt="user avatar" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          <Box sx={{ marginLeft: '20px' }}>
            <Typography sx={{ color: '#333', fontWeight: '600', marginTop: '10px' }}>
              {user?.name ?? "Tên của bạn"} 
            </Typography>
            <Box>
              <Typography>
                <Link to="/user" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    sx={buttonStyle}>
                    Đi đến trang cá nhân</Button>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <hr style={{ opacity: '0.4' }} />
        <BlogTabs />
      </Box>
    </Box>
  )
}

export default Blog