import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="dev-2i4-k7bf.us.auth0.com"
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  redirectUri="http://localhost:3000"
>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
