import React, { Fragment } from "react";
import ListingForm from "../components/NewListingForm/ListingForm";

import { Hero, Content } from "../components";
const fontStyle = { fontFamily: "Josefin Sans" };

const AddListing = () => (
  <Fragment>
    <div>
      <h1 style={fontStyle}>Add A Listing </h1>
      <ListingForm />
    </div>
  </Fragment>
);

export default AddListing;
