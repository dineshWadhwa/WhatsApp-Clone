import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log(error.message);
  }
}
export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log('Error while calling setConversation api', error.message);
  }
}
export const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log('Error while calling get Conversation api', error.message);
  }
}