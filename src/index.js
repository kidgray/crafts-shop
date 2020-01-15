import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import react-router-dom */
import { BrowserRouter } from 'react-router-dom';

/* Import Provider from react-redux */
import { Provider } from 'react-redux';

ReactDOM.render (
    // BrowserRouter is a component that is 
    // wrapped around an entire App and gives it 
    // routing functionality.
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);