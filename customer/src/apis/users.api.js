import { BASE_URL, handleResponse } from "./api.config";

const apiUsers = {
    getAllUser: async () => {
        const response = await fetch(
            `${BASE_URL}/users`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },   

    getUserWithId: async (userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}`,
            {
                method: 'GET'
            }
        );
        return handleResponse(response);
    },

    createNewUser: async (user) => {
        const response = await fetch(
            `${BASE_URL}/users`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }
        );
        return handleResponse(response);
    },
    
    updateUser: async (user, userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }
        );
        return handleResponse(response);
    },
    
    removeUser: async (userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiUsers;