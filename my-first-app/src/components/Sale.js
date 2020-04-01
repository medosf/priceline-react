import React, { Component } from 'react';


class Sale extends React.Component 
{
    
    render(){
        return(
            //  <div className="container">
            //      <div className="row" >
            //          <div className="col-4 border-right">LEAP YEAR CRUISE SALE!
            //          </div>
            //          <div className="col-8">Set sail with upto $2000 to spend at sea! 
            //          </div>               
            //      </div>
            //  </div>
            <div className="Header">
                <div className="Header-LeftSide">
                    <h6>LEAP YEAR CRUISE SALE!</h6>
                </div>
                <div className="Vline"></div>
                <div className="Header-RightSide">
                    <h6>Set sail with upto $2000 to spend at sea! </h6>
                </div>
            </div>
        );
        
    }
}
export default Sale;