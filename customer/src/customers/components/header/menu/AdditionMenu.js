import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { headerLinkStyle, headerButtonStyle, additionalMenuLink, additionalMenuSpan } from '../local/style';
import BoxImage from '../../local/BoxImage';

export default function AdditionMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                variant="text"
                sx={headerButtonStyle}
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PlaylistAddIcon /><Link style={headerLinkStyle}>Thêm</Link>
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link style={{ textDecoration: 'none' }} to="/login">
                    <MenuItem>
                        <Avatar />
                        <span style={{ ...additionalMenuLink, fontWeight: 'bold' }}>Đăng nhập/ Đăng ký</span>
                    </MenuItem>
                </Link>

                <Typography style={additionalMenuSpan}>
                    <span>Quản lý đơn hàng</span>
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Buying Bill"
                            src="https://cdn-icons-png.flaticon.com/512/2522/2522929.png"
                        />
                        <span style={additionalMenuLink}>Đơn mua</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Selling Bill"
                            src="https://cdn-icons-png.flaticon.com/512/994/994305.png"
                        />
                        <span style={additionalMenuLink}>Đơn bán</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Wallet"
                            src="https://cdn-icons-png.flaticon.com/512/3258/3258446.png"
                        />
                        <span style={additionalMenuLink}>Ví bán hàng</span>
                    </MenuItem>
                </Link>

                <Typography style={additionalMenuSpan}>
                    <span>Tiện ích</span>
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Save blogs"
                            src="https://cdn-icons-png.flaticon.com/512/4660/4660439.png"
                        />
                        <span style={additionalMenuLink}>Tin đã lưu</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Save searches"
                            src="https://cdn-icons-png.flaticon.com/512/1055/1055645.png"
                        />
                        <span style={additionalMenuLink}>Tìm kiếm đã lưu</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Feedback"
                            src="https://cdn-icons-png.flaticon.com/512/2016/2016314.png"
                        />
                        <span style={additionalMenuLink}>Đánh giá từ tôi</span>
                    </MenuItem>
                </Link>

                <Typography style={additionalMenuSpan}>
                    <span>Dịch vụ trả phí</span>
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Premium"
                            src="https://cdn-icons-png.flaticon.com/512/6517/6517343.png"
                        />
                        <span style={additionalMenuLink}>Gói PREMIUM</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="History"
                            src="https://cdn-icons-png.flaticon.com/512/2972/2972431.png"
                        />
                        <span style={additionalMenuLink}>Lịch sử giao dịch</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Store"
                            src="https://cdn-icons-png.flaticon.com/512/2981/2981313.png"
                        />
                        <span style={additionalMenuLink}>Tạo cửa hàng</span>
                    </MenuItem>
                </Link>

                <Typography style={additionalMenuSpan}>
                    <span>Ưu đãi, khuyến mãi</span>
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Special"
                            src="https://cdn-icons-png.flaticon.com/512/616/616490.png"
                        />
                        <span style={additionalMenuLink}>Ưu đãi</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Lucky Wheel"
                            src="https://cdn-icons-png.flaticon.com/512/3409/3409755.png"
                        />
                        <span style={additionalMenuLink}>Vòng quay may mắn</span>
                    </MenuItem>
                </Link>

                <Typography style={additionalMenuSpan}>
                    <span>Khác</span>
                </Typography>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Account settings"
                            src="https://cdn-icons-png.flaticon.com/512/2550/2550394.png"
                        />
                        <span style={additionalMenuLink}>Cài đặt tài khoản</span>
                    </MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <MenuItem>
                        <BoxImage
                            height={20}
                            width={20}
                            alt="Support"
                            src="https://cdn-icons-png.flaticon.com/512/1055/1055683.png"
                        />
                        <span style={additionalMenuLink}>Trợ giúp</span>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}