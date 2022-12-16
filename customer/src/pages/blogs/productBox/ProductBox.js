import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import apiProducts from "../../../apis/product.api";

const ProductBox = ({productId}) => {
  const [product, setProduct] = useState();
  console.log(product);

  useEffect(() => {
    const callApiProduct= async () => {
      if (productId) {
        const product = await apiProducts.getProductWithId(
          productId
        );
        setProduct(product);
      }
    };

    return () => {
      callApiProduct();
    };
  }, []);

  return (
    <Box>
        
    </Box>
  )
}

export default ProductBox;