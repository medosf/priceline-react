import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";

// import { Route, Switch } from "react-router-dom";



class Cars extends Component {
    render() {

      return  <div> 
          
      
          <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
          </link>
          </head>
       

          
        <form>
          
         <div class="form-group">


         <label for="searchbar"></label>
    <input type="search" class="form-control" id="searchbar" placeholder="City,Aiport,Address">
     </input></div>


     <label class="checkbox-inline"><input type="checkbox" value=""></input>Return Car to a different location</label>

     <div class="md-form">
  <input placeholder="Pick-up" type="datetime"></input>  <input placeholder="Noon"  type="datetime"></input> <input placeholder="Drop-off"  type="datetime"></input> Drop off time<input placeholder="Noon"  type="datetime"></input> <button type="button" class="btn btn-primary">Find Your Deal</button>

</div>
<div> 
    <h6>Need anything else?     ....      </h6>         
    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <h8>Add a hotel</h8>
</div>


     
      </form>
      </div>

    }
  }
  
    
export default Cars; 