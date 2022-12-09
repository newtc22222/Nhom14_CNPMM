import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { headerButtonStyle } from '../local/style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function NotifyTab() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 400, mt: -1 }}>
      <AppBar position="static" sx={{ background: '#fff', color: '#333' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Hoạt động" {...a11yProps(0)} />
          <Tab label="Tin mới" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
          <span style={{ fontSize: '0.75rem' }}>Hiện tại bạn chưa đăng nhập, vui lòng đăng nhập để xem tin mới!</span> <br/> <br/>
          <Link to="/login" style={{ textDecoration: 'none', paddingTop: '10px' }}>
            <Button variant="contained" sx={{ ...headerButtonStyle, backgroundColor: '#FF8C00', fontWeight: 'bold' }}>Đăng nhập</Button>
          </Link>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <span style={{ fontSize: '0.75rem' }}>Chưa có tin nhắn để hiển thị</span>
      </TabPanel>
    </Box>
  );
}