import React from 'react';
import LeftNav from './left-side-nav';
import RightNav from './right-side-nav';


class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">

              <LeftNav />
             <RightNav />
            

            </div>
        );
    }
}

export default Navbar;