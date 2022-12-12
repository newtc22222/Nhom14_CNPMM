import { BASE_URL, handleResponse } from "./api.config";

const apiCategories = {
    getAllCategories : async () => {
        const response = await fetch(
            `${BASE_URL}/categories`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },

    getCategoryWithId : async (categoryId) => {
        const response = await fetch(
            `${BASE_URL}/categories/${categoryId}`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewCategory : async (category) => {
        const response = await fetch(
            `${BASE_URL}/categories`,
            {
                method: 'POST',
            }
        );
        return handleResponse(response);
    },
    
    updateCategory : async (category, categoryId) => {
        const response = await fetch(
            `${BASE_URL}/categories/${categoryId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(category)
            }
        );
        return handleResponse(response);
    },
    
    removeCategory : async (categoryId) => {
        const response = await fetch(
            `${BASE_URL}/categories/${categoryId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiCategories;