import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import BoxImage from '../../../components/local/BoxImage';
import BlogItemMenu from './BlogItemMenu';

const BlogItemCard = ({ blog, image, price }) => {
    const { id, title, address, createAt } = blog;

    // const getTime = () => {
    //     const time = Date.now() - Date.parse(createAt);
    //     return time;
    // }

    return (
        <Card sx={{ maxWidth: '192px', backgroundColor: '#fff', "&:hover": { boxShadow: '0 0 5px #333' } }}>
            <Link to={`/blogs/${id}`} style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
                    <BoxImage
                        height="166px"
                        width="166px"
                        alt={title}
                        src={image}
                    />
                </Box>
            </Link>
            <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <Box sx={{display: 'flex'}}> 
                    <Link to={`/blogs/${id}`} style={{ textDecoration: 'none', width: '138px', wordWrap: 'break-word' }}>
                        <Typography sx={{ fontSize: '0.9rem', color: '#333' }}>{title ?? "Helloadkjgfhiudahfhiusahfiuhaiufhudahuf auihfiu aiufh"} </Typography>
                    </Link>
                    <BlogItemMenu />
                </Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#D0021B' }}>{(price ?? "50.000") + " đ"}</Typography>
                <Typography sx={{ fontSize: '0.6rem', color: '#777', marginTop: '10px', marginBottom: '15px' }}>{"1 giờ trước - " + address}</Typography>
            </Box>
        </Card>
    )
}

export default BlogItemCard;