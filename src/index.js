import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import { VideosProvider } from './contexts/videos-context';
import { UserProvider } from './contexts/user-context';

import './styles/index.css';

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
