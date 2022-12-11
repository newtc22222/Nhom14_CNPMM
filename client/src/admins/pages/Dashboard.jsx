import { Group} from '@mui/icons-material';
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import avt from "../../images/user.png";
import { apiUsers } from '../apis/users.api';
import { apiProducts } from '../apis/products.api';
import { apiBills } from '../apis/bills.api';
import { apiBlogs } from '../apis/blogs.api';
import moment from "moment";

const Dashboard= ({ setSelectedLink, link })=> {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [bills, setBills] = useState([]);
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    setSelectedLink(link);

    const getUsers = async () => {
      const response = await apiUsers.getAllUsers();
      console.log(response);
      setUsers(response);    
    };
    getUsers();

    const getProducts = async () => {
      const response = await apiProducts.getAllProducts();
      console.log(response);
      setProducts(response);      
    };
    getProducts();

    const getBills = async () => {
      const response = await apiBills.getAllBills();
      console.log(response);
      setBills(response);      
    };
    getBills();

    const getBlogs = async () => {
      const response = await apiBlogs.getAllBlogs();
      console.log(response);
      setBlogs(response);      
    };
    getBlogs();
  }, []);

  const TotalBills= () => {
    let total = 0;
    bills.forEach(function (item) {
      total+= (item.productPrice*item.productQuantity)
    })
    return total;
  }
  const format= (n) => {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'grid' },
        gridTemplateColumns: 'repeat(3,1fr)',
        gridAutoRows: 'minmax(100px, auto)',
        gap: 3,
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Users</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CatchingPokemonIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{products.length}</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Blogs</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Group sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{blogs.length}</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Bills</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CatchingPokemonIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{format(TotalBills())} VND</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: '1/4' }}>
        <Box>
          <Typography>Recently added Users</Typography>
          <List>
            {users.map((user, i) => (
              <Box key={user.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt={user?.name} src={avt} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user?.name}
                    secondary={`Time Created: ${moment(user?.createdAt).format(
                      'DD-MM-YYYY ss:mm:H'
                    )}`}
                  /> 
                </ListItem>
                {i !== 3 && <Divider variant="inset" />}
              </Box>
            ))}
          </List>
        </Box> 
        <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
        <Box>
          <Typography>Recently added Products</Typography>
          <List>
            {products.map((item, i) => (
              <Box key={item.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={item?.name}
                      src={item?.images[0]}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item?.name}
                    secondary={`Price: ${item.price}`}
                  />
                </ListItem>
                {i !== 3 && <Divider variant="inset" />}
              </Box>
            ))}
          </List>
        </Box> 
      </Paper>
    </Box>
  )
};

export default Dashboard;
