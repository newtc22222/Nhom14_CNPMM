import React, { useMemo, useState } from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Categories from "../pages/categories/Categories";
import Products  from "../pages/products/Products";
import Users from "../pages/users/Users";
import List from "@mui/material/List";
import Page404 from "../pages/page404/Page404";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Avatar, Box, IconButton, Tooltip, Typography } from "@mui/material";
import {
  ChevronLeft,
  Dashboard as DB,
  Logout,
  PeopleAlt,
} from "@mui/icons-material";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import user from "../../images/user.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Slider = ({ open, setOpen }) => {

  const [selectedLink, setSelectedLink] = useState('');
  const navigate = useNavigate();

  const list = useMemo(
    () => [
    {
      title: "Dashboard",
      icon: <DB />,
      link: "",
      component: <Dashboard {...{ setSelectedLink, link: '' }} />,
    },
    {
      title: "Users",
      icon: <PeopleAlt />,
      link: "users",
      component: <Users {...{ setSelectedLink, link: 'users' }} />,
    },
    {
      title: "Categories",
      icon: <CategorySharpIcon />,
      link: "categories",
      component: <Categories {...{ setSelectedLink, link: 'categories' }} />,
    },
    {
      title: "Products",
      icon: <CatchingPokemonIcon />,
      link: "products",
      component: <Products {...{ setSelectedLink, link: 'products' }} />,
    },
    ],[]);

    const handleLogout = () => {};

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item?.title} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => navigate(item.link)}
                selected={selectedLink === item.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
          <Tooltip title={"Avatar"}>
            <Avatar
              src={user}
            //   src={currentUser?.photoURL}
              {...(open && { sx: { width: 100, height: 100 } })}
            />
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {/* {open && <Typography>{currentUser?.name}</Typography>} */}
          {open && <Typography>Nguyễn Duy Dương</Typography>}
          {/* <Typography variant="body2">{currentUser?.role || 'role'}</Typography> */}
          <Typography variant="body2"> {"Admin"}</Typography>
          {open && (
            // <Typography variant="body2">{currentUser?.email}</Typography>
            <Typography variant="body2">{"admin@gmail.com"}</Typography>
          )}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton onClick={handleLogout}>
              <Logout />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.link} element={item.component} />
          ))}
        </Routes>
      </Box>
    </>
  );
};

export default Slider;
