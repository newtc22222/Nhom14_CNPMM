import { BASE_URL, handleResponse } from "./api.config";

const apiBills = {
    getAllBills: async () => {
        const response = await fetch(
            `${BASE_URL}/bills`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },

    getBillWithId: async (billId) => {
        const response = await fetch(
            `${BASE_URL}/bills/${billId}`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewBill: async (bill) => {
        const response = await fetch(
            `${BASE_URL}/bills`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bill)
            }
        );
        return handleResponse(response);
    },
    
    updateBill: async (bill, billId) => {
        const response = await fetch(
            `${BASE_URL}/bills/${billId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bill)
            }
        );
        return handleResponse(response);
    },
    
    removeBill: async (billId) => {
        const response = await fetch(
            `${BASE_URL}/bills/${billId}`,
            {
                method: 'DELETE',
            }
        );
        return handleResponse(response);
    }
}

export default apiBills;