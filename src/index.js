import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import react-router-dom */
import { BrowserRouter } from 'react-router-dom';

/* Import Provider from react-redux */
import { Provider } from 'react-redux';

/* Import the Redux Store */
import { store } from './redux/store';

ReactDOM.render (
    // BrowserRouter is a component that is 
    // wrapped around an entire App and gives it 
    // routing functionality.
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);