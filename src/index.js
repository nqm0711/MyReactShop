import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {Elements} from "@stripe/react-stripe-js";

import App from "./App";
import {persistor, store} from "./store/store";
import {stripePromise} from "./utils/stripe/stripe.utils";
import {createRoot} from 'react-dom/client'
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
