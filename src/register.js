import React, { Component } from 'react';

export class register extends Component{
    constructor(props){
        super(props);
        var localregcomponent=[];

        this.state={
            fname:'',
            lname:'',
            email:'',
            phone:'',
            password:'',
            regcomponent:localregcomponent,
        }

        localregcomponent.push(
            <div className="center-align">
                <form className="logo">
                    <label>
                        First Name:
                        <input type="text" name="fname" value={this.state.fname}/>
                    </label>
                </form>

                <form className="logo">
                    <label>
                        Last Name:
                        <input type="text" name="lname" value={this.state.lname}/>
                    </label>
                </form>

                <form className="logo">
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email}/>
                    </label>
                </form>

                <form className="logo">
                    <label>
                        Phone:
                        <input type="text" name="phone" value={this.state.phone}/>
                    </label>
                </form>

                <form className="logo">
                    <label>
                        Password:
                        <input type="text" name="password" value={this.state.password}/>
                    </label>
                </form>

                <input type="submit" value="Register Now!"/>
            </div>
        )

    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img height="250px" src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/50267741_2250101215204769_4853000199062159360_n.jpg?_nc_cat=111&_nc_ht=scontent.fyto1-1.fna&oh=204cd7f00910369642376bda28284ec6&oe=5CC4DADD"/>
                </header>
                {this.state.regcomponent}
            </div>
        );
    }
}
