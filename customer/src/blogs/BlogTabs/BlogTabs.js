import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
                <Box sx={{ p: 5 }}>
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

export default function BlogTabs() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%', mt: -1 }}>
            <AppBar position="static" sx={{ background: '#fff', color: '#333' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label={`Đang hiển thị`} {...a11yProps(0)} />
                    <Tab label={`Bị từ chối`} {...a11yProps(1)} />
                    <Tab label={`Cần thanh toán`} {...a11yProps(2)} />
                    <Tab label={`Nháp`} {...a11yProps(3)} />
                    <Tab label={`Khác`} {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>
                    Bạn chưa có bất kỳ bài viết nào đang hiển thị!
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>
                    Bạn không có bất kỳ bài viết nào bị từ chối!
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>
                    Bạn chưa đăng bất kỳ bài viết nào cần thanh toán!
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>
                    Bạn chưa lưu bất kỳ bản nháp!
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
                <Typography sx={{ textAlign:'center', margin: '5px 20%', padding: '10px', backgroundColor: '#f2ce9f', opacity: '0.6' }}>
                    Không có bài viết ở mục này!
                </Typography>
            </TabPanel>
        </Box>
    );
}