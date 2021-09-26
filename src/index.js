import React from 'react';
import { render } from 'react-dom';
import './index.scss'
import M from 'materialize-css';

import App from './App';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
