import { Route, Routes } from 'react-router-dom';
import { Home, Page404, Login, Register } from './views';
import { HideForAuth } from './router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
