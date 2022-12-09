import { BASE_URL, handleResponse } from "./api.config";

const getAllCategories = async () => {
    const response = await fetch(
        `${BASE_URL}/categories`,
        {
            method: 'GET',
        }
    );
    return handleResponse(response);
}

const createNewCategory = async (category) => {
    const response = await fetch(
        `${BASE_URL}/categories`,
        {
            method: 'GET',
        }
    );
    return handleResponse(response);
}

const updateCategory = async (category, categoryId) => {
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
}

const removeCategory = async (categoryId) => {
    const response = await fetch(
        `${BASE_URL}/categories/${categoryId}`,
        {
            method: 'DELETE',
        }
    );
    return handleResponse(response);
}

module.exports = {
    getAllCategories,
    createNewCategory,
    updateCategory,
    removeCategory
};