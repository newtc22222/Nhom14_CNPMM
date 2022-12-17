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

    login: async (account) => {        
        const response = await fetch(
            `${BASE_URL}/users/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(account)
            }
        );
        return handleResponse(response);
    },

    createNewUser: async (user) => {
        console.log(user)
        const response = await fetch(
            `${BASE_URL}/users/register`,
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
                body: user
            }
        );
        return handleResponse(response);
    },

    // { oldPassword, newPassword }
    updatePassword: async (userId, passwordForm) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(passwordForm)
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
    },

    getFollowings: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/followings`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getFollowers: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/followers`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getBlogs: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/blogs`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getSaveBlogs: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/saveBlogs`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getBillBuys: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/billBuys`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getBillSells: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/billSells`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getChatJoin: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/chatJoin`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 

    getNotifications: async(userId) => {
        const response = await fetch(
            `${BASE_URL}/users/${userId}/notifications`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    }, 
}

export default apiUsers;