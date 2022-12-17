import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { headerLinkStyle, headerButtonStyle } from '../local/style';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SellIcon from '@mui/icons-material/Sell';

export default function InvoiceMenu() {
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
                <ReceiptIcon /><span style={headerLinkStyle}>Đơn Hàng</span>
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
            >
                <Link to="/bills/buy" style={{ textDecoration: 'none', color: '#222' }}>
                    <MenuItem>
                        <ShoppingBagIcon />
                        <span style={{ paddingLeft: '10px' }}>Đơn mua</span>
                    </MenuItem>
                </Link>
                <Link to="/bills/sell" style={{ textDecoration: 'none', color: '#222' }}>
                    <MenuItem>
                        <SellIcon />
                        <span style={{ paddingLeft: '10px' }}>Đơn bán</span>
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}