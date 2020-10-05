import React, { Component } from "react";
import { item } from "./userFunctions";

export default class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quantity: "",
      price: "",
      date_received: "",
      exp_date: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  clearState = () => {
    this.setState({
      name: "",
      quantity: "",
      price: "",
      date_received: "",
      exp_date: "",
    });
  };

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const itemList = {
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      date_received: this.state.date_received,
      exp_date: this.state.exp_date,
    };
    console.log(itemList);
    if (!this.state.name || !this.state.quantity) {
      alert("Fill out the full information please!");
    } else {
      item(itemList).then((res) => {
        console.log(res);
        alert(`${this.state.name} has been successfully saved`);
      });
    }

    this.clearState();
  }

  render() {
    return (
      <div>
        <form className="form addItemForm">
          <div className="addItemFormDiv">
            Item Name: <br />
            <input
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Item Name"
            />
          </div>
          <div className="addItemFormDiv">
            Quantity: <br />
            <input
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleInputChange}
              type="number"
              placeholder="Quantity"
            />
          </div>
          <div className="addItemFormDiv">
            Price: <br />
            <input
              value={this.state.price}
              name="price"
              onChange={this.handleInputChange}
              type="decimal"
              placeholder="Price (i.e. 1.5 or .85)"
            />
          </div>
          <div className="addItemFormDiv">
            Date received: <br />
            <input
              value={this.state.date_received}
              name="date_received"
              onChange={this.handleInputChange}
              type="date"
              placeholder="Date Received"
            />
          </div>
          <div className="addItemFormDiv">
            Expiration Date: <br />
            <input
              value={this.state.exp_date}
              name="exp_date"
              onChange={this.handleInputChange}
              type="date"
              placeholder="exp_date"
            />
          </div>

          <button onClick={this.handleFormSubmit} style={{ margin: "6px" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
