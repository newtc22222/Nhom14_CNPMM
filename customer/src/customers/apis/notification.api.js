import { BASE_URL, handleResponse } from "./api.config";

export const apiNotifications = {
    getAllNotifications: async () => {
        const response = await fetch(
            `${BASE_URL}/notifications`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },

    getNotificationWithId: async (notificationId) => {
        const response = await fetch(
            `${BASE_URL}/notifications/${notificationId}`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewNotification: async (notification) => {
        const response = await fetch(
            `${BASE_URL}/notifications`,
            {
                method: 'POST',
            }
        );
        return handleResponse(response);
    },
    
    updateNotification: async (notification, notificationId) => {
        const response = await fetch(
            `${BASE_URL}/notifications/${notificationId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(notification)
            }
        );
        return handleResponse(response);
    },
    
    removeNotification: async (notificationId) => {
        const response = await fetch(
            `${BASE_URL}/notifications/${notificationId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}