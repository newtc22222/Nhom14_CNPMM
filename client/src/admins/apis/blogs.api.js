import { BASE_URL, handleResponse } from "./api.config";

export const apiBlogs = {
    getAllBlogs : async () => {
        const response = await fetch(
            `${BASE_URL}/blogs`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewBlogs  : async (blog) => {
        const response = await fetch(
            `${BASE_URL}/blogs`,
            {
                method: 'POST',
            }
        );
        return handleResponse(response);
    },
    
    updateBlogs : async (blog, blogId) => {
        const response = await fetch(
            `${BASE_URL}/blogs/${blogId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog)
            }
        );
        return handleResponse(response);
    },
    
    removeBlogs  : async (blogId) => {
        const response = await fetch(
            `${BASE_URL}/blogs/${blogId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}