import * as React from 'react'
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

export class bookingPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            price: 0,
        }

    }
    componentDidMount(){
        this.state.price = this.props.location.state.price;
    }

    render(){
        return(
            <p>{this.state.price}</p>
        );
    }
}

export default bookingPage;