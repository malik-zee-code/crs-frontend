import React, { Component } from 'react';
import { Select,MenuItem,Label } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export class ReviewForm extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    styles = {
        heading : {
            textAlign :"center",
            textShadow : "1px 1px #ff0000"
        },
        form : {
            paddingLeft : "10%",
            paddingRight : "10%",
            paddingTop : "2%",
            textAlign :"center",
        },
        formMain :{
            background : "rgba(46,172,205,0.8)",
            paddingLeft : "10%",
            paddingRight:"10%", 
            paddingTop : "2%",
            paddingBottom :"2%"
        },
        formHeader : {
            background : "white",
            paddingTop : "1%",
            paddingBottom : "1%"

            
        },
        body : {
            opacity : "5",
            borderBlockColor:"white"
        }
    };
    
    render() {
        const { values, handleChange } = this.props;
    return (
        <div >
            <div style={this.styles.form}>
                <div style={this.styles.formMain}>
                    <br/>
                    <div style={this.styles.formHeader}>
                        <h1> Booking Of : {values.reg_no}</h1>
                    </div>

                    <br/>
                        
                        
                        
                        <div>
                            <h2> Basic Details</h2>
                            <p> <b>Booked On : </b> {values.book_date}</p>
                            <p> <b>Booked For  {values.ret_date } { values.monthly_daily} </b></p>
                            <p> <b>Rate : </b> {values.rate}</p>
                            <p> <b>Meter Reading : </b> {values.meter_start}</p>
                        </div>

                        <br/><br/>
                        <div>
                            <h2>Customer Information</h2>
                            <p> <b>Cnic : </b> {values.cust_cnic}</p>
                            <p> <b>Name : </b> {values.cust_name}</p>
                            <p> <b>Phone No : </b> {values.cust_phone_no}</p>
                            <p> <b>Address : </b> {values.cust_address}</p>
                        </div>

                        <br/><br/>
                        <div>
                            <h2>Guarantor/Dealer/Driver Information</h2>
                            <p> <b>Driver : </b> {values.driver}</p>
                            <p> <b>Dealer : </b> {values.dealer}</p>
                            <p> <b>Guarantor : </b> {values.guarantor}</p>

                        </div>

                        <br/><br/>
                        <div>
                            <h2>Payment Information</h2>
                            <p> <b>Payment Mode : </b> {values.pay_mode}</p>
                            <p> <b>Total Amount : </b> {values.total_ammount}</p>
                            <p> <b>Advance : </b> {values.advance}</p>
                            <p> <b>Balance : </b> {values.balance}</p>


                        </div>

                        <Button color="primary" variant="contained" onClick={this.back}>
                            Back
                        </Button>
                        &nbsp;
                        <Button color="primary" variant="contained" onClick={this.continue}>
                            Confirm
                        </Button>
                </div>
            </div>
                
       </div>
    );
    }
}

export default ReviewForm;