import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import BoxImage from '../../../components/local/BoxImage';
import BlogItemMenu from './BlogItemMenu';
import timeCreated from '../../../helpers/calculateLastUpdateTime';

const formatPrice = (price) => {
    let dollarUSLocale = Intl.NumberFormat('en-US');
    return dollarUSLocale.format(price);
}

const BlogItemCard = ({ blog, image, price }) => {
    const { _id, slug, title, address, createdAt, productId } = blog; 

    return (
        (blog.productId) && 
        <Card sx={{ maxWidth: '192px', height: '330px', backgroundColor: '#fff', "&:hover": { boxShadow: '0 0 5px #333' } }}>
            <Link to={`/blogs/s/${slug}`} style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
                    <BoxImage
                        height="166px"
                        width="166px"
                        alt={title}
                        src={blog.productId.images[0]}
                    />
                </Box>
            </Link>
            <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <Box sx={{display: 'flex'}}> 
                    <Link to={`/blogs/${_id}`} style={{ textDecoration: 'none', width: '138px', wordWrap: 'break-word', height: '65px' }}>
                        <Typography sx={{ fontSize: '0.9rem', color: '#333' }}>{title ?? "Hello"} </Typography>
                    </Link>
                    <BlogItemMenu />
                </Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#D0021B' }}>{formatPrice(productId.price ?? 50000) + " đ"}</Typography>
                <Typography sx={{ fontSize: '0.6rem', color: '#777', marginTop: '10px', marginBottom: '15px' }}>{timeCreated(createdAt) + " - " + address}</Typography>
            </Box>
        </Card>
    )
}

export default BlogItemCard;