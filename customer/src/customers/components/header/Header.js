import { AppBar, Toolbar, Button, Typography, Grid, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SearchBar from './components/SearchBar';
import InvoiceMenu from './menu/InvoiceMenu';
import AdditionMenu from './menu/AdditionMenu';
import { headerLinkStyle, headerButtonStyle, headerButtonPostStyle, gridItemProperties } from './local/style';
import NotifyMenu from './menu/NotifyMenu';

const Header = () => {
  return (
    <AppBar sx={{ background: "#FF8C00", maxHeight: '128px' }}>
      <Container>
        <Toolbar>
          {/* <Typography>LOGO</Typography> */}
          <Box
            component="img"
            sx={{
              height: 50,
              width: 200,
            }}
            alt="LOGO"
            src="https://th.bing.com/th/id/R.7b682f45c539a7ad76766ea51e213a13?rik=6JL81dMqhLYSKw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffairprice-logo-png-fair-price-group-871.png&ehk=n%2f0HUF%2b1yYOJZLTC6dLkq2Wt5plILyr1Q1rWS1alXzM%3d&risl=&pid=ImgRaw&r=0"
          /> {/* src: https://stackoverflow.com/questions/61263669/does-material-ui-have-an-image-component */}
          <Grid container rowSpacing={1} sx={{ paddingLeft: '10px' }}>
            <Grid {...gridItemProperties} item xs>
              <Link to="/" style={headerLinkStyle}>
                <Button variant="text" sx={headerButtonStyle}>
                  <HomeIcon /><span style={{ marginLeft: '10px'}}>Trang chủ</span>
                </Button>
              </Link>
            </Grid>

            <Grid {...gridItemProperties} item xs>
              <Link to="/blogs/" style={headerLinkStyle}>
                <Button variant="text" sx={headerButtonStyle}>
                  <BookIcon /><span style={{ marginLeft: '5px'}}>Quản lý tin</span>
                </Button>
              </Link>
            </Grid>

            <Grid {...gridItemProperties} item xs>
              <InvoiceMenu />
            </Grid>

            <Grid {...gridItemProperties} item xs>
              <Link to="/chats/" style={headerLinkStyle}>
                <Button variant="text" sx={headerButtonStyle}>
                  <ChatIcon /><span style={{ marginLeft: '10px'}}>Chat</span>
                </Button>
              </Link>
            </Grid>

            <Grid {...gridItemProperties} item xs>
              <NotifyMenu />
            </Grid>

            <Grid {...gridItemProperties} item xs>
              <AdditionMenu />
            </Grid>

          </Grid>
        </Toolbar>

        <Toolbar>
          <Grid container rowSpacing={1}>
            <Grid item xs={8}>
              <SearchBar />
            </Grid>
            <Grid {...gridItemProperties} item xs>
              <Link to="/login" style={headerLinkStyle}>
                <Button variant="text" sx={headerButtonStyle}>
                  <AccountCircleOutlinedIcon />
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Đăng nhập</span>
                </Button>
              </Link>
            </Grid>
            <Grid {...gridItemProperties} item xs>
              <Link to="blogs/create-blog" style={headerLinkStyle}>
                <Button variant="contained" sx={headerButtonPostStyle}>
                  <DriveFileRenameOutlineIcon />
                  <span style={{ marginLeft: '10px'}}>Đăng tin</span>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header