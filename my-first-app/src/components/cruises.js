import React from 'react';

class Cruises extends React.Component{
    render(){
        return(
            <div   style={{backgroundColor: "white", padding: "20px"}}>

               <div style={{display: "flex",justifyContent:"space-around", margin: 10}}>
                    
                        <input style={{width: "40%"}} list="where" placeholder="where are you going?"/>
                        <datalist id="where">
                            <option value="Alaska"/>
                            <option value="Canada"/>
                            <option value="Hawaii"/>
                            <option value="Mexico"/>
                            <option value="Europe"/>
                        </datalist>
                    

                    
                        <input  style={{width: "40%"}} list="line" placeholder="which cruise line?"/>
                        <datalist id="line">
                            <option value="MCS cruise"/>
                            <option value="Costa cruise"/>
                            <option value="Disney cruise"/>

                        </datalist>
                    


                    
                        <input style={{width: "100px"}}  type="text" placeholder="ZIP code"/>
                    
                </div>


                <div style={{display: "flex", justifyContent:"space-around", marginBottom: "10px"}}>
                    
                        <input style={{width: '20%'}} type="date" />
                    

                    
                        <input style={{width: '20%'}}  list="len" placeholder="Cruise length"/>
                        <datalist id="len">
                            <option value="All"/>
                            <option value="1-2 nights"/>
                            <option value="2-5 nights"/>
                            <option value="5-9 nights"/>
                        </datalist>
                    
                    
                    

                    
                        <input style={{width: '20%'}} list="under" placeholder="Under 55"/>
                        <datalist id="under">
                        
                            <option value="yes"/>
                            <option value="no"/>
                        </datalist>
                    
                    
                     <button style={{width: '20%',backgroundColor:"rgb(30, 144, 255)"}} >Find your deal</button>
                    
                </div>



                
            </div>

        );
    }
}

export default Cruises;