const userDataReducer = (state, action) => {
  switch (action.type) {
    case 'PLAYLISTS':
      return {
        ...state,
        playlists: action.payload,
      };

    case 'UPDATE_PLAYLIST':
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload._id) {
            return action.payload;
          }
          return playlist;
        }),
      };

    case 'LIKED_VIDEOS':
      return {
        ...state,
        likedVideos: action.payload,
      };

    case 'WATCH_LATER':
      return {
        ...state,
        watchLater: action.payload,
      };

    case 'HISTORY':
      return {
        ...state,
        history: action.payload,
      };

    default:
      return state;
  }
};

const userDataInitialState = {
  history: [],
  likedVideos: [],
  watchLater: [],
  playlists: [],
};

export { userDataReducer, userDataInitialState };
