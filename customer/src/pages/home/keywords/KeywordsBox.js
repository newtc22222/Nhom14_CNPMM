import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { titleStyle, linkStyle, textLinkStyle } from './style';
import { pages } from './pages';

const KeywordsBox = () => {
    return (
        <Box>
            <Typography sx={titleStyle}>Các từ khóa phổ biến</Typography>
            <Grid container spacing={4}>
                {pages.map((page, index) => {
                    return (
                        <Grid item xs={3} key={index}>
                            <ul>
                                {page.map((value, index) => {
                                    return (
                                        <li key={index}>
                                            <a href={page[index].path} style={linkStyle}>
                                                <Typography sx={textLinkStyle}>
                                                    {page[index].description}
                                                </Typography>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Grid>
                    );
                })};
            </Grid>
        </Box>
    );
}

export default KeywordsBox;