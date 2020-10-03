import React, { Fragment } from "react";
import ListingForm from "../components/NewListingForm/ListingForm";

import { Hero, Content } from "../components";

const AddListing = () => (
  <Fragment>
    <div>
      <h1>Add a Listing </h1>
      <ListingForm />
    </div>
  </Fragment>
);

export default AddListing;
