import React from 'react';
import Boxtop from './boxtop';
import Boxbottom from './boxbottom';
import Cars from './cars';


class Carsbox extends React.Component{
    render(){
        return(
            <div>
            <Boxtop 
                head="Looking to save more on your rental car?" 
                sub="We compare thousands of deals to get you there"/>

                <Cars/>

                <Boxbottom 
                footer="Save up to 40% online deals"
           
                /> 
            </div>


        );
    }
}

export default Carsbox;