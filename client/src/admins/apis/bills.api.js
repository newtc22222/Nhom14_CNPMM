import { BASE_URL, handleResponse } from "./api.config";

const apiBills = {
    getAllBills : async () => {
        const response = await fetch(
            `${BASE_URL}/bills`,
            {
                method: 'GET',
            }
        );
        return handleResponse(response);
    },
    
    createNewBills  : async (bill) => {
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
    
    updateBills : async (bill, billId) => {
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
    
    removeBills  : async (billId) => {
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