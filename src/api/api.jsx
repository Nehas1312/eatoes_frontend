import axios from "axios";

const API_BASE_URL = "https://eatoes-backend-ql1e.onrender.com/api";  // your backend URL

// Fetch all menu items
export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

// Fetch orders by phone number
export const fetchOrdersByPhone = async (phoneNumber) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/order/${phoneNumber}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Place a new order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/order`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};
