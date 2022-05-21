import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Page404,
  Login,
  Register,
  Videos,
  VideoPage,
  LikedVideos,
  WatchLater,
  WatchHistory,
  PlaylistPage,
} from './views';
import { HideForAuth, RequiresAuth } from './router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />

        <Route element={<HideForAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<RequiresAuth />}>
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/history" element={<WatchHistory />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/playlists" element={<PlaylistPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
