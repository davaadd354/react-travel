import React, { Component } from "react";
import InputNumber from "../components/Form/inputNumber";
import InputDate from "../components/Form/inputDate"
export default class Example extends Component {

  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  // state = {
  //   value: ""
  // }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <InputNumber
              max={30}
              onChange={this.handleChange}
              name="testing"
              value={this.state.value}
            /> */}
             <InputDate
              onChange={this.handleChange}
              //name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
