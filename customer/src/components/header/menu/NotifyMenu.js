import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { headerLinkStyle, headerButtonStyle } from '../local/style';
import NotifyTab from '../components/NotifyTab';

export default function NotifyMenu() {
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
                <NotificationsIcon /><span style={headerLinkStyle}>Thông báo</span>
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
                <NotifyTab />
            </Menu>
        </div>
    );
}