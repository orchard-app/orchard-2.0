import React, { Component } from "react";
import "./style.css";
import { listing } from "../userFunctions";

// import TimePicker from "react-bootstrap-time-picker";

export default class ListingForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      start_time: "",
      end_time: "",
      start_date: "",
      end_date: "",
      details: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };

  handleFormSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line
    const listingCategories = {
      title: this.state.title,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      details: this.state.details,
    };

    if (!this.state.title || !this.state.address) {
      alert("Fill out the full information please!");
    } else {
      listing(listingCategories).then((res) => {
        alert(`${this.state.title} has been successfully saved`);
      });
    }
  }

  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Listing Title"
            aria-label="Listing-Title"
          />
          <input
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Address"
          />
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <select
            value={this.state.state}
            onChange={this.handleInputChange}
            name="state"
          >
            <option value="State" placeholder="State">
              State
            </option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AS">AS</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FM">FM</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="GU">GU</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MH">MH</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="MP">MP</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PW">PW</option>
            <option value="PA">PA</option>
            <option value="PR">PR</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VI">VI</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
          <input
            value={this.state.zip}
            name="zip"
            onChange={this.handleInputChange}
            onInput={this.maxLengthCheck}
            maxLength="5"
            type="number"
            placeholder="'90210'"
          />
          <textarea
            className="listingdetails"
            value={this.state.details}
            name="details"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add informations about listing. Example: 'Every weekend from 10-3. Red truck in the front of the parking lot' "
          />
          Start Date:
          <input
            value={this.state.start_date}
            name="start_date"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Start Date"
          />
          End Date:
          <input
            value={this.state.end_date}
            name="end_date"
            onChange={this.handleInputChange}
            type="date"
            placeholder="End Date"
          />
          Start Time:
          {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
          <input 
          value={this.state.start_time}
          name="start_time"
          onChange={this.handleInputChange}
          type="time"
          placeholder="Start Time"
          />
          End Time:
          {/* <TimePicker start="10:00" end="21:00" step={30} /> */}
          <input 
          value={this.state.end_time}
          name="end_time"
          onChange={this.handleInputChange}
          type="time"
          placeholder="End Time"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
