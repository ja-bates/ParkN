import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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


export class login extends Component{
    constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        logincomponent: [],
        classes: {},
    }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const email = this.state.email + event.target.value;
        this.setState({
            email: email,
        })

        console.log(this.state.email);

    }

    componentWillMount() {

        this.state.classes = this.props;
        const {email, password, logincomponent, classes} = this.state;
        this.state.logincomponent.push(
            <div className="center-align">
                <form className="logo">
                        <TextField
                            id="email"
                            label="Email"
                            className={this.state.classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            className={this.state.classes.textField}
                            value={this.state.password}
                            margin="normal"
                            variant="outlined"
                        />

                </form>

                <Link to='/mappage'><Button size="large" variant="contained" color="primary" className={this.state.classes.button}>
                    login
                </Button></Link>

            </div>
        )


        login.propTypes = {
            classes: PropTypes.object.isRequired,
        };

    }


    render(){

        return(
    <div className="App">
    <header className="App-header">
    <img height="250px" src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/50267741_2250101215204769_4853000199062159360_n.jpg?_nc_cat=111&_nc_ht=scontent.fyto1-1.fna&oh=204cd7f00910369642376bda28284ec6&oe=5CC4DADD"/>
    </header>

    {this.state.logincomponent}

        <div className="center-align">
            <p className="blue-text">
                Don't have an account?
            </p>
            <Link to='/register'>
                SIGN UP.
            </Link>
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
export default withStyles(styles)(login);


