import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from "./utils/stripe/stripe.utils";
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import {createRoot} from 'react-dom/client'
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Elements stripe={stripePromise}>
                <UserProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </CategoriesProvider>
                </UserProvider>
            </Elements>
        </BrowserRouter>
    </React.StrictMode>
);
