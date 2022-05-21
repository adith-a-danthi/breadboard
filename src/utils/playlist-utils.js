import axios from 'axios';

const getPlaylists = async (dispatchUserData) => {
  try {
    const response = await axios.get('/api/user/playlists', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'PLAYLISTS', payload: response.data.playlists });
  } catch (error) {
    console.log(error);
  }
};

const createPlaylist = async (dispatchUserData, playlist) => {
  try {
    const response = await axios.post(
      '/api/user/playlists',
      { playlist },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'PLAYLISTS', payload: response.data.playlists });
  } catch (error) {
    console.log(error);
  }
};

const deletePlaylist = async (dispatchUserData, playlist) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'PLAYLISTS', payload: response.data.playlists });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToPlaylist = async (dispatchUserData, playlist, video) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlist._id}`,
      { video },
      { headers: { authorization: localStorage.getItem('token') } }
    );
    dispatchUserData({ type: 'UPDATE_PLAYLIST', payload: response.data.playlist });
  } catch (error) {
    console.log(error);
  }
};

const removeVideoFromPlaylist = async (dispatchUserData, playlist, video) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatchUserData({ type: 'UPDATE_PLAYLIST', payload: response.data.playlist });
  } catch (error) {
    console.log(error);
  }
};

const getPlaylist = async (dispatchUserData, playlist) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlist._id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    return response.data.playlist;
  } catch (error) {
    console.log(error);
  }
};

export {
  getPlaylists,
  createPlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  getPlaylist,
};
