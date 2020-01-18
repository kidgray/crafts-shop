import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* Import react-router-dom */
import { BrowserRouter } from 'react-router-dom';

/* Import Provider from react-redux */
import { Provider } from 'react-redux';

/* Import the Redux Store and persisted Store */
import { store, persistor } from './redux/store';

/* Import the PersistGate Component from redux-persist */
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render (
    // BrowserRouter is a component that is 
    // wrapped around an entire App and gives it 
    // routing functionality.
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);