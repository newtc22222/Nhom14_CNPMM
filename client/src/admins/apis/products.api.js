import { BASE_URL, handleResponse } from "./api.config";

const apiProducts = {
    getAllProducts : async () => {
        const response = await fetch(
            `${BASE_URL}/products`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    getProductImage : async (productId) => {
        const response = await fetch(
            `${BASE_URL}/products/${productId}/images`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewProducts : async (user) => {
        const response = await fetch(
            `${BASE_URL}/products`,
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
    
    updateProducts : async (product, productId) => {
        const response = await fetch(
            `${BASE_URL}/products/${productId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            }
        );
        return handleResponse(response);
    },
    
    removeProducts : async (productId) => {
        const response = await fetch(
            `${BASE_URL}/products/${productId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiProducts;

