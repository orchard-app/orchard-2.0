import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile } from "./views";
// import View from './components/Pages/View';
import AddItem from "./views/add-item";
import AddListing from "./views/add-listing";
import ViewItems from "./views/view-items";
import ViewMyListings from "./views/view-my-listings";
import Browse from "./views/browse"
// import { browse, view my listings, add item, add listing }


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
          <Route path="/menu#AddListing" component={AddListing} />
          <Route path="/menu#AddItem" component={AddItem} />
          <Route path="/menu#Browse" component={Browse} />
          <Route path="/menu#ViewItems" component={ViewItems} />
          <Route path="/menu#ViewListings" component={ViewMyListings} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
