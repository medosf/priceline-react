import React from 'react';
import Boxtop from './boxtop';
import Boxbottom from './boxbottom';
import Flights from './flight';


class FlightBox extends React.Component{
    render(){
        return(
            <div>
                <Boxtop 
                head="Looking to save on your flight?"
                sub = "We compare thousands of deals to get you there"
                />
                <Flights/>

                <Boxbottom 
                footerb = "Save up to 50% by searching Express Deals"
                />
                
                
            </div>
        );
    }
}

export default FlightBox;