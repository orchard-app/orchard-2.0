import ItemForm from "../components/ItemForm"

import React, { Fragment } from "react";
import { Hero } from "../components";

const AddItem = () => (
  <Fragment>
    <Hero />
    <div>
    <h1>AddItem an Item to Inventory</h1>
        <ItemForm />
    </div>
  </Fragment>
);

export default AddItem;
