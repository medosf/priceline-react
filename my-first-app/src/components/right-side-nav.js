import React from 'react';

class RightNav extends React.Component{

    state(){
        
    }
  
    render(){
        return(
            <div className="right-side-nav">
              <div>
                  <h5>Sign in</h5>
              </div>
              <div className = "trip-div" >
                  <h5 className="trip">Find My Trip</h5>
                  <div className="show-trip">
                        <ul >
                            <li>Find My Trip</li>
                            <li>View, Print or Email Your Itinerary</li>
                        </ul>
                   </div>
                </div>
                  

             
             <div className = "help-div" >
                  <h5 className="help">Help</h5>
                  <div className="show-help">
                        <ul >
                            <li>Frequently Asked Questions</li>
                            <li>Find Your Request Number</li>
                            <li>Profile Password Help</li>
                            <li>Constact Us</li>
                        </ul>
                   </div>
                </div>
              
               
            </div>
        );
    }
   

  
   
}

export default RightNav;