import { BASE_URL, handleResponse } from "./api.config";

const apiProducts = {
  getAllProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getProductWithId: async (productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  getProductImageWithProductId: async (productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}/images`, {
      method: "GET",
    });
    return handleResponse(response);
  },

  createNewProduct: async (product) => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  },

  updateProduct: async (product, productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  },

  removeProduct: async (productId) => {
    const response = await fetch(`${BASE_URL}/categories/${productId}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

export default apiProducts;
