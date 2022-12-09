import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './app';

ReactDOM.render(
    <StrictMode>
        <StyledEngineProvider>
            <Router>
                <App />
            </Router>
        </StyledEngineProvider>
    </StrictMode>,
    document.getElementById("root")
);