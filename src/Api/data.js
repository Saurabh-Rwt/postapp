import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPost = async (limit = 60) => { 
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        _limit: limit
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
