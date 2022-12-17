import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import apiBlogs from "../../apis/blog.api";
import timeCreate from "../../helpers/calculateLastUpdateTime";
import {
  gridItemProperties,
} from "./local/style";

import Carousel from "./carousel/Carousel";
import ProductBox from "./productBox/ProductBox";

const BlogPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const { title, address, content, createdAt, productId } = blog;

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

    return () => {
      callApiBlog();
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
      <Box sx={{ margin: "20px 0" }}>
        <Carousel productId={productId} />
        <ProductBox productId={productId} />
        <Box
          sx={{ padding: "15px", marginTop: "10px", boxShadow: "0 0 2px #777" }}
        >
          <Typography
            sx={{ color: "#FF8C00", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Mô tả chi tiết
          </Typography>
          <Typography sx={{ color: "#333", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#333" }}>
            {"Địa chỉ bán hàng: " + address}
          </Typography>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ color: "#333", margin: "10px 0" }}
          />
          <Typography sx={{ color: "#777", fontSize: "0.75rem" }}>
            {timeCreate(createdAt)}
          </Typography>
        </Box>
        <Box sx={{ margin: "20px" }}>
          <Grid container>
            <Grid {...gridItemProperties} item xs={6}>
              <Link to="/">
                <Button variant="contained">
                  <span>Chat với người bán</span>
                </Button>
              </Link>
            </Grid>
            <Grid {...gridItemProperties} item xs={6}>
              <Link to="/">
                <Button variant="contained">
                  <span>Để lại comment</span>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPage;
