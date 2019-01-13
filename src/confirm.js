import * as React from 'react';

export class Confirm extends React.Component{

    render(){
        return(
                <div className="title-background">
                    <header className="App-header">
                        <img height="150px" src="https://scontent.fyto1-1.fna.fbcdn.net/v/t1.0-9/49853184_2250438568504367_7531278595814064128_n.jpg?_nc_cat=110&_nc_ht=scontent.fyto1-1.fna&oh=f4389f6d0e70f30b12da00212e78a67b&oe=5CC57FDD"/>
                    </header>
                    <body>
                        <h1>
                            Thank you for booking with us!
                        </h1>
                    <h1>
                        37 Grosvenor St. is 5 minutes away from your location.

                    </h1>
                    </body>
                </div>
        )
    }
}

export default Confirm;