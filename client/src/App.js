// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";

// import { NavBar, Footer, Loading, PrivateRoute } from "./components";
// import { Home, Profile, ExternalApi } from "./views";
// // import View from './components/Pages/View';
// import About from "./components/Pages/About";
// import ListingFormPage from "./components/Pages/ListingFormPage";
// import Add from "./components/Pages/Add";
// import Viewlistings from "./components/Pages/Viewlistings";

// import "./App.css";

// const App = () => {
//   const { isLoading } = useAuth0();

//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <div className="everything">
//       <Navbar />
//       <Router>
//         <Route exact path="/" component={Form} />
//         <Route exact path="/menu" component={OrchardContainer} />
//         {/* <Route exact path="/items" component={View} /> */}
//         <Route exact path="/viewlistings" component={Viewlistings} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/menu#NewListing" component={ListingFormPage} />
//         <Route exact path="/menu#Add" component={Add} />
//       </Router>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi } from "./views";
// import View from './components/Pages/View';
import About from "./components/Pages/About";
import ListingFormPage from "./components/Pages/ListingFormPage";
import Add from "./components/Pages/Add";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route exact path="/items" component={View} /> */}
          <Route path="/about" component={About} />
          <Route path="/menu#NewListing" component={ListingFormPage} />
          <Route path="/menu#Add" component={Add} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
