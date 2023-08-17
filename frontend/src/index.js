import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HashRouter >
<GoogleOAuthProvider clientId="">
    <App />
    </GoogleOAuthProvider>
    </HashRouter>

);


