import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './config/i18n'
import './index.css';
import 'animate.css';

import { UserAuthReducer, ProfileReducer, DashboardAdvertisesReducer, NormalAdvertisesReducer, SubscriptionPackagesReducers } from './store/reducers';

const rootReducer = combineReducers({
    userAuth: UserAuthReducer,
    profile: ProfileReducer,
    dashboardAdvertise: DashboardAdvertisesReducer,
    normalAdvertise: NormalAdvertisesReducer,
    subscriptionPackages: SubscriptionPackagesReducers,
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer, (applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={(<div>Loading...</div>)}>
                <App />
            </Suspense>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
