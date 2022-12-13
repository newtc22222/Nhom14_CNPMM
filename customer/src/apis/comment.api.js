import { BASE_URL, handleResponse } from "./api.config";

const apiComments = {
    getAllComments: async () => {
        const response = await fetch(
            `${BASE_URL}/comments`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },

    getCommentWithId: async (commentId) => {
        const response = await fetch(
            `${BASE_URL}/comments/${commentId}`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewComment: async (comment) => {
        const response = await fetch(
            `${BASE_URL}/comments`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment)
            }
        );
        return handleResponse(response);
    },
    
    updateComment: async (comment, commentId) => {
        const response = await fetch(
            `${BASE_URL}/comments/${commentId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comment)
            }
        );
        return handleResponse(response);
    },
    
    removeComment: async (commentId) => {
        const response = await fetch(
            `${BASE_URL}/comments/${commentId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiComments;