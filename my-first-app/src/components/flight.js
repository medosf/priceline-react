import React from 'react';
import { thisExpression } from '@babel/types';

class Flights extends React.Component{

    constructor(props) {
        super(props);
        this.state = {airports: ["SFO","SJC","JFK","LAX"], value:""};


        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
      }



    componentDidMount(){
      
       let airportDDV =  document.getElementById('airportD');
        for(let i = 0; i < this.state.airports.length; i++){
            airportDDV.innerHTML += "<option value="+this.state.airports[i]+">"
        }
    
    }
    
    render(){
        return (
            <div>
                

                <div id="flight-radio">
                    <div> 
                        <input type ="radio"/>
                        <span>Round-trip</span>
                    </div>
                    <div>
                        <input type ="radio"/>
                        <span>One-way</span>
                    </div>
                    <div>
                        <input type ="radio"/>
                        <span>Multi-destination</span>
                    </div>

                </div>


                <div className="flight-inputs">
                    <input list="airportD" placeholder="Departing from?"
                    value={this.state.value} onChange={this.handleChange}
                    />
                    <datalist id="airportD" >

                        
                       

                        


                     </datalist>
                    <input list="airportA" placeholder="Going to"
                                        onBlur = { (e) =>{
                                         if(e.target.value == this.state.value){
                                             alert('You cant select the same Airport')
                                         }
                                      
                    
                                        }}
                    />
                    <datalist id="airportA">
                        <option value="SFO" id="SFO"/>
                        <option value="SJC" id = "SJC"/>
                        <option value="LAX" id = "LAX"/>
                        <option value="JFK" id = "JFK"/>
                     </datalist>

                    <input type="date" />

                    <input list="adult" placeholder="Adult!"/>
                    <datalist id="adult">
                        <option value="Adult"/>
                        <option value="Youth"/>
                        <option value="Children"/>
                        <option value="Lap infants"/>
                    </datalist>
                    <input list="Economy" placeholder="Economy"/>
                    <datalist id="Economy">
                        <option value="Economy"/>
                        <option value="Premuim Economy"/>
                        <option value="Business"/>
                        <option value="Frist"/>
                    </datalist>
                    
                    <input type="button" value="Find your flight"/>
                </div>
                <div className="flight-check">
                    <p>Need anthing else?</p>
                    <div>
                        <input type="checkbox" />
                        <span>Add a hotel</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                       <span>Add a cars</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default Flights;