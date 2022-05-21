import axios from 'axios';

const getHistory = async (dispatchUserData) => {
  try {
    const response = await axios.get('/api/user/history', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'HISTORY', payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToHistory = async (dispatchUserData, video) => {
  try {
    const response = await axios.post(
      '/api/user/history',
      { video },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'HISTORY', payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

const removeVideoFromHistory = async (dispatchUserData, video) => {
  try {
    const response = await axios.post(
      '/api/user/history/remove',
      { video },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'HISTORY', payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

export { getHistory, addVideoToHistory, removeVideoFromHistory };
