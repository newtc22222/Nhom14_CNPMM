import { Typography, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { linkMargin, linkStyle } from './local/style';

const handleClickAppStore = () => {
  alert('Hello');
}

const Footer = () => {
  return (
    <>
      <div style={{ height: '10px', background: '#ddd' }}></div>
      <Container sx={{ marginTop: '30px', marginBottom: '30px' }}>
        <Grid
          container
          direction="row"
          justifyItems="center">
          <Grid item xs>
            <Typography sx={{ fontWeight: 'bold' }}>TẢI ỨNG DỤNG GOOD FAIR</Typography>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Box
                  component="img"
                  sx={{
                    height: 120,
                    width: 120,
                  }}
                  alt="The house from the offer."
                  src="https://th.bing.com/th/id/R.c374c1cf0a2d4edd7e43100367dfef39?rik=7wVSiVMkPq2Wxg&pid=ImgRaw&r=0"
                />
              </Grid>
              <Grid item xs={7} sx={{ marginTop: '10px' }}>
                <Box
                  component="img"
                  sx={{
                    height: 33,
                    width: 100,
                  }}
                  onClick={handleClickAppStore}
                  alt="The house from the offer."
                  src="https://th.bing.com/th/id/R.3aea2a63b82282884c07bda97a50e95a?rik=rxxZEL3CFQC%2fUQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f10%2fDownload-On-The-App-Store-PNG-Photos.png&ehk=PrmhHxHiUqmMFGtO%2f7IR%2fmtsRFqmnhDeizN%2fVPJguWQ%3d&risl=&pid=ImgRaw&r=0"
                />
                <Box
                  component="img"
                  sx={{
                    height: 33,
                    width: 100,
                    marginTop: '7px',
                    marginBottom: '7px',
                  }}
                  alt="The house from the offer."
                  src="https://www.banksathi.com/public/site/image/gplay.png"
                />
                <Box
                  component="img"
                  sx={{
                    height: 33,
                    width: 100,
                  }}
                  alt="The house from the offer."
                  src="https://th.bing.com/th/id/OIP.5c2Zpbyi6aGrLTndNktbCQHaCN?pid=ImgDet&rs=1"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography sx={{ fontWeight: 'bold' }}>HỖ TRỢ KHÁCH HÀNG</Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Trung tâm trợ giúp</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>An toàn mua bán</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Quy định cần biết</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Quy chế quyền riêng tư</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Liên hệ hỗ trợ</Link></Typography>
          </Grid>
          <Grid item xs>
            <Typography sx={{ fontWeight: 'bold' }}>VỀ GOOD FAIR</Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Giới thiệu</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Tuyển dụng</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Truyền thông</Link></Typography>
            <Typography sx={linkMargin}><Link to="/" style={linkStyle}>Blog</Link></Typography>
          </Grid>
          <Grid item xs>
            <Typography sx={{ fontWeight: 'bold' }}>LIÊN KẾT</Typography>
            <Box
              component="img"
              sx={{
                height: 32,
                width: 32,
              }}
              alt="The house from the offer."
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            />
            <Box
              component="img"
              sx={{
                height: 32,
                width: 32,
                marginLeft: '10px',
                marginRight: '10px'
              }}
              alt="The house from the offer."
              src="https://cdn-icons-png.flaticon.com/512/2504/2504965.png"
            />
            <Box
              component="img"
              sx={{
                height: 32,
                width: 32,
              }}
              alt="The house from the offer."
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            />
            <Typography sx={{ fontWeight: 'bold' }}>CHỨNG NHẬN</Typography>
            <Box
              component="img"
              sx={{
                height: 50,
                width: 133,
              }}
              alt="The house from the offer."
              src="https://kotwel.com/wp-content/uploads/2021/07/Bo-cong-thuong.png"
            />
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container sx={{ marginTop: '20px', marginBottom: '30px' }}>
        <Typography sx={{ fontSize: '0.75rem', color: '#777777' }}>
          Đồ án cuối kỳ môn học <b>Các công nghệ phần mềm mới - (MERN Stack)</b> <br />
          Giảng viên hướng dẫn: thầy Nguyễn Trọng Phụng <br />
          Nhóm sinh viên thực hiện:
          <li>19110426 - Võ Nhật Phi</li>
          <li>19110342 - Nguyễn Duy Dương</li>
          <li>191103.. - Nguyễn Minh Nhật</li>
        </Typography>
      </Container>
    </>
  )
}

export default Footer