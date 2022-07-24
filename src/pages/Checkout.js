import React, { Component } from "react";
import Fade from "react-reveal/Fade";
//import { connect } from "react-redux";

import Header from "../parts/Header";
import Button from "../components/Buttons";

import Stepper from "../components/Stepper"
import Numbering from "../components/Stepper/Numbering"
import Meta from "../components/Stepper/Meta"
import MainContent from "../components/Stepper/MainContent"
import Controller from "../components/Stepper/Controller"

import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            ItemDetails={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
      <Header isCentered />
      </>
    )
  }
}
