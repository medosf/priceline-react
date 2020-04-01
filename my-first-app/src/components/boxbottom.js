import React from 'react';

class Boxbottom extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <div style={{display: "flex", justifyContent:"center"}}>

                    <p>{this.props.footer} </p>
                    <a href="#"><b style={{color:"rgb(30, 144, 255)", marginLeft: "10px"}}>{this.props.footerb}</b></a>
                </div>

            </div>
        );
    }
}

export default Boxbottom;