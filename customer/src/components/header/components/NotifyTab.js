import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { headerButtonStyle } from "../local/style";
import apiNotifications from "../../../apis/notification.api";
import apiUsers from "../../../apis/users.api";
import timeCreated from "../../../helpers/calculateLastUpdateTime";

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const handleUserNotifications = (userNotifications) => {
  if (userNotifications) {
    if (userNotifications.length > 0) {
      return (
        <>
          {userNotifications?.map((notification) => {
            return (
              <span key={notification._id}>
                <span style={{ fontWeight: "bold", color: "#FF8C00" }}>
                  {notification.title}
                </span>{" "}
                <br />
                <span style={{ fontSize: "0.8rem" }}>
                  {notification.content}
                </span>{" "}
                <br />
                <span style={{ fontSize: "0.7rem", color: "#777" }}>
                  {timeCreated(notification.updatedAt)}
                </span>{" "}
                <br />
              </span>
            );
          })}
        </>
      );
    }
    else if(window.sessionStorage.getItem("userId")) {
      return (
        <>
          <span style={{ fontSize: "0.75rem" }}>
            Hiện tại bạn chưa có thông báo nào!
          </span>
        </>
      );
    }    
  }

  return (
    <>
      <span style={{ fontSize: "0.75rem" }}>
        Hiện tại bạn chưa đăng nhập, vui lòng đăng nhập để xem tin mới!
      </span>
      <br /> <br />
      <Link to="/login" style={{ textDecoration: "none", paddingTop: "10px" }}>
        <Button
          variant="contained"
          sx={{
            ...headerButtonStyle,
            backgroundColor: "#FF8C00",
            fontWeight: "bold",
          }}
        >
          Đăng nhập
        </Button>
      </Link>
    </>
  );
};

const handleSystemNotification = (systemNotifications) => {
  if (systemNotifications.length > 0) {
    return (
      <>
        {systemNotifications?.map((notification) => {
          return (
            <span key={notification._id}>
              <span style={{ fontWeight: "bold", color: "#FF8C00" }}>
                {notification.title}
              </span>{" "}
              <br />
              <span style={{ fontSize: "0.8rem" }}>
                {notification.content}
              </span>{" "}
              <br />
              <span style={{ fontSize: "0.7rem", color: "#777" }}>
                {timeCreated(notification.updatedAt)}
              </span>{" "}
              <br />
              <hr style={{ opacity: "0.4", marginBottom: "5px" }} />
            </span>
          );
        })}
      </>
    );
  }
  return (
    <span style={{ fontSize: "0.75rem" }}>Không có thông báo mới nào!</span>
  );
};

export default function NotifyTab() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // notification
  const [systemNotifications, setSystemNotifications] = useState([]);
  const [userNotifications, setUserNotifications] = useState([]);

  useEffect(() => {
    const callApiSystemNotification = async () => {
      try {
        const sysNotifications = await apiNotifications.getSystemNotification();
        setSystemNotifications((prev) => sysNotifications);
      } catch (err) {}
    };

    const callApiUserNotification = async () => {
      const userId = window.sessionStorage.getItem("userId");
      if (userId) {
        try {
          const uNotifications = await apiUsers.getNotifications(userId);
          setUserNotifications((prev) => uNotifications);
        } catch (err) {}
      }
    };

    return () => {
      callApiSystemNotification();
      callApiUserNotification();
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "background.paper", width: 400, mt: -1 }}>
      <AppBar position="static" sx={{ background: "#fff", color: "#333" }}>
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
      <TabPanel value={value} index={0} dir={theme.direction} sx={{boxShadow: '0 0 2px #777'}}>
        {handleUserNotifications(userNotifications)}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction} sx={{boxShadow: '0 0 2px #777'}}>
        {/* <span style={{ fontSize: "0.75rem" }}>
          Chưa có tin nhắn để hiển thị
        </span> */}
        {handleSystemNotification(systemNotifications)}
      </TabPanel>
    </Box>
  );
}
