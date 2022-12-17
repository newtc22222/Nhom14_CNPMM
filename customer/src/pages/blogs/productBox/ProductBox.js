import React from 'react';
import { Box, Typography } from '@mui/material';

const formatPrice = (price) => {
  let dollarUSLocale = Intl.NumberFormat('en-US');
  return dollarUSLocale.format(price);
}

const ProductBox = ({productId}) => {
  if(productId) {
    const {name, price, description} = productId
    return (
      <Box sx={{padding: '15px', marginTop:'10px', boxShadow: '0 0 2px #777'}}>
          <Typography sx={{color: '#FF8C00', fontWeight: 'bold', fontSize:'1.2rem'}}>{name}</Typography>
          <Typography sx={{color: 'red', fontWeight: 'bold'}}>{formatPrice(price) + " đồng"}</Typography>
          <Typography sx={{color: '#333', fontWeight: ''}}>{description}</Typography>
      </Box>
    )
  }
  return <Box></Box>;
}

export default ProductBox;