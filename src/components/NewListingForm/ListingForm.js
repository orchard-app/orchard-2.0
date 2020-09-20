import React, { Component } from 'react';
import TimePicker from 'react-bootstrap-time-picker';

// import { item } from './userFunctions';

export default class ListingForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      address: '',
      city: '',
      USState: '',
      zip: '',
      start_time: '',
      end_time: '',
      start_day: '',
      end_day: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

  handleFormSubmit(event) {
    event.preventDefault();

    const listingCategories = {
      title: this.state.title,
      address: this.state.address,
      city: this.state.city,
      USState: this.state.USState,
      zip: this.state.zip,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      start_day: this.state.start_day,
      end_day: this.state.end_day
    };

    // if (!this.state.title || !this.state.address) {
    //   alert('Fill out the full information please!');
    // } else {
    //   item(listingCategories).then((res) => {
    //     alert(`${this.state.name} has been successfully saved`);
    //   });
    // }
  }

  render() {
    return (
      <div>
        <p>Item Form</p>
        <form className="form">
          <input
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Listing Title"
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
            value={this.state.USState}
            onChange={this.handleInputChange}
            name="USState"
          >
            <option value="AL"></option>
            <option value="AK"></option>
            <option value="AS"></option>
            <option value="AZ"></option>
            <option value="AR"></option>
            <option value="CA"></option>
            <option value="CO"></option>
            <option value="CT"></option>
            <option value="DE"></option>
            <option value="DC"></option>
            <option value="FM"></option>
            <option value="FL"></option>
            <option value="GA"></option>
            <option value="GU"></option>
            <option value="HI"></option>
            <option value="ID"></option>
            <option value="IL"></option>
            <option value="IN"></option>
            <option value="IA"></option>
            <option value="KS"></option>
            <option value="KY"></option>
            <option value="LA"></option>
            <option value="ME"></option>
            <option value="MH"></option>
            <option value="MD"></option>
            <option value="MA"></option>
            <option value="MI"></option>
            <option value="MN"></option>
            <option value="MS"></option>
            <option value="MO"></option>
            <option value="MT"></option>
            <option value="NE"></option>
            <option value="NV"></option>
            <option value="NH"></option>
            <option value="NJ"></option>
            <option value="NM"></option>
            <option value="NY"></option>
            <option value="NC"></option>
            <option value="ND"></option>
            <option value="MP"></option>
            <option value="OH"></option>
            <option value="OK"></option>
            <option value="OR"></option>
            <option value="PW"></option>
            <option value="PA"></option>
            <option value="PR"></option>
            <option value="RI"></option>
            <option value="SC"></option>
            <option value="SD"></option>
            <option value="TN"></option>
            <option value="TX"></option>
            <option value="UT"></option>
            <option value="VT"></option>
            <option value="VI"></option>
            <option value="VA"></option>
            <option value="WA"></option>
            <option value="WV"></option>
            <option value="WI"></option>
            <option value="WY"></option>
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
          <input
            value={this.state.details}
            name="details"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Add informations about listing. Example: 'Every weekend from 10-3. Red truck in the front of the parking lot' "
          />
          Start Date:
          <input
            value={this.state.date_received}
            name="start_day"
            onChange={this.handleInputChange}
            type="date"
            placeholder="Start Date"
          />
          End Date:
          <input
            value={this.state.exp_date}
            name="end_day"
            onChange={this.handleInputChange}
            type="date"
            placeholder="End Date"
          />
          Start Time:
          <TimePicker start="10:00" end="21:00" step={30} />
          End Time:
          <TimePicker start="10:00" end="21:00" step={30} />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
