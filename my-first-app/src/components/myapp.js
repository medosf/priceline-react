import React from 'react';
import Navbar from './navbar';
import Imgbox from './imgbox';
import Sale from './Sale';



class MyApp extends React.Component{
    render(){
        return(
            <div>
                <Sale/>
                <Navbar/> 
                <Imgbox/>
                
            </div>
        );
    }
}

export default MyApp;