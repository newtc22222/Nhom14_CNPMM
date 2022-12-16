import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import BlogItemCard from './BlogItem';
import apiBlogs from '../../../apis/blog.api';

// const card = [0, 1, 2, 3, 4, 5, 6]

const BlogsBox = () => {   
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        async function callAPI() {
            const blogList = await apiBlogs.getAllBlogs();
            setBlogs(blogList);
        }    

        return () => {
            callAPI();
        };
    }, []);


    return (
        <Box sx={{ marginTop: '20px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Tin đăng dành cho bạn</Typography>
            <Grid container rowSpacing={0.5} columnSpacing={0.5}>
                {blogs?.map(blog => {
                    return (
                        <Grid item xs={2} key={blog._id}>
                            <BlogItemCard
                                blog={blog}
                                image="https://thienvu.com.vn/image/cache/catalog/Loa%20di%20%C4%91%E1%BB%99ng/loa-di-dong-portable-jbl-eon-612/loa-di-dong-portable-jbl-eon-612-2-400x400.jpg"
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <Typography 
                sx={{ 
                    fontWeight: 'bold', 
                    color: '#38699F', 
                    backgroundColor: '#eee', 
                    textAlign: 'center', 
                    marginTop: '10px', 
                    padding: '10px', 
                    cursor: 'pointer' 
                }}
                onClick={() => { alert('You click here!'); }}>
                XEM THÊM
            </Typography>
        </Box>
    )
}

export default BlogsBox;