import React, { Component } from 'react';
import BasicForm from './BasicForm';
import CustomerForm from './CustomerForm';
import OtherInfoForm from './OtherInfoForm';
import PaymentForm from './PaymentForm'
import ReviewForm from './ReviewForm';

export class MultiStepBooking extends Component {
  state = {
    step: 1,
    
    //1
    reg_no : "",
    book_date : "",
    ret_date: "",
    monthly_daily: "Daily",
    rate : 0,
    meter_start: 0,

    //2
    cust_disable : false,
    cust_cnic:"",
    cust_name :"",
    cust_address :"",
    cust_phone_no : '',

    //3
    driver : "null",
    dealer : "",
    guarantor : "",


    //4
    pay_mode : "Cash",
    total_ammount : "",
    advance : 0,
    balance : 0
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  customChange = (input,value) =>{
    this.setState({ [input]: value });
  };

  render() {
    const { step } = this.state;

    const {   reg_no,book_date,ret_date,monthly_daily,rate,meter_start,
        showCustDetails,cust_disable,cust_cnic,cust_name,cust_address,cust_phone_no,
        driver,dealer,guarantor,
        pay_mode,total_ammount,advance,balance
    } = this.state;
    const values = { reg_no,book_date,ret_date,monthly_daily,rate,meter_start,
        showCustDetails,cust_disable,cust_cnic,cust_name,cust_address,cust_phone_no,
        driver,dealer,guarantor,
        pay_mode,total_ammount,advance,balance

    };

    switch (step) {
      case 1:
        return (

              <BasicForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
            <CustomerForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            customChange={this.customChange}
            handleChange={this.handleChange}
            values={values}
            />
        );
      case 3:
        return (
            <OtherInfoForm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
            <div>
                <PaymentForm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                customChange={this.customChange}
                values={values}
                />
            </div>
        )

      case 5:
          return (
              <div>
                  <ReviewForm 
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                  />
              </div>
          )
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default MultiStepBooking;