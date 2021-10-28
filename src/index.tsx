import './index.css';
import './App.css';

import App from './App';
import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import './i18n';
import * as serviceWorker from './serviceWorker';

const Loader: React.FC = () => {
    return <div>loading...</div>;
};

//renders the app component in the HTML Element thi the id root
//The Provider Element is needed for the use of "stores"
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
