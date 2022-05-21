import { createContext, useContext, useEffect, useReducer } from 'react';
import { useAuth } from './auth-context';

import { userDataInitialState, userDataReducer } from '../reducers/userDataReducer';
import { getHistory } from '../utils/history-utils';
import { getLikedVideos } from '../utils/likedVideos-utils';
import { getWatchLater } from '../utils/watchLater-utils';
import { getPlaylists } from '../utils/playlist-utils';

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, dispatchUserData] = useReducer(userDataReducer, userDataInitialState);

  const {
    authState: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      getHistory(dispatchUserData);
      getLikedVideos(dispatchUserData);
      getWatchLater(dispatchUserData);
      getPlaylists(dispatchUserData);
    }
  }, []);

  return (
    <userContext.Provider value={{ userData, dispatchUserData }}>{children}</userContext.Provider>
  );
};

const useUser = () => useContext(userContext);
export { useUser, UserProvider };
