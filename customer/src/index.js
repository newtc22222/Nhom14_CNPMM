import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <StyledEngineProvider>
            <Router>
                <App />
            </Router>
        </StyledEngineProvider>
    </StrictMode>
);