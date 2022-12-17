import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const buttonStyle = {
    borderRadius: '20px',
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

const getFullDate = () => {
    const fullDate = new Date();
    return fullDate.getDate() + '/' + fullDate.getMonth() + '/' + fullDate.getFullYear();
}

const copyLinkUserPage = (userId) => {
    const page = `http://localhost:3000/user/${userId}`;
    navigator.clipboard.writeText(page);
    alert('Copy data successfully!');
}

const UserProfileBox = ({ ...user }) => {
    const { id, address, name, createAt } = user;
    return (
        <Box sx={{ marginTop: '10px', marginBottom: '10px', boxShadow: '0 0 8px #999' }}>
            <Grid container>
                <Grid item xs={6} sx={{ padding: '15px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Avatar sx={{ width: 80, height: 80 }} alt="user avatar" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                        <Box sx={{ marginLeft: '20px', width: 'calc(100% - 115px)' }}>
                            <Typography sx={{ color: '#777', fontStyle: 'italic', fontWeight: '600' }}>{name ?? "Chưa cung cấp"} </Typography>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#777' }}>{0} người theo dõi</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#777' }}>{0} đang theo dõi</Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ marginTop: '10px' }}>
                                <Typography>
                                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                                        <Button
                                            variant="outlined"
                                            sx={buttonStyle}>
                                            Chỉnh sửa trang cá nhân</Button>
                                    </Link>
                                </Typography>
                                <Button variant="outlined" sx={buttonStyle} onClick={copyLinkUserPage}>Sao chép liên kết</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ padding: '15px' }}>
                    <Box>
                        <Typography sx={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                            <StarBorderIcon sx={{ color: '#999' }} />
                            <Typography variant="span" sx={{ color: '#999', margin: '0 5px' }}> Đánh giá: </Typography>
                            Chưa có đánh giá
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center' }}>
                            <CalendarMonthIcon sx={{ color: '#999' }} />
                            <Typography variant="span" sx={{ color: '#999', margin: '0 5px' }}>Ngày tham gia: </Typography>
                            {createAt ?? getFullDate()}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ color: '#999' }} />
                            <Typography variant="span" sx={{ color: '#999', margin: '0 5px' }}>Địa chỉ: </Typography>
                            {address ?? "Chưa cung cấp"}
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center' }}>
                            <InsertCommentIcon sx={{ color: '#999' }} />
                            <Typography variant="span" sx={{ color: '#999', margin: '0 5px' }}>Phản hồi chat: </Typography>
                            Chưa có thông tin
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', marginTop: '7px', display: 'flex', alignItems: 'center' }}>
                            <CheckCircleOutlineIcon sx={{ color: '#999' }} />
                            <Typography variant="span" sx={{ color: '#999', margin: '0 5px' }}>Đã cung cấp: </Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserProfileBox;