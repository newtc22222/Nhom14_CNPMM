/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect } from "react";
import {
  Stack,
  Link,
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
  ListItem,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import { XCircle as XCircleIcon } from "../icons/x-circle";

const items = [
  {
    href: "/admin/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Dashboard",
  },
  {
    href: "/admin/customers",
    icon: <UsersIcon fontSize="small" />,
    title: "Customers",
  },
  {
    href: "/admin/products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Products",
  },
  {
    href: "/admin/account",
    icon: <UserIcon fontSize="small" />,
    title: "Account",
  },
  {
    href: "/admin/settings",
    icon: <CogIcon fontSize="small" />,
    title: "Settings",
  },
  {
    href: "/admin/404",
    icon: <XCircleIcon fontSize="small" />,
    title: "Error",
  },
];

function Slider() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link href="/" passHref>
              <img
                src={require("../../images/GoodFair.png")}
                style = {{
                  height: "12",
                  width: "12",
                }}
              />
            </Link>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                px: 3,
                py: "11px",
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  Acme Inc
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Your tier : Premium
                </Typography>
              </div>
              <SelectorIcon
                sx={{
                  color: "neutral.500",
                  width: 14,
                  height: 14,
                }}
              />
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <ListItem
              disableGutters
              sx={{
                display: "flex",
                mb: 0.5,
                py: 0,
                px: 2,
              }}
            >
              <Link href={item.href} passHref>
                <Button
                  component="a"
                  startIcon={item.title}
                  disableRipple
                  sx={{
                    backgroundColor: "rgba(255,255,255, 0.08)",
                    borderRadius: 1,
                    color: "neutral.300",
                    fontWeight: "fontWeightBold",
                    justifyContent: "flex-start",
                    px: 3,
                    textAlign: "left",
                    textTransform: "none",
                    width: "100%",
                    "& .MuiButton-startIcon": {
                      color: "neutral.400",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255, 0.08)",
                    },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>{item.title}</Box>
                </Button>
              </Link>
            </ListItem>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Typography color="neutral.100" variant="subtitle2">
            Need more features?
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Check out our Pro solution template.
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mx: "auto",
              width: "160px",
              "& img": {
                width: "100%",
              },
            }}
          >
          </Box>
          <Link href="https://material-kit-pro-react.devias.io/" passHref>
            <Button
              color="secondary"
              component="a"
              endIcon={<OpenInNewIcon />}
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
            >
              Pro Live Preview
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Slider;
