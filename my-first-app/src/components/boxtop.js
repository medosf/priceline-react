import React from 'react';
import Cruises from './cruises';
import Boxbottom from './boxbottom';


class Boxtop extends React.Component{
    render(){
        return(
            


            <div >
               <div style={{paddingTop: "20px", paddingLeft:"20px"}}>
                    <h2><b>{this.props.head}</b></h2>
                    <h3>{this.props.sub}</h3>
                </div>

                <hr/>


                <ul style = {{display:"flex", listStyle: "none" , justifyContent:"space-around"}}>
                    <li style={{justifyContent:"space-around"}}><a href="/hotels">HOTELS</a></li>
                    <li><a href="/flights">FLIGHTS</a></li>
                    <li><a href="/bundle+save">BUNDLE + SAVE</a></li>
                    <li><a href="/cars">CARS</a></li>
                    <li><a href="/cruises">CRUISES</a></li>
                </ul>


                 

                

                

            </div>
        );
    }
}

export default Boxtop;
