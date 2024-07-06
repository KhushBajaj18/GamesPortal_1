import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Premium from './Components/Premium';
import Popular from './Components/Popular';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-hz30rgg2pgxoi3dh.us.auth0.com"
    clientId="hg1h7nwhKEVGq3raE3QYNArDuvL3rV2x"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 
);