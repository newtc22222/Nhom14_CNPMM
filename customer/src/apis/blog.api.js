import { BASE_URL, handleResponse } from "./api.config";

const apiBlogs = {
  getAllBlogs: async () => {
    const response = await fetch(`${BASE_URL}/blogs`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getBlogWithId: async (blogId) => {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getBlogWithSlug: async (slug) => {
    const response = await fetch(`${BASE_URL}/blogs/s/${slug}`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getFollowersWithBlogId: async (blogId) => {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}/follwers`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  createNewBlog: async (blog) => {
    const response = await fetch(`${BASE_URL}/blogs`, {
      method: "POST",
      body: JSON.stringify(blog),
    });
    return handleResponse(response);
  },

  updateBlog: async (blog, blogId) => {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    return handleResponse(response);
  },

  removeBlog: async (blogId) => {
    const response = await fetch(`${BASE_URL}/blogs/${blogId}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

export default apiBlogs;
