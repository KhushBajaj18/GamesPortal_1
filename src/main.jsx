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
    domain="dev-e7yplilkvex03vwm.us.auth0.com"
    clientId="o7OEkgODCPFmtr1WyRTNfW1qFfaQJTZF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 
);