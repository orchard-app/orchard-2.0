// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Auth0Provider
    domain="dev-ja5ya0u7.us.auth0.com"
    clientId="3eZhQQEmoWCXFWty3Aabj5g6l2N3uBRB"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
