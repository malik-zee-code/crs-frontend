import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Select,MenuItem} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import ReactJsAlert from "reactjs-alert";

export class BasicForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          type: "error",
          status: false,
          title: "Please Fill All Values",
        };
      };

    continue = e => {

        e.preventDefault();
        const { values} = this.props;

        if  (values.reg_no == "" || values.book_date == ""  || values.ret_date == "" || values.rate == 0 || values.meter_start == 0)
        {                
            this.setState({
                status: true
            });
        }
        else{
            this.props.nextStep();
        }
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
            
            <ReactJsAlert
                type={this.state.type} // success, warning, error, info
                title={this.state.title} // title you want to display
                status ={this.state.status}
                Close={() => this.setState({ status: false })}
            />
            <div style={this.styles.heading}>
                <h1> Car Booking </h1>
            </div>

            <div style={this.styles.form}>
                
                <div style={this.styles.formMain}>
                    <br/>
                    <div style={this.styles.formHeader}>
                        Basic Booking Details
                    </div>
                    <br/>
                    
                        <TextField 
                            id="outlined-basic"
                            placeholder = "Abc-123"
                            label = "Registration No"
            
                            onChange={handleChange('reg_no')}
                            defaultValue={values.reg_no}
                            required
                            variant="filled"

                            />
                        <br/> <br/>

                        <TextField 
                            id="outlined-basic"
                            label = "Booking Date"
                            type = "date"
                            onChange={handleChange('book_date')}
                            defaultValue={values.book_date}
                            variant="filled"
                            required
                        />  
                        <br/> <br/>
                       
                        <Select
                            id="outlined-basic"
                            label="Daily"
                            onChange={handleChange('monthly_daily')}
                            defaultValue={values.monthly_daily}
                            variant="filled"
                            required
                        >
                            <MenuItem value={"Daily"}>Daily</MenuItem>
                            <MenuItem value={"Monthly"}>Monthly</MenuItem>
                        </Select>
                        &nbsp;
                        <TextField 
                            id="outlined-basic"
                            placeholder = "3000"
                            label = "Rate(In Pkr)"
                            onChange={handleChange('rate')}
                            defaultValue={values.rate}
                            variant="filled"
                            required
                        />
                        <br/><br/>

                        <TextField 
                            id="outlined-basic"
                            label = "No of days/Months"
                            onChange={handleChange('ret_date')}
                            defaultValue={values.ret_date}
                            variant="filled"
                            required
                        />  

                        <br/><br/>

                        <TextField 
                            id="outlined-basic"
                            label = "Meter Reading"
                            onChange={handleChange('meter_start')}
                            defaultValue={values.meter_start}
                            variant="filled"
                            required
                        />
                        <br/> <br/>
                        <Button color="primary" variant="contained" onClick={this.continue}>
                            Continue
                        </Button>

                 </div>
            </div>

        </div>
    );
    }
}

export default BasicForm;