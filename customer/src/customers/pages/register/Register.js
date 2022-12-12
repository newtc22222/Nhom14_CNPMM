import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Breadcrumbs,  Typography, TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';

const textFieldStyle = {
  width: '100%',
  marginBottom: '20px'
}

const genderList = [ 
  {
    value: 'male',
    label: 'Nam'
  },
  {
    value: 'female',
    label: 'Nữ'
  },
  {
    value: 'other',
    label: 'Khác'
  },
];

const Register = () => {
  const [gender, setGender] = useState(genderList[0].value);

  const handleChange = (event) => {
    setGender(event.target.value);
  };


  return (
    <Box>
      <Breadcrumbs separator="-" aria-label="breadcrumb" >
        <Typography sx={{ fontSize: '0.7rem' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Trang chủ</Link></Typography>
        <Typography sx={{ fontSize: '0.7rem' }}>Đăng ký tài khoản</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          backgroundImage: 'url("https://www.questica.com/wp-content/themes/questica/inc/img/home/Orange-Shape.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Box sx={{ width: '340px', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 5px #333' }}>
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
            Vui lòng đầy đủ thông tin yêu cầu dưới đây!</Typography>
          <Box sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <form method="post" action="/register">
              <TextField
                required
                id="name"
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                type="text"
                variant="standard"
                sx={textFieldStyle}
              />
              <TextField
                required
                id="dob"
                label="Ngày sinh"
                type="date"
                variant="standard"
                defaultValue={"2000-01-01"}
                sx={textFieldStyle}
              />
              <InputLabel sx={{fontSize: '0.8rem'}}>Giới tính *</InputLabel>
              <Select
                id="gender"
                label="Giới tính"
                value={gender}
                variant="standard"
                sx={textFieldStyle}
                onChange={(e) => handleChange(e)}
              >
                {genderList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>

              <Box>
                    <InputLabel sx={{ fontSize: '0.8rem' }}>Địa chỉ *</InputLabel>
                    <TextField
                        required
                        id="street"
                        label="Số nhà, đường, phường/xã/ấp"
                        name="street"
                        placeholder="đường số 17, phường Linh Trung"
                        type="text"
                        variant="standard"
                        sx={textFieldStyle}
                    />
                    <TextField
                        required
                        id="town"
                        label="Thị trấn, huyện, thị xã, thành phố"
                        name="town"
                        placeholder="Thành phố Thủ Đức"
                        type="text"
                        variant="standard"
                        sx={textFieldStyle}
                    />
                    <TextField
                        required
                        id="province"
                        label="Tỉnh, thành phố trực thuộc quốc gia"
                        name="province"
                        placeholder="Thành phố Hồ Chí Minh"
                        type="text"
                        variant="standard"
                        sx={textFieldStyle}
                    />
                </Box>
              <TextField
                id="email"
                label="Email"
                placeholder="something@abc.com"
                type="email"
                variant="standard"
                sx={textFieldStyle}
              />

              <TextField
                required
                id="phone"
                label="Số điện thoại"
                placeholder="0839918872"
                type="number"
                variant="standard"
                sx={textFieldStyle}
              />
              <TextField
                required
                title="Mật khẩu cần có ít nhất 8 ký tự, bao gồm chữ cái thường, chữ cái in hoa, chữ số và ký tự đặc biệt"
                id="password"
                label="Mật khẩu"
                type="password"
                variant="standard"
                sx={textFieldStyle}
              />
              
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
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
                Đăng ký</Button>
            </form>
          </Box>
            <Typography sx={{ fontSize: '0.75rem', textAlign: 'center', color: '#333' }}>Bằng việc đăng ký, bạn đã đồng ý với
              <Link to="/policy" style={{textDecoration: 'none'}}> Điều khoản sử dụng</Link> của Good Fair.
            </Typography>
          <Typography sx={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '15px' }}>Đã có tài khoản? <Link to="/login" style={{ color: 'blue', textDecoration: 'none' }}>Đăng nhập ở đây</Link>!</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;