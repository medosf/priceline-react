import React from 'react';



class LeftNav extends React.Component{
    render(){
        return(
            <div className="left-side-nav">
                <h3>priceline</h3>
                <ul className="left-side-nav-ul">
                    <li><a href="#" >Hotels</a></li>
                    <li><a href="#" >Cars</a></li>
                    <li><a href="#" >Flights</a></li>
                    <li><a href="#" >Packages</a></li>
                    <li><a href="#" >Cruises</a></li>
                </ul>
            </div>
        );
    }
}

export default LeftNav;