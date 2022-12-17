import { Group } from "@mui/icons-material";
import DvrIcon from "@mui/icons-material/Dvr";
import PaidIcon from "@mui/icons-material/Paid";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import human from "../../../images/human.png";
import apiUsers from "../../apis/users.api";
import apiProducts from "../../apis/products.api";
import apiBills from "../../apis/bills.api";
import apiBlogs from "../../apis/blogs.api";
import moment from "moment";
import Chart from "./Chart";
import AreaChartAdmin from "./AreaChartAdmin";

const Dashboard = ({ setSelectedLink, link }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]);
  const [blogs, setBlogs] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  // const size = 5

  useEffect(() => {
    setSelectedLink(link);

    const getUsers = async () => {
      const response = await apiUsers.getAllUsers();
      // console.log(response);
      //setTotalPage(Math.ceil(response.length / size));
      setUsers(response);
    };
    getUsers();

    const getProducts = async () => {
      const response = await apiProducts.getAllProducts();
      //console.log(response);
      setProducts(response);
    };
    getProducts();

    const getBills = async () => {
      const response = await apiBills.getAllBills();
      //console.log(response);
      setBills(response);
    };
    getBills();

    const getBlogs = async () => {
      const response = await apiBlogs.getAllBlogs();
      //console.log(response);
      setBlogs(response);
    };
    getBlogs();
  }, []);

  // const handleChangePage = (event, newValue) => {
  //   setPage(newValue);
  // };

  const TotalBills = () => {
    let total = 0;
    bills.forEach(function (item) {
      total += item.productPrice * item.productQuantity;
    });
    return total;
  };
  const format = (n) => {
    return "$" + n.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "grid" },
        gridTemplateColumns: "repeat(3,1fr)",
        gridAutoRows: "minmax(100px, auto)",
        gap: 3,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Users</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{users.length}</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Products</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DevicesOtherIcon
            sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
          />
          <Typography variant="h4">{products.length}</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Blogs</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DvrIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{blogs.length}</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Bills</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PaidIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{format(TotalBills())} VND</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: "1/4" }}>
        <Box>
          <Typography>Recently added Users</Typography>
          <List>
            {users.map((user, i) => {
              if (i < 4) {
                return (
                  <Box key={user.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt={user?.name} src={human} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user?.name}
                        secondary={`Time Created: ${moment(
                          user?.createdAt
                        ).format("DD-MM-YYYY ss:mm:H")}`}
                      />
                    </ListItem>
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                );
              }
            })}
          </List>
          {/* {totalPage > 1 ? (
              <Stack spacing={2} mt="10px">
                <Pagination
                  count={totalPage}
                  page={page}
                  onChange={handleChangePage}
                  color="primary"
                />
              </Stack>
            ) : (
              <></>
            )} */}
        </Box>
        <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
        <Box>
          <Typography>Recently added Products</Typography>
          <List>
            {products.map((item, i) => {
              if (i < 4) {
                return (
                  <Box key={item.id}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          alt={item?.name}
                          //src={item?.images[0]}
                          variant="rounded"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item?.name}
                        secondary={`Price: ${format(item.price)} VND`}
                      />
                    </ListItem>
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                );
              }
            })}
          </List>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{p:2, gridColumn: "1/3"}}>
        <Chart/>
      </Paper>  
      {/* <Paper elevation={3} sx={{p:2, gridColumn: "1/3"}}>
        <AreaChartAdmin/> 
      </Paper> */}
    </Box>
  );
};

export default Dashboard;
