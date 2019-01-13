import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField, Checkbox} from '@material-ui/core';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CheckBox from "@material-ui/core/es/internal/svg-icons/CheckBox";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const style = theme =>({
    button:{
        marginTop: 100,
    }
})


export class booking extends Component{
    constructor(props) {
        super(props);

        this.state = {
            bookingcomponent: [],
            creditcardnumber: '',
            cvc: '',
            expirydate: '',
            fromTime: '',
            toTime:'',
            address:'',
            classes: {},
            checkedA: true,

        }}

        handleChange = name => event => {
        this.setState({[name]: !(event.target.checked)})
        }
    //
    // handleChange = (event) => {
    //     if(state=='creditcardnumber'){
    //         const creditcardnumber = this.state.creditcardnumber + event.target.value;
    //         this.setState({
    //             creditcardnumber: creditcardnumber,
    //         })
    //     }
    //     else if(state=='cvc'){
    //         const cvc = this.state.cvc + event.target.value;
    //         this.setState({
    //             cvc: cvc,
    //         })
    //     }
    //     else if(state=='expirydate'){
    //         const expirydate = this.state.expirydate + event.target.value;
    //         this.setState({
    //             expirydate: expirydate,
    //         })
    //     }
    //     else if(state=='fromTime'){
    //         const fromTime = this.state.fromTime + event.target.value;
    //         this.setState({
    //             fromTime: fromTime,
    //         })
    //     }
    //     else if(state=='toTime'){
    //         const toTime = this.state.toTime + event.target.value;
    //         this.setState({
    //             toTime: toTime,
    //         })
    //     }
    //     else if(state=='address'){
    //         const address = this.state.address + event.target.value;
    //         this.setState({
    //             address: address,
    //         })
    //     }
    //     console.log(this.state.email);
    // }

    // creditcardnumber: '',
    // cvc: '',
    // expirydate: '',
    // fromTime: '',
    // toTime:'',
    // address:''

    componentWillMount() {

        this.state.classes = this.props;
        this.state.bookingcomponent.push(
            <div className="center-align">
                <form className="logo">
                    <div>
                        <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2019-01-13"
                        className={this.state.classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}/>
                    </div>
                    <div>
                    <TextField
                        id="fromTime"
                        label="From"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="toTime"
                        label="Until"
                        className={this.state.classes.textField}
                        value={this.state.toTime}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div>
                    <TextField
                        id="creditcardnumber"
                        label="Credit Card Number"
                        className={this.state.classes.textField}
                        value={this.state.creditcardnumber}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="expirydate"
                        label="Credit Card Expiry Date"
                        className={this.state.classes.textField}
                        value={this.state.expirydate}
                        margin="normal"
                        variant="outlined"
                    />

                    <TextField
                        id="cvc"
                        label="CVC"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    />
                    </div>
                    <div>
                        <CheckBox
                        checked={this.state.checkedA}
                        onClick={this.handleChange('checkedA')}
                        value="checkedA"/>
                        <p>Remember my credit card information.</p>
                    </div>

                </form>

                <Link to='/confirm'><Button size="large" variant="contained" color="primary" className={this.state.classes.button}>
                    Confirm Booking
                </Button></Link>

            </div>
        )


        booking.propTypes = {
            classes: PropTypes.object.isRequired,
        };

    }

    //75 University Ave W, Waterloo, ON


    render(){

        return(
            <div className="App">
                <header className="App-header">
                    <img height="250px" src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/50267741_2250101215204769_4853000199062159360_n.jpg?_nc_cat=111&_nc_ht=scontent.fyto1-1.fna&oh=204cd7f00910369642376bda28284ec6&oe=5CC4DADD"/>
                </header>
                <div className="center-align">
                    <h1>37 Grosvenor St, Toronto, ON M4Y 3G5</h1>
                    <h1>$4/hr</h1>
                </div>
                {this.state.bookingcomponent}
                <div className="center-align">

                </div>
            </div>




        );
    }
    /*render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img height="250px" src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/50267741_2250101215204769_4853000199062159360_n.jpg?_nc_cat=111&_nc_ht=scontent.fyto1-1.fna&oh=204cd7f00910369642376bda28284ec6&oe=5CC4DADD"/>
                </header>

                <div className="center-align">
                    <form className="logo">
                        <label>
                            Username:
                            <input type="text" name="name"/>
                        </label>
                    </form>

                    <form className="logo">
                        <label>
                            Password:
                            <input type="text" name="email"/>
                        </label>
                    </form>

                    <input type="submit" value="Let's get ParkN!"/>
                </div>

                <div className="center-align">
                    <p className="black-text">
                        Don't have an account? SIGN UP.
                    </p>
                </div>
            </div>
        );
    }*/
}
export default withStyles(styles)(booking);


