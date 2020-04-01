import React from 'react';
import Boxtop from './boxtop';
import Boxbottom from './boxbottom';
import Cruises from './cruises';

class Cruisesbox extends React.Component{
    render(){
        return(
            <div>
            <Boxtop 
                head="Looking to save on your cruise?" 
                sub="We compare thousands of deals to get you there"/>

                <Cruises/>

                <Boxbottom 
                footer="Get up to $1,000 to spend at sea when you"
                footerb="book a cruise with Priceline."
                /> 
            </div>


        );
    }
}
export default Cruisesbox;