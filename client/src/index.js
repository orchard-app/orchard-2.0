// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";

import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory
     domain="dev-ja5ya0u7.us.auth0.com"
     clientId="4JRZG7B38YPF1NxPy791E7cyxIR2JlTJ"
     redirectUri={window.location.origin}
     >
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);