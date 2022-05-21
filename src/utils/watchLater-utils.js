import axios from 'axios';

const getWatchLater = async (dispatchUserData) => {
  try {
    const response = await axios.get('/api/user/watchlater', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'WATCH_LATER', payload: response.data.watchlater });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToWatchLater = async (dispatchUserData, video) => {
  try {
    const response = await axios.post(
      '/api/user/watchlater',
      { video },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'WATCH_LATER', payload: response.data.watchlater });
  } catch (error) {
    console.log(error);
  }
};

const removeVideoFromWatchLater = async (dispatchUserData, video) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'WATCH_LATER', payload: response.data.watchlater });
  } catch (error) {
    console.log(error);
  }
};

export { getWatchLater, addVideoToWatchLater, removeVideoFromWatchLater };
