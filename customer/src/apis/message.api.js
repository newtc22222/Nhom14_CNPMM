import { BASE_URL, handleResponse } from "./api.config";

const apiMessages = {
  getAllMessages: async () => {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getMessageWithId: async (messageId) => {
    const response = await fetch(`${BASE_URL}/messages/${messageId}`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  createNewMessage: async (message) => {
    const response = await fetch(`${BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    return handleResponse(response);
  },

  updateMessage: async (message, messageId) => {
    const response = await fetch(`${BASE_URL}/messages/${messageId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    return handleResponse(response);
  },

  removeMessage: async (messageId) => {
    const response = await fetch(`${BASE_URL}/messages/${messageId}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

export default apiMessages;
