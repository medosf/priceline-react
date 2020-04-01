import React from 'react';
import Cruisesbox from './cruisesbox';
import FlightBox from './flightbox';
import Cars from './cars';

import BundleSaveBox from './bundlesavebox';

import {BrowserRouter as Router ,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

import MyApp from './myapp';
import Carsbox from './carsbox';
import Hotelsbox from './hotelsbox';


class Mainbox extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                <div id="box" style={{ backgroundColor: "#F8F8FF", borderRadius: "5px"}} >


                    <Route exact path='/'><Hotelsbox/></Route>
                    <Route exact path='/flights'><FlightBox/></Route>
                    <Route exact path='/cruises'><Cruisesbox/> </Route>
                    <Route exact path='/cars'><Carsbox/> </Route>
                    <Route exact path='/bundle+save'><BundleSaveBox/> </Route>
                    <Route exact path='/hotels'><Hotelsbox/></Route>
                    
                </div>


                </Switch>
                
              
                  
                    {/* <Cruisesbox/> */}

            
           </Router>
        );
    }
}

export default Mainbox;