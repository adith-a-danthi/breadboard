import { Route, Routes } from 'react-router-dom';
import { Home, Page404, Login, Register, Videos } from './views';
import { HideForAuth } from './router';
import VideoPage from './views/VideoPage/VideoPage';

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
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
