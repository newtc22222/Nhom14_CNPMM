import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { categories } from './categories';
import BoxImage from '../../../components/local/BoxImage';

const CategoriesBox = () => {
  return (
    <Box>
        <Typography sx={{fontWeight: 'bold'}}>Khám phá danh mục</Typography>
        <Grid container rowSpacing={2} sx={{marginTop: '10px'}}>
            {categories.map((category, index) => {
                return (
                    <Grid item xs={2} key={index} >
                        <Box sx={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={category.path} >
                            <BoxImage 
                                height='100px'
                                width='100px'
                                radius='20px'
                                alt={category.title}
                                src={category.imgLogo}
                            />
                            </Link>
                        </Box>
                        <Typography sx={{fontSize: '0.8rem', textAlign: 'center'}}>{category.title}</Typography>
                    </Grid>
                );
            })}
        </Grid>
    </Box>
  )
}

export default CategoriesBox;