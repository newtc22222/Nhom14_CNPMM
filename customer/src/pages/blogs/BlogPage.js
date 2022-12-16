import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import apiBlogs from "../../apis/blog.api";

import Carousel from "./carousel/Carousel";
import ProductBox from "./productBox/ProductBox";

const BlogPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  // const { productId } = blog;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const callApiBlog = async () => {
      if (params.id) {
        const blogId = params.id;
        const blog = await apiBlogs.getBlogDetailsWithId(blogId);
        setBlog(blog[0]);
      } else {
        const blogSlug = params.slug;
        const blog = await apiBlogs.getBlogDetailsWithSlug(blogSlug);
        setBlog(blog[0]);
      }
    };

    return async () => {
      await callApiBlog();
    };
  }, []);

  return (
    <Box>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Typography sx={{ fontSize: "0.7rem" }}>
          <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
            Trang chủ
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "0.7rem" }}>{blog?.title || ""}</Typography>
      </Breadcrumbs>
      <Carousel productId={blog?.productId} />
      <ProductBox productId={blog?.productId}/>
    </Box>
  );
};

export default BlogPage;
