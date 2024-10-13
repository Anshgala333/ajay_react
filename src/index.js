import React from "react";
import  ReactDOM  from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {
    RouterProvider,
} from "react-router-dom";

import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)