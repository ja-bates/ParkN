import * as React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import {Button, TextField} from '@material-ui/core';
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

import MapPage from './mappage';

import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bookingPage } from './bookingpage';

const style ={
    height: "80%",
    width: "80%"
}

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


export class mapToronto extends React.Component {

    constructor(props) {
        super(props);
        var localMapComponent = [];
        this.state = {
            currentPage:[],
            latitude: '43.6544',
            longitude: '-79.3807',
            spots: [[43.6542, -79.3852], [43.6532, -79.3832], [43.6596, -79.3977], [43.6677, -79.3948], [43.6612, -79.3826]],
            apiurl: 'INSERT_URL_PAGE',
            marker:'',
            infoWindowVisible: false,
            numbers: [16,14,4],
            classes: {},

        }

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.book = this.book.bind(this);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    componentWillMount(){
        this.state.classes = this.props;
        var currentPage = [];
        currentPage.push(<MapPage appContext={this} localOrNot={'local'}/>)
    }

    componentDidMount(){
        if (this.props.localOrNot == 'local'){ //TODO: Get this from previous page
            console.log("here");

            this.setState({
                latitude: '43.4722', //TODO: Fix this. not setting state
                longitude: '-80.5439'
            });

            console.log(this.state.latitude);
            console.log(this.state.longitude);
        } else{
            this.setState({
                latitude: this.props.lat, //TODO: Get this from previous page
                longitude: this.props.longitude, //TODO: Get this from previous page
            })
        }
        const coords ={
            latitude: this.state.latitude,
            longitude: this.state.longitude,
        }

        //     axios.post(this.state.apiurl + '/parkings/getspots', coords)
        //     .then(res=>{
        //         const spot0 = [res.data.lat0, res.data.long0];
        //         const spot1 = [res.data.lat1, res.data.long1];
        //         const spot2 = [res.data.lat2, res.data.long2];
        //         const spot3 = [res.data.lat3, res.data.long3];
        //         const spot4 = [res.data.lat4, res.data.long4];
        //         this.state.spots.push(spot0);
        //         this.state.spots.push(spot1);
        //         this.state.spots.push(spot2);
        //         this.state.spots.push(spot3);
        //         this.state.spots.push(spot4);
        //     });
    }


    onMarkerClick(props, marker, e) {
        this.setState({
            marker: marker,
            infoWindowVisible: true,
        });
        console.log(this.state.marker)
    }

    book(){
        // let goTo = [];
        // goTo.push(<bookingPage parentContext={this} appContext={this.props.appContext}/>);
        // this.setState({
        //     currentPage: goTo,
        // })




    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <div className="title-background">
                        <h1>
                            ParkN
                        </h1>
                    </div>
                </div>
                <div>

                    <TextField
                        id="password"
                        label="Address"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Date"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="From"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Until"
                        className={this.state.classes.textField}
                        value={this.state.password}
                        margin="normal"
                        variant="outlined"
                    /><div>
                    <Link to='/maptoronto'><Button size="large" variant="contained" color="primary" className={this.state.classes.button}>
                        Update Search
                    </Button></Link></div>
                </div>
                <div style={style}>
                    <Map google={this.props.google} zoom={14} initialCenter={{ lat: this.state.latitude, lng: this.state.longitude}}>
                        {
                            this.state.spots.map(spot=>{
                                return(
                                    <Marker onClick={this.onMarkerClick} position={{lat: spot[0], lng: spot[1]}} name={'$7'}/>
                                )
                            })
                        }
                        {
                            this.state.spots.map((spot,index)=>{
                                    if(index<=2){
                                        console.log(index)
                                        const price = '$' + this.state.numbers[index].toString() + '/hr';
                                        return(
                                            <InfoWindow marker={this.state.marker} visible={true}>
                                                <div>
                                                    <p dangerouslySetInnerHTML={{__html: price}}></p>
                                                    <div class="black">
                                                        <a href='/booking'><button onClick={ () => {this.book();}}> Book! </button></a>
                                                    </div>
                                                </div>
                                            </InfoWindow>
                                        )}
                                    else{console.log("lol")}
                                }
                            )}

                    </Map>
                </div>
            </React.Fragment>
        )};
}
// export default MapPage;

// export default
// }) (MapPage)


export default compose(
    withStyles(styles),
    GoogleApiWrapper({
        apiKey: ('AIzaSyDbBUx4W1LS5YcOkJ_RjapkBeEs16kIiNY')
    }),
)(mapToronto);
