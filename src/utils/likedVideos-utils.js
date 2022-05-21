import axios from 'axios';

const getLikedVideos = async (dispatchUserData) => {
  try {
    const response = await axios.get('/api/user/likes', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'LIKED_VIDEOS', payload: response.data.likes });
  } catch (error) {
    console.log(error);
  }
};

const addLikedVideo = async (dispatchUserData, video) => {
  try {
    const response = await axios.post(
      '/api/user/likes',
      { video },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'LIKED_VIDEOS', payload: response.data.likes });
  } catch (error) {
    console.log(error);
  }
};

const removeLikedVideo = async (dispatchUserData, video) => {
  try {
    const response = await axios.delete(`/api/user/likes/${video._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'LIKED_VIDEOS', payload: response.data.likes });
  } catch (error) {
    console.log(error);
  }
};

export { getLikedVideos, addLikedVideo, removeLikedVideo };
