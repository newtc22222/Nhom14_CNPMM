import { BASE_URL, handleResponse } from "./api.config";

const apiChats = {
    getAllChats: async () => {
        const response = await fetch(
            `${BASE_URL}/chats`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    getChatWithId: async (chatId) => {
        const response = await fetch(
            `${BASE_URL}/chats/${chatId}`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewChat: async (chat) => {
        const response = await fetch(
            `${BASE_URL}/chats`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chat)
            }
        );
        return handleResponse(response);
    },
    
    updateChat: async (chat, chatId) => {
        const response = await fetch(
            `${BASE_URL}/chats/${chatId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chat)
            }
        );
        return handleResponse(response);
    },
    
    removeChat: async (chatId) => {
        const response = await fetch(
            `${BASE_URL}/chats/${chatId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiChats;