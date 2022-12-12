import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Breadcrumbs, Grid, Typography, TextField, Button } from '@mui/material';
import BoxImage from '../../components/local/BoxImage';

const textFieldStyle = {
  width: '100%',
  marginBottom: '20px'
}

const Login = () => {
  return (
    <Box>
      <Breadcrumbs separator="-" aria-label="breadcrumb" >
        <Typography sx={{ fontSize: '0.7rem' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Trang chủ</Link></Typography>
        <Typography sx={{ fontSize: '0.7rem' }}>Đăng nhập</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          backgroundImage: 'url("https://th.bing.com/th/id/R.830281c7372b5d0dda3a1d69b18858dc?rik=MyjNEjUNNMdSVw&pid=ImgRaw&r=0")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Box sx={{ width: '340px', height: '510px', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 5px #333' }}>
          <Typography
            sx={{
              fontFamily: 'Segoe UI',
              // fontSize: '1.2rem',
              // fontWeight: 'bold',
              color: 'orangered',
              // backgroundColor: 'orangered',
              marginBottom: '20px'
            }}
          >
            Vui lòng đăng nhập để có những trải nghiệm tốt nhất trên hệ thống của chúng tôi!</Typography>
          <Box sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
            <form method="post" action="/login">
              <TextField id="phone" type="number" label="Số điện thoại" variant="outlined" sx={textFieldStyle} required />
              <TextField id="password" type="password" label="Mật khẩu" variant="outlined" sx={textFieldStyle} required />
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  marginBottom: '20px',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  color: 'orangered',
                  borderColor: 'orangered',
                  '&:hover': {
                    backgroundColor: 'orangered',
                    color: 'white'
                  }
                }}
              >
                Đăng nhập</Button>
            </form>
          </Box>
          <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}><Link to="/reset-password" style={{ color: 'blue', textDecoration: 'none' }}>Quên mật khẩu?</Link></Typography>
          <Box sx={{ padding: '20px' }}>
            <Typography sx={{ fontSize: '0.8rem', textAlign: 'center', color: '#777', marginBottom: '20px' }}>hoặc sử dụng tài khoản</Typography>
            <Grid container spacing={1}>
              <Grid item xs sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/auth/facebook">
                  <BoxImage
                    width="50px"
                    height="50px"
                    alt="facebook"
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  />
                </Link>
              </Grid>
              <Grid item xs sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/auth/google">
                  <BoxImage
                    width="50px"
                    height="50px"
                    alt="google"
                    src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                  />
                </Link>
              </Grid>
              <Grid item xs sx={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Link to="/auth/apple" >
                  <BoxImage
                    width="50px"
                    height="50px"
                    alt="apple"
                    src="https://cdn-icons-png.flaticon.com/512/15/15476.png"
                  />
                </Link>
              </Grid>             
            </Grid>
          </Box>
          <Typography sx={{ fontSize: '0.8rem', textAlign: 'center' }}>Chưa có tài khoản? <Link to="/register" style={{ color: 'blue', textDecoration: 'none' }}>Đăng ký ngay</Link>!</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login